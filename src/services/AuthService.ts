import dotenv from'dotenv'
dotenv.config()
import { ICreateUser } from "../repositories/interfaces/IUsersRepository"
import { UsersService } from "./UsersService"
import jwt from 'jsonwebtoken'
import { HttpError } from '../errors/HttpError'
import { compareStringToHash } from '../utils/compareStringToHash'

export class AuthService {
    constructor(private readonly usersService: UsersService) {}
    // AuthService handles authentication logic

    private createUserToken(payload: {id: string, email: string, role: string}){
        if(!process.env.JWT_SECRET) throw new HttpError('Internal authentication error', 500)
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})

        return token
    }

    // POST /auth/register
    async register(userAttributes: ICreateUser): Promise<{token: string, message: string}> {
        const { id, email, role } = await this.usersService.createUser(userAttributes)
        const token = this.createUserToken({id, email, role})

        return { token, message: 'User created sucessfully' }
    }

    // POST /auth/login
    async login(userEmail: string, userPasword: string): Promise<string> {
        try {
            const { id, email, role, password_hash } = await this.usersService.getUserByEmail(userEmail)
            const validPassword = compareStringToHash(userPasword, password_hash)
            if(!validPassword) throw new HttpError('Invalid password')
            const token = this.createUserToken({id, email, role})
        
            return token
        } catch (error) {
            throw new HttpError('Email or password not valid.')
        }
    }
}