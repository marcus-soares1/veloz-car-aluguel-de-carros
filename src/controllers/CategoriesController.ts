import { Handler } from "express";
import { CategoriesService } from "../services/CategoriesService";
import { QueryIdNumberRequestSchema } from "./schema/QueriesRequestSchema";
import { CreateCategoryRequestSchema, UpdateCategoryRequestSchema, } from "./schema/CategoryRequestSchema";
import { HttpError } from "../errors/HttpError";

export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // GET /categories
  index: Handler = async (req, res, next) => {
    try {
      const categories = await this.categoriesService.getAll();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  };

  // GET /categories/:id
  show: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdNumberRequestSchema.parse(req.params);
      const category = await this.categoriesService.getById(id);

      if (!category) throw new HttpError("Category not found", 404);
      res.json(category);
    } catch (error) {
      next(error);
    }
  };

  // POST /categories
  create: Handler = async (req, res, next) => {
    try {
      const category = CreateCategoryRequestSchema.parse(req.body);
      const created = await this.categoriesService.create(category);
      res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  };

  // PUT /categories/:id
  update: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdNumberRequestSchema.parse(req.params);
      const categoryData = UpdateCategoryRequestSchema.parse(req.body);
      const updated = await this.categoriesService.update(id, categoryData);

      if (!updated) throw new HttpError("Category not found", 404);
      res.json(updated);
    } catch (error) {
      next(error);
    }
  };

  // DELETE /categories/:id
  delete: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdNumberRequestSchema.parse(req.params);
      const deleted = await this.categoriesService.delete(id);

      if (!deleted) throw new HttpError("Category not found", 404);
      res.json(deleted);
    } catch (error) {
      next(error);
    }
  };
}