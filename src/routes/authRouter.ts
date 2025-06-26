import { Router } from "express"
import { authController } from "../conteiner"


const authRouter = Router()

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)

export { authRouter }