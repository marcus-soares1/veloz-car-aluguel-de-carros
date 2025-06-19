import { Handler } from "express";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";
import { CreateCategoryRequestSchema, UpdateCategoryRequestSchema } from "./schema/CategoryRequestSchema";
import { QueryIdNumberRequestSchema } from "./schema/QueriesRequestSchema";
import { HttpError } from "../errors/HttpError";

export class CategoriesController {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  // GET /categories
  index: Handler = async (req, res, next) => {
    try {
      const categories = await this.categoriesRepository.getAll();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  };

  // GET /categories/:id
  show: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdNumberRequestSchema.parse(req.params);
      const category = await this.categoriesRepository.getById(id);
      if (!category) throw new HttpError("Category not found", 404);

      res.json(category);
    } catch (error) {
      next(error);
    }
  };

  // POST /categories
  create: Handler = async (req, res, next) => {
    try {
      const categoryAttributes = CreateCategoryRequestSchema.parse(req.body);
      const createdCategory = await this.categoriesRepository.create(categoryAttributes);
      res.status(201).json(createdCategory);
    } catch (error) {
      next(error);
    }
  };

  // PUT /categories/:id
  update: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdNumberRequestSchema.parse(req.params);
      const categoryAttributes = UpdateCategoryRequestSchema.parse(req.body);
      const updatedCategory = await this.categoriesRepository.update(id, categoryAttributes);

      if (!updatedCategory) throw new HttpError("Category not found", 404);
      res.json(updatedCategory);
    } catch (error) {
      next(error);
    }
  };

  // DELETE /categories/:id
  delete: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdNumberRequestSchema.parse(req.params);
      const deletedCategory = await this.categoriesRepository.delete(id);
      if (!deletedCategory) throw new HttpError("Category not found", 404);

      res.json(deletedCategory);
    } catch (error) {
      next(error);
    }
  };
}