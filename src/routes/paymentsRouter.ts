import { Router } from "express"
import { paymentsController } from "../conteiner"
import { ensureAdmin, ensureClient } from "../middlewares/authMiddlewares"

const paymentsRouter = Router()

paymentsRouter.get('/rental/:id', paymentsController.getPaymentsByRentalId)
paymentsRouter.get('/:id', ensureClient, paymentsController.getPaymentById)
paymentsRouter.get('/', ensureAdmin, paymentsController.getAllPayments)
paymentsRouter.put('/:id/process', ensureAdmin, paymentsController.processPayment)
paymentsRouter.delete('/:id', ensureAdmin, paymentsController.deletePayment)

export { paymentsRouter }