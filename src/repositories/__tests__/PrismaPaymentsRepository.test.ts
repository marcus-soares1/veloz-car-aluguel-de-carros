import { PrismaPaymentsRepository as paymentsRepository } from "../PrismaPaymentsRepository";
import { prisma } from "../../database/prismaDatabase";
import { ICreatePayment, IPayment, IPaymentsRepository } from "../interfaces/IPaymentsRepository";
import Decimal from "decimal.js";

jest.mock("../../database/prismaDatabase", () => ({
    prisma: {
        payments: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));

const mockPayment: IPayment = {
    id: "1",
    rental_id: "rental_1",
    amount: new Decimal(100),
    method_type: "credit",
    status: "paid",
    payment_date: new Date(),
    refund_amount: new Decimal(0),
    refund_date: null,
    payment_type: "final",
    proof_of_payment_url: "http://example.com/proof.jpg",
    created_at: new Date(),
    updated_at: new Date(),
}

const mockCreatePayment: ICreatePayment = {
    amount: new Decimal(100),
    method_type: "credit",
    status: "paid",
    rental_id: "rental_1",
    payment_date: new Date(),
    payment_type: "final",
    proof_of_payment_url: "http://example.com/proof.jpg",
}

describe("paymentsRepository", () => {
    let repository: IPaymentsRepository;

    beforeEach(() => {
        repository = new paymentsRepository();
        jest.clearAllMocks();
    });

    describe("getAll", () => {
        it("should get all payments", async () => {
            (prisma.payments.findMany as jest.Mock).mockResolvedValue([mockPayment]);
            const result = await repository.getAll();
            expect(prisma.payments.findMany).toHaveBeenCalled();
            expect(result).toEqual([mockPayment]);
        });
    });

    describe("getById", () => {
        it("should get payment by id", async () => {
            (prisma.payments.findUnique as jest.Mock).mockResolvedValue(mockPayment);
            const result = await repository.getById("1");
            expect(prisma.payments.findUnique).toHaveBeenCalledWith({ where: { id: "1" } });
            expect(result).toEqual(mockPayment);
        });

        it("should return null if payment not found by id", async () => {
            (prisma.payments.findUnique as jest.Mock).mockResolvedValue(null);
            const result = await repository.getById("2");
            expect(result).toBeNull();
        });
    });

    describe("create", () => {
        it("should create a payment", async () => {
            (prisma.payments.create as jest.Mock).mockResolvedValue(mockPayment);
            const result = await repository.create(mockCreatePayment);
            expect(prisma.payments.create).toHaveBeenCalledWith({ data: mockCreatePayment });
            expect(result).toEqual(mockPayment);
        });
    });

    describe("update", () => {
        it("should update a payment", async () => {
            (prisma.payments.update as jest.Mock).mockResolvedValue(mockPayment);
            const result = await repository.update("1", { status: "pending" });
            expect(prisma.payments.update).toHaveBeenCalledWith({
                where: { id: "1" },
                data: { status: "pending" },
            });
            expect(result).toEqual(mockPayment);
        });

        it("should return null if payment to update does not exist", async () => {
            (prisma.payments.update as jest.Mock).mockResolvedValue(null);
            const result = await repository.update("2", { status: "pending" });
            expect(result).toBeNull();
        });
    });

    describe("delete", () => {
        it("should delete a payment", async () => {
            (prisma.payments.delete as jest.Mock).mockResolvedValue(mockPayment);
            const result = await repository.delete("1");
            expect(prisma.payments.delete).toHaveBeenCalledWith({ where: { id: "1" } });
            expect(result).toEqual(mockPayment);
        });

        it("should return null if payment to delete does not exist", async () => {
            (prisma.payments.delete as jest.Mock).mockResolvedValue(null);
            const result = await repository.delete("2");
            expect(result).toBeNull();
        });
    });

    it("should get all payments", async () => {
        (prisma.payments.findMany as jest.Mock).mockResolvedValue([mockPayment]);
        const result = await repository.getAll();
        expect(prisma.payments.findMany).toHaveBeenCalled();
        expect(result).toEqual([mockPayment]);
    });

    it("should get payment by id", async () => {
        (prisma.payments.findUnique as jest.Mock).mockResolvedValue(mockPayment);
        const result = await repository.getById("1");
        expect(prisma.payments.findUnique).toHaveBeenCalledWith({ where: { id: "1" } });
        expect(result).toEqual(mockPayment);
    });

    it("should return null if payment not found by id", async () => {
        (prisma.payments.findUnique as jest.Mock).mockResolvedValue(null);
        const result = await repository.getById("2");
        expect(result).toBeNull();
    });

    it("should create a payment", async () => {
        (prisma.payments.create as jest.Mock).mockResolvedValue(mockPayment);
        const result = await repository.create(mockCreatePayment);
        expect(prisma.payments.create).toHaveBeenCalledWith({ data: mockCreatePayment });
        expect(result).toEqual(mockPayment);
    });

    it("should update a payment", async () => {
        (prisma.payments.update as jest.Mock).mockResolvedValue(mockPayment);
        const result = await repository.update("1", { status: "pending" });
        expect(prisma.payments.update).toHaveBeenCalledWith({
            where: { id: "1" },
            data: { status: "pending" },
        });
        expect(result).toEqual(mockPayment);
    });

    it("should return null if payment to update does not exist", async () => {
        (prisma.payments.update as jest.Mock).mockResolvedValue(null);
        const result = await repository.update("2", { status: "pending" });
        expect(result).toBeNull();
    });

    it("should delete a payment", async () => {
        (prisma.payments.delete as jest.Mock).mockResolvedValue(mockPayment);
        const result = await repository.delete("1");
        expect(prisma.payments.delete).toHaveBeenCalledWith({ where: { id: "1" } });
        expect(result).toEqual(mockPayment);
    });

    it("should return null if payment to delete does not exist", async () => {
        (prisma.payments.delete as jest.Mock).mockResolvedValue(null);
        const result = await repository.delete("2");
        expect(result).toBeNull();
    });
});