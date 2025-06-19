import { z } from 'zod'
import { DecimalSchema } from './CustomSchemas'

const BrandsSchema = z.enum(["FIAT", "VOLKSWAGEN", "CHEVROLET", "FORD", "RENAULT", "HYUNDAI", "TOYOTA", "HONDA", "NISSAN", "PEUGEOT", "CITROEN", "KIA", "MITSUBISHI", "JEEP", "BMW", "MERCEDES_BENZ", "AUDI", "VOLVO", "CHERY", "BYD", "TESLA", "LAND_ROVER", "PORSCHE", "FERRARI", "LAMBORGHINI", "ALFA_ROMEO", "JAGUAR", "RAM", "GWM", "JAC", "TROLLER"])
const ModelsSchema = z.enum([
    "ARGO", "CRONOS", "MOBI", "PULSE", "FASTBACK", "STRADA", "TORO", "UNO", "PALIO", "SIENA", "M147", "M147_PICKUP",
    "PUNTO", "ONIX", "TRACKER", "SPIN", "PRISMA", "COBALT", "CRUZE", "JOY", "MONTANA", "ZAFIRA", "BLAZER", "KA",
    "KA_PLUS", "FIESTA", "FIESTA_SEDAN", "ECOSPORT", "FUSION", "FOCUS", "RANGER", "ESCAPE", "GOL", "SAVEIRO",
    "VOYAGE", "FOX", "PCROSS", "UP", "JETTA", "GOLF", "PASSAT", "AMAROK", "TIGUAN", "M207", "M208", "M2008",
    "M3008", "M5008", "PARTNER", "EXPERT", "LOGAN", "SANDERO", "STEPWAY", "DUSTER", "KWID", "CAPTUR", "FLUENCE",
    "SYMBOL", "HB20", "HB20S", "HB20X", "CRETA", "TUCSON", "SANT"
])
const VehicleStatusSchema = z.enum(["avaliable", "rented", "reserved", "under_maintenance"])

export const CreateVehicleRequestSchemas = z.object({
    brand: BrandsSchema,
    model: ModelsSchema,
    license_plate: z.string(),
    category_id: z.coerce.number(),
    manufacture_year: z.coerce.date(),
    color: z.string(),
    diary_value: DecimalSchema,
    kilometers: DecimalSchema
})

export const UpdateVehicleRequestSchemas = z.object({
    diary_value: DecimalSchema.optional(),
    status: VehicleStatusSchema.optional(),
    kilometers: DecimalSchema.optional(),
    category_id: z.coerce.number().optional()
})