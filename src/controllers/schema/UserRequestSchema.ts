import { z } from "zod";

const RoleSchema = z.enum(["client", "attendant", "admin"], {required_error: 'role is required', invalid_type_error: 'role must of type: "client", "attendant", "admin"'})

export const CreateUserRequestSchema = z.object({
    name: z.string({required_error: 'name is required'}),
    email: z.string({required_error: 'email is required'}),
    cpf: z.string({required_error: 'cpf is required'}),
    birthdate: z.coerce.date({required_error: 'birthdate is required', invalid_type_error: 'birthdate must be a date in format yyyy-MM-dd'}),
    phone: z.string().optional(),
    password: z.string({required_error: 'password is required'}),
})

export const UpdateUserRequestSchema = z.object({
    name: z.string({required_error: 'name is required'}).optional(),
    email: z.string({required_error: 'email is required'}).optional(),
    cpf: z.string({required_error: 'cpf is required'}).optional(),
    birthdate: z.coerce.date({required_error: 'birthdate is required', invalid_type_error: 'birthdate must be a date in format yyyy-MM-dd'}).optional(),
    phone: z.string({required_error: 'password is required'}).optional(),
    password: z.string({required_error: 'password is required'}).optional()
})

export const LoginUserRequestSchema = z.object({
    email: z.string(),
    password: z.string()
})