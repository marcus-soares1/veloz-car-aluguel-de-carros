import { Router } from "express";
import { usersController } from "../conteiner";

const usersRouter = Router()

usersRouter.get('/', usersController.index)
usersRouter.get('/:id', usersController.show)
usersRouter.post('/', usersController.create)
usersRouter.put('/:id', usersController.update)
usersRouter.delete('/:id', usersController.delete)

export { usersRouter }