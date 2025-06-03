import { IRental } from "./IRentalsRepository"

export type Role = "client" | "attendant" | "admin"

export interface IUser {
    id: string
    name: string
    email: string
    cpf: string
    birthdate: Date
    password_hash: string
    phone: string | null
    role: Role
    updated_at: Date
    created_at: Date
    rentals?: IRental[]
}

export interface ICreateUser {
    name: string
    email: string
    cpf: string
    birthdate: Date
    password_hash: string
    phone?: string
    role?: Role
}

export interface IUsersRepository {
    getAll(): Promise<IUser[]>
    getById(userId: string): Promise<IUser | null>
    create(userAttributes: ICreateUser): Promise<IUser>
    update(userId: string, userAttributes: Partial<ICreateUser>): Promise<IUser | null>
    delete(userId: string): Promise<IUser | null>
}