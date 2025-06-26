import { z } from "zod";

export const CreateCategoryRequestSchema = z.object({
    name: z.string({
        required_error: 'name is required.'
    }),
    description: z.string({
        required_error: 'description is required.'
    })
})

export const UpdateCategoryRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
})