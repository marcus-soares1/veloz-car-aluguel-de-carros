import { Prisma } from "@prisma/client"
import { prisma, runInTransaction } from "../database/prismaDatabase"
import { ICreateUser, ICreateUserDB, IGetParams, IUser, IUsersRepository, Role } from "./interfaces/IUsersRepository"


export class PrismaUsersRepository implements IUsersRepository{
    async getAll(getParams?: IGetParams, tx?: unknown): Promise<IUser[]> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const users: IUser[] = await db.users.findMany(getParams)
        return users
    }

    async getUserByEmail (email: string, tx: unknown): Promise<IUser | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient

        const user = await db.users.findFirst({where: {email}})

        return user
    }

    async getById(userId: string, tx?: unknown): Promise<IUser | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const user: IUser | null = await db.users.findUnique({
            where: { id: userId }
        })

        return user
    }
    async searchUserId({id, email, cpf, role}: {id?: string, email?: string, cpf?: string, role?: Role}, tx?: unknown): Promise<string | null> {
        const where = { id, email, cpf, role }
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const user: { id: string } | null = await db.users.findFirst({
            where,
            select: { id: true }
        })
        return user? user.id : null
    }
    async create(userAttributes: ICreateUserDB, tx?: unknown): Promise<IUser> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const newUser: IUser = await db.users.create({
            data: userAttributes
        })

        return newUser
    }
    async update(userId: string, userAttributes: Partial<ICreateUser>, tx?: unknown): Promise<IUser | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const updatedUser: IUser | null = await db.users.update({
            where: { id: userId },
            data: userAttributes
        })

        return updatedUser
    }
    async delete(userId: string, tx?: unknown): Promise<IUser | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const deletedUser: IUser | null = await db.users.delete({
            where: { id: userId }
        })

        return deletedUser
    }

    withTransaction = runInTransaction
}