import { Router } from "express";
import { vehiclesController } from "../conteiner";
import { ensureAdmin, ensureAttendant } from "../middlewares/authMiddlewares";

const vehiclesRouter = Router()

vehiclesRouter.get('/', vehiclesController.index)
vehiclesRouter.get('/avaliable', vehiclesController.getAvaliable)
vehiclesRouter.get('/:id', vehiclesController.show)
vehiclesRouter.get('/:id/status', vehiclesController.getStatus)
vehiclesRouter.post('/', ensureAdmin, vehiclesController.create)
vehiclesRouter.put('/:id', ensureAdmin, vehiclesController.update)
vehiclesRouter.put('/:id/maintence', ensureAttendant, vehiclesController.sendToMaintence)
vehiclesRouter.put('/:id/status/:status', ensureAttendant, vehiclesController.changeStatus)
vehiclesRouter.delete('/:id', ensureAdmin, vehiclesController.delete)

export { vehiclesRouter }