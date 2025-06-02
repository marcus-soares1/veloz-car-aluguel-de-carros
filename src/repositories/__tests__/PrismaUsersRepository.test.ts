jest.mock('../../database/prismaDatabase', ()=>({
    prisma: {
        users: {}
    }
}))

import { prisma } from "../../database/prismaDatabase"
import { PrismaUsersRepository as usersRepository } from "../PrismaUsersRepository"

describe('usersRepository', () => {
    let repository: usersRepository;

    beforeEach(() => {
        // Mock the users property and its methods for each test
        (prisma as any).users = {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        jest.clearAllMocks();
        repository = new usersRepository();
    })

    describe('getAll', () => {
        it('should get all users', async () => {
            const mockUsers = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
            (prisma.users.findMany as jest.Mock).mockResolvedValue(mockUsers);

            const result = await repository.getAll();

            expect(prisma.users.findMany).toHaveBeenCalled();
            expect(result).toEqual(mockUsers);
        });
    });

    describe('getById', () => {
        it('should get user by id', async () => {
            const mockUser = { id: "1", name: 'John' };
            (prisma.users.findUnique as jest.Mock).mockResolvedValue(mockUser);

            const result = await repository.getById("1");

            expect(prisma.users.findUnique).toHaveBeenCalledWith({ where: { id: "1" } });
            expect(result).toEqual(mockUser);
        });

        it('should return null if user not found', async () => {
            (prisma.users.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await repository.getById('999');

            expect(result).toBeNull();
        });
    });

    describe('create', () => {
        it('should create a new user', async () => {
            const userData = { name: 'Alice', email: 'alice@email.com', cpf: '11111111111', birthdate: new Date('2004-01-01'), password_hash: 'aaabbbcccddd' }
            const mockUser = { id: 3, ...userData };
            (prisma.users.create as jest.Mock).mockResolvedValue(mockUser);

            const result = await repository.create(userData);

            expect(prisma.users.create).toHaveBeenCalledWith({ data: userData });
            expect(result).toEqual(mockUser);
        });
    });

    describe('update', () => {
        it('should update a user', async () => {
            const updatedUserData = { name: 'Bob' };
            const mockUser = { id: 1, email: 'alice@email.com', cpf: '11111111111', birthdate: new Date('2004-01-01'), password_hash: 'aaabbbcccddd', ...updatedUserData };
            (prisma.users.update as jest.Mock).mockResolvedValue(mockUser)

            const result = await repository.update("1", updatedUserData)

            expect(prisma.users.update).toHaveBeenCalledWith({ where: { id: "1" }, data: updatedUserData })
            expect(result).toEqual(mockUser);
        });
    });

    describe('delete', () => {
        it('should delete a user', async () => {
            const mockUser = { id: 1, name: 'John' };
            (prisma.users.delete as jest.Mock).mockResolvedValue(mockUser)

            const result = await repository.delete("1")

            expect(prisma.users.delete).toHaveBeenCalledWith({ where: { id: "1" } })
            expect(result).toEqual(mockUser)
        })
    })
})