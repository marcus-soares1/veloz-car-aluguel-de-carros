import { Decimal } from 'decimal.js'
import { ICategory } from './ICategoriesRepository'

export enum VehicleStatus {
    avaliable = "avaliable",
    rented = "rented",
    under_maintenance = "under_maintenance"
}

export enum Brand {
    FIAT = "FIAT",
    VOLKSWAGEN = "VOLKSWAGEN",
    CHEVROLET = "CHEVROLET",
    FORD = "FORD",
    RENAULT = "RENAULT",
    HYUNDAI = "HYUNDAI",
    TOYOTA = "TOYOTA",
    HONDA = "HONDA",
    NISSAN = "NISSAN",
    PEUGEOT = "PEUGEOT",
    CITROEN = "CITROEN",
    KIA = "KIA",
    MITSUBISHI = "MITSUBISHI",
    JEEP = "JEEP",
    BMW = "BMW",
    MERCEDES_BENZ = "MERCEDES_BENZ",
    AUDI = "AUDI",
    VOLVO = "VOLVO",
    CHERY = "CHERY",
    BYD = "BYD",
    TESLA = "TESLA",
    LAND_ROVER = "LAND_ROVER",
    PORSCHE = "PORSCHE",
    FERRARI = "FERRARI",
    LAMBORGHINI = "LAMBORGHINI",
    ALFA_ROMEO = "ALFA_ROMEO",
    JAGUAR = "JAGUAR",
    RAM = "RAM",
    GWM = "GWM",
    JAC = "JAC",
    TROLLER = "TROLLER"
}

export enum Model {
    ARGO = "ARGO",
    CRONOS = "CRONOS",
    MOBI = "MOBI",
    PULSE = "PULSE",
    FASTBACK = "FASTBACK",
    STRADA = "STRADA",
    TORO = "TORO",
    UNO = "UNO",
    PALIO = "PALIO",
    SIENA = "SIENA",
    M147 = "M147",
    M147_PICKUP = "M147_PICKUP",
    PUNTO = "PUNTO",

    ONIX = "ONIX",
    TRACKER = "TRACKER",
    SPIN = "SPIN",
    PRISMA = "PRISMA",
    COBALT = "COBALT",
    CRUZE = "CRUZE",
    JOYC = "JOYC",
    MONTANA = "MONTANA",
    ZAFIRA = "ZAFIRA",
    BLAZER = "BLAZER",

    KA = "KA",
    KA_PLUS = "KA_PLUS",
    FIESTA = "FIESTA",
    FIESTA_SEDAN = "FIESTA_SEDAN",
    ECOSPORT = "ECOSPORT",
    FUSION = "FUSION",
    FOCUS = "FOCUS",
    RANGER = "RANGER",
    ESCAPE = "ESCAPE",

    GOL = "GOL",
    SAVEIRO = "SAVEIRO",
    VOYAGE = "VOYAGE",
    FOX = "FOX",
    PCROSS = "PCROSS",
    UP = "UP",
    JETTA = "JETTA",
    GOLF = "GOLF",
    PASSAT = "PASSAT",
    AMAROK = "AMAROK",
    TIGUAN = "TIGUAN",

    M207 = "207",
    M208 = "208",
    M2008 = "2008",
    M3008 = "3008",
    M5008 = "5008",
    PARTNER = "PARTNER",
    EXPERT = "EXPERT",

    LOGAN = "LOGAN",
    SANDERO = "SANDERO",
    STEPWAY = "STEPWAY",
    DUSTER = "DUSTER",
    KWID = "KWID",
    CAPTUR = "CAPTUR",
    FLUENCE = "FLUENCE",
    SYMBOL = "SYMBOL",

    HB20 = "HB20",
    HB20S = "HB20S",
    HB20X = "HB20X",
    CRETA = "CRETA",
    TUCSON = "TUCSON",
    SANT = "SANT"
}

export interface ICreateVehicle {
    brand: Brand
    model: Model
    category_id?: number
    manufacture_year: Date
    color: string
    diary_value: Decimal
    status: VehicleStatus
    kilometers: number
    category?: string
}

export interface IVehicle {
    id: string
    brand: Brand
    model: Model
    category_id: number
    manufacture_year: Date
    color: string
    diary_value: Decimal
    status: VehicleStatus
    kilometers: Decimal
    updated_at: Date
    created_at: Date
    category: ICategory
}

export interface IVehicleRepository {
    getAll(): Promise<IVehicle[]>
    getById(categoryId: string): Promise<IVehicle | null>
    create(categoryAttributes: ICreateVehicle): Promise<IVehicle>
    update(categoryId: string, categoryAttributes: Partial<ICreateVehicle>): Promise<IVehicle | null>
    delete(categoryId: string): Promise<IVehicle | null>
}