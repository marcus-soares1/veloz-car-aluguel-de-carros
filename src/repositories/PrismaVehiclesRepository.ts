import { Prisma } from "../../generated/prisma";
import { prisma, runInTransaction } from "../database/prismaDatabase"
import { ICreateVehicle, IUpdateVehicle, IVehicle, IVehiclesRepository, IVehiclesWhere } from "./interfaces/IVehiclesRepository";

export class PrismaVehiclesRepository implements IVehiclesRepository {
    async getAll(where?: IVehiclesWhere, tx?: unknown): Promise<IVehicle[]> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const vehicles: IVehicle[] = await db.vehicles.findMany({where, include: {category: true}})
        return vehicles
    }

    async getById(vehicleId: number, tx?: unknown): Promise<IVehicle | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const vehicle: IVehicle | null = await db.vehicles.findUnique({
            where: { id: vehicleId },
            include: { category: true }
        })
        return vehicle
    }

    async create(vehicleAttributes: ICreateVehicle, tx?: unknown): Promise<IVehicle> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const createdVehicle: IVehicle = await db.vehicles.create({
            data: {
                ...vehicleAttributes,
                status: 'avaliable'
            },
            include: {
                category: true
            }
        })
        return createdVehicle
    }

    async update(vehicleId: number, vehicleAttributes: IUpdateVehicle, tx?: unknown): Promise<IVehicle | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const updatedVehicle: IVehicle | null = await db.vehicles.update({
            where: { id: vehicleId },
            data: vehicleAttributes
        })
        return updatedVehicle
    }

    async delete(vehicleId: number, tx?: unknown): Promise<IVehicle | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const deletedVehicle: IVehicle | null = await db.vehicles.delete({
            where: { id: vehicleId }
        })
        return deletedVehicle
    }

    withTransaction = runInTransaction
}