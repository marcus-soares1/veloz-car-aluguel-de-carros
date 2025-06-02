import Decimal from "decimal.js"

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

export interface IPayment {
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
    amount: Decimal
    payment_date: Date
    refund_date: Date
    method_type: PaymentMethod
    status: PaymentStatus
    payment_type: PaymentType
    proof_of_payment_url: string
    updated_at: Date
    created_at: Date
}