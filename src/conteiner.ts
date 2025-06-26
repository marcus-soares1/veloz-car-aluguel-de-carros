import { AuthController } from "./controllers/AuthController";
import { CategoriesController } from "./controllers/CategoriesController";
import { PaymentsController } from "./controllers/PaymentsController";
import { RentalsController } from "./controllers/RentalsController";
import { UsersController } from "./controllers/UsersController";
import { VehiclesController } from "./controllers/VehiclesController";
import { PrismaCategoriesRepository } from "./repositories/PrismaCategoriesRepository";
import { PrismaPaymentsRepository } from "./repositories/PrismaPaymentsRepository";
import { PrismaRentalRepository } from "./repositories/PrismaRentalsRepository";
import { PrismaUsersRepository } from "./repositories/PrismaUsersRepository";
import { PrismaVehiclesRepository } from "./repositories/PrismaVehiclesRepository";
import { AuthService } from "./services/AuthService";
import { CategoriesService } from "./services/CategoriesService";
import { PaymentsService } from "./services/PaymentsService";
import { RentalsService } from "./services/RentalsService";
import { UsersService } from "./services/UsersService";
import { VehiclesService } from "./services/VehiclesService";

// Repositories instances
export const userRepository = new PrismaUsersRepository()
export const vehiclesRepository = new PrismaVehiclesRepository()
export const categoriesRepository = new PrismaCategoriesRepository()
export const paymentsRepository = new PrismaPaymentsRepository()
export const rentalRepository = new PrismaRentalRepository()

// Services instances
export const usersService = new UsersService(userRepository)
export const authService = new AuthService(usersService)
export const vehiclesService = new VehiclesService(vehiclesRepository)
export const categoriesService = new CategoriesService(categoriesRepository)
export const paymentsService = new PaymentsService(paymentsRepository)
export const rentalsService = new RentalsService(rentalRepository, vehiclesService, paymentsService)

// Controllers instances
export const usersController = new UsersController(usersService)
export const authController = new AuthController(authService)
export const vehiclesController = new VehiclesController(vehiclesService)
export const categoriesController = new CategoriesController(categoriesService)
export const rentalsController = new RentalsController(rentalsService)
export const paymentsController = new PaymentsController(paymentsService)