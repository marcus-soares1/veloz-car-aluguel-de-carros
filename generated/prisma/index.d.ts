
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model vehicles
 * 
 */
export type vehicles = $Result.DefaultSelection<Prisma.$vehiclesPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model rentals
 * 
 */
export type rentals = $Result.DefaultSelection<Prisma.$rentalsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  client: 'client',
  attendant: 'attendant',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VehicleStatus: {
  avaliable: 'avaliable',
  rented: 'rented',
  under_maintenance: 'under_maintenance',
  reserved: 'reserved'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const RentalStatus: {
  reserved: 'reserved',
  rented: 'rented',
  canceled: 'canceled',
  finalized: 'finalized',
  ended: 'ended',
  no_show: 'no_show'
};

export type RentalStatus = (typeof RentalStatus)[keyof typeof RentalStatus]


export const PaymentStatus: {
  paid: 'paid',
  pending: 'pending',
  refunded: 'refunded',
  partialy_refunded: 'partialy_refunded',
  canceled: 'canceled'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  pix: 'pix',
  credit: 'credit',
  debit: 'debit'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentType: {
  prepayment: 'prepayment',
  final: 'final',
  security_deposit: 'security_deposit',
  adjust: 'adjust'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const Brand: {
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

export type Brand = (typeof Brand)[keyof typeof Brand]


export const Model: {
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

export type Model = (typeof Model)[keyof typeof Model]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type RentalStatus = $Enums.RentalStatus

export const RentalStatus: typeof $Enums.RentalStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type Brand = $Enums.Brand

export const Brand: typeof $Enums.Brand

export type Model = $Enums.Model

export const Model: typeof $Enums.Model

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicles`: Exposes CRUD operations for the **vehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicles.findMany()
    * ```
    */
  get vehicles(): Prisma.vehiclesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentals`: Exposes CRUD operations for the **rentals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rentals.findMany()
    * ```
    */
  get rentals(): Prisma.rentalsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    categories: 'categories',
    vehicles: 'vehicles',
    payments: 'payments',
    rentals: 'rentals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "categories" | "vehicles" | "payments" | "rentals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      vehicles: {
        payload: Prisma.$vehiclesPayload<ExtArgs>
        fields: Prisma.vehiclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehiclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehiclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          findFirst: {
            args: Prisma.vehiclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehiclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          findMany: {
            args: Prisma.vehiclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>[]
          }
          create: {
            args: Prisma.vehiclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          createMany: {
            args: Prisma.vehiclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vehiclesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>[]
          }
          delete: {
            args: Prisma.vehiclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          update: {
            args: Prisma.vehiclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          deleteMany: {
            args: Prisma.vehiclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehiclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vehiclesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>[]
          }
          upsert: {
            args: Prisma.vehiclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          aggregate: {
            args: Prisma.VehiclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicles>
          }
          groupBy: {
            args: Prisma.vehiclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehiclesCountArgs<ExtArgs>
            result: $Utils.Optional<VehiclesCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      rentals: {
        payload: Prisma.$rentalsPayload<ExtArgs>
        fields: Prisma.rentalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rentalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rentalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          findFirst: {
            args: Prisma.rentalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rentalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          findMany: {
            args: Prisma.rentalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>[]
          }
          create: {
            args: Prisma.rentalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          createMany: {
            args: Prisma.rentalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rentalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>[]
          }
          delete: {
            args: Prisma.rentalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          update: {
            args: Prisma.rentalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          deleteMany: {
            args: Prisma.rentalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rentalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rentalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>[]
          }
          upsert: {
            args: Prisma.rentalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          aggregate: {
            args: Prisma.RentalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentals>
          }
          groupBy: {
            args: Prisma.rentalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.rentalsCountArgs<ExtArgs>
            result: $Utils.Optional<RentalsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    categories?: categoriesOmit
    vehicles?: vehiclesOmit
    payments?: paymentsOmit
    rentals?: rentalsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    rentals: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | UsersCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    vehicles: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | CategoriesCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehiclesWhereInput
  }


  /**
   * Count Type VehiclesCountOutputType
   */

  export type VehiclesCountOutputType = {
    rentals: number
  }

  export type VehiclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | VehiclesCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclesCountOutputType
     */
    select?: VehiclesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalsWhereInput
  }


  /**
   * Count Type RentalsCountOutputType
   */

  export type RentalsCountOutputType = {
    payments: number
  }

  export type RentalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | RentalsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * RentalsCountOutputType without action
   */
  export type RentalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalsCountOutputType
     */
    select?: RentalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalsCountOutputType without action
   */
  export type RentalsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    cpf: string | null
    birthdate: Date | null
    password_hash: string | null
    phone: string | null
    role: $Enums.Role | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    cpf: string | null
    birthdate: Date | null
    password_hash: string | null
    phone: string | null
    role: $Enums.Role | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    cpf: number
    birthdate: number
    password_hash: number
    phone: number
    role: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    birthdate?: true
    password_hash?: true
    phone?: true
    role?: true
    updated_at?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    birthdate?: true
    password_hash?: true
    phone?: true
    role?: true
    updated_at?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    birthdate?: true
    password_hash?: true
    phone?: true
    role?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    cpf: string
    birthdate: Date
    password_hash: string
    phone: string | null
    role: $Enums.Role
    updated_at: Date
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    birthdate?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    updated_at?: boolean
    created_at?: boolean
    rentals?: boolean | users$rentalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    birthdate?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    birthdate?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    birthdate?: boolean
    password_hash?: boolean
    phone?: boolean
    role?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "cpf" | "birthdate" | "password_hash" | "phone" | "role" | "updated_at" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | users$rentalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      rentals: Prisma.$rentalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      cpf: string
      birthdate: Date
      password_hash: string
      phone: string | null
      role: $Enums.Role
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentals<T extends users$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, users$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly cpf: FieldRef<"users", 'String'>
    readonly birthdate: FieldRef<"users", 'DateTime'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.rentals
   */
  export type users$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    where?: rentalsWhereInput
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    cursor?: rentalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    updated_at?: true
    created_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    updated_at?: true
    created_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    description: string
    updated_at: Date
    created_at: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    updated_at?: boolean
    created_at?: boolean
    vehicles?: boolean | categories$vehiclesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "updated_at" | "created_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | categories$vehiclesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      vehicles: Prisma.$vehiclesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends categories$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, categories$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.vehicles
   */
  export type categories$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    where?: vehiclesWhereInput
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    cursor?: vehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model vehicles
   */

  export type AggregateVehicles = {
    _count: VehiclesCountAggregateOutputType | null
    _avg: VehiclesAvgAggregateOutputType | null
    _sum: VehiclesSumAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  export type VehiclesAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    diary_value: Decimal | null
    kilometers: Decimal | null
  }

  export type VehiclesSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    diary_value: Decimal | null
    kilometers: Decimal | null
  }

  export type VehiclesMinAggregateOutputType = {
    id: number | null
    brand: $Enums.Brand | null
    model: $Enums.Model | null
    category_id: number | null
    license_plate: string | null
    manufacture_year: Date | null
    color: string | null
    diary_value: Decimal | null
    status: $Enums.VehicleStatus | null
    kilometers: Decimal | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type VehiclesMaxAggregateOutputType = {
    id: number | null
    brand: $Enums.Brand | null
    model: $Enums.Model | null
    category_id: number | null
    license_plate: string | null
    manufacture_year: Date | null
    color: string | null
    diary_value: Decimal | null
    status: $Enums.VehicleStatus | null
    kilometers: Decimal | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type VehiclesCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    category_id: number
    license_plate: number
    manufacture_year: number
    color: number
    diary_value: number
    status: number
    kilometers: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type VehiclesAvgAggregateInputType = {
    id?: true
    category_id?: true
    diary_value?: true
    kilometers?: true
  }

  export type VehiclesSumAggregateInputType = {
    id?: true
    category_id?: true
    diary_value?: true
    kilometers?: true
  }

  export type VehiclesMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    category_id?: true
    license_plate?: true
    manufacture_year?: true
    color?: true
    diary_value?: true
    status?: true
    kilometers?: true
    updated_at?: true
    created_at?: true
  }

  export type VehiclesMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    category_id?: true
    license_plate?: true
    manufacture_year?: true
    color?: true
    diary_value?: true
    status?: true
    kilometers?: true
    updated_at?: true
    created_at?: true
  }

  export type VehiclesCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    category_id?: true
    license_plate?: true
    manufacture_year?: true
    color?: true
    diary_value?: true
    status?: true
    kilometers?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type VehiclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to aggregate.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicles
    **/
    _count?: true | VehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiclesMaxAggregateInputType
  }

  export type GetVehiclesAggregateType<T extends VehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicles[P]>
      : GetScalarType<T[P], AggregateVehicles[P]>
  }




  export type vehiclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehiclesWhereInput
    orderBy?: vehiclesOrderByWithAggregationInput | vehiclesOrderByWithAggregationInput[]
    by: VehiclesScalarFieldEnum[] | VehiclesScalarFieldEnum
    having?: vehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiclesCountAggregateInputType | true
    _avg?: VehiclesAvgAggregateInputType
    _sum?: VehiclesSumAggregateInputType
    _min?: VehiclesMinAggregateInputType
    _max?: VehiclesMaxAggregateInputType
  }

  export type VehiclesGroupByOutputType = {
    id: number
    brand: $Enums.Brand
    model: $Enums.Model
    category_id: number
    license_plate: string
    manufacture_year: Date
    color: string
    diary_value: Decimal
    status: $Enums.VehicleStatus
    kilometers: Decimal
    updated_at: Date
    created_at: Date
    _count: VehiclesCountAggregateOutputType | null
    _avg: VehiclesAvgAggregateOutputType | null
    _sum: VehiclesSumAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  type GetVehiclesGroupByPayload<T extends vehiclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
        }
      >
    >


  export type vehiclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    category_id?: boolean
    license_plate?: boolean
    manufacture_year?: boolean
    color?: boolean
    diary_value?: boolean
    status?: boolean
    kilometers?: boolean
    updated_at?: boolean
    created_at?: boolean
    rentals?: boolean | vehicles$rentalsArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    _count?: boolean | VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type vehiclesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    category_id?: boolean
    license_plate?: boolean
    manufacture_year?: boolean
    color?: boolean
    diary_value?: boolean
    status?: boolean
    kilometers?: boolean
    updated_at?: boolean
    created_at?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type vehiclesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    category_id?: boolean
    license_plate?: boolean
    manufacture_year?: boolean
    color?: boolean
    diary_value?: boolean
    status?: boolean
    kilometers?: boolean
    updated_at?: boolean
    created_at?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type vehiclesSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    category_id?: boolean
    license_plate?: boolean
    manufacture_year?: boolean
    color?: boolean
    diary_value?: boolean
    status?: boolean
    kilometers?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type vehiclesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "category_id" | "license_plate" | "manufacture_year" | "color" | "diary_value" | "status" | "kilometers" | "updated_at" | "created_at", ExtArgs["result"]["vehicles"]>
  export type vehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | vehicles$rentalsArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    _count?: boolean | VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vehiclesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type vehiclesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $vehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicles"
    objects: {
      rentals: Prisma.$rentalsPayload<ExtArgs>[]
      category: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brand: $Enums.Brand
      model: $Enums.Model
      category_id: number
      license_plate: string
      manufacture_year: Date
      color: string
      diary_value: Prisma.Decimal
      status: $Enums.VehicleStatus
      kilometers: Prisma.Decimal
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["vehicles"]>
    composites: {}
  }

  type vehiclesGetPayload<S extends boolean | null | undefined | vehiclesDefaultArgs> = $Result.GetResult<Prisma.$vehiclesPayload, S>

  type vehiclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehiclesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiclesCountAggregateInputType | true
    }

  export interface vehiclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicles'], meta: { name: 'vehicles' } }
    /**
     * Find zero or one Vehicles that matches the filter.
     * @param {vehiclesFindUniqueArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehiclesFindUniqueArgs>(args: SelectSubset<T, vehiclesFindUniqueArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehiclesFindUniqueOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehiclesFindUniqueOrThrowArgs>(args: SelectSubset<T, vehiclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesFindFirstArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehiclesFindFirstArgs>(args?: SelectSubset<T, vehiclesFindFirstArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesFindFirstOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehiclesFindFirstOrThrowArgs>(args?: SelectSubset<T, vehiclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicles.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehiclesFindManyArgs>(args?: SelectSubset<T, vehiclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicles.
     * @param {vehiclesCreateArgs} args - Arguments to create a Vehicles.
     * @example
     * // Create one Vehicles
     * const Vehicles = await prisma.vehicles.create({
     *   data: {
     *     // ... data to create a Vehicles
     *   }
     * })
     * 
     */
    create<T extends vehiclesCreateArgs>(args: SelectSubset<T, vehiclesCreateArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {vehiclesCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicles = await prisma.vehicles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehiclesCreateManyArgs>(args?: SelectSubset<T, vehiclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {vehiclesCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicles = await prisma.vehicles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vehiclesCreateManyAndReturnArgs>(args?: SelectSubset<T, vehiclesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicles.
     * @param {vehiclesDeleteArgs} args - Arguments to delete one Vehicles.
     * @example
     * // Delete one Vehicles
     * const Vehicles = await prisma.vehicles.delete({
     *   where: {
     *     // ... filter to delete one Vehicles
     *   }
     * })
     * 
     */
    delete<T extends vehiclesDeleteArgs>(args: SelectSubset<T, vehiclesDeleteArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicles.
     * @param {vehiclesUpdateArgs} args - Arguments to update one Vehicles.
     * @example
     * // Update one Vehicles
     * const vehicles = await prisma.vehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehiclesUpdateArgs>(args: SelectSubset<T, vehiclesUpdateArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {vehiclesDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehiclesDeleteManyArgs>(args?: SelectSubset<T, vehiclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehiclesUpdateManyArgs>(args: SelectSubset<T, vehiclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {vehiclesUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vehiclesUpdateManyAndReturnArgs>(args: SelectSubset<T, vehiclesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicles.
     * @param {vehiclesUpsertArgs} args - Arguments to update or create a Vehicles.
     * @example
     * // Update or create a Vehicles
     * const vehicles = await prisma.vehicles.upsert({
     *   create: {
     *     // ... data to create a Vehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicles we want to update
     *   }
     * })
     */
    upsert<T extends vehiclesUpsertArgs>(args: SelectSubset<T, vehiclesUpsertArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicles.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends vehiclesCountArgs>(
      args?: Subset<T, vehiclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiclesAggregateArgs>(args: Subset<T, VehiclesAggregateArgs>): Prisma.PrismaPromise<GetVehiclesAggregateType<T>>

    /**
     * Group by Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehiclesGroupByArgs['orderBy'] }
        : { orderBy?: vehiclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicles model
   */
  readonly fields: vehiclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehiclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentals<T extends vehicles$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, vehicles$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vehicles model
   */
  interface vehiclesFieldRefs {
    readonly id: FieldRef<"vehicles", 'Int'>
    readonly brand: FieldRef<"vehicles", 'Brand'>
    readonly model: FieldRef<"vehicles", 'Model'>
    readonly category_id: FieldRef<"vehicles", 'Int'>
    readonly license_plate: FieldRef<"vehicles", 'String'>
    readonly manufacture_year: FieldRef<"vehicles", 'DateTime'>
    readonly color: FieldRef<"vehicles", 'String'>
    readonly diary_value: FieldRef<"vehicles", 'Decimal'>
    readonly status: FieldRef<"vehicles", 'VehicleStatus'>
    readonly kilometers: FieldRef<"vehicles", 'Decimal'>
    readonly updated_at: FieldRef<"vehicles", 'DateTime'>
    readonly created_at: FieldRef<"vehicles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vehicles findUnique
   */
  export type vehiclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles findUniqueOrThrow
   */
  export type vehiclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles findFirst
   */
  export type vehiclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * vehicles findFirstOrThrow
   */
  export type vehiclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * vehicles findMany
   */
  export type vehiclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicles.
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * vehicles create
   */
  export type vehiclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * The data needed to create a vehicles.
     */
    data: XOR<vehiclesCreateInput, vehiclesUncheckedCreateInput>
  }

  /**
   * vehicles createMany
   */
  export type vehiclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehiclesCreateManyInput | vehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicles createManyAndReturn
   */
  export type vehiclesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * The data used to create many vehicles.
     */
    data: vehiclesCreateManyInput | vehiclesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vehicles update
   */
  export type vehiclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * The data needed to update a vehicles.
     */
    data: XOR<vehiclesUpdateInput, vehiclesUncheckedUpdateInput>
    /**
     * Choose, which vehicles to update.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles updateMany
   */
  export type vehiclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehiclesUpdateManyMutationInput, vehiclesUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     */
    where?: vehiclesWhereInput
    /**
     * Limit how many vehicles to update.
     */
    limit?: number
  }

  /**
   * vehicles updateManyAndReturn
   */
  export type vehiclesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehiclesUpdateManyMutationInput, vehiclesUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     */
    where?: vehiclesWhereInput
    /**
     * Limit how many vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vehicles upsert
   */
  export type vehiclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * The filter to search for the vehicles to update in case it exists.
     */
    where: vehiclesWhereUniqueInput
    /**
     * In case the vehicles found by the `where` argument doesn't exist, create a new vehicles with this data.
     */
    create: XOR<vehiclesCreateInput, vehiclesUncheckedCreateInput>
    /**
     * In case the vehicles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehiclesUpdateInput, vehiclesUncheckedUpdateInput>
  }

  /**
   * vehicles delete
   */
  export type vehiclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter which vehicles to delete.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles deleteMany
   */
  export type vehiclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehiclesWhereInput
    /**
     * Limit how many vehicles to delete.
     */
    limit?: number
  }

  /**
   * vehicles.rentals
   */
  export type vehicles$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    where?: rentalsWhereInput
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    cursor?: rentalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * vehicles without action
   */
  export type vehiclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    rental_id: string | null
    amount: Decimal | null
    payment_date: Date | null
    refund_date: Date | null
    method_type: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    payment_type: $Enums.PaymentType | null
    proof_of_payment_url: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    rental_id: string | null
    amount: Decimal | null
    payment_date: Date | null
    refund_date: Date | null
    method_type: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    payment_type: $Enums.PaymentType | null
    proof_of_payment_url: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    rental_id: number
    amount: number
    payment_date: number
    refund_date: number
    method_type: number
    status: number
    payment_type: number
    proof_of_payment_url: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    rental_id?: true
    amount?: true
    payment_date?: true
    refund_date?: true
    method_type?: true
    status?: true
    payment_type?: true
    proof_of_payment_url?: true
    updated_at?: true
    created_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    rental_id?: true
    amount?: true
    payment_date?: true
    refund_date?: true
    method_type?: true
    status?: true
    payment_type?: true
    proof_of_payment_url?: true
    updated_at?: true
    created_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    rental_id?: true
    amount?: true
    payment_date?: true
    refund_date?: true
    method_type?: true
    status?: true
    payment_type?: true
    proof_of_payment_url?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    rental_id: string
    amount: Decimal
    payment_date: Date | null
    refund_date: Date | null
    method_type: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    payment_type: $Enums.PaymentType
    proof_of_payment_url: string | null
    updated_at: Date
    created_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    payment_date?: boolean
    refund_date?: boolean
    method_type?: boolean
    status?: boolean
    payment_type?: boolean
    proof_of_payment_url?: boolean
    updated_at?: boolean
    created_at?: boolean
    rental?: boolean | rentalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    payment_date?: boolean
    refund_date?: boolean
    method_type?: boolean
    status?: boolean
    payment_type?: boolean
    proof_of_payment_url?: boolean
    updated_at?: boolean
    created_at?: boolean
    rental?: boolean | rentalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    payment_date?: boolean
    refund_date?: boolean
    method_type?: boolean
    status?: boolean
    payment_type?: boolean
    proof_of_payment_url?: boolean
    updated_at?: boolean
    created_at?: boolean
    rental?: boolean | rentalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    payment_date?: boolean
    refund_date?: boolean
    method_type?: boolean
    status?: boolean
    payment_type?: boolean
    proof_of_payment_url?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rental_id" | "amount" | "payment_date" | "refund_date" | "method_type" | "status" | "payment_type" | "proof_of_payment_url" | "updated_at" | "created_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | rentalsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | rentalsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | rentalsDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      rental: Prisma.$rentalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rental_id: string
      amount: Prisma.Decimal
      payment_date: Date | null
      refund_date: Date | null
      method_type: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      payment_type: $Enums.PaymentType
      proof_of_payment_url: string | null
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rental<T extends rentalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rentalsDefaultArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'String'>
    readonly rental_id: FieldRef<"payments", 'String'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly payment_date: FieldRef<"payments", 'DateTime'>
    readonly refund_date: FieldRef<"payments", 'DateTime'>
    readonly method_type: FieldRef<"payments", 'PaymentMethod'>
    readonly status: FieldRef<"payments", 'PaymentStatus'>
    readonly payment_type: FieldRef<"payments", 'PaymentType'>
    readonly proof_of_payment_url: FieldRef<"payments", 'String'>
    readonly updated_at: FieldRef<"payments", 'DateTime'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model rentals
   */

  export type AggregateRentals = {
    _count: RentalsCountAggregateOutputType | null
    _avg: RentalsAvgAggregateOutputType | null
    _sum: RentalsSumAggregateOutputType | null
    _min: RentalsMinAggregateOutputType | null
    _max: RentalsMaxAggregateOutputType | null
  }

  export type RentalsAvgAggregateOutputType = {
    vehicle_id: number | null
    start_mileage: Decimal | null
    end_mileage: Decimal | null
    daily_rate: Decimal | null
    additional_charges: Decimal | null
    penalties: Decimal | null
  }

  export type RentalsSumAggregateOutputType = {
    vehicle_id: number | null
    start_mileage: Decimal | null
    end_mileage: Decimal | null
    daily_rate: Decimal | null
    additional_charges: Decimal | null
    penalties: Decimal | null
  }

  export type RentalsMinAggregateOutputType = {
    id: string | null
    vehicle_id: number | null
    user_id: string | null
    check_out_date: Date | null
    expected_check_in_date: Date | null
    check_in_date: Date | null
    start_mileage: Decimal | null
    end_mileage: Decimal | null
    status: $Enums.RentalStatus | null
    daily_rate: Decimal | null
    additional_charges: Decimal | null
    penalties: Decimal | null
    notes: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type RentalsMaxAggregateOutputType = {
    id: string | null
    vehicle_id: number | null
    user_id: string | null
    check_out_date: Date | null
    expected_check_in_date: Date | null
    check_in_date: Date | null
    start_mileage: Decimal | null
    end_mileage: Decimal | null
    status: $Enums.RentalStatus | null
    daily_rate: Decimal | null
    additional_charges: Decimal | null
    penalties: Decimal | null
    notes: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type RentalsCountAggregateOutputType = {
    id: number
    vehicle_id: number
    user_id: number
    check_out_date: number
    expected_check_in_date: number
    check_in_date: number
    start_mileage: number
    end_mileage: number
    status: number
    daily_rate: number
    additional_charges: number
    penalties: number
    notes: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type RentalsAvgAggregateInputType = {
    vehicle_id?: true
    start_mileage?: true
    end_mileage?: true
    daily_rate?: true
    additional_charges?: true
    penalties?: true
  }

  export type RentalsSumAggregateInputType = {
    vehicle_id?: true
    start_mileage?: true
    end_mileage?: true
    daily_rate?: true
    additional_charges?: true
    penalties?: true
  }

  export type RentalsMinAggregateInputType = {
    id?: true
    vehicle_id?: true
    user_id?: true
    check_out_date?: true
    expected_check_in_date?: true
    check_in_date?: true
    start_mileage?: true
    end_mileage?: true
    status?: true
    daily_rate?: true
    additional_charges?: true
    penalties?: true
    notes?: true
    updated_at?: true
    created_at?: true
  }

  export type RentalsMaxAggregateInputType = {
    id?: true
    vehicle_id?: true
    user_id?: true
    check_out_date?: true
    expected_check_in_date?: true
    check_in_date?: true
    start_mileage?: true
    end_mileage?: true
    status?: true
    daily_rate?: true
    additional_charges?: true
    penalties?: true
    notes?: true
    updated_at?: true
    created_at?: true
  }

  export type RentalsCountAggregateInputType = {
    id?: true
    vehicle_id?: true
    user_id?: true
    check_out_date?: true
    expected_check_in_date?: true
    check_in_date?: true
    start_mileage?: true
    end_mileage?: true
    status?: true
    daily_rate?: true
    additional_charges?: true
    penalties?: true
    notes?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type RentalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to aggregate.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rentals
    **/
    _count?: true | RentalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalsMaxAggregateInputType
  }

  export type GetRentalsAggregateType<T extends RentalsAggregateArgs> = {
        [P in keyof T & keyof AggregateRentals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentals[P]>
      : GetScalarType<T[P], AggregateRentals[P]>
  }




  export type rentalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalsWhereInput
    orderBy?: rentalsOrderByWithAggregationInput | rentalsOrderByWithAggregationInput[]
    by: RentalsScalarFieldEnum[] | RentalsScalarFieldEnum
    having?: rentalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalsCountAggregateInputType | true
    _avg?: RentalsAvgAggregateInputType
    _sum?: RentalsSumAggregateInputType
    _min?: RentalsMinAggregateInputType
    _max?: RentalsMaxAggregateInputType
  }

  export type RentalsGroupByOutputType = {
    id: string
    vehicle_id: number
    user_id: string
    check_out_date: Date
    expected_check_in_date: Date
    check_in_date: Date | null
    start_mileage: Decimal
    end_mileage: Decimal | null
    status: $Enums.RentalStatus
    daily_rate: Decimal
    additional_charges: Decimal
    penalties: Decimal
    notes: string | null
    updated_at: Date
    created_at: Date
    _count: RentalsCountAggregateOutputType | null
    _avg: RentalsAvgAggregateOutputType | null
    _sum: RentalsSumAggregateOutputType | null
    _min: RentalsMinAggregateOutputType | null
    _max: RentalsMaxAggregateOutputType | null
  }

  type GetRentalsGroupByPayload<T extends rentalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalsGroupByOutputType[P]>
            : GetScalarType<T[P], RentalsGroupByOutputType[P]>
        }
      >
    >


  export type rentalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_id?: boolean
    user_id?: boolean
    check_out_date?: boolean
    expected_check_in_date?: boolean
    check_in_date?: boolean
    start_mileage?: boolean
    end_mileage?: boolean
    status?: boolean
    daily_rate?: boolean
    additional_charges?: boolean
    penalties?: boolean
    notes?: boolean
    updated_at?: boolean
    created_at?: boolean
    payments?: boolean | rentals$paymentsArgs<ExtArgs>
    vehicle?: boolean | vehiclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | RentalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentals"]>

  export type rentalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_id?: boolean
    user_id?: boolean
    check_out_date?: boolean
    expected_check_in_date?: boolean
    check_in_date?: boolean
    start_mileage?: boolean
    end_mileage?: boolean
    status?: boolean
    daily_rate?: boolean
    additional_charges?: boolean
    penalties?: boolean
    notes?: boolean
    updated_at?: boolean
    created_at?: boolean
    vehicle?: boolean | vehiclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentals"]>

  export type rentalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_id?: boolean
    user_id?: boolean
    check_out_date?: boolean
    expected_check_in_date?: boolean
    check_in_date?: boolean
    start_mileage?: boolean
    end_mileage?: boolean
    status?: boolean
    daily_rate?: boolean
    additional_charges?: boolean
    penalties?: boolean
    notes?: boolean
    updated_at?: boolean
    created_at?: boolean
    vehicle?: boolean | vehiclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentals"]>

  export type rentalsSelectScalar = {
    id?: boolean
    vehicle_id?: boolean
    user_id?: boolean
    check_out_date?: boolean
    expected_check_in_date?: boolean
    check_in_date?: boolean
    start_mileage?: boolean
    end_mileage?: boolean
    status?: boolean
    daily_rate?: boolean
    additional_charges?: boolean
    penalties?: boolean
    notes?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type rentalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicle_id" | "user_id" | "check_out_date" | "expected_check_in_date" | "check_in_date" | "start_mileage" | "end_mileage" | "status" | "daily_rate" | "additional_charges" | "penalties" | "notes" | "updated_at" | "created_at", ExtArgs["result"]["rentals"]>
  export type rentalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | rentals$paymentsArgs<ExtArgs>
    vehicle?: boolean | vehiclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | RentalsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rentalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | vehiclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type rentalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | vehiclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $rentalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rentals"
    objects: {
      payments: Prisma.$paymentsPayload<ExtArgs>[]
      vehicle: Prisma.$vehiclesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicle_id: number
      user_id: string
      check_out_date: Date
      expected_check_in_date: Date
      check_in_date: Date | null
      start_mileage: Prisma.Decimal
      end_mileage: Prisma.Decimal | null
      status: $Enums.RentalStatus
      daily_rate: Prisma.Decimal
      additional_charges: Prisma.Decimal
      penalties: Prisma.Decimal
      notes: string | null
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["rentals"]>
    composites: {}
  }

  type rentalsGetPayload<S extends boolean | null | undefined | rentalsDefaultArgs> = $Result.GetResult<Prisma.$rentalsPayload, S>

  type rentalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rentalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalsCountAggregateInputType | true
    }

  export interface rentalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rentals'], meta: { name: 'rentals' } }
    /**
     * Find zero or one Rentals that matches the filter.
     * @param {rentalsFindUniqueArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rentalsFindUniqueArgs>(args: SelectSubset<T, rentalsFindUniqueArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rentals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rentalsFindUniqueOrThrowArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rentalsFindUniqueOrThrowArgs>(args: SelectSubset<T, rentalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindFirstArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rentalsFindFirstArgs>(args?: SelectSubset<T, rentalsFindFirstArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rentals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindFirstOrThrowArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rentalsFindFirstOrThrowArgs>(args?: SelectSubset<T, rentalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rentals.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rentals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalsWithIdOnly = await prisma.rentals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rentalsFindManyArgs>(args?: SelectSubset<T, rentalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rentals.
     * @param {rentalsCreateArgs} args - Arguments to create a Rentals.
     * @example
     * // Create one Rentals
     * const Rentals = await prisma.rentals.create({
     *   data: {
     *     // ... data to create a Rentals
     *   }
     * })
     * 
     */
    create<T extends rentalsCreateArgs>(args: SelectSubset<T, rentalsCreateArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rentals.
     * @param {rentalsCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rentals = await prisma.rentals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rentalsCreateManyArgs>(args?: SelectSubset<T, rentalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rentals and returns the data saved in the database.
     * @param {rentalsCreateManyAndReturnArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rentals = await prisma.rentals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rentals and only return the `id`
     * const rentalsWithIdOnly = await prisma.rentals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rentalsCreateManyAndReturnArgs>(args?: SelectSubset<T, rentalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rentals.
     * @param {rentalsDeleteArgs} args - Arguments to delete one Rentals.
     * @example
     * // Delete one Rentals
     * const Rentals = await prisma.rentals.delete({
     *   where: {
     *     // ... filter to delete one Rentals
     *   }
     * })
     * 
     */
    delete<T extends rentalsDeleteArgs>(args: SelectSubset<T, rentalsDeleteArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rentals.
     * @param {rentalsUpdateArgs} args - Arguments to update one Rentals.
     * @example
     * // Update one Rentals
     * const rentals = await prisma.rentals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rentalsUpdateArgs>(args: SelectSubset<T, rentalsUpdateArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rentals.
     * @param {rentalsDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rentals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rentalsDeleteManyArgs>(args?: SelectSubset<T, rentalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rentals = await prisma.rentals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rentalsUpdateManyArgs>(args: SelectSubset<T, rentalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals and returns the data updated in the database.
     * @param {rentalsUpdateManyAndReturnArgs} args - Arguments to update many Rentals.
     * @example
     * // Update many Rentals
     * const rentals = await prisma.rentals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rentals and only return the `id`
     * const rentalsWithIdOnly = await prisma.rentals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rentalsUpdateManyAndReturnArgs>(args: SelectSubset<T, rentalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rentals.
     * @param {rentalsUpsertArgs} args - Arguments to update or create a Rentals.
     * @example
     * // Update or create a Rentals
     * const rentals = await prisma.rentals.upsert({
     *   create: {
     *     // ... data to create a Rentals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rentals we want to update
     *   }
     * })
     */
    upsert<T extends rentalsUpsertArgs>(args: SelectSubset<T, rentalsUpsertArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rentals.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends rentalsCountArgs>(
      args?: Subset<T, rentalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalsAggregateArgs>(args: Subset<T, RentalsAggregateArgs>): Prisma.PrismaPromise<GetRentalsAggregateType<T>>

    /**
     * Group by Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rentalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalsGroupByArgs['orderBy'] }
        : { orderBy?: rentalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rentals model
   */
  readonly fields: rentalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rentals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends rentals$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, rentals$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicle<T extends vehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehiclesDefaultArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rentals model
   */
  interface rentalsFieldRefs {
    readonly id: FieldRef<"rentals", 'String'>
    readonly vehicle_id: FieldRef<"rentals", 'Int'>
    readonly user_id: FieldRef<"rentals", 'String'>
    readonly check_out_date: FieldRef<"rentals", 'DateTime'>
    readonly expected_check_in_date: FieldRef<"rentals", 'DateTime'>
    readonly check_in_date: FieldRef<"rentals", 'DateTime'>
    readonly start_mileage: FieldRef<"rentals", 'Decimal'>
    readonly end_mileage: FieldRef<"rentals", 'Decimal'>
    readonly status: FieldRef<"rentals", 'RentalStatus'>
    readonly daily_rate: FieldRef<"rentals", 'Decimal'>
    readonly additional_charges: FieldRef<"rentals", 'Decimal'>
    readonly penalties: FieldRef<"rentals", 'Decimal'>
    readonly notes: FieldRef<"rentals", 'String'>
    readonly updated_at: FieldRef<"rentals", 'DateTime'>
    readonly created_at: FieldRef<"rentals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rentals findUnique
   */
  export type rentalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals findUniqueOrThrow
   */
  export type rentalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals findFirst
   */
  export type rentalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * rentals findFirstOrThrow
   */
  export type rentalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * rentals findMany
   */
  export type rentalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rentals.
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * rentals create
   */
  export type rentalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * The data needed to create a rentals.
     */
    data: XOR<rentalsCreateInput, rentalsUncheckedCreateInput>
  }

  /**
   * rentals createMany
   */
  export type rentalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalsCreateManyInput | rentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rentals createManyAndReturn
   */
  export type rentalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * The data used to create many rentals.
     */
    data: rentalsCreateManyInput | rentalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rentals update
   */
  export type rentalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * The data needed to update a rentals.
     */
    data: XOR<rentalsUpdateInput, rentalsUncheckedUpdateInput>
    /**
     * Choose, which rentals to update.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals updateMany
   */
  export type rentalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyInput>
    /**
     * Filter which rentals to update
     */
    where?: rentalsWhereInput
    /**
     * Limit how many rentals to update.
     */
    limit?: number
  }

  /**
   * rentals updateManyAndReturn
   */
  export type rentalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyInput>
    /**
     * Filter which rentals to update
     */
    where?: rentalsWhereInput
    /**
     * Limit how many rentals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rentals upsert
   */
  export type rentalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * The filter to search for the rentals to update in case it exists.
     */
    where: rentalsWhereUniqueInput
    /**
     * In case the rentals found by the `where` argument doesn't exist, create a new rentals with this data.
     */
    create: XOR<rentalsCreateInput, rentalsUncheckedCreateInput>
    /**
     * In case the rentals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalsUpdateInput, rentalsUncheckedUpdateInput>
  }

  /**
   * rentals delete
   */
  export type rentalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter which rentals to delete.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals deleteMany
   */
  export type rentalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalsWhereInput
    /**
     * Limit how many rentals to delete.
     */
    limit?: number
  }

  /**
   * rentals.payments
   */
  export type rentals$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * rentals without action
   */
  export type rentalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const VehiclesScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    category_id: 'category_id',
    license_plate: 'license_plate',
    manufacture_year: 'manufacture_year',
    color: 'color',
    diary_value: 'diary_value',
    status: 'status',
    kilometers: 'kilometers',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type VehiclesScalarFieldEnum = (typeof VehiclesScalarFieldEnum)[keyof typeof VehiclesScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    rental_id: 'rental_id',
    amount: 'amount',
    payment_date: 'payment_date',
    refund_date: 'refund_date',
    method_type: 'method_type',
    status: 'status',
    payment_type: 'payment_type',
    proof_of_payment_url: 'proof_of_payment_url',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const RentalsScalarFieldEnum: {
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

  export type RentalsScalarFieldEnum = (typeof RentalsScalarFieldEnum)[keyof typeof RentalsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Brand'
   */
  export type EnumBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Brand'>
    


  /**
   * Reference to a field of type 'Brand[]'
   */
  export type ListEnumBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Brand[]'>
    


  /**
   * Reference to a field of type 'Model'
   */
  export type EnumModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Model'>
    


  /**
   * Reference to a field of type 'Model[]'
   */
  export type ListEnumModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Model[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'RentalStatus'
   */
  export type EnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus'>
    


  /**
   * Reference to a field of type 'RentalStatus[]'
   */
  export type ListEnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    cpf?: StringFilter<"users"> | string
    birthdate?: DateTimeFilter<"users"> | Date | string
    password_hash?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    updated_at?: DateTimeFilter<"users"> | Date | string
    created_at?: DateTimeFilter<"users"> | Date | string
    rentals?: RentalsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    birthdate?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    rentals?: rentalsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    cpf?: StringFilter<"users"> | string
    birthdate?: DateTimeFilter<"users"> | Date | string
    password_hash?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    updated_at?: DateTimeFilter<"users"> | Date | string
    created_at?: DateTimeFilter<"users"> | Date | string
    rentals?: RentalsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    birthdate?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    cpf?: StringWithAggregatesFilter<"users"> | string
    birthdate?: DateTimeWithAggregatesFilter<"users"> | Date | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    description?: StringFilter<"categories"> | string
    updated_at?: DateTimeFilter<"categories"> | Date | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    vehicles?: VehiclesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    vehicles?: vehiclesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    description?: StringFilter<"categories"> | string
    updated_at?: DateTimeFilter<"categories"> | Date | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    vehicles?: VehiclesListRelationFilter
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    description?: StringWithAggregatesFilter<"categories"> | string
    updated_at?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"categories"> | Date | string
  }

  export type vehiclesWhereInput = {
    AND?: vehiclesWhereInput | vehiclesWhereInput[]
    OR?: vehiclesWhereInput[]
    NOT?: vehiclesWhereInput | vehiclesWhereInput[]
    id?: IntFilter<"vehicles"> | number
    brand?: EnumBrandFilter<"vehicles"> | $Enums.Brand
    model?: EnumModelFilter<"vehicles"> | $Enums.Model
    category_id?: IntFilter<"vehicles"> | number
    license_plate?: StringFilter<"vehicles"> | string
    manufacture_year?: DateTimeFilter<"vehicles"> | Date | string
    color?: StringFilter<"vehicles"> | string
    diary_value?: DecimalFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFilter<"vehicles"> | $Enums.VehicleStatus
    kilometers?: DecimalFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFilter<"vehicles"> | Date | string
    created_at?: DateTimeFilter<"vehicles"> | Date | string
    rentals?: RentalsListRelationFilter
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }

  export type vehiclesOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category_id?: SortOrder
    license_plate?: SortOrder
    manufacture_year?: SortOrder
    color?: SortOrder
    diary_value?: SortOrder
    status?: SortOrder
    kilometers?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    rentals?: rentalsOrderByRelationAggregateInput
    category?: categoriesOrderByWithRelationInput
  }

  export type vehiclesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: vehiclesWhereInput | vehiclesWhereInput[]
    OR?: vehiclesWhereInput[]
    NOT?: vehiclesWhereInput | vehiclesWhereInput[]
    brand?: EnumBrandFilter<"vehicles"> | $Enums.Brand
    model?: EnumModelFilter<"vehicles"> | $Enums.Model
    category_id?: IntFilter<"vehicles"> | number
    license_plate?: StringFilter<"vehicles"> | string
    manufacture_year?: DateTimeFilter<"vehicles"> | Date | string
    color?: StringFilter<"vehicles"> | string
    diary_value?: DecimalFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFilter<"vehicles"> | $Enums.VehicleStatus
    kilometers?: DecimalFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFilter<"vehicles"> | Date | string
    created_at?: DateTimeFilter<"vehicles"> | Date | string
    rentals?: RentalsListRelationFilter
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }, "id">

  export type vehiclesOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category_id?: SortOrder
    license_plate?: SortOrder
    manufacture_year?: SortOrder
    color?: SortOrder
    diary_value?: SortOrder
    status?: SortOrder
    kilometers?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: vehiclesCountOrderByAggregateInput
    _avg?: vehiclesAvgOrderByAggregateInput
    _max?: vehiclesMaxOrderByAggregateInput
    _min?: vehiclesMinOrderByAggregateInput
    _sum?: vehiclesSumOrderByAggregateInput
  }

  export type vehiclesScalarWhereWithAggregatesInput = {
    AND?: vehiclesScalarWhereWithAggregatesInput | vehiclesScalarWhereWithAggregatesInput[]
    OR?: vehiclesScalarWhereWithAggregatesInput[]
    NOT?: vehiclesScalarWhereWithAggregatesInput | vehiclesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vehicles"> | number
    brand?: EnumBrandWithAggregatesFilter<"vehicles"> | $Enums.Brand
    model?: EnumModelWithAggregatesFilter<"vehicles"> | $Enums.Model
    category_id?: IntWithAggregatesFilter<"vehicles"> | number
    license_plate?: StringWithAggregatesFilter<"vehicles"> | string
    manufacture_year?: DateTimeWithAggregatesFilter<"vehicles"> | Date | string
    color?: StringWithAggregatesFilter<"vehicles"> | string
    diary_value?: DecimalWithAggregatesFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusWithAggregatesFilter<"vehicles"> | $Enums.VehicleStatus
    kilometers?: DecimalWithAggregatesFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeWithAggregatesFilter<"vehicles"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"vehicles"> | Date | string
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: UuidFilter<"payments"> | string
    rental_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    refund_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    method_type?: EnumPaymentMethodFilter<"payments"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"payments"> | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFilter<"payments"> | $Enums.PaymentType
    proof_of_payment_url?: StringNullableFilter<"payments"> | string | null
    updated_at?: DateTimeFilter<"payments"> | Date | string
    created_at?: DateTimeFilter<"payments"> | Date | string
    rental?: XOR<RentalsScalarRelationFilter, rentalsWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrderInput | SortOrder
    refund_date?: SortOrderInput | SortOrder
    method_type?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
    proof_of_payment_url?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    rental?: rentalsOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    rental_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    refund_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    method_type?: EnumPaymentMethodFilter<"payments"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"payments"> | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFilter<"payments"> | $Enums.PaymentType
    proof_of_payment_url?: StringNullableFilter<"payments"> | string | null
    updated_at?: DateTimeFilter<"payments"> | Date | string
    created_at?: DateTimeFilter<"payments"> | Date | string
    rental?: XOR<RentalsScalarRelationFilter, rentalsWhereInput>
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrderInput | SortOrder
    refund_date?: SortOrderInput | SortOrder
    method_type?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
    proof_of_payment_url?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"payments"> | string
    rental_id?: UuidWithAggregatesFilter<"payments"> | string
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    refund_date?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    method_type?: EnumPaymentMethodWithAggregatesFilter<"payments"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"payments"> | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeWithAggregatesFilter<"payments"> | $Enums.PaymentType
    proof_of_payment_url?: StringNullableWithAggregatesFilter<"payments"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type rentalsWhereInput = {
    AND?: rentalsWhereInput | rentalsWhereInput[]
    OR?: rentalsWhereInput[]
    NOT?: rentalsWhereInput | rentalsWhereInput[]
    id?: UuidFilter<"rentals"> | string
    vehicle_id?: IntFilter<"rentals"> | number
    user_id?: UuidFilter<"rentals"> | string
    check_out_date?: DateTimeFilter<"rentals"> | Date | string
    expected_check_in_date?: DateTimeFilter<"rentals"> | Date | string
    check_in_date?: DateTimeNullableFilter<"rentals"> | Date | string | null
    start_mileage?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    end_mileage?: DecimalNullableFilter<"rentals"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFilter<"rentals"> | $Enums.RentalStatus
    daily_rate?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"rentals"> | string | null
    updated_at?: DateTimeFilter<"rentals"> | Date | string
    created_at?: DateTimeFilter<"rentals"> | Date | string
    payments?: PaymentsListRelationFilter
    vehicle?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type rentalsOrderByWithRelationInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    user_id?: SortOrder
    check_out_date?: SortOrder
    expected_check_in_date?: SortOrder
    check_in_date?: SortOrderInput | SortOrder
    start_mileage?: SortOrder
    end_mileage?: SortOrderInput | SortOrder
    status?: SortOrder
    daily_rate?: SortOrder
    additional_charges?: SortOrder
    penalties?: SortOrder
    notes?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    payments?: paymentsOrderByRelationAggregateInput
    vehicle?: vehiclesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type rentalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rentalsWhereInput | rentalsWhereInput[]
    OR?: rentalsWhereInput[]
    NOT?: rentalsWhereInput | rentalsWhereInput[]
    vehicle_id?: IntFilter<"rentals"> | number
    user_id?: UuidFilter<"rentals"> | string
    check_out_date?: DateTimeFilter<"rentals"> | Date | string
    expected_check_in_date?: DateTimeFilter<"rentals"> | Date | string
    check_in_date?: DateTimeNullableFilter<"rentals"> | Date | string | null
    start_mileage?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    end_mileage?: DecimalNullableFilter<"rentals"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFilter<"rentals"> | $Enums.RentalStatus
    daily_rate?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"rentals"> | string | null
    updated_at?: DateTimeFilter<"rentals"> | Date | string
    created_at?: DateTimeFilter<"rentals"> | Date | string
    payments?: PaymentsListRelationFilter
    vehicle?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type rentalsOrderByWithAggregationInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    user_id?: SortOrder
    check_out_date?: SortOrder
    expected_check_in_date?: SortOrder
    check_in_date?: SortOrderInput | SortOrder
    start_mileage?: SortOrder
    end_mileage?: SortOrderInput | SortOrder
    status?: SortOrder
    daily_rate?: SortOrder
    additional_charges?: SortOrder
    penalties?: SortOrder
    notes?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: rentalsCountOrderByAggregateInput
    _avg?: rentalsAvgOrderByAggregateInput
    _max?: rentalsMaxOrderByAggregateInput
    _min?: rentalsMinOrderByAggregateInput
    _sum?: rentalsSumOrderByAggregateInput
  }

  export type rentalsScalarWhereWithAggregatesInput = {
    AND?: rentalsScalarWhereWithAggregatesInput | rentalsScalarWhereWithAggregatesInput[]
    OR?: rentalsScalarWhereWithAggregatesInput[]
    NOT?: rentalsScalarWhereWithAggregatesInput | rentalsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"rentals"> | string
    vehicle_id?: IntWithAggregatesFilter<"rentals"> | number
    user_id?: UuidWithAggregatesFilter<"rentals"> | string
    check_out_date?: DateTimeWithAggregatesFilter<"rentals"> | Date | string
    expected_check_in_date?: DateTimeWithAggregatesFilter<"rentals"> | Date | string
    check_in_date?: DateTimeNullableWithAggregatesFilter<"rentals"> | Date | string | null
    start_mileage?: DecimalWithAggregatesFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    end_mileage?: DecimalNullableWithAggregatesFilter<"rentals"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusWithAggregatesFilter<"rentals"> | $Enums.RentalStatus
    daily_rate?: DecimalWithAggregatesFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalWithAggregatesFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    penalties?: DecimalWithAggregatesFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"rentals"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"rentals"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"rentals"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    cpf: string
    birthdate: Date | string
    password_hash: string
    phone?: string | null
    role?: $Enums.Role
    updated_at?: Date | string
    created_at?: Date | string
    rentals?: rentalsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    cpf: string
    birthdate: Date | string
    password_hash: string
    phone?: string | null
    role?: $Enums.Role
    updated_at?: Date | string
    created_at?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    cpf: string
    birthdate: Date | string
    password_hash: string
    phone?: string | null
    role?: $Enums.Role
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateInput = {
    name: string
    description: string
    updated_at?: Date | string
    created_at?: Date | string
    vehicles?: vehiclesCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    updated_at?: Date | string
    created_at?: Date | string
    vehicles?: vehiclesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: vehiclesUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: vehiclesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    description: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiclesCreateInput = {
    brand: $Enums.Brand
    model: $Enums.Model
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
    rentals?: rentalsCreateNestedManyWithoutVehicleInput
    category: categoriesCreateNestedOneWithoutVehiclesInput
  }

  export type vehiclesUncheckedCreateInput = {
    id?: number
    brand: $Enums.Brand
    model: $Enums.Model
    category_id: number
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehiclesUpdateInput = {
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUpdateManyWithoutVehicleNestedInput
    category?: categoriesUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type vehiclesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    category_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehiclesCreateManyInput = {
    id?: number
    brand: $Enums.Brand
    model: $Enums.Model
    category_id: number
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type vehiclesUpdateManyMutationInput = {
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiclesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    category_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string | null
    refund_date?: Date | string | null
    method_type: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    payment_type: $Enums.PaymentType
    proof_of_payment_url?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    rental: rentalsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: string
    rental_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string | null
    refund_date?: Date | string | null
    method_type: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    payment_type: $Enums.PaymentType
    proof_of_payment_url?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type paymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refund_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_type?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    proof_of_payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: rentalsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rental_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refund_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_type?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    proof_of_payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyInput = {
    id?: string
    rental_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string | null
    refund_date?: Date | string | null
    method_type: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    payment_type: $Enums.PaymentType
    proof_of_payment_url?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refund_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_type?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    proof_of_payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rental_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refund_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_type?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    proof_of_payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateInput = {
    id?: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    payments?: paymentsCreateNestedManyWithoutRentalInput
    vehicle: vehiclesCreateNestedOneWithoutRentalsInput
    user: usersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateInput = {
    id?: string
    vehicle_id: number
    user_id: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateManyWithoutRentalNestedInput
    vehicle?: vehiclesUpdateOneRequiredWithoutRentalsNestedInput
    user?: usersUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalsCreateManyInput = {
    id?: string
    vehicle_id: number
    user_id: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type rentalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type RentalsListRelationFilter = {
    every?: rentalsWhereInput
    some?: rentalsWhereInput
    none?: rentalsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rentalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    birthdate?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    birthdate?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    birthdate?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VehiclesListRelationFilter = {
    every?: vehiclesWhereInput
    some?: vehiclesWhereInput
    none?: vehiclesWhereInput
  }

  export type vehiclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.Brand | EnumBrandFieldRefInput<$PrismaModel>
    in?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBrandFilter<$PrismaModel> | $Enums.Brand
  }

  export type EnumModelFilter<$PrismaModel = never> = {
    equals?: $Enums.Model | EnumModelFieldRefInput<$PrismaModel>
    in?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    not?: NestedEnumModelFilter<$PrismaModel> | $Enums.Model
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type vehiclesCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category_id?: SortOrder
    license_plate?: SortOrder
    manufacture_year?: SortOrder
    color?: SortOrder
    diary_value?: SortOrder
    status?: SortOrder
    kilometers?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type vehiclesAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    diary_value?: SortOrder
    kilometers?: SortOrder
  }

  export type vehiclesMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category_id?: SortOrder
    license_plate?: SortOrder
    manufacture_year?: SortOrder
    color?: SortOrder
    diary_value?: SortOrder
    status?: SortOrder
    kilometers?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type vehiclesMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    category_id?: SortOrder
    license_plate?: SortOrder
    manufacture_year?: SortOrder
    color?: SortOrder
    diary_value?: SortOrder
    status?: SortOrder
    kilometers?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type vehiclesSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    diary_value?: SortOrder
    kilometers?: SortOrder
  }

  export type EnumBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Brand | EnumBrandFieldRefInput<$PrismaModel>
    in?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBrandWithAggregatesFilter<$PrismaModel> | $Enums.Brand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBrandFilter<$PrismaModel>
    _max?: NestedEnumBrandFilter<$PrismaModel>
  }

  export type EnumModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Model | EnumModelFieldRefInput<$PrismaModel>
    in?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    not?: NestedEnumModelWithAggregatesFilter<$PrismaModel> | $Enums.Model
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelFilter<$PrismaModel>
    _max?: NestedEnumModelFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type RentalsScalarRelationFilter = {
    is?: rentalsWhereInput
    isNot?: rentalsWhereInput
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    refund_date?: SortOrder
    method_type?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
    proof_of_payment_url?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    refund_date?: SortOrder
    method_type?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
    proof_of_payment_url?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
    refund_date?: SortOrder
    method_type?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
    proof_of_payment_url?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type VehiclesScalarRelationFilter = {
    is?: vehiclesWhereInput
    isNot?: vehiclesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rentalsCountOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    user_id?: SortOrder
    check_out_date?: SortOrder
    expected_check_in_date?: SortOrder
    check_in_date?: SortOrder
    start_mileage?: SortOrder
    end_mileage?: SortOrder
    status?: SortOrder
    daily_rate?: SortOrder
    additional_charges?: SortOrder
    penalties?: SortOrder
    notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type rentalsAvgOrderByAggregateInput = {
    vehicle_id?: SortOrder
    start_mileage?: SortOrder
    end_mileage?: SortOrder
    daily_rate?: SortOrder
    additional_charges?: SortOrder
    penalties?: SortOrder
  }

  export type rentalsMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    user_id?: SortOrder
    check_out_date?: SortOrder
    expected_check_in_date?: SortOrder
    check_in_date?: SortOrder
    start_mileage?: SortOrder
    end_mileage?: SortOrder
    status?: SortOrder
    daily_rate?: SortOrder
    additional_charges?: SortOrder
    penalties?: SortOrder
    notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type rentalsMinOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    user_id?: SortOrder
    check_out_date?: SortOrder
    expected_check_in_date?: SortOrder
    check_in_date?: SortOrder
    start_mileage?: SortOrder
    end_mileage?: SortOrder
    status?: SortOrder
    daily_rate?: SortOrder
    additional_charges?: SortOrder
    penalties?: SortOrder
    notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type rentalsSumOrderByAggregateInput = {
    vehicle_id?: SortOrder
    start_mileage?: SortOrder
    end_mileage?: SortOrder
    daily_rate?: SortOrder
    additional_charges?: SortOrder
    penalties?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type rentalsCreateNestedManyWithoutUserInput = {
    create?: XOR<rentalsCreateWithoutUserInput, rentalsUncheckedCreateWithoutUserInput> | rentalsCreateWithoutUserInput[] | rentalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUserInput | rentalsCreateOrConnectWithoutUserInput[]
    createMany?: rentalsCreateManyUserInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type rentalsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<rentalsCreateWithoutUserInput, rentalsUncheckedCreateWithoutUserInput> | rentalsCreateWithoutUserInput[] | rentalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUserInput | rentalsCreateOrConnectWithoutUserInput[]
    createMany?: rentalsCreateManyUserInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type rentalsUpdateManyWithoutUserNestedInput = {
    create?: XOR<rentalsCreateWithoutUserInput, rentalsUncheckedCreateWithoutUserInput> | rentalsCreateWithoutUserInput[] | rentalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUserInput | rentalsCreateOrConnectWithoutUserInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutUserInput | rentalsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: rentalsCreateManyUserInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutUserInput | rentalsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutUserInput | rentalsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type rentalsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<rentalsCreateWithoutUserInput, rentalsUncheckedCreateWithoutUserInput> | rentalsCreateWithoutUserInput[] | rentalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUserInput | rentalsCreateOrConnectWithoutUserInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutUserInput | rentalsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: rentalsCreateManyUserInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutUserInput | rentalsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutUserInput | rentalsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type vehiclesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<vehiclesCreateWithoutCategoryInput, vehiclesUncheckedCreateWithoutCategoryInput> | vehiclesCreateWithoutCategoryInput[] | vehiclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: vehiclesCreateOrConnectWithoutCategoryInput | vehiclesCreateOrConnectWithoutCategoryInput[]
    createMany?: vehiclesCreateManyCategoryInputEnvelope
    connect?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
  }

  export type vehiclesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<vehiclesCreateWithoutCategoryInput, vehiclesUncheckedCreateWithoutCategoryInput> | vehiclesCreateWithoutCategoryInput[] | vehiclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: vehiclesCreateOrConnectWithoutCategoryInput | vehiclesCreateOrConnectWithoutCategoryInput[]
    createMany?: vehiclesCreateManyCategoryInputEnvelope
    connect?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
  }

  export type vehiclesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<vehiclesCreateWithoutCategoryInput, vehiclesUncheckedCreateWithoutCategoryInput> | vehiclesCreateWithoutCategoryInput[] | vehiclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: vehiclesCreateOrConnectWithoutCategoryInput | vehiclesCreateOrConnectWithoutCategoryInput[]
    upsert?: vehiclesUpsertWithWhereUniqueWithoutCategoryInput | vehiclesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: vehiclesCreateManyCategoryInputEnvelope
    set?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    disconnect?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    delete?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    connect?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    update?: vehiclesUpdateWithWhereUniqueWithoutCategoryInput | vehiclesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: vehiclesUpdateManyWithWhereWithoutCategoryInput | vehiclesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: vehiclesScalarWhereInput | vehiclesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type vehiclesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<vehiclesCreateWithoutCategoryInput, vehiclesUncheckedCreateWithoutCategoryInput> | vehiclesCreateWithoutCategoryInput[] | vehiclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: vehiclesCreateOrConnectWithoutCategoryInput | vehiclesCreateOrConnectWithoutCategoryInput[]
    upsert?: vehiclesUpsertWithWhereUniqueWithoutCategoryInput | vehiclesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: vehiclesCreateManyCategoryInputEnvelope
    set?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    disconnect?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    delete?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    connect?: vehiclesWhereUniqueInput | vehiclesWhereUniqueInput[]
    update?: vehiclesUpdateWithWhereUniqueWithoutCategoryInput | vehiclesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: vehiclesUpdateManyWithWhereWithoutCategoryInput | vehiclesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: vehiclesScalarWhereInput | vehiclesScalarWhereInput[]
  }

  export type rentalsCreateNestedManyWithoutVehicleInput = {
    create?: XOR<rentalsCreateWithoutVehicleInput, rentalsUncheckedCreateWithoutVehicleInput> | rentalsCreateWithoutVehicleInput[] | rentalsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutVehicleInput | rentalsCreateOrConnectWithoutVehicleInput[]
    createMany?: rentalsCreateManyVehicleInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<categoriesCreateWithoutVehiclesInput, categoriesUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutVehiclesInput
    connect?: categoriesWhereUniqueInput
  }

  export type rentalsUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<rentalsCreateWithoutVehicleInput, rentalsUncheckedCreateWithoutVehicleInput> | rentalsCreateWithoutVehicleInput[] | rentalsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutVehicleInput | rentalsCreateOrConnectWithoutVehicleInput[]
    createMany?: rentalsCreateManyVehicleInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type EnumBrandFieldUpdateOperationsInput = {
    set?: $Enums.Brand
  }

  export type EnumModelFieldUpdateOperationsInput = {
    set?: $Enums.Model
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type rentalsUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<rentalsCreateWithoutVehicleInput, rentalsUncheckedCreateWithoutVehicleInput> | rentalsCreateWithoutVehicleInput[] | rentalsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutVehicleInput | rentalsCreateOrConnectWithoutVehicleInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutVehicleInput | rentalsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: rentalsCreateManyVehicleInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutVehicleInput | rentalsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutVehicleInput | rentalsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type categoriesUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<categoriesCreateWithoutVehiclesInput, categoriesUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutVehiclesInput
    upsert?: categoriesUpsertWithoutVehiclesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutVehiclesInput, categoriesUpdateWithoutVehiclesInput>, categoriesUncheckedUpdateWithoutVehiclesInput>
  }

  export type rentalsUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<rentalsCreateWithoutVehicleInput, rentalsUncheckedCreateWithoutVehicleInput> | rentalsCreateWithoutVehicleInput[] | rentalsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutVehicleInput | rentalsCreateOrConnectWithoutVehicleInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutVehicleInput | rentalsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: rentalsCreateManyVehicleInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutVehicleInput | rentalsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutVehicleInput | rentalsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type rentalsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutPaymentsInput
    connect?: rentalsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type rentalsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutPaymentsInput
    upsert?: rentalsUpsertWithoutPaymentsInput
    connect?: rentalsWhereUniqueInput
    update?: XOR<XOR<rentalsUpdateToOneWithWhereWithoutPaymentsInput, rentalsUpdateWithoutPaymentsInput>, rentalsUncheckedUpdateWithoutPaymentsInput>
  }

  export type paymentsCreateNestedManyWithoutRentalInput = {
    create?: XOR<paymentsCreateWithoutRentalInput, paymentsUncheckedCreateWithoutRentalInput> | paymentsCreateWithoutRentalInput[] | paymentsUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalInput | paymentsCreateOrConnectWithoutRentalInput[]
    createMany?: paymentsCreateManyRentalInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type vehiclesCreateNestedOneWithoutRentalsInput = {
    create?: XOR<vehiclesCreateWithoutRentalsInput, vehiclesUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutRentalsInput
    connect?: vehiclesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRentalsInput = {
    create?: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRentalsInput
    connect?: usersWhereUniqueInput
  }

  export type paymentsUncheckedCreateNestedManyWithoutRentalInput = {
    create?: XOR<paymentsCreateWithoutRentalInput, paymentsUncheckedCreateWithoutRentalInput> | paymentsCreateWithoutRentalInput[] | paymentsUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalInput | paymentsCreateOrConnectWithoutRentalInput[]
    createMany?: paymentsCreateManyRentalInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumRentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalStatus
  }

  export type paymentsUpdateManyWithoutRentalNestedInput = {
    create?: XOR<paymentsCreateWithoutRentalInput, paymentsUncheckedCreateWithoutRentalInput> | paymentsCreateWithoutRentalInput[] | paymentsUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalInput | paymentsCreateOrConnectWithoutRentalInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutRentalInput | paymentsUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: paymentsCreateManyRentalInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutRentalInput | paymentsUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutRentalInput | paymentsUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type vehiclesUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<vehiclesCreateWithoutRentalsInput, vehiclesUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutRentalsInput
    upsert?: vehiclesUpsertWithoutRentalsInput
    connect?: vehiclesWhereUniqueInput
    update?: XOR<XOR<vehiclesUpdateToOneWithWhereWithoutRentalsInput, vehiclesUpdateWithoutRentalsInput>, vehiclesUncheckedUpdateWithoutRentalsInput>
  }

  export type usersUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRentalsInput
    upsert?: usersUpsertWithoutRentalsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRentalsInput, usersUpdateWithoutRentalsInput>, usersUncheckedUpdateWithoutRentalsInput>
  }

  export type paymentsUncheckedUpdateManyWithoutRentalNestedInput = {
    create?: XOR<paymentsCreateWithoutRentalInput, paymentsUncheckedCreateWithoutRentalInput> | paymentsCreateWithoutRentalInput[] | paymentsUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalInput | paymentsCreateOrConnectWithoutRentalInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutRentalInput | paymentsUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: paymentsCreateManyRentalInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutRentalInput | paymentsUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutRentalInput | paymentsUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.Brand | EnumBrandFieldRefInput<$PrismaModel>
    in?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBrandFilter<$PrismaModel> | $Enums.Brand
  }

  export type NestedEnumModelFilter<$PrismaModel = never> = {
    equals?: $Enums.Model | EnumModelFieldRefInput<$PrismaModel>
    in?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    not?: NestedEnumModelFilter<$PrismaModel> | $Enums.Model
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedEnumBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Brand | EnumBrandFieldRefInput<$PrismaModel>
    in?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.Brand[] | ListEnumBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBrandWithAggregatesFilter<$PrismaModel> | $Enums.Brand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBrandFilter<$PrismaModel>
    _max?: NestedEnumBrandFilter<$PrismaModel>
  }

  export type NestedEnumModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Model | EnumModelFieldRefInput<$PrismaModel>
    in?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Model[] | ListEnumModelFieldRefInput<$PrismaModel>
    not?: NestedEnumModelWithAggregatesFilter<$PrismaModel> | $Enums.Model
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelFilter<$PrismaModel>
    _max?: NestedEnumModelFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type rentalsCreateWithoutUserInput = {
    id?: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    payments?: paymentsCreateNestedManyWithoutRentalInput
    vehicle: vehiclesCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutUserInput = {
    id?: string
    vehicle_id: number
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalsCreateOrConnectWithoutUserInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutUserInput, rentalsUncheckedCreateWithoutUserInput>
  }

  export type rentalsCreateManyUserInputEnvelope = {
    data: rentalsCreateManyUserInput | rentalsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type rentalsUpsertWithWhereUniqueWithoutUserInput = {
    where: rentalsWhereUniqueInput
    update: XOR<rentalsUpdateWithoutUserInput, rentalsUncheckedUpdateWithoutUserInput>
    create: XOR<rentalsCreateWithoutUserInput, rentalsUncheckedCreateWithoutUserInput>
  }

  export type rentalsUpdateWithWhereUniqueWithoutUserInput = {
    where: rentalsWhereUniqueInput
    data: XOR<rentalsUpdateWithoutUserInput, rentalsUncheckedUpdateWithoutUserInput>
  }

  export type rentalsUpdateManyWithWhereWithoutUserInput = {
    where: rentalsScalarWhereInput
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyWithoutUserInput>
  }

  export type rentalsScalarWhereInput = {
    AND?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
    OR?: rentalsScalarWhereInput[]
    NOT?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
    id?: UuidFilter<"rentals"> | string
    vehicle_id?: IntFilter<"rentals"> | number
    user_id?: UuidFilter<"rentals"> | string
    check_out_date?: DateTimeFilter<"rentals"> | Date | string
    expected_check_in_date?: DateTimeFilter<"rentals"> | Date | string
    check_in_date?: DateTimeNullableFilter<"rentals"> | Date | string | null
    start_mileage?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    end_mileage?: DecimalNullableFilter<"rentals"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFilter<"rentals"> | $Enums.RentalStatus
    daily_rate?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"rentals"> | string | null
    updated_at?: DateTimeFilter<"rentals"> | Date | string
    created_at?: DateTimeFilter<"rentals"> | Date | string
  }

  export type vehiclesCreateWithoutCategoryInput = {
    brand: $Enums.Brand
    model: $Enums.Model
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
    rentals?: rentalsCreateNestedManyWithoutVehicleInput
  }

  export type vehiclesUncheckedCreateWithoutCategoryInput = {
    id?: number
    brand: $Enums.Brand
    model: $Enums.Model
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
    rentals?: rentalsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehiclesCreateOrConnectWithoutCategoryInput = {
    where: vehiclesWhereUniqueInput
    create: XOR<vehiclesCreateWithoutCategoryInput, vehiclesUncheckedCreateWithoutCategoryInput>
  }

  export type vehiclesCreateManyCategoryInputEnvelope = {
    data: vehiclesCreateManyCategoryInput | vehiclesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type vehiclesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: vehiclesWhereUniqueInput
    update: XOR<vehiclesUpdateWithoutCategoryInput, vehiclesUncheckedUpdateWithoutCategoryInput>
    create: XOR<vehiclesCreateWithoutCategoryInput, vehiclesUncheckedCreateWithoutCategoryInput>
  }

  export type vehiclesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: vehiclesWhereUniqueInput
    data: XOR<vehiclesUpdateWithoutCategoryInput, vehiclesUncheckedUpdateWithoutCategoryInput>
  }

  export type vehiclesUpdateManyWithWhereWithoutCategoryInput = {
    where: vehiclesScalarWhereInput
    data: XOR<vehiclesUpdateManyMutationInput, vehiclesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type vehiclesScalarWhereInput = {
    AND?: vehiclesScalarWhereInput | vehiclesScalarWhereInput[]
    OR?: vehiclesScalarWhereInput[]
    NOT?: vehiclesScalarWhereInput | vehiclesScalarWhereInput[]
    id?: IntFilter<"vehicles"> | number
    brand?: EnumBrandFilter<"vehicles"> | $Enums.Brand
    model?: EnumModelFilter<"vehicles"> | $Enums.Model
    category_id?: IntFilter<"vehicles"> | number
    license_plate?: StringFilter<"vehicles"> | string
    manufacture_year?: DateTimeFilter<"vehicles"> | Date | string
    color?: StringFilter<"vehicles"> | string
    diary_value?: DecimalFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFilter<"vehicles"> | $Enums.VehicleStatus
    kilometers?: DecimalFilter<"vehicles"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFilter<"vehicles"> | Date | string
    created_at?: DateTimeFilter<"vehicles"> | Date | string
  }

  export type rentalsCreateWithoutVehicleInput = {
    id?: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    payments?: paymentsCreateNestedManyWithoutRentalInput
    user: usersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutVehicleInput = {
    id?: string
    user_id: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutRentalInput
  }

  export type rentalsCreateOrConnectWithoutVehicleInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutVehicleInput, rentalsUncheckedCreateWithoutVehicleInput>
  }

  export type rentalsCreateManyVehicleInputEnvelope = {
    data: rentalsCreateManyVehicleInput | rentalsCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutVehiclesInput = {
    name: string
    description: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type categoriesUncheckedCreateWithoutVehiclesInput = {
    id?: number
    name: string
    description: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type categoriesCreateOrConnectWithoutVehiclesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutVehiclesInput, categoriesUncheckedCreateWithoutVehiclesInput>
  }

  export type rentalsUpsertWithWhereUniqueWithoutVehicleInput = {
    where: rentalsWhereUniqueInput
    update: XOR<rentalsUpdateWithoutVehicleInput, rentalsUncheckedUpdateWithoutVehicleInput>
    create: XOR<rentalsCreateWithoutVehicleInput, rentalsUncheckedCreateWithoutVehicleInput>
  }

  export type rentalsUpdateWithWhereUniqueWithoutVehicleInput = {
    where: rentalsWhereUniqueInput
    data: XOR<rentalsUpdateWithoutVehicleInput, rentalsUncheckedUpdateWithoutVehicleInput>
  }

  export type rentalsUpdateManyWithWhereWithoutVehicleInput = {
    where: rentalsScalarWhereInput
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyWithoutVehicleInput>
  }

  export type categoriesUpsertWithoutVehiclesInput = {
    update: XOR<categoriesUpdateWithoutVehiclesInput, categoriesUncheckedUpdateWithoutVehiclesInput>
    create: XOR<categoriesCreateWithoutVehiclesInput, categoriesUncheckedCreateWithoutVehiclesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutVehiclesInput, categoriesUncheckedUpdateWithoutVehiclesInput>
  }

  export type categoriesUpdateWithoutVehiclesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateWithoutPaymentsInput = {
    id?: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    vehicle: vehiclesCreateNestedOneWithoutRentalsInput
    user: usersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    vehicle_id: number
    user_id: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type rentalsCreateOrConnectWithoutPaymentsInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
  }

  export type rentalsUpsertWithoutPaymentsInput = {
    update: XOR<rentalsUpdateWithoutPaymentsInput, rentalsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
    where?: rentalsWhereInput
  }

  export type rentalsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: rentalsWhereInput
    data: XOR<rentalsUpdateWithoutPaymentsInput, rentalsUncheckedUpdateWithoutPaymentsInput>
  }

  export type rentalsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: vehiclesUpdateOneRequiredWithoutRentalsNestedInput
    user?: usersUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateWithoutRentalInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string | null
    refund_date?: Date | string | null
    method_type: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    payment_type: $Enums.PaymentType
    proof_of_payment_url?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type paymentsUncheckedCreateWithoutRentalInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string | null
    refund_date?: Date | string | null
    method_type: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    payment_type: $Enums.PaymentType
    proof_of_payment_url?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type paymentsCreateOrConnectWithoutRentalInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutRentalInput, paymentsUncheckedCreateWithoutRentalInput>
  }

  export type paymentsCreateManyRentalInputEnvelope = {
    data: paymentsCreateManyRentalInput | paymentsCreateManyRentalInput[]
    skipDuplicates?: boolean
  }

  export type vehiclesCreateWithoutRentalsInput = {
    brand: $Enums.Brand
    model: $Enums.Model
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
    category: categoriesCreateNestedOneWithoutVehiclesInput
  }

  export type vehiclesUncheckedCreateWithoutRentalsInput = {
    id?: number
    brand: $Enums.Brand
    model: $Enums.Model
    category_id: number
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type vehiclesCreateOrConnectWithoutRentalsInput = {
    where: vehiclesWhereUniqueInput
    create: XOR<vehiclesCreateWithoutRentalsInput, vehiclesUncheckedCreateWithoutRentalsInput>
  }

  export type usersCreateWithoutRentalsInput = {
    id?: string
    name: string
    email: string
    cpf: string
    birthdate: Date | string
    password_hash: string
    phone?: string | null
    role?: $Enums.Role
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type usersUncheckedCreateWithoutRentalsInput = {
    id?: string
    name: string
    email: string
    cpf: string
    birthdate: Date | string
    password_hash: string
    phone?: string | null
    role?: $Enums.Role
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type usersCreateOrConnectWithoutRentalsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
  }

  export type paymentsUpsertWithWhereUniqueWithoutRentalInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutRentalInput, paymentsUncheckedUpdateWithoutRentalInput>
    create: XOR<paymentsCreateWithoutRentalInput, paymentsUncheckedCreateWithoutRentalInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutRentalInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutRentalInput, paymentsUncheckedUpdateWithoutRentalInput>
  }

  export type paymentsUpdateManyWithWhereWithoutRentalInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutRentalInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: UuidFilter<"payments"> | string
    rental_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    refund_date?: DateTimeNullableFilter<"payments"> | Date | string | null
    method_type?: EnumPaymentMethodFilter<"payments"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"payments"> | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFilter<"payments"> | $Enums.PaymentType
    proof_of_payment_url?: StringNullableFilter<"payments"> | string | null
    updated_at?: DateTimeFilter<"payments"> | Date | string
    created_at?: DateTimeFilter<"payments"> | Date | string
  }

  export type vehiclesUpsertWithoutRentalsInput = {
    update: XOR<vehiclesUpdateWithoutRentalsInput, vehiclesUncheckedUpdateWithoutRentalsInput>
    create: XOR<vehiclesCreateWithoutRentalsInput, vehiclesUncheckedCreateWithoutRentalsInput>
    where?: vehiclesWhereInput
  }

  export type vehiclesUpdateToOneWithWhereWithoutRentalsInput = {
    where?: vehiclesWhereInput
    data: XOR<vehiclesUpdateWithoutRentalsInput, vehiclesUncheckedUpdateWithoutRentalsInput>
  }

  export type vehiclesUpdateWithoutRentalsInput = {
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type vehiclesUncheckedUpdateWithoutRentalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    category_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutRentalsInput = {
    update: XOR<usersUpdateWithoutRentalsInput, usersUncheckedUpdateWithoutRentalsInput>
    create: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRentalsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRentalsInput, usersUncheckedUpdateWithoutRentalsInput>
  }

  export type usersUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateManyUserInput = {
    id?: string
    vehicle_id: number
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type rentalsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateManyWithoutRentalNestedInput
    vehicle?: vehiclesUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: IntFieldUpdateOperationsInput | number
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: IntFieldUpdateOperationsInput | number
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiclesCreateManyCategoryInput = {
    id?: number
    brand: $Enums.Brand
    model: $Enums.Model
    license_plate: string
    manufacture_year: Date | string
    color: string
    diary_value: Decimal | DecimalJsLike | number | string
    status: $Enums.VehicleStatus
    kilometers: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type vehiclesUpdateWithoutCategoryInput = {
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUpdateManyWithoutVehicleNestedInput
  }

  export type vehiclesUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehiclesUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: EnumBrandFieldUpdateOperationsInput | $Enums.Brand
    model?: EnumModelFieldUpdateOperationsInput | $Enums.Model
    license_plate?: StringFieldUpdateOperationsInput | string
    manufacture_year?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    diary_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    kilometers?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateManyVehicleInput = {
    id?: string
    user_id: string
    check_out_date: Date | string
    expected_check_in_date: Date | string
    check_in_date?: Date | string | null
    start_mileage: Decimal | DecimalJsLike | number | string
    end_mileage?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.RentalStatus
    daily_rate: Decimal | DecimalJsLike | number | string
    additional_charges?: Decimal | DecimalJsLike | number | string
    penalties?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type rentalsUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateManyWithoutRentalNestedInput
    user?: usersUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type rentalsUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    check_out_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_check_in_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_mileage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    end_mileage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    daily_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additional_charges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    penalties?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyRentalInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_date?: Date | string | null
    refund_date?: Date | string | null
    method_type: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    payment_type: $Enums.PaymentType
    proof_of_payment_url?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type paymentsUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refund_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_type?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    proof_of_payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refund_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_type?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    proof_of_payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refund_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_type?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    proof_of_payment_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}