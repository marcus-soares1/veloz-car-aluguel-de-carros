import { prisma } from "../database/prismaDatabase"
import { ICategoriesRepository, ICategory, ICreateCategory } from "./interfaces/ICategoriesRepository";

export class PrismaCategoriesRepository implements ICategoriesRepository {
    async getAll(): Promise<ICategory[]> {
        const categories: ICategory[] = await prisma.categories.findMany()
        return categories
    }

    async getById(categoryId: number): Promise<ICategory | null> {
        const category: ICategory | null = await prisma.categories.findUnique({
            where: { id: categoryId }
        })
        return category
    }

    async create(categoryAttributes: ICreateCategory): Promise<ICategory> {
        const createdCategory: ICategory = await prisma.categories.create({
            data: categoryAttributes
        })

        return createdCategory        
    }

    async update(categoryId: number, categoryAttributes: Partial<ICreateCategory>): Promise<ICategory | null> {
        const updatedCategory: ICategory | null =  await prisma.categories.update({
            where: { id: categoryId },
            data: categoryAttributes
        })

        return updatedCategory
    }

    async delete(categoryId: number): Promise<ICategory | null> {
        const deletedCategory: ICategory | null = await prisma.categories.delete({
            where: { id: categoryId }
        })

        return deletedCategory
    }
}