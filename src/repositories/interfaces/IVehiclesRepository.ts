import { Decimal } from 'decimal.js'
import { ICategory } from './ICategoriesRepository'
import { IDatabaseTransaction } from '../../database/interface/IDatabaseTransaction';

export type VehicleStatus = "avaliable" | "rented" | "reserved" | "under_maintenance"
export type Brand = "FIAT" | "VOLKSWAGEN" | "CHEVROLET" | "FORD" | "RENAULT" | "HYUNDAI" | "TOYOTA" | "HONDA" | "NISSAN" | "PEUGEOT" | "CITROEN" | "KIA" | "MITSUBISHI" | "JEEP" | "BMW" | "MERCEDES_BENZ" | "AUDI" | "VOLVO" | "CHERY" | "BYD" | "TESLA" | "LAND_ROVER" | "PORSCHE" | "FERRARI" | "LAMBORGHINI" | "ALFA_ROMEO" | "JAGUAR" | "RAM" | "GWM" | "JAC" | "TROLLER";
export type Model = "ARGO" | "CRONOS" | "MOBI" | "PULSE" | "FASTBACK" | "STRADA" | "TORO" | "UNO" | "PALIO" | "SIENA" | "M147" | "M147_PICKUP" | "PUNTO" | "ONIX" | "TRACKER" | "SPIN" | "PRISMA" | "COBALT" | "CRUZE" | "JOY" | "MONTANA" | "ZAFIRA" | "BLAZER" | "KA" | "KA_PLUS" | "FIESTA" | "FIESTA_SEDAN" | "ECOSPORT" | "FUSION" | "FOCUS" | "RANGER" | "ESCAPE" | "GOL" | "SAVEIRO" | "VOYAGE" | "FOX" | "PCROSS" | "UP" | "JETTA" | "GOLF" | "PASSAT" | "AMAROK" | "TIGUAN" | "M207" | "M208" | "M2008" | "M3008" | "M5008" | "PARTNER" | "EXPERT" | "LOGAN" | "SANDERO" | "STEPWAY" | "DUSTER" | "KWID" | "CAPTUR" | "FLUENCE" | "SYMBOL" | "HB20" | "HB20S" | "HB20X" | "CRETA" | "TUCSON" | "SANT";


export interface IVehicle {
    id: number
    brand: Brand
    model: Model
    license_plate: string
    category_id: number
    manufacture_year: Date
    color: string
    diary_value: Decimal
    status: VehicleStatus
    kilometers: Decimal
    updated_at: Date
    created_at: Date
    category?: ICategory
}

export interface ICreateVehicle extends Omit<IVehicle, 'id' | 'status' | 'updated_at' | 'created_at' | 'category'> {}

export interface IUpdateVehicle extends Partial<Pick<IVehicle, 'diary_value' | 'status' | 'kilometers' | 'category_id'>> {}

export interface IVehiclesWhere {
    id?: number,
    brand?: Brand,
    model?: Model,
    status?: VehicleStatus
}

export interface IVehiclesRepository {
    getAll(where?: IVehiclesWhere, tx?: unknown): Promise<IVehicle[]>
    getById(vehicleId: number, tx?: unknown): Promise<IVehicle | null>
    create(categoryAttributes: ICreateVehicle, tx?: unknown): Promise<IVehicle>
    update(vehicleId: number, categoryAttributes: IUpdateVehicle, tx?: unknown): Promise<IVehicle | null>
    delete(vehicleId: number, tx?: unknown): Promise<IVehicle | null>
    withTransaction: IDatabaseTransaction
}