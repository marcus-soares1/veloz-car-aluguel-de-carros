import { Prisma } from "@prisma/client";
import { prisma, runInTransaction } from "../database/prismaDatabase"
import { ICreatePayment, IPayment, IPaymentsRepository, IUpdatePayment, IWherePayments } from "./interfaces/IPaymentsRepository";

export class PrismaPaymentsRepository implements IPaymentsRepository {

    async getAll(where: IWherePayments, tx?: unknown): Promise<IPayment[]> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const payments: IPayment[] = await db.payments.findMany({where})
        return payments
    }

    async getById(paymentId: string, tx?: unknown): Promise<IPayment | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const payment: IPayment | null = await db.payments.findUnique({
            where: { id: paymentId }
        })

        return payment
    }

    async create(paymentAttributes: ICreatePayment, tx?: unknown): Promise<IPayment> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const createdPayment: IPayment = await db.payments.create({
            data: paymentAttributes
        })

        return createdPayment
    }

    async update(paymentId: string, paymentAttributes: IUpdatePayment, tx?: unknown): Promise<IPayment | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const updatedPayment: IPayment | null = await db.payments.update({
            where: { id: paymentId },
            data: paymentAttributes
        })

        return updatedPayment
    }

    async delete(paymentId: string, tx?: unknown): Promise<IPayment | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const deletedPayment: IPayment | null = await db.payments.delete({
            where: { id: paymentId }
        })

        return deletedPayment
    }

    withTransaction = runInTransaction
}