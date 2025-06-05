import { ICategoriesRepository, ICategory } from '../repositories/interfaces/ICategoriesRepository'

export class CategoriesService {

    constructor(private readonly categoriesRepository: ICategoriesRepository) { }

    async getAll() {
        return this.categoriesRepository.getAll();
    }

    async getById(id: number) {
        return this.categoriesRepository.getById(id);
    }

    async create(category: ICategory) {
        return this.categoriesRepository.create(category);
    }

    async update(id: number, categoryData: Partial<ICategory>) {
        return this.categoriesRepository.update(id, categoryData);
    }

    async delete(id: number) {
        return this.categoriesRepository.delete(id)
    }
}