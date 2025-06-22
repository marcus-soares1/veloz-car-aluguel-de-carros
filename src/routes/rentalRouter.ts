import { Router } from "express";
import { rentalsController } from "../conteiner";

const rentalsRouter = Router()

rentalsRouter.get('/Çid', rentalsController.show)
rentalsRouter.post('/', rentalsController.reserve)
rentalsRouter.put('/:id/status/:status', rentalsController.updateStatus)
rentalsRouter.put('/:id/cancel', rentalsController.cancel)
rentalsRouter.put('/:id/noShow', rentalsController.noShow)
rentalsRouter.put('/:id/checkout', rentalsController.checkOut)
rentalsRouter.put('/:id/checkin', rentalsController.checkIn)

export { rentalsRouter }