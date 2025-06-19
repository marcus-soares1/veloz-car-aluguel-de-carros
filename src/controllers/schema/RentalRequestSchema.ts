import { z } from "zod";
import { DecimalSchema } from "./CustomSchemas";

export const PaymentMethodSchema = z.enum(["pix", "credit", "debit"])
export const RentalStatusSchema = z.enum(["reserved", "rented", "canceled", "finalized", "ended", "no_show"])

export const CreateRentalRequestSchema = z.object({
    vehicle_id: z.string(),
    user_id: z.string(),
    check_out: z.coerce.date(),
    expected_check_in_date: z.coerce.date(),
    start_mileage: DecimalSchema,
    daily_rate: DecimalSchema,
    notes: z.string()
})

export const UpdateRentalRequestSchema = z.object({
    vehicle_id: z.string(),
    user_id: z.string(),
    check_out_date: z.coerce.string()
})

export const ReserveRentalSchema = z.object({
  user_id: z.string(),
  vehicle_id: z.number().int().positive(),
  check_out_date: z.coerce.date(),
  expected_check_in_date: z.coerce.date(),
  payment_method: PaymentMethodSchema,
  notes: z.string().optional(),
})

export const UpdateRentalStatusSchema = z.object({
  id: z.string(),
  status: RentalStatusSchema,
})

export const CheckInSchema = z.object({
  end_mileage: z.number().positive(),
  damageValue: z.number().nonnegative().optional(),
  notes: z.string().optional(),
})