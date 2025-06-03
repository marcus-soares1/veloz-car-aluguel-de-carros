import { PrismaCategoriesRepository as categoriesRepository } from "../PrismaCategoriesRepository";
import { prisma } from "../../database/prismaDatabase";
import { ICategoriesRepository, ICategory, ICreateCategory } from "../interfaces/ICategoriesRepository";

jest.mock("../../database/prismaDatabase", () => ({
    prisma: {
        categories: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}))

describe("categoriesRepository", () => {
        let repository: ICategoriesRepository

    beforeEach(() => {
        repository = new categoriesRepository()
        jest.clearAllMocks();
    });

    describe("getAll", () => {
        it("should get all categories", async () => {
            const mockCategories: ICategory[] = [
                { id: 1, name: "SUV", description: "SUV cars", updated_at: new Date(), created_at: new Date() },
                { id: 2, name: "Sedan", description: "Sedan cars", updated_at: new Date(), created_at: new Date() },
            ];
            (prisma.categories.findMany as jest.Mock).mockResolvedValue(mockCategories);

            const result = await repository.getAll();
            expect(prisma.categories.findMany).toHaveBeenCalled();
            expect(result).toEqual(mockCategories);
        });
    });

    describe("getById", () => {
        it("should get a category by id", async () => {
            const mockCategory: ICategory = { id: 1, name: "SUV", description: "SUV cars", updated_at: new Date(), created_at: new Date() };
            (prisma.categories.findUnique as jest.Mock).mockResolvedValue(mockCategory);

            const result = await repository.getById(1);
            expect(prisma.categories.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
            expect(result).toEqual(mockCategory);
        });

        it("should return null if category not found by id", async () => {
            (prisma.categories.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await repository.getById(999);
            expect(result).toBeNull();
        });
    });

    describe("create", () => {
        it("should create a new category", async () => {
            const categoryData: ICreateCategory = { name: "Hatch", description: "Hatchback cars" };
            const createdCategory: ICategory = { id: 3, ...categoryData, updated_at: new Date(), created_at: new Date() };
            (prisma.categories.create as jest.Mock).mockResolvedValue(createdCategory);

            const result = await repository.create(categoryData);
            expect(prisma.categories.create).toHaveBeenCalledWith({ data: categoryData });
            expect(result).toEqual(createdCategory);
        });
    });

    describe("update", () => {
        it("should update a category", async () => {
            const updatedCategory: ICategory = { id: 1, name: "SUV", description: "Updated", updated_at: new Date(), created_at: new Date() };
            (prisma.categories.update as jest.Mock).mockResolvedValue(updatedCategory);

            const result = await repository.update(1, { description: "Updated" });
            expect(prisma.categories.update).toHaveBeenCalledWith({
                where: { id: 1 },
                data: { description: "Updated" },
            });
            expect(result).toEqual(updatedCategory);
        });

        it("should return null when updating a non-existent category", async () => {
            (prisma.categories.update as jest.Mock).mockResolvedValue(null);

            const result = await repository.update(999, { name: "NonExistent" });
            expect(result).toBeNull();
        });
    });

    describe("delete", () => {
        it("should delete a category", async () => {
            const deletedCategory: ICategory = { id: 2, name: "Sedan", description: "Sedan cars", updated_at: new Date(), created_at: new Date() };
            (prisma.categories.delete as jest.Mock).mockResolvedValue(deletedCategory);

            const result = await repository.delete(2);
            expect(prisma.categories.delete).toHaveBeenCalledWith({ where: { id: 2 } });
            expect(result).toEqual(deletedCategory);
        });

        it("should return null when deleting a non-existent category", async () => {
            (prisma.categories.delete as jest.Mock).mockResolvedValue(null);

            const result = await repository.delete(999);
            expect(result).toBeNull();
        });
    });

    it("should get a category by id", async () => {
        const mockCategory: ICategory = { id: 1, name: "SUV", description: "SUV cars", updated_at: new Date(), created_at: new Date() };
        (prisma.categories.findUnique as jest.Mock).mockResolvedValue(mockCategory);

        const result = await repository.getById(1);
        expect(prisma.categories.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockCategory);
    });

    it("should return null if category not found by id", async () => {
        (prisma.categories.findUnique as jest.Mock).mockResolvedValue(null);

        const result = await repository.getById(999);
        expect(result).toBeNull();
    });

    it("should create a new category", async () => {
        const categoryData: ICreateCategory = { name: "Hatch", description: "Hatchback cars" };
        const createdCategory: ICategory = { id: 3, ...categoryData, updated_at: new Date(), created_at: new Date() };
        (prisma.categories.create as jest.Mock).mockResolvedValue(createdCategory);

        const result = await repository.create(categoryData);
        expect(prisma.categories.create).toHaveBeenCalledWith({ data: categoryData });
        expect(result).toEqual(createdCategory);
    });

    it("should update a category", async () => {
        const updatedCategory: ICategory = { id: 1, name: "SUV", description: "Updated", updated_at: new Date(), created_at: new Date() };
        (prisma.categories.update as jest.Mock).mockResolvedValue(updatedCategory);

        const result = await repository.update(1, { description: "Updated" });
        expect(prisma.categories.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: { description: "Updated" },
        });
        expect(result).toEqual(updatedCategory);
    });

    it("should return null when updating a non-existent category", async () => {
        (prisma.categories.update as jest.Mock).mockResolvedValue(null);

        const result = await repository.update(999, { name: "NonExistent" });
        expect(result).toBeNull();
    });

    it("should delete a category", async () => {
        const deletedCategory: ICategory = { id: 2, name: "Sedan", description: "Sedan cars", updated_at: new Date(), created_at: new Date() };
        (prisma.categories.delete as jest.Mock).mockResolvedValue(deletedCategory);

        const result = await repository.delete(2);
        expect(prisma.categories.delete).toHaveBeenCalledWith({ where: { id: 2 } });
        expect(result).toEqual(deletedCategory);
    });

    it("should return null when deleting a non-existent category", async () => {
        (prisma.categories.delete as jest.Mock).mockResolvedValue(null);

        const result = await repository.delete(999);
        expect(result).toBeNull();
    });
});