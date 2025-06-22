import { Router } from "express"
import { categoriesController } from "../conteiner"

const categoriesRouter = Router()

categoriesRouter.get('/', categoriesController.index)
categoriesRouter.get('/:id', categoriesController.show)
categoriesRouter.post('/', categoriesController.create)
categoriesRouter.put('/:id', categoriesController.update)
categoriesRouter.delete('/:id', categoriesController.delete)

export { categoriesRouter }