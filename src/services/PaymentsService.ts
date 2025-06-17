import Decimal from "decimal.js";
import { IPaymentGateway } from "../gateways/interface/IPaymentGateway";
import { ICreatePayment, IPayment, IPaymentCalculation, IPaymentsRepository, IWherePayments, PaymentStatus } from "../repositories/interfaces/IPaymentsRepository";
import { RentalService } from "./RentalsService";

export class PaymentsService {

    constructor (
        private readonly paymentsRepository: IPaymentsRepository, 
        private readonly paymentGateway: IPaymentGateway
    ) { }

    // GET /payments
    async getAllPayments (where: IWherePayments, tx?: unknown): Promise<IPayment[]> {
        const payments = await this.paymentsRepository.getAll(where, tx)
        return payments
    }
    
    processPayment(amount: number, method: string, tx?: unknown): boolean {
        
        console.log(`Processing payment of ${amount} using ${method}`);

        return true
    }

    async refundPayment(transactionId: string, paymentId: string, tx?: unknown) {
        return await this.paymentsRepository.withTransaction(async (tx) => {
            console.log(`Refunding payment with transaction ID: ${transactionId}`);
    
            const refundedPayment = await this.paymentsRepository.update(paymentId, {}, tx)
            return refundedPayment
        })
    }

    async refundPartialy (transactionId: string, paymentId: string, refundAmount: Decimal, tx?: unknown) {
        return await this.paymentsRepository.withTransaction(async (tx) => {
            console.log(`Refunding payment with transaction ID: ${transactionId}`);
            const partialyRefundedPayment = await this.paymentsRepository.update(paymentId, {refund_date: new Date() , status: 'partialy_refunded'}, tx)
            
            return partialyRefundedPayment
        })
        
    }
    
    async createPayments(payments: IPaymentCalculation[], rental_id: string, tx?: unknown): Promise<IPayment[]> {
        return await this.paymentsRepository.withTransaction(async (tx)=> {
            const paymentsArray = await Promise.all(
                payments.map(async (payment) => {
                    return await this.paymentsRepository.create({ ...payment, rental_id, status: 'pending' }, tx)
                })
            )
            return paymentsArray
        })
    }

    async changingPaymentsStatusByRentalId(rental_id: string, status: PaymentStatus, refundPrepayment: boolean, tx?: unknown): Promise<(IPayment | {message: string})[]> {
        return await this.paymentsRepository.withTransaction(async (tx) => {
            const payments = await this.getAllPayments({rental_id}, tx)
            if(!refundPrepayment) {
                const prepaymentIndex = payments.findIndex(payment => payment.payment_type === 'prepayment');
                if (prepaymentIndex !== -1) {
                    payments.splice(prepaymentIndex, 1);
                }
            }    
            
            const updatedPayments: Array<IPayment | {message: string}> = await Promise.all(
                payments.map(async (payment) =>{
                    if(payment.status === 'paid') {
                        await this.paymentGateway.refundClient()
                        const response = await this.paymentsRepository.update(payment.id, {status: status}, tx)
                        if(!response) return {message: `Payment of ${payment.payment_type} type was not found.`}
                        return response
                    }
                    else {
                        const response = await this.paymentsRepository.update(payment.id, {status: status}, tx)
                        if(!response) return {message: `Payment of ${payment.payment_type} type was not found.`}
                        return response
                    }
                })
            )
            return updatedPayments
        })
    }

    async getPaymentById(id: string, tx?: unknown) {
        return await this.paymentsRepository.getById(id, tx)
    }

    async updatePayment(id: string, paymentAttributes: Partial<ICreatePayment>, tx?: unknown) {
        return await this.paymentsRepository.update(id, paymentAttributes, tx);
    }

    async deletePayment(id: string, tx?: unknown) {
        return await this.paymentsRepository.delete(id, tx)
    }
}