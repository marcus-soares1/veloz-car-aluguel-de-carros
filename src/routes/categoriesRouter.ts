import { Router } from "express"
import { categoriesController } from "../conteiner"
import { ensureAdmin, ensureAttendant } from "../middlewares/authMiddlewares"

const categoriesRouter = Router()

categoriesRouter.get('/', categoriesController.index)
categoriesRouter.get('/:id', categoriesController.show)
categoriesRouter.post('/', ensureAttendant, categoriesController.create)
categoriesRouter.put('/:id', ensureAdmin, categoriesController.update)
categoriesRouter.delete('/:id', ensureAdmin, categoriesController.delete)

export { categoriesRouter }