import Decimal from "decimal.js";
import { HttpError } from "../errors/HttpError";
import { IRental, IRentalsRepository, RentalStatus } from "../repositories/interfaces/IRentalsRepository";
import { VehicleService } from "./VehiclesService";
import { PaymentsService } from "./PaymentsService";


export class RentalService {
    constructor(private readonly rentalRepository: IRentalsRepository, private readonly vehicleService: VehicleService, private readonly paymentsService: PaymentsService) {}

    async getRentalById(id: string): Promise<IRental> {
        const rental = await this.rentalRepository.getById(id)
        if(!rental) throw new HttpError('Rental not found', 404)
        return rental
    }

    async updateRentalStatus(id: string, status: RentalStatus, notes?: string): Promise<IRental> {
        const rental = await this.rentalRepository.update(id, {status, notes})
        if(!rental) throw new HttpError('Rental not found', 404)
        return rental
    }

    async reserveVehicle (user_id: string, vehicle_id: number, check_out_date: Date, expected_check_in_date: Date, notes?: string) {
        const vehicleStatus = await this.vehicleService.checkVehicleStatus(vehicle_id)
        // Vehicle cannot be reserved if is not avaliable
        if(vehicleStatus !== 'avaliable') throw new HttpError('Vehicle not avalible')

        // Calcular o valor do aluguel e o calção

        const vehicle = await this.vehicleService.changeVehicleStatus(vehicle_id, 'reserved')
        const rental = await this.rentalRepository.create({user_id, vehicle_id, check_out_date, expected_check_in_date, start_mileage: vehicle.kilometers, daily_rate: vehicle.diary_value, notes})

        return {
            message: 'Vehicle reserved',
            rental
        }
    }
    async cancelRental(rentalId: string, notes?: string) {
        const rental = await this.getRentalById(rentalId)
        if(rental.status !== 'reserved') throw new HttpError('This rental cannot be cancelled.')
        
        const canceledRental = await this.updateRentalStatus(rentalId, 'canceled', notes)
        return {
            message: 'Rental canceled',
            canceledRental
        }
    }

    async noShow(rentalId: string, notes?: string) {
        const rental = await this.getRentalById(rentalId)
        if(rental.status !== 'reserved') throw new HttpError('This rental is ongoing')
        
        const canceledRental = await this.updateRentalStatus(rentalId, 'no_show', notes)
        return {
            message: 'Client did not appared',
            canceledRental
        }
    }
    // Atendant intiate rental
    async checkOut(rentalId: string, notes: string) {
        const rental = await this.getRentalById(rentalId)
        const vehicle = await this.vehicleService.changeVehicleStatus(rental.vehicle_id, 'rented')
        const updatedRental = await this.rentalRepository.update(rentalId, {status: 'rented', notes})
        if(!updatedRental) throw new HttpError('Rental not found', 404)

        updatedRental.vehicle = vehicle
    }
    // Atendant finish rental
    async checkIn(rentalId: string, end_mileage: number, notes?: string) {
        const rental = await this.getRentalById(rentalId)
        // Calcular as multas
        
        const vehicle = await this.rentalRepository.update(rentalId, {end_mileage: new Decimal(end_mileage), notes, check_in_date: new Date(), status: 'finalized'})

    }
}