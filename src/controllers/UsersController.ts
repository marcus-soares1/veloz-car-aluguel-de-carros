import { Handler } from "express";
import { UsersService } from "../services/UsersService";
import { CreateUserRequestSchema, UpdateUserRequestSchema } from "./schema/UserRequestSchema";
import { QueryIdRequestSchema } from "./schema/QueriesRequestSchema";

export type Role = "client" | "attendant" | "admin"

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users
  index: Handler = async (req, res, next) => {
    try {
      const users = await this.usersService.getAllUsers()
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  // GET /users/:id
  show: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const user = await this.usersService.getUserById(id)
      const userDtos = {...user, password_hash: undefined} 
      res.json(userDtos);
    } catch (error) {
      next(error);
    }
  };

  // POST /users
  create: Handler = async (req, res, next) => {
    try {
      const userAttributes = CreateUserRequestSchema.parse(req.body);
      const user = await this.usersService.createUser({...userAttributes, role: 'client'});
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  // POST /users/attendant
  createAttendant: Handler = async (req, res, next) => {
    try {
      const userAttributes = CreateUserRequestSchema.parse(req.body)
      const createdUser = await this.usersService.createUser({...userAttributes, role: 'attendant'})

      res.status(201).json(createdUser);
    } catch (error) {
      next(error);
    }
  }

  // POST /users/admin
  createAdmin: Handler = async (req, res, next) => {
    try {
      const userAttributes = CreateUserRequestSchema.parse(req.body)
      const createdUser = await this.usersService.createUser({...userAttributes, role: 'admin'})

      res.status(201).json(createdUser);
    } catch (error) {
      next(error);
    }
  }

  // PUT /users/:id
  update: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const userAttributes = UpdateUserRequestSchema.parse(req.body);
      const updatedUser = await this.usersService.updateUser(id, userAttributes);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  };

  // DELETE /users/:id
  delete: Handler = async (req, res, next) => {
    try {
      const { id } = QueryIdRequestSchema.parse(req.params);
      const deletedUser = await this.usersService.deleteUser(id);
      res.json(deletedUser);
    } catch (error) {
      next(error);
    }
  };
}