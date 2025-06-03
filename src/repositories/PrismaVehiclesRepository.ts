import { prisma } from "../database/prismaDatabase"
import { ICreateVehicle, IVehicle, IVehicleRepository } from "./interfaces/IVehiclesRepository";

export class PrismaVehiclesRepository implements IVehicleRepository {
    async getAll(): Promise<IVehicle[]> {
        const vehicles: IVehicle[] = await prisma.vehicles.findMany({include: {category: true}})
        return vehicles
    }

    async getById(vehicleId: number): Promise<IVehicle | null> {
        const vehicle: IVehicle | null = await prisma.vehicles.findUnique({
            where: { id: vehicleId },
            include: {
                category: true
            }
        })
        return vehicle
    }

    async create(vehicleAttributes: ICreateVehicle): Promise<IVehicle> {
        const createdVehicle: IVehicle = await prisma.vehicles.create({
            data: {
                ...vehicleAttributes,
            },
            include: {
                category: true
            }
        })
        return createdVehicle
    }

    async update(vehicleId: number, vehicleAttributes: Partial<ICreateVehicle>): Promise<IVehicle | null> {
        const updatedVehicle: IVehicle | null = await prisma.vehicles.update({
            where: { id: vehicleId },
            data: vehicleAttributes
        })
        return updatedVehicle
    }

    async delete(vehicleId: number): Promise<IVehicle | null> {
        const deletedVehicle: IVehicle | null = await prisma.vehicles.delete({
            where: { id: vehicleId }
        })
        return deletedVehicle
    }
}