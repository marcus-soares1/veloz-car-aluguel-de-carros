
import Decimal from "decimal.js";
import { prisma } from "../../database/prismaDatabase"
import { PrismaVehiclesRepository as vehiclesRepository } from "../PrismaVehiclesRepository"
import { IVehicle, ICreateVehicle, IVehiclesRepository } from "../interfaces/IVehiclesRepository"

jest.mock('../../database/prismaDatabase', ()=>({
    prisma: {
        vehicles: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        }
    }
}))

describe('vehiclesRepository', () => {
    let repository: IVehiclesRepository
    const mockVehicle: IVehicle = {
        id: 1,
        brand: 'FIAT',
        model: 'UNO',
        license_plate: 'random',
        manufacture_year: new Date(2020),
        color: "Preto",
        diary_value: new Decimal(200),
        status: 'avaliable',
        kilometers: new Decimal(10000),
        updated_at: new Date(),
        created_at: new Date(),
        category_id: 1,
        category: { id: 1, name: "SUV", description: "Teste", created_at: new Date(), updated_at: new Date() }
    }
    const mockCreateVehicle: ICreateVehicle = {
        brand: "FIAT",
        model: "UNO",
        license_plate: 'random',
        manufacture_year: new Date(2020),
        color: "Preto",
        diary_value: new Decimal(200),
        kilometers: new Decimal(10000),
        category_id: 1
    }

    beforeEach(() => {
        jest.clearAllMocks();
        repository = new vehiclesRepository();
    })
    
    describe('getAll', () => {
        it('should get all vehicles', async () => {
            (prisma.vehicles.findMany as jest.Mock).mockResolvedValue([mockVehicle]);
            const result = await repository.getAll();
            expect(prisma.vehicles.findMany).toHaveBeenCalledWith({ include: { category: true } });
            expect(result).toEqual([mockVehicle]);
        });
    });

    describe('getById', () => {
        it('should get vehicle by id', async () => {
            (prisma.vehicles.findUnique as jest.Mock).mockResolvedValue(mockVehicle);
            const result = await repository.getById(1);
            expect(prisma.vehicles.findUnique).toHaveBeenCalledWith({
                where: { id: 1 },
                include: { category: true }
            });
            expect(result).toEqual(mockVehicle);
        });

        it('should return null if vehicle by id not found', async () => {
            (prisma.vehicles.findUnique as jest.Mock).mockResolvedValue(null);
            const result = await repository.getById(999);
            expect(result).toBeNull();
        });
    });

    describe('create', () => {
        it('should create a vehicle', async () => {
            (prisma.vehicles.create as jest.Mock).mockResolvedValue(mockVehicle);
            const result = await repository.create(mockCreateVehicle);
            expect(prisma.vehicles.create).toHaveBeenCalledWith({
                data: { 
                    ...mockCreateVehicle,
                    status: 'avaliable'
                 },
                include: { category: true }
            });
            expect(result).toEqual(mockVehicle);
        });
    });

    describe('update', () => {
        it('should update a vehicle', async () => {
            const updatedVehicle = { ...mockVehicle, kilometers: new Decimal(2) };
            (prisma.vehicles.update as jest.Mock).mockResolvedValue(updatedVehicle);
            const result = await repository.update(1, { kilometers: new Decimal(2) });
            expect(prisma.vehicles.update).toHaveBeenCalledWith({
                where: { id: 1 },
                data: { kilometers: new Decimal(2) }
            });
            expect(result).toEqual(updatedVehicle);
        });

        it('should return null if update vehicle not found', async () => {
            (prisma.vehicles.update as jest.Mock).mockResolvedValue(null);
            const result = await repository.update(999, { kilometers: new Decimal(2) } );
            expect(result).toBeNull();
        });
    });

    describe('delete', () => {
        it('should delete a vehicle', async () => {
            (prisma.vehicles.delete as jest.Mock).mockResolvedValue(mockVehicle);
            const result = await repository.delete(1);
            expect(prisma.vehicles.delete).toHaveBeenCalledWith({
                where: { id: 1 }
            });
            expect(result).toEqual(mockVehicle);
        });

        it('should return null if delete vehicle not found', async () => {
            (prisma.vehicles.delete as jest.Mock).mockResolvedValue(null);
            const result = await repository.delete(999);
            expect(result).toBeNull();
        });
    })
})