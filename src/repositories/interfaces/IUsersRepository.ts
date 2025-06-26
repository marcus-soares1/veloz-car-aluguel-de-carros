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

export interface IUserDtos extends Omit<IUser, 'cpf' | 'birthdate' | 'password_hash' | 'phone'> { }

export interface IGetParams {
    where?: {
        role?: Role
    },
    select?: {
        id?: boolean
        name?: boolean
        email?: boolean
        cpf?: boolean
        birthdate?: boolean
        password_hash?: boolean
        phone?: boolean
        role?: boolean
        updated_at?: boolean
        created_at?: boolean
    }
}

export interface ICreateUser {
    name: string
    email: string
    cpf: string
    birthdate: Date
    password: string
    phone?: string
    role?: Role
}

export interface ICreateUserDB extends Omit<ICreateUser, 'password'> {
    name: string
    email: string
    cpf: string
    password_hash: string
    birthdate: Date
    phone?: string
    role?: Role
}

export interface IUsersRepository {
    getAll(getParams?: IGetParams, tx?: unknown): Promise<IUser[]>
    getById(userId: string, tx?: unknown): Promise<IUser | null>
    getUserByEmail(email: string, tx?: unknown): Promise<IUser | null>
    searchUserId({id, email, cpf, role}: { id?: string, email?: string; cpf?: string, role?: Role }, tx?: unknown): Promise<string | null>
    create(userAttributes: ICreateUserDB, tx?: unknown): Promise<IUser>
    update(userId: string, userAttributes: Partial<ICreateUser>, tx?: unknown): Promise<IUser | null>
    delete(userId: string, tx?: unknown): Promise<IUser | null>
    withTransaction: IDatabaseTransaction
}