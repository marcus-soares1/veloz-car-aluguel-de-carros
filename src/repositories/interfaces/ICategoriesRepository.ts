import { IDatabaseTransaction } from "../../database/interface/IDatabaseTransaction"

export interface ICategory {
    id: number
    name: string
    description: string
    updated_at: Date
    created_at: Date
}

export interface ICreateCategory {
    name: string
    description: string
}

export interface ICategoriesRepository {
    getAll(tx?: unknown): Promise<ICategory[]>
    getById(categoryId: number, tx?: unknown): Promise<ICategory | null>
    create(categoryAttributes: ICreateCategory, tx?: unknown): Promise<ICategory>
    update(categoryId: number, categoryAttributes: Partial<ICreateCategory>, tx?: unknown): Promise<ICategory | null>
    delete(categoryId: number, tx?: unknown): Promise<ICategory | null>
    withTransaction: IDatabaseTransaction
}