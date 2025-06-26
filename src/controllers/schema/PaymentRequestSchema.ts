import { z } from "zod";
import { DecimalSchema } from "./CustomSchemas";

export const PaymentMethodSchema = z.enum(["pix", "credit", "debit"], {
    required_error: 'Payment method is required.'
})
export const PaymentTypeSchema = z.enum(["prepayment", "final", "security_deposit", "adjust"], {
    required_error: 'Payment type is required.'
})
export const PaymentStatusSchema = z.enum(["paid", "pending", "refunded", "partialy_refunded", "canceled"],
    {
        required_error: 'Payment status is required.'
    }
)

export const PaymentMethodRequestSchema = z.object({
    method_type: PaymentMethodSchema
})

export const CreatePaymentRequestSchema = z.object({
    rental_id: z.string({
        required_error: 'rental_id is required.'
    }),
    amount: DecimalSchema,
    payment_date: z.coerce.date({
        required_error: 'payment_date is required.'
    }).optional(),
    method_type: PaymentMethodSchema,
    status: PaymentStatusSchema,
    payment_type: PaymentTypeSchema,
    proof_of_payment_url: z.string().optional()
})