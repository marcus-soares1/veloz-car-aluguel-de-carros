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
    getAll(): Promise<ICategory[]>
    getById(categoryId: number): Promise<ICategory | null>
    create(categoryAttributes: ICreateCategory): Promise<ICategory>
    update(categoryId: number, categoryAttributes: Partial<ICreateCategory>): Promise<ICategory | null>
    delete(categoryId: number): Promise<ICategory | null>
}