import { Router } from "express";
import { vehiclesController } from "../conteiner";

const vehiclesRouter = Router()

vehiclesRouter.get('/', vehiclesController.index)
vehiclesRouter.get('/avaliable', vehiclesController.getAvaliable)
vehiclesRouter.get('/:id', vehiclesController.show)
vehiclesRouter.get('/:id/status', vehiclesController.getStatus)
vehiclesRouter.post('/', vehiclesController.create)
vehiclesRouter.put('/:id', vehiclesController.update)
vehiclesRouter.put('/:id/maintence', vehiclesController.sendToMaintence)
vehiclesRouter.put('/:id/status/:status', vehiclesController.changeStatus)
vehiclesRouter.delete('/:id', vehiclesController.delete)

export { vehiclesRouter }