import Decimal from "decimal.js"
import { IRental } from "./IRentalsRepository"
import { IDatabaseTransaction } from "../../database/interface/IDatabaseTransaction";

export type PaymentStatus = "paid" | "pending" | "refunded" | "partialy_refunded" | "canceled";

export type PaymentMethod = "pix" | "credit" | "debit";

export type PaymentType = "prepayment" | "final" | "security_deposit" | "adjust";

export interface ICreatePayment {
    rental_id: string
    amount: Decimal
    payment_date?: Date
    method_type: PaymentMethod
    status: PaymentStatus
    payment_type: PaymentType
    proof_of_payment_url?: string
}

export interface IPaymentCalculation extends Pick<IPayment, 'payment_type' | 'amount'> {
    method_type: PaymentMethod
}

export interface IUpdatePayment extends Partial<Pick<IPayment, 'refund_date' | 'amount' | 'refund_amount' | 'refund_date' | 'payment_date' | 'method_type' | 'status' | 'proof_of_payment_url'>> { }

export interface IPayment {
    id: string
    rental_id: string
    amount: Decimal
    payment_date: Date | null
    refund_amount: Decimal | null
    refund_date: Date | null
    method_type: PaymentMethod
    status: PaymentStatus
    payment_type: PaymentType
    proof_of_payment_url: string | null
    rental?: IRental
    updated_at: Date
    created_at: Date
}

export interface IWherePayments {
    id?: string,
    rental_id?: string
    method_type?: PaymentMethod
    status?: PaymentStatus
}

export interface IPaymentsRepository {
    getAll(where?: IWherePayments, tx?: unknown): Promise<IPayment[]>
    getById(paymentId: string, tx?: unknown): Promise<IPayment | null>
    create(paymentAttributes: ICreatePayment, tx?: unknown): Promise<IPayment>
    update(paymentId: string, categoryAttributes: IUpdatePayment, tx?: unknown): Promise<IPayment | null>
    delete(paymentId: string, tx?: unknown): Promise<IPayment | null>
    withTransaction: IDatabaseTransaction
}