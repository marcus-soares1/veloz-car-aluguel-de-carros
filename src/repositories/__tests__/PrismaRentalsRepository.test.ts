import { PrismaRentalRepository as rentalRepository } from "../PrismaRentalsRepository";
import { prisma } from "../../database/prismaDatabase";
import { ICreateRental, IRental, IRentalRepository } from "../interfaces/IRentalsRepository";
import Decimal from "decimal.js";

jest.mock("../../database/prismaDatabase", () => ({
    prisma: {
        rentals: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));

const mockRental: IRental = {
    id: "1",
    vehicle_id: 1,
    user_id: "user1",
    check_out_date: new Date('2025-05-28'),
    check_in_date: new Date('2025-06-03'),
    expected_check_in_date: new Date('2025-06-03'),
    start_mileage: new Decimal(10000),
    end_mileage: new Decimal(10500),
    daily_rate: new Decimal(100),
    additional_charges: new Decimal(0),
    penalties: new Decimal(0),
    notes: '',
    created_at: new Date(),
    updated_at: new Date(),
    status: "reserved",
};

const mockCreateRental: ICreateRental = {
    vehicle_id: 1,
    user_id: "user1",
    check_out_date: new Date(),
    expected_check_in_date: new Date('2025-06-03'),
    start_mileage: new Decimal(10000),
    daily_rate: new Decimal(100),
}

describe("rentalRepository", () => {
    let repository: IRentalRepository;

    beforeEach(() => {
        repository = new rentalRepository();
        jest.clearAllMocks();
    });
    describe("getAll", () => {
        it("should get all rentals", async () => {
            (prisma.rentals.findMany as jest.Mock).mockResolvedValue([mockRental]);
            const rentals = await repository.getAll();
            expect(prisma.rentals.findMany).toHaveBeenCalled();
            expect(rentals).toEqual([mockRental]);
        });
    });

    describe("getById", () => {
        it("should get rental by id", async () => {
            (prisma.rentals.findUnique as jest.Mock).mockResolvedValue(mockRental);
            const rental = await repository.getById("1");
            expect(prisma.rentals.findUnique).toHaveBeenCalledWith({ where: { id: "1" } });
            expect(rental).toEqual(mockRental);
        });

        it("should return null if rental not found by id", async () => {
            (prisma.rentals.findUnique as jest.Mock).mockResolvedValue(null);
            const rental = await repository.getById("notfound");
            expect(rental).toBeNull();
        });
    });

    describe("create", () => {
        it("should create a rental", async () => {
            (prisma.rentals.create as jest.Mock).mockResolvedValue(mockRental);
            const rental = await repository.create(mockCreateRental);
            expect(prisma.rentals.create).toHaveBeenCalledWith({
                data: { ...mockCreateRental, status: "reserved" },
            });
            expect(rental).toEqual(mockRental);
        });
    });

    describe("update", () => {
        it("should update a rental", async () => {
            (prisma.rentals.update as jest.Mock).mockResolvedValue(mockRental);
            const rental = await repository.update("1", { status: "finalized" });
            expect(prisma.rentals.update).toHaveBeenCalledWith({
                where: { id: "1" },
                data: { status: "finalized" },
            });
            expect(rental).toEqual(mockRental);
        });

        it("should return null if update fails", async () => {
            (prisma.rentals.update as jest.Mock).mockResolvedValue(null);
            const rental = await repository.update("notfound", { status: "reserved" });
            expect(rental).toBeNull();
        });
    });

    describe("delete", () => {
        it("should delete a rental", async () => {
            (prisma.rentals.delete as jest.Mock).mockResolvedValue(mockRental);
            const rental = await repository.delete("1");
            expect(prisma.rentals.delete).toHaveBeenCalledWith({ where: { id: "1" } });
            expect(rental).toEqual(mockRental);
        });

        it("should return null if delete fails", async () => {
            (prisma.rentals.delete as jest.Mock).mockResolvedValue(null);
            const rental = await repository.delete("notfound");
            expect(rental).toBeNull();
        });
    });
});
