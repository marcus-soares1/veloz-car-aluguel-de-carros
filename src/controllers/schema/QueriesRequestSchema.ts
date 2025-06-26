import { z } from "zod";
import { VehicleStatusSchema } from "./VehicleRequestSchema";

export const QueryIdRequestSchema = z.object({
    id: z.string({ required_error: 'id is required.' })
}) 

export const QueryIdNumberRequestSchema = z.object({
    id: z.coerce.number({ required_error: 'id is required.', invalid_type_error: 'id must be a number' }).int().positive()
})

export const QueryIdNumberWithStatusSchema = z.object({
    id: z.coerce.number({ required_error: 'id is required.', invalid_type_error: 'id must be a number' }).int().positive(),
    status: VehicleStatusSchema,
})