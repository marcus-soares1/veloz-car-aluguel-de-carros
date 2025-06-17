import { Token } from "typescript";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

export class AuthService {
    constructor(private readonly userRepository: IUsersRepository) {}

    // POST /auth/register
    async register(userEmail: string, userPasword: string): Promise<void> {

    }

    // POST /auth/login
    async login(userEmail: string, userPasword: string): Promise<void> {

    }

    // POAT /auth/logout
    async logout(): Promise<void> {
        
    }
}