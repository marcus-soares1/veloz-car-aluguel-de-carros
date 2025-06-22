import { ICategoriesRepository, ICategory, ICreateCategory } from '../repositories/interfaces/ICategoriesRepository'

export class CategoriesService {

    constructor(private readonly categoriesRepository: ICategoriesRepository) { }

    // GET /categories
    async getAll(tx?: unknown) {
        return this.categoriesRepository.getAll(tx);
    }

    // GET /categories/:id
    async getById(id: number, tx?: unknown) {
        return this.categoriesRepository.getById(id, tx);
    }

    // POST /categories
    async create(category: ICreateCategory, tx?: unknown) {
        return this.categoriesRepository.create(category, tx);
    }

    // PUT /categories/:id
    async update(id: number, categoryData: Partial<ICategory>, tx?: unknown) {
        return this.categoriesRepository.update(id, categoryData, tx);
    }

    // DELETE /categories/:id
    async delete(id: number, tx?: unknown) {
        return this.categoriesRepository.delete(id, tx)
    }
}