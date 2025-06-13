import { Prisma } from "../../generated/prisma";
import { prisma, runInTransaction } from "../database/prismaDatabase"
import { ICreateRental, IRental, IRentalsRepository, IUpdateRental } from "./interfaces/IRentalsRepository";

export class PrismaRentalRepository implements IRentalsRepository {
    async getAll(tx?: unknown): Promise<IRental[]> {
        const rentals: IRental[] = await prisma.rentals.findMany()
        return rentals
    }

    async getById(rentalId: string, tx?: unknown): Promise<IRental | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const rental: IRental | null = await db.rentals.findUnique({
            where: { id: rentalId }
        })
        return rental
    }

    async create(rentalAttributes: ICreateRental, tx?: unknown): Promise<IRental> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const createdRental: IRental = await db.rentals.create({
            data: {...rentalAttributes, status: 'reserved'}
        })
        return createdRental
    }

    async update(rentalId: string, rentalAttributes: IUpdateRental, tx?: unknown): Promise<IRental | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const updatedRental: IRental | null = await db.rentals.update({
            where: { id: rentalId },
            data: rentalAttributes
        })
        return updatedRental
    }

    async delete(rentalId: string, tx?: unknown): Promise<IRental | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const deletedRental: IRental | null = await db.rentals.delete({
            where: { id: rentalId }
        })
        return deletedRental
    }

    withTransaction = runInTransaction
}