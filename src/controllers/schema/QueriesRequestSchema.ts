import { z } from "zod";

export const VehicleStatusRequest = z.enum(["avaliable", "rented", "reserved", "under_maintenance"])

export const QueryIdRequestSchema = z.object({
    id: z.string()
}) 

export const QueryIdNumberRequestSchema = z.object({
    id: z.coerce.number().int().positive()
})

export const QueryIdNumberWithStatusSchema = z.object({
    id: z.coerce.number().int().positive(),
    status: VehicleStatusRequest,
})