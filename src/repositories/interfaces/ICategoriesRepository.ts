export interface ICategory {
    id: string
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
    getById(categoryId: string): Promise<ICategory | null>
    create(categoryAttributes: ICreateCategory): Promise<ICategory>
    update(categoryId: string, categoryAttributes: Partial<ICreateCategory>): Promise<ICategory | null>
    delete(categoryId: string): Promise<ICategory | null>
}