import { HttpError } from "../errors/HttpError";
import { ICreateUser, IUsersRepository, Role } from "../repositories/interfaces/IUsersRepository";

export class UserService {
    constructor(private readonly userRepository: IUsersRepository){ }
    private async getUserId ({ id, email, cpf, role}: { id?: string, email?: string, cpf?: string, role?: Role}) {
        if(!email && !cpf)
            return null
        const userId = await this.userRepository.searchUserId({id, email, cpf, role})
        return userId
    }

    async getUserById (id: string)
    {
        const user = await this.userRepository.getById(id)
        if(!user)
            throw new HttpError(`User not found`, 404)
        return user
    }
    
    async createUser (userAttributes: ICreateUser) {
        const { email, cpf, role} = userAttributes
        
        // Not allow user to create more than one record with same CPF
        if (await this.getUserId({email})) throw new HttpError('Email is already registered')
        
        // Not allow user to have mutiple record in same role
        if (await this.getUserId({cpf, role})) throw new HttpError('User with this CPF already has this role')

        const user = await this.userRepository.create(userAttributes)
        return user
    }

    async updateUser(id: string, userAttributes: Partial<ICreateUser>) {
        const { email, cpf, role } = userAttributes

        // Not allow multiple
        const existingUserId = await this.getUserId({email})
        if ((existingUserId) && (existingUserId !== id)) throw new HttpError('This email is already in use')
        
        // Not allow user to have mutiple records in same role            
        const userIdWithSameCpfRole = await this.getUserId({cpf, role})
        if (userIdWithSameCpfRole && userIdWithSameCpfRole !== id) throw new HttpError('User with this CPF already has this role')

        const user = await this.userRepository.update(id, userAttributes)
        if(!user) throw new HttpError('User not found', 404)
        return user
    }

    async deleteUser (userId: string) {
        const deletedUser = await this.userRepository.delete(userId) 
        if(!deletedUser) throw new HttpError('User not found', 404)
        return deletedUser
    }

}