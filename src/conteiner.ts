import { StriperGateway } from "./gateways/StriperGateway";
import { PrismaCategoriesRepository } from "./repositories/PrismaCategoriesRepository";
import { PrismaPaymentsRepository } from "./repositories/PrismaPaymentsRepository";
import { PrismaRentalRepository } from "./repositories/PrismaRentalsRepository";
import { PrismaUsersRepository } from "./repositories/PrismaUsersRepository";
import { PrismaVehiclesRepository } from "./repositories/PrismaVehiclesRepository";
import { AuthService } from "./services/AuthService";
import { CategoriesService } from "./services/CategoriesService";
import { PaymentsService } from "./services/PaymentsService";
import { RentalService } from "./services/RentalsService";
import { UserService } from "./services/UsersService";
import { VehicleService } from "./services/VehiclesService";

// Repositories instances
export const userRepository = new PrismaUsersRepository()
export const vehiclesRepository = new PrismaVehiclesRepository()
export const categoriesRepository = new PrismaCategoriesRepository()
export const paymentsRepository = new PrismaPaymentsRepository()
export const rentalRepository = new PrismaRentalRepository()

// Gateways instaces
export const striperGateway = new StriperGateway()

// Services instances
export const authService = new AuthService(userRepository)
export const usersService = new UserService(userRepository)
export const vehiclesService = new VehicleService(vehiclesRepository)
export const categoriesService = new CategoriesService(categoriesRepository)
export const paymentsService = new PaymentsService(paymentsRepository, striperGateway)
export const rentalService = new RentalService(rentalRepository, vehiclesService, paymentsService)