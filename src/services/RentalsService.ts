import Decimal from "decimal.js";
import { HttpError } from "../errors/HttpError";
import { IRental, IRentalsRepository, RentalStatus } from "../repositories/interfaces/IRentalsRepository";
import { VehicleService } from "./VehiclesService";
import { PaymentsService } from "./PaymentsService";
import { IPaymentCalculation, PaymentMethod } from "../repositories/interfaces/IPaymentsRepository";
import { differenceInDays, differenceInHours } from "../utils/dateFunctions";

export class RentalService {
    private static prepaymentTax = 0.5 
    private static securityDepositTax = 0.5
    private static penaltyTax = 1.2

    constructor(private readonly rentalRepository: IRentalsRepository, private readonly vehicleService: VehicleService, private readonly paymentsService: PaymentsService) {}

    // GET /rentals/:id
    async getRentalById(id: string, tx?: unknown): Promise<IRental> {
        const rental = await this.rentalRepository.getById(id, tx)
        if(!rental) throw new HttpError('Rental not found', 404)
        return rental
    }

    // PUT /rentals/:id/status/:status
    async updateRentalStatus(id: string, status: RentalStatus, notes?: string, tx?: unknown): Promise<IRental> {
        const rental = await this.rentalRepository.update(id, {status, notes}, tx)
        if(!rental) throw new HttpError('Rental not found', 404)
        return rental
    }

    // POST /rentals
    async reserveVehicle (user_id: string, vehicle_id: number, check_out_date: Date, expected_check_in_date: Date, payment_method: PaymentMethod, notes?: string, tx?: unknown) {
        return await this.rentalRepository.withTransaction(async (tx)=> {

            const vehicleStatus = await this.vehicleService.checkVehicleStatus(vehicle_id, tx)
            // Vehicle cannot be reserved if is not avaliable
            if(vehicleStatus !== 'avaliable') throw new HttpError('Vehicle not avalible')

            // Reservar veículo
            const vehicle = await this.vehicleService.changeVehicleStatus(vehicle_id, 'reserved', tx)
            const rental = await this.rentalRepository.create({user_id, vehicle_id, check_out_date, expected_check_in_date, start_mileage: vehicle.kilometers, daily_rate: vehicle.diary_value, notes}, tx)

            // Calcular o valor do aluguel e o caução
            const totalDays = differenceInDays(check_out_date, expected_check_in_date)
            const totalRent = vehicle.diary_value.mul(totalDays)
            const payments = this.calculatePayments(totalRent, payment_method)
            await this.paymentsService.createPayments(payments, rental.id, tx)

            return {
                message: 'Vehicle reserved',
                rental
            }
        })
    }

    private calculatePayments(totalRentValue: Decimal, method_type: PaymentMethod): IPaymentCalculation[] {
        const prepayment = this.calculatePrepayment(totalRentValue, method_type)
        const finalPayment = this.calculateFinalPayment(totalRentValue, method_type)
        const securityDeposit = this.calculateSecurityDeposit(totalRentValue, method_type)

        return [prepayment, finalPayment, securityDeposit]
    }

    private calculatePrepayment(totalRentValue: Decimal, method_type: PaymentMethod): IPaymentCalculation {
         return {
            amount: totalRentValue.mul(RentalService.prepaymentTax),
            payment_type: 'prepayment',
            method_type
        }
    }

    private calculateFinalPayment(totalRentValue: Decimal, method_type: PaymentMethod): IPaymentCalculation {
        return {
            amount: totalRentValue.minus(totalRentValue.mul(RentalService.prepaymentTax)),
            payment_type: 'final',
            method_type
        }
    }

    private calculateSecurityDeposit(totalRentValue: Decimal, method_type: PaymentMethod): IPaymentCalculation {
        return {
            amount: totalRentValue.mul(RentalService.securityDepositTax),
            payment_type: 'security_deposit',
            method_type
        }
    }

    private calculatePenalty (diary_value: Decimal, daysLate: number): Decimal {
        const penaltyDiaryValue = diary_value.mul(RentalService.penaltyTax)
        return penaltyDiaryValue.mul(daysLate)
    }

    // PUT /rentals/:id/cancel
    async cancelRental(rentalId: string, notes?: string, tx?: unknown) {
        return await this.rentalRepository.withTransaction(async (tx)=> {
            const rental = await this.getRentalById(rentalId, tx)
            if(rental.status !== 'reserved') throw new HttpError('This rental cannot be cancelled.')
            

            const refundPrepayment = differenceInHours(new Date(), rental.expected_check_in_date) > 24
            const payments = await this.paymentsService.changingPaymentsStatusByRentalId(rentalId, 'canceled', refundPrepayment, tx)

            const canceledRental = await this.updateRentalStatus(rentalId, 'canceled', notes, tx)
            return {
                message: 'Rental canceled',
                canceledRental
            }
        })
    }

    // PUT /rentals/:id/noShow
    async noShow(rentalId: string, notes?: string, tx?: unknown) {
        return await this.rentalRepository.withTransaction(async (tx)=> {
            const rental = await this.getRentalById(rentalId, tx)
            if(rental.status !== 'reserved') throw new HttpError('This rental cannot be updated as no show, as it is ongoing.')

            const payments = await this.paymentsService.changingPaymentsStatusByRentalId(rentalId, 'refunded', false, tx)

            const canceledRental = await this.updateRentalStatus(rentalId, 'no_show', notes, tx)
            return {
                message: 'Rental canceled (no show)',
                canceledRental
            }
        })
    }

    // PUT rentals/:id/checkout
    // Atendant intiate rental
    async checkOut(rentalId: string, notes: string, tx?: unknown) {
        return await this.rentalRepository.withTransaction(async (tx)=> {
            const rental = await this.getRentalById(rentalId, tx)
            if(rental.status !== 'reserved') throw new HttpError('Cannot checkout this rent, as it is not reserved')

            const payments = await this.paymentsService.getAllPayments({rental_id: rentalId}, tx)
            const pendingPayments = payments.filter((payment)=>{ payment.status === 'pending' })
            if(pendingPayments) {
                let pendingPaymentsString: string = ''
                pendingPayments.forEach((payment)=>{
                    pendingPaymentsString = pendingPaymentsString.concat(payment.payment_type, ', ')
                })
                throw new HttpError(`Cannot initiate checkout because pending payments: ${pendingPaymentsString}`)
            }    

            const vehicle = await this.vehicleService.changeVehicleStatus(rental.vehicle_id, 'rented', tx)
            const updatedRental = await this.rentalRepository.update(rentalId, {status: 'rented', notes}, tx)
            if(!updatedRental) throw new HttpError('Rental not found', 404)
    
            updatedRental.vehicle = vehicle
            return updatedRental
        })
    }

    // PUT /rentals/:id/checkin
    // Atendant finish rental
    async checkIn(rentalId: string, end_mileage: number, damageValue: number = 0, notes?: string, tx?: unknown) {
        return await this.rentalRepository.withTransaction(async (tx) => {
            const rental = await this.getRentalById(rentalId, tx)
            if(rental.status !== 'rented') throw new HttpError('Cannot checkIn before checkout.')

            const payments = await this.paymentsService.getAllPayments({rental_id: rentalId})
            const securityDeposit = payments.find((payment) => payment.payment_type === 'security_deposit')
            if(!securityDeposit) throw new HttpError('Prepayment for for calculations was not found', 404)

            // Calcular as multas
            const difference = differenceInDays(new Date(), rental.expected_check_in_date)
            let penaltyValue: Decimal = new Decimal(0)
            if(difference > 0) {
                penaltyValue = this.calculatePenalty(rental.daily_rate, difference)
            }
            
            const totalAdjust = penaltyValue.plus(damageValue)
            // Se o deposito de segurança NÃO cobrir o prejuízo, cria um novo adjuste no pagemnto
            if(securityDeposit.amount < totalAdjust) {
                const finalAdjustValue = totalAdjust.minus(securityDeposit.amount)
                const adjustPayment = await this.paymentsService.createPayments([{payment_type: 'adjust', method_type: securityDeposit.method_type, amount: finalAdjustValue}], rentalId, tx)


            }   // Se o deposito for maior que o ajuste, faz o reembolso parcial
            else if (securityDeposit.amount > totalAdjust && totalAdjust > new Decimal(0)) {
                const finalRefundValue = securityDeposit.amount.minus(totalAdjust)
                // Rever
                const updatedSecurityDeposityPayment = await this.paymentsService.refundPartialy('mock', securityDeposit.id, finalRefundValue, tx)
            }
            else{
                const refundPayment = await this.paymentsService.refundPayment('s', securityDeposit.id,tx)
            }

            const vehicle = await this.rentalRepository.update(rentalId, {end_mileage: new Decimal(end_mileage), notes, check_in_date: new Date(), status: 'finalized'}, tx)
            return await this.getRentalById(rentalId, tx)
        })

    }
}