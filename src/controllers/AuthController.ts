import { Handler } from 'express'
import { AuthService } from '../services/AuthService'
import { CreateUserRequestSchema, LoginUserRequestSchema } from './schema/UserRequestSchema';

export class AuthController {
    constructor(private readonly authService: AuthService) {}

    //POST /auth/register
    register: Handler = async (req, res, next): Promise<void> => {
        try {
            const userAttributes = CreateUserRequestSchema.parse(req.body)

            const { token, message } = await this.authService.register(userAttributes);

            res.status(201).json({ message, token });
        } catch (error) {
            next(error)
        }
    }

    //POST /auth/login
    login: Handler = async (req, res, next): Promise<void> => {
        try {
            const { email, password } = LoginUserRequestSchema.parse(req.body)

            const token = await this.authService.login(email, password)

            res.status(200).json({ token });

        } catch (error) {
            next(error);
        }
    }
}