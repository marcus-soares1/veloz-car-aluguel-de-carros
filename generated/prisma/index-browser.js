
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.8.2
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: "6.8.2",
  engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  cpf: 'cpf',
  birthdate: 'birthdate',
  password_hash: 'password_hash',
  phone: 'phone',
  role: 'role',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.CategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.VehiclesScalarFieldEnum = {
  id: 'id',
  brand: 'brand',
  model: 'model',
  license_plate: 'license_plate',
  category_id: 'category_id',
  manufacture_year: 'manufacture_year',
  color: 'color',
  diary_value: 'diary_value',
  status: 'status',
  kilometers: 'kilometers',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.PaymentsScalarFieldEnum = {
  id: 'id',
  rental_id: 'rental_id',
  amount: 'amount',
  payment_date: 'payment_date',
  refund_amount: 'refund_amount',
  refund_date: 'refund_date',
  method_type: 'method_type',
  status: 'status',
  payment_type: 'payment_type',
  proof_of_payment_url: 'proof_of_payment_url',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.RentalsScalarFieldEnum = {
  id: 'id',
  vehicle_id: 'vehicle_id',
  user_id: 'user_id',
  check_out_date: 'check_out_date',
  expected_check_in_date: 'expected_check_in_date',
  check_in_date: 'check_in_date',
  start_mileage: 'start_mileage',
  end_mileage: 'end_mileage',
  status: 'status',
  daily_rate: 'daily_rate',
  additional_charges: 'additional_charges',
  penalties: 'penalties',
  notes: 'notes',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  client: 'client',
  attendant: 'attendant',
  admin: 'admin'
};

exports.Brand = exports.$Enums.Brand = {
  FIAT: 'FIAT',
  VOLKSWAGEN: 'VOLKSWAGEN',
  CHEVROLET: 'CHEVROLET',
  FORD: 'FORD',
  RENAULT: 'RENAULT',
  HYUNDAI: 'HYUNDAI',
  TOYOTA: 'TOYOTA',
  HONDA: 'HONDA',
  NISSAN: 'NISSAN',
  PEUGEOT: 'PEUGEOT',
  CITROEN: 'CITROEN',
  KIA: 'KIA',
  MITSUBISHI: 'MITSUBISHI',
  JEEP: 'JEEP',
  BMW: 'BMW',
  MERCEDES_BENZ: 'MERCEDES_BENZ',
  AUDI: 'AUDI',
  VOLVO: 'VOLVO',
  CHERY: 'CHERY',
  BYD: 'BYD',
  TESLA: 'TESLA',
  LAND_ROVER: 'LAND_ROVER',
  PORSCHE: 'PORSCHE',
  FERRARI: 'FERRARI',
  LAMBORGHINI: 'LAMBORGHINI',
  ALFA_ROMEO: 'ALFA_ROMEO',
  JAGUAR: 'JAGUAR',
  RAM: 'RAM',
  GWM: 'GWM',
  JAC: 'JAC',
  TROLLER: 'TROLLER'
};

exports.Model = exports.$Enums.Model = {
  ARGO: 'ARGO',
  CRONOS: 'CRONOS',
  MOBI: 'MOBI',
  PULSE: 'PULSE',
  FASTBACK: 'FASTBACK',
  STRADA: 'STRADA',
  TORO: 'TORO',
  UNO: 'UNO',
  PALIO: 'PALIO',
  SIENA: 'SIENA',
  M147: 'M147',
  M147_PICKUP: 'M147_PICKUP',
  PUNTO: 'PUNTO',
  ONIX: 'ONIX',
  TRACKER: 'TRACKER',
  SPIN: 'SPIN',
  PRISMA: 'PRISMA',
  COBALT: 'COBALT',
  CRUZE: 'CRUZE',
  JOY: 'JOY',
  MONTANA: 'MONTANA',
  ZAFIRA: 'ZAFIRA',
  BLAZER: 'BLAZER',
  KA: 'KA',
  KA_PLUS: 'KA_PLUS',
  FIESTA: 'FIESTA',
  FIESTA_SEDAN: 'FIESTA_SEDAN',
  ECOSPORT: 'ECOSPORT',
  FUSION: 'FUSION',
  FOCUS: 'FOCUS',
  RANGER: 'RANGER',
  ESCAPE: 'ESCAPE',
  GOL: 'GOL',
  SAVEIRO: 'SAVEIRO',
  VOYAGE: 'VOYAGE',
  FOX: 'FOX',
  PCROSS: 'PCROSS',
  UP: 'UP',
  JETTA: 'JETTA',
  GOLF: 'GOLF',
  PASSAT: 'PASSAT',
  AMAROK: 'AMAROK',
  TIGUAN: 'TIGUAN',
  M207: 'M207',
  M208: 'M208',
  M2008: 'M2008',
  M3008: 'M3008',
  M5008: 'M5008',
  PARTNER: 'PARTNER',
  EXPERT: 'EXPERT',
  LOGAN: 'LOGAN',
  SANDERO: 'SANDERO',
  STEPWAY: 'STEPWAY',
  DUSTER: 'DUSTER',
  KWID: 'KWID',
  CAPTUR: 'CAPTUR',
  FLUENCE: 'FLUENCE',
  SYMBOL: 'SYMBOL',
  HB20: 'HB20',
  HB20S: 'HB20S',
  HB20X: 'HB20X',
  CRETA: 'CRETA',
  TUCSON: 'TUCSON',
  SANT: 'SANT'
};

exports.VehicleStatus = exports.$Enums.VehicleStatus = {
  avaliable: 'avaliable',
  rented: 'rented',
  under_maintenance: 'under_maintenance',
  reserved: 'reserved'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  pix: 'pix',
  credit: 'credit',
  debit: 'debit'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  paid: 'paid',
  pending: 'pending',
  refunded: 'refunded',
  partialy_refunded: 'partialy_refunded',
  canceled: 'canceled'
};

exports.PaymentType = exports.$Enums.PaymentType = {
  prepayment: 'prepayment',
  final: 'final',
  security_deposit: 'security_deposit',
  adjust: 'adjust'
};

exports.RentalStatus = exports.$Enums.RentalStatus = {
  reserved: 'reserved',
  rented: 'rented',
  canceled: 'canceled',
  finalized: 'finalized',
  ended: 'ended',
  no_show: 'no_show'
};

exports.Prisma.ModelName = {
  users: 'users',
  categories: 'categories',
  vehicles: 'vehicles',
  payments: 'payments',
  rentals: 'rentals'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
