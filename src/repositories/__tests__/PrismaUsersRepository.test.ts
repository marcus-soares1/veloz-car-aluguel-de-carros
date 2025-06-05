import { prisma } from "../../database/prismaDatabase"
import { IUsersRepository } from "../interfaces/IUsersRepository";
import { PrismaUsersRepository as usersRepository } from "../PrismaUsersRepository"

jest.mock('../../database/prismaDatabase', ()=>({
    prisma: {
        users: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        }
    }
}))

describe('usersRepository', () => {
    let repository: IUsersRepository;

    beforeEach(() => {
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

    describe('searchUserId', () => {
        it('should find user by id', async () => {
            const mockUser = { id: "1", name: 'John' };
            (prisma.users.findUnique as jest.Mock).mockResolvedValue(mockUser);

            const result = await repository.searchUserId({ id: "1" });

            expect(prisma.users.findUnique).toHaveBeenCalledWith(expect.objectContaining({
                where: expect.objectContaining({ id: "1" })
            }));
            expect(result).toEqual("1")
        });

        it('should find user by email', async () => {
            const mockUser = { id: "2", name: 'Jane', email: 'jane@email.com' };
            (prisma.users.findUnique as jest.Mock).mockResolvedValue(mockUser);

            const result = await repository.searchUserId({ email: "jane@email.com" });

            expect(prisma.users.findUnique).toHaveBeenCalledWith(expect.objectContaining({
                where: expect.objectContaining({ email: "jane@email.com" })
            }));
            expect(result).toEqual("2");
        });

        it('should find user by cpf', async () => {
            const mockUser = { id: "3", name: 'Bob', cpf: '12345678900' };
            (prisma.users.findUnique as jest.Mock).mockResolvedValue(mockUser);

            const result = await repository.searchUserId({ cpf: "12345678900" });

            expect(prisma.users.findUnique).toHaveBeenCalledWith(expect.objectContaining({
                where: expect.objectContaining({ cpf: "12345678900" })
            }));
            expect(result).toEqual("3");
        });

        it('should return null if user not found', async () => {
            (prisma.users.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await repository.searchUserId({ id: "999" });

            expect(prisma.users.findUnique).toHaveBeenCalledWith(expect.objectContaining({
                where: expect.objectContaining({ id: "999" })
            }));
            expect(result).toBeNull();
        });

        it('should return null if no parameters are provided', async () => {
            const result = await repository.searchUserId({})
            await expect(result).toBeNull()
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