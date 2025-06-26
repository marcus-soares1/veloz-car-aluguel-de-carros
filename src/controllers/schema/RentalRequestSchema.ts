import { z } from "zod";
import { DecimalSchema } from "./CustomSchemas";
import { PaymentMethodSchema } from "./PaymentRequestSchema";

export const RentalStatusSchema = z.enum(["reserved", "rented", "canceled", "finalized", "ended", "no_show"], { required_error: 'status is required.', invalid_type_error: 'status must be of type: "reserved", "rented", "canceled", "finalized", "ended", "no_show"' })

export const CreateRentalRequestSchema = z.object({
  vehicle_id: z.string({ required_error: 'vehicle_id is required.'}),
  user_id: z.string({ required_error: 'user_id is required.'}),
  check_out_date: z.coerce.date({ required_error: 'check_out_date is required.', invalid_type_error: 'check_out_date must be a date on format yyyy-MM-dd' }),
  expected_check_in_date: z.coerce.date({ required_error: 'expected_check_in_date is required.', invalid_type_error: 'expected_check_in_date must be a date on format yyyy-MM-dd' }),
  start_mileage: DecimalSchema,
  daily_rate: DecimalSchema,
  notes: z.string().optional()
})

export const UpdateRentalRequestSchema = z.object({
  vehicle_id: z.string({ required_error: 'vehicle_id is required.'}).optional(),
})

export const ReserveRentalSchema = z.object({
  user_id: z.string({ required_error: 'user_id is required.'}),
  vehicle_id: z.number({ required_error: 'vehicle_id is required.'}).int().positive(),
  check_out_date: z.coerce.date({ required_error: 'check_out_date is required.', invalid_type_error: 'check_out_date must be a date on format yyyy-MM-dd' }),
  expected_check_in_date: z.coerce.date({ required_error: 'expected_check_in_date is required.', invalid_type_error: 'expected_check_in_date must be a date on format yyyy-MM-dd' }),
  payment_method: PaymentMethodSchema,
  notes: z.string().optional(),
})

export const UpdateRentalStatusSchema = z.object({
  id: z.string({ required_error: 'id is required' }),
  status: RentalStatusSchema,
})

export const CheckInSchema = z.object({
  end_mileage: z.number({ required_error: 'end_mileage is required' }).positive(),
  damageValue: z.number({ required_error: 'damage_value is required' }).nonnegative().optional(),
  notes: z.string().optional(),
})