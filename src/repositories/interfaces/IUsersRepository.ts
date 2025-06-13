import { IDatabaseTransaction } from "../../database/interface/IDatabaseTransaction"
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
    getAll(tx?: unknown): Promise<IUser[]>
    getById(userId: string, tx?: unknown): Promise<IUser | null>
    searchUserId({id, email, cpf, role}: { id?: string, email?: string; cpf?: string, role?: Role }, tx?: unknown): Promise<string | null>
    create(userAttributes: ICreateUser, tx?: unknown): Promise<IUser>
    update(userId: string, userAttributes: Partial<ICreateUser>, tx?: unknown): Promise<IUser | null>
    delete(userId: string, tx?: unknown): Promise<IUser | null>
    withTransaction: IDatabaseTransaction
}