import { Router } from "express";
import { rentalsController } from "../conteiner";
import { ensureAttendant, ensureClient } from "../middlewares/authMiddlewares";

const rentalsRouter = Router()

rentalsRouter.get('/:id', ensureClient, rentalsController.show)
rentalsRouter.post('/', ensureClient, rentalsController.reserve)
rentalsRouter.put('/:id/status/:status', ensureClient, rentalsController.updateStatus)
rentalsRouter.put('/:id/cancel', ensureClient, rentalsController.cancel)
rentalsRouter.put('/:id/noShow', ensureAttendant, rentalsController.noShow)
rentalsRouter.put('/:id/checkout', ensureAttendant, rentalsController.checkOut)
rentalsRouter.put('/:id/checkin', ensureAttendant, rentalsController.checkIn)

export { rentalsRouter }