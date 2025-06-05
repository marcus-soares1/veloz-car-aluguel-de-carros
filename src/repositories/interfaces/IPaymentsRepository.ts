import Decimal from "decimal.js"
import { IRental } from "./IRentalsRepository"

export type PaymentStatus = "paid" | "pending";

export type PaymentMethod = "pix" | "credit" | "debit";

export type PaymentType = "prepayment" | "final" | "security_deposit" | "adjust";

export interface ICreatePayment {
    rental_id: string
    amount: Decimal
    payment_date: Date
    method_type: PaymentMethod
    status: PaymentStatus
    payment_type: PaymentType
    proof_of_payment_url: string
}

export interface IPayment {
    id: string
    rental_id: string
    amount: Decimal
    payment_date: Date | null
    refund_date: Date | null
    method_type: PaymentMethod
    status: PaymentStatus
    payment_type: PaymentType
    proof_of_payment_url: string | null
    rental?: IRental
    updated_at: Date
    created_at: Date
}

export interface IPaymentsRepository {
    getAll(): Promise<IPayment[]>
    getById(paymentId: string): Promise<IPayment | null>
    create(paymentAttributes: ICreatePayment): Promise<IPayment>
    update(paymentId: string, categoryAttributes: Partial<ICreatePayment>): Promise<IPayment | null>
    delete(paymentId: string): Promise<IPayment | null>
}