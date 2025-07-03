import { Prisma } from "@prisma/client";
import { prisma, runInTransaction } from "../database/prismaDatabase"
import { ICategoriesRepository, ICategory, ICreateCategory } from "./interfaces/ICategoriesRepository";

export class PrismaCategoriesRepository implements ICategoriesRepository {
    async getAll(tx?: unknown): Promise<ICategory[]> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const categories: ICategory[] = await db.categories.findMany()
        return categories
    }

    async getById(categoryId: number, tx?: unknown): Promise<ICategory | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const category: ICategory | null = await db.categories.findUnique({
            where: { id: categoryId }
        })
        return category
    }

    async create(categoryAttributes: ICreateCategory, tx?: unknown): Promise<ICategory> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const createdCategory: ICategory = await db.categories.create({
            data: categoryAttributes
        })

        return createdCategory        
    }

    async update(categoryId: number, categoryAttributes: Partial<ICreateCategory>, tx?: unknown): Promise<ICategory | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const updatedCategory: ICategory | null =  await db.categories.update({
            where: { id: categoryId },
            data: categoryAttributes
        })

        return updatedCategory
    }

    async delete(categoryId: number, tx?: unknown): Promise<ICategory | null> {
        const db = (tx ?? prisma) as Prisma.TransactionClient
        const deletedCategory: ICategory | null = await db.categories.delete({
            where: { id: categoryId }
        })

        return deletedCategory
    }

    withTransaction = runInTransaction
}