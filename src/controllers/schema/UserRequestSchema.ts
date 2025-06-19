import { z } from "zod";

const RoleSchema = z.enum(["client", "attendant", "admin"])

export const CreateUserRequestSchema = z.object({
    name: z.string(),
    email: z.string(),
    cpf: z.string(),
    birthdate: z.coerce.date(),
    password_hash: z.string(),
    phone: z.string(),
    role: RoleSchema
})

export const UpdateUserRequestSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    cpf: z.string().optional(),
    birthdate: z.coerce.date().optional(),
    password_hash: z.string().optional(),
    phone: z.string().optional(),
    role: RoleSchema.optional()
})