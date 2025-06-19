import { z } from "zod";

export const CreateCategoryRequestSchema = z.object({
    name: z.string(),
    description: z.string()
})

export const UpdateCategoryRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
})