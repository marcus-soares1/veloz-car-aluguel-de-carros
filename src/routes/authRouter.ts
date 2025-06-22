import { Router } from "express";
import { authService } from "../conteiner";


const authRouter = Router()

authRouter.post('/register', )
authRouter.post('/login', )
authRouter.post('/logout', )

export { authRouter }