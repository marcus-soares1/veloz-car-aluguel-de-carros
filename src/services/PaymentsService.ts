import Decimal from "decimal.js"
import { ICreatePayment, IPayment, IPaymentCalculation, IPaymentsRepository, IWherePayments, PaymentStatus } from "../repositories/interfaces/IPaymentsRepository";
import { HttpError } from "../errors/HttpError";

export class PaymentsService {

    constructor (private readonly paymentsRepository: IPaymentsRepository) { }

    // GET /payments
    async getAllPayments (where?: IWherePayments, tx?: unknown): Promise<IPayment[]> {
        const payments = await this.paymentsRepository.getAll(where, tx)
        return payments
    }

    // GET /payments/:id 
    async getPaymentById(id: string, tx?: unknown) {
        return await this.paymentsRepository.getById(id, tx)
    }
    
    // PUT /payments/:id/process
    async processPayment(paymentId: string, tx?: unknown): Promise<IPayment | null> {
        
        const payment = await this.paymentsRepository.update(paymentId, {status: 'paid'}, tx) 
        if(!payment) throw new HttpError('Payment not found', 404)

        return payment
    }

    // PUT /payments/:id/refund
    async refundPayment(transactionId: string, paymentId: string, tx?: unknown) {
        return await this.paymentsRepository.withTransaction(async (tx) => {
            console.log(`Refunding payment with transaction ID: ${transactionId}`);
    
            const refundedPayment = await this.paymentsRepository.update(paymentId, {}, tx)
            return refundedPayment
        })
    }

    // PUT /payments/:id/partial
    async refundPartialy (paymentId: string, refundAmount: Decimal, tx?: unknown) {
        const partialyRefundedPayment = await this.paymentsRepository.update(paymentId, {refund_date: new Date(), refund_amount: refundAmount, status: 'partialy_refunded'}, tx)
                
        return partialyRefundedPayment 
    }
    
    // POST /payments
    async createPayments(payments: IPaymentCalculation[], rental_id: string, tx?: unknown): Promise<IPayment[]> {
        const paymentsArray = await Promise.all(
            payments.map(async (payment) => {
                const result = await this.paymentsRepository.create({ ...payment, rental_id, status: 'pending' }, tx)
                console.log(result)
                return result
            })
        )
        return paymentsArray
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

    // DELETE /payments/:id
    async deletePayment(id: string, tx?: unknown) {
        return await this.paymentsRepository.delete(id, tx)
    }
}