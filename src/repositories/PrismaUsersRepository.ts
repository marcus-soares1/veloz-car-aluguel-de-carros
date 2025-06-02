import { prisma } from "../database/prismaDatabase";
import { UUID } from "crypto";
import { ICreateUser, IUser, IUsersRepository } from "./interfaces/IUsersRepository";


export class PrismaUsersRepository implements IUsersRepository{
    async getAll(): Promise<IUser[]> {
        const users: IUser[] = await prisma.users.findMany()
        return users
    }
    async getById(userId: string): Promise<IUser | null> {
        const user: IUser | null = await prisma.users.findUnique({
            where: { id: userId }
        })

        return user
    }
    async create(userAttributes: ICreateUser): Promise<IUser> {
        const newUser: IUser = await prisma.users.create({
            data: userAttributes
        })

        return newUser
    }
    async update(userId: string, userAttributes: Partial<ICreateUser>): Promise<IUser | null> {
        const updatedUser: IUser | null = await prisma.users.update({
            where: { id: userId },
            data: userAttributes
        })

        return updatedUser
    }
    async delete(userId: string): Promise<IUser | null> {
        const deletedUser: IUser | null = await prisma.users.delete({
            where: { id: userId }
        })

        return deletedUser
    }

}