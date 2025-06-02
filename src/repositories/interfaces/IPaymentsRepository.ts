import Decimal from "decimal.js"
import { IRental } from "./IRentalsRepository"

export enum PaymentStatus {
    paid = "paid",
    pending = "pending"
}

export enum PaymentMethod {
    pix = "pix",
    credit = "credit",
    debit = "debit"
}

export enum PaymentType {
    prepayment = "prepayment",
    final = "final",
    security_deposit = "security deposit",
    adjust = "adjust"
}

export interface ICreatePayment {
    rental_id: string
    amount: Decimal
    payment_date: Date
    refund_date: Date
    method_type: PaymentMethod
    status: PaymentStatus
    payment_type: PaymentType
    proof_of_payment_url: string
}

export interface IPayment {
    id: string
    rental_id: string
    amount: Decimal
    payment_date: Date
    refund_date: Date
    method_type: PaymentMethod
    status: PaymentStatus
    payment_type: PaymentType
    proof_of_payment_url: string
    rental: IRental
    updated_at: Date
    created_at: Date
}

export interface IPaymentRepository {
    getAll(): Promise<IPayment[]>
    getById(categoryId: string): Promise<IPayment | null>
    create(categoryAttributes: ICreatePayment): Promise<IPayment>
    update(categoryId: string, categoryAttributes: Partial<ICreatePayment>): Promise<IPayment | null>
    delete(categoryId: string): Promise<IPayment | null>
}