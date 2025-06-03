import { prisma } from "../database/prismaDatabase"
import { ICreatePayment, IPayment, IPaymentRepository } from "./interfaces/IPaymentsRepository";

export class PrismaPaymentsRepository implements IPaymentRepository {
    async getAll(): Promise<IPayment[]> {
        const payments: IPayment[] = await prisma.payments.findMany()
        return payments
    }

    async getById(paymentId: string): Promise<IPayment | null> {
        const payment: IPayment | null = await prisma.payments.findUnique({
            where: { id: paymentId }
        })

        return payment
    }

    async create(paymentAttributes: ICreatePayment): Promise<IPayment> {
        const createdPayment: IPayment = await prisma.payments.create({
            data: paymentAttributes
        })

        return createdPayment
    }

    async update(paymentId: string, paymentAttributes: Partial<ICreatePayment>): Promise<IPayment | null> {
        const updatedPayment: IPayment | null = await prisma.payments.update({
            where: { id: paymentId },
            data: paymentAttributes
        })

        return updatedPayment
    }

    async delete(paymentId: string): Promise<IPayment | null> {
        const deletedPayment: IPayment | null = await prisma.payments.delete({
            where: { id: paymentId }
        })

        return deletedPayment
    }
}