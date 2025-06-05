import { prisma } from "../database/prismaDatabase"
import { ICreateRental, IRental, IRentalsRepository, IUpdateRental } from "./interfaces/IRentalsRepository";

export class PrismaRentalRepository implements IRentalsRepository {
    async getAll(): Promise<IRental[]> {
        const rentals: IRental[] = await prisma.rentals.findMany()
        return rentals
    }

    async getById(rentalId: string): Promise<IRental | null> {
        const rental: IRental | null = await prisma.rentals.findUnique({
            where: { id: rentalId }
        })
        return rental
    }

    async create(rentalAttributes: ICreateRental): Promise<IRental> {
        const createdRental: IRental = await prisma.rentals.create({
            data: {...rentalAttributes, status: 'reserved'}
        })
        return createdRental
    }

    async update(rentalId: string, rentalAttributes: IUpdateRental): Promise<IRental | null> {
        const updatedRental: IRental | null = await prisma.rentals.update({
            where: { id: rentalId },
            data: rentalAttributes
        })
        return updatedRental
    }

    async delete(rentalId: string): Promise<IRental | null> {
        const deletedRental: IRental | null = await prisma.rentals.delete({
            where: { id: rentalId }
        })
        return deletedRental
    }
}