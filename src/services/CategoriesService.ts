import { ICategoriesRepository, ICategory } from '../repositories/interfaces/ICategoriesRepository'

export class CategoriesService {

    constructor(private readonly categoriesRepository: ICategoriesRepository) { }

    async getAll(tx?: unknown) {
        return this.categoriesRepository.getAll(tx);
    }

    async getById(id: number, tx?: unknown) {
        return this.categoriesRepository.getById(id, tx);
    }

    async create(category: ICategory, tx?: unknown) {
        return this.categoriesRepository.create(category, tx);
    }

    async update(id: number, categoryData: Partial<ICategory>, tx?: unknown) {
        return this.categoriesRepository.update(id, categoryData, tx);
    }

    async delete(id: number, tx?: unknown) {
        return this.categoriesRepository.delete(id, tx)
    }
}