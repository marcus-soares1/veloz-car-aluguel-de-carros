import { Router } from "express";
import { usersController } from "../conteiner";
import { ensureAdmin, ensureAttendant, ensureClient } from "../middlewares/authMiddlewares";

const usersRouter = Router()

usersRouter.get('/', ensureAttendant, usersController.index)
usersRouter.get('/:id', ensureClient, usersController.show)
usersRouter.post('/', ensureAttendant, usersController.create)
usersRouter.post('/attendant', ensureAdmin, usersController.createAttendant)
usersRouter.post('/admin', ensureAdmin, usersController.createAdmin)
usersRouter.put('/:id', ensureAdmin, usersController.update)
usersRouter.delete('/:id', ensureAdmin, usersController.delete)

export { usersRouter }