import { IPayment } from "../../interfaces/IPaymentsRepository"

export interface IPaymentGateway{
    processPayment(): Promise<IPayment>
    createPayment(): Promise<IPayment>
    refundClient(): Promise<IPayment>
}