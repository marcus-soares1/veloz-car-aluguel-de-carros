import { IPaymentsRepository } from "../repositories/interfaces/IPaymentsRepository";

export class PaymentsService {

    constructor(private readonly paymentsRepository: IPaymentsRepository) { }

    processPayment(amount: number, method: string): boolean {
        
        console.log(`Processing payment of ${amount} using ${method}`);

        return true;
    }

    refundPayment(transactionId: string): boolean {

        console.log(`Refunding payment with transaction ID: ${transactionId}`);

        return true;
    }

    async createPayment(data: any) {
        return await this.paymentsRepository.create(data);
    }

    async getPaymentById(id: string) {
        return await this.paymentsRepository.getById(id);
    }

    async updatePayment(id: string, data: any) {
        return await this.paymentsRepository.update(id, data);
    }

    async deletePayment(id: string) {
        return await this.paymentsRepository.delete(id);
    }
}