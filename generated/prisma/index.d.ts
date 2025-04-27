/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Complex
 *
 */
export type Complex = $Result.DefaultSelection<Prisma.$ComplexPayload>
/**
 * Model Landlord
 *
 */
export type Landlord = $Result.DefaultSelection<Prisma.$LandlordPayload>
/**
 * Model Lease
 *
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model MaintenanceRequest
 *
 */
export type MaintenanceRequest =
  $Result.DefaultSelection<Prisma.$MaintenanceRequestPayload>
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Tenant
 *
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Unit
 *
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Vendor
 *
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Notification
 *
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const IdType: {
    VOTER_ID: 'VOTER_ID'
    PASSPORT: 'PASSPORT'
    DRIVER_LICENSE: 'DRIVER_LICENSE'
    GH_CARD: 'GH_CARD'
  }

  export type IdType = (typeof IdType)[keyof typeof IdType]

  export const InvoiceStatus: {
    PENDING: 'PENDING'
    PAID: 'PAID'
    OVERDUE: 'OVERDUE'
    CANCELED: 'CANCELED'
  }

  export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]

  export const LeaseStatus: {
    ACTIVE: 'ACTIVE'
    PENDING: 'PENDING'
    TERMINATED: 'TERMINATED'
    EXPIRED: 'EXPIRED'
    RENEWED: 'RENEWED'
  }

  export type LeaseStatus = (typeof LeaseStatus)[keyof typeof LeaseStatus]

  export const MaintenanceStatus: {
    PENDING: 'PENDING'
    SCHEDULED: 'SCHEDULED'
    IN_PROGRESS: 'IN_PROGRESS'
    COMPLETED: 'COMPLETED'
    CANCELED: 'CANCELED'
  }

  export type MaintenanceStatus =
    (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus]

  export const PaymentMethod: {
    MOBILE_MONEY: 'MOBILE_MONEY'
    BANK_TRANSFER: 'BANK_TRANSFER'
    CARD: 'CARD'
    CASH: 'CASH'
  }

  export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

  export const PaymentStatus: {
    PENDING: 'PENDING'
    COMPLETED: 'COMPLETED'
    FAILED: 'FAILED'
    REFUNDED: 'REFUNDED'
  }

  export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

  export const PaymentType: {
    RENT: 'RENT'
    UTILITY: 'UTILITY'
    MAINTENANCE: 'MAINTENANCE'
    DEPOSIT: 'DEPOSIT'
  }

  export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

  export const UnitType: {
    ROOM: 'ROOM'
    STUDIO: 'STUDIO'
    APARTMENT: 'APARTMENT'
    HOUSE: 'HOUSE'
  }

  export type UnitType = (typeof UnitType)[keyof typeof UnitType]
}

export type IdType = $Enums.IdType

export const IdType: typeof $Enums.IdType

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type LeaseStatus = $Enums.LeaseStatus

export const LeaseStatus: typeof $Enums.LeaseStatus

export type MaintenanceStatus = $Enums.MaintenanceStatus

export const MaintenanceStatus: typeof $Enums.MaintenanceStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type UnitType = $Enums.UnitType

export const UnitType: typeof $Enums.UnitType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  )
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

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
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    },
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.complex`: Exposes CRUD operations for the **Complex** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Complexes
   * const complexes = await prisma.complex.findMany()
   * ```
   */
  get complex(): Prisma.ComplexDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.landlord`: Exposes CRUD operations for the **Landlord** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Landlords
   * const landlords = await prisma.landlord.findMany()
   * ```
   */
  get landlord(): Prisma.LandlordDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Leases
   * const leases = await prisma.lease.findMany()
   * ```
   */
  get lease(): Prisma.LeaseDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.maintenanceRequest`: Exposes CRUD operations for the **MaintenanceRequest** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MaintenanceRequests
   * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
   * ```
   */
  get maintenanceRequest(): Prisma.MaintenanceRequestDelegate<
    ExtArgs,
    ClientOptions
  >

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Units
   * const units = await prisma.unit.findMany()
   * ```
   */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
   * ```
   */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
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
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

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

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
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
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
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
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
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
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    User: 'User'
    Complex: 'Complex'
    Landlord: 'Landlord'
    Lease: 'Lease'
    MaintenanceRequest: 'MaintenanceRequest'
    Payment: 'Payment'
    Tenant: 'Tenant'
    Unit: 'Unit'
    Vendor: 'Vendor'
    Notification: 'Notification'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps:
        | 'user'
        | 'complex'
        | 'landlord'
        | 'lease'
        | 'maintenanceRequest'
        | 'payment'
        | 'tenant'
        | 'unit'
        | 'vendor'
        | 'notification'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Complex: {
        payload: Prisma.$ComplexPayload<ExtArgs>
        fields: Prisma.ComplexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          findFirst: {
            args: Prisma.ComplexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          findMany: {
            args: Prisma.ComplexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>[]
          }
          create: {
            args: Prisma.ComplexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          createMany: {
            args: Prisma.ComplexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplexCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>[]
          }
          delete: {
            args: Prisma.ComplexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          update: {
            args: Prisma.ComplexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          deleteMany: {
            args: Prisma.ComplexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplexUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>[]
          }
          upsert: {
            args: Prisma.ComplexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          aggregate: {
            args: Prisma.ComplexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplex>
          }
          groupBy: {
            args: Prisma.ComplexGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplexGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplexCountArgs<ExtArgs>
            result: $Utils.Optional<ComplexCountAggregateOutputType> | number
          }
        }
      }
      Landlord: {
        payload: Prisma.$LandlordPayload<ExtArgs>
        fields: Prisma.LandlordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandlordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandlordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          findFirst: {
            args: Prisma.LandlordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandlordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          findMany: {
            args: Prisma.LandlordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>[]
          }
          create: {
            args: Prisma.LandlordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          createMany: {
            args: Prisma.LandlordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandlordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>[]
          }
          delete: {
            args: Prisma.LandlordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          update: {
            args: Prisma.LandlordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          deleteMany: {
            args: Prisma.LandlordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandlordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandlordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>[]
          }
          upsert: {
            args: Prisma.LandlordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          aggregate: {
            args: Prisma.LandlordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandlord>
          }
          groupBy: {
            args: Prisma.LandlordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandlordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandlordCountArgs<ExtArgs>
            result: $Utils.Optional<LandlordCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRequest: {
        payload: Prisma.$MaintenanceRequestPayload<ExtArgs>
        fields: Prisma.MaintenanceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          update: {
            args: Prisma.MaintenanceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRequest>
          }
          groupBy: {
            args: Prisma.MaintenanceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceRequestCountArgs<ExtArgs>
            result:
              | $Utils.Optional<MaintenanceRequestCountAggregateOutputType>
              | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result:
              | $Utils.Optional<NotificationCountAggregateOutputType>
              | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
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
    user?: UserOmit
    complex?: ComplexOmit
    landlord?: LandlordOmit
    lease?: LeaseOmit
    maintenanceRequest?: MaintenanceRequestOmit
    payment?: PaymentOmit
    tenant?: TenantOmit
    unit?: UnitOmit
    vendor?: VendorOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
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
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput
  }

  /**
   * Count Type ComplexCountOutputType
   */

  export type ComplexCountOutputType = {
    units: number
  }

  export type ComplexCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    units?: boolean | ComplexCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * ComplexCountOutputType without action
   */
  export type ComplexCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ComplexCountOutputType
     */
    select?: ComplexCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplexCountOutputType without action
   */
  export type ComplexCountOutputTypeCountUnitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UnitWhereInput
  }

  /**
   * Count Type LandlordCountOutputType
   */

  export type LandlordCountOutputType = {
    user: number
    complexes: number
    leases: number
  }

  export type LandlordCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | LandlordCountOutputTypeCountUserArgs
    complexes?: boolean | LandlordCountOutputTypeCountComplexesArgs
    leases?: boolean | LandlordCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * LandlordCountOutputType without action
   */
  export type LandlordCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LandlordCountOutputType
     */
    select?: LandlordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandlordCountOutputType without action
   */
  export type LandlordCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
  }

  /**
   * LandlordCountOutputType without action
   */
  export type LandlordCountOutputTypeCountComplexesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ComplexWhereInput
  }

  /**
   * LandlordCountOutputType without action
   */
  export type LandlordCountOutputTypeCountLeasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaseWhereInput
  }

  /**
   * Count Type LeaseCountOutputType
   */

  export type LeaseCountOutputType = {
    payments: number
    renewals: number
  }

  export type LeaseCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payments?: boolean | LeaseCountOutputTypeCountPaymentsArgs
    renewals?: boolean | LeaseCountOutputTypeCountRenewalsArgs
  }

  // Custom InputTypes
  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeaseCountOutputType
     */
    select?: LeaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountRenewalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaseWhereInput
  }

  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    user: number
    leases: number
    maintenanceRequests: number
    units: number
  }

  export type TenantCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | TenantCountOutputTypeCountUserArgs
    leases?: boolean | TenantCountOutputTypeCountLeasesArgs
    maintenanceRequests?:
      | boolean
      | TenantCountOutputTypeCountMaintenanceRequestsArgs
    units?: boolean | TenantCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaseWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMaintenanceRequestsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUnitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UnitWhereInput
  }

  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    leases: number
    maintenanceRequests: number
  }

  export type UnitCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    leases?: boolean | UnitCountOutputTypeCountLeasesArgs
    maintenanceRequests?:
      | boolean
      | UnitCountOutputTypeCountMaintenanceRequestsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountLeasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaseWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountMaintenanceRequestsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    user: number
    maintenanceRequests: number
  }

  export type VendorCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | VendorCountOutputTypeCountUserArgs
    maintenanceRequests?:
      | boolean
      | VendorCountOutputTypeCountMaintenanceRequestsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMaintenanceRequestsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    landlordId: string | null
    tenantId: string | null
    vendorId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    landlordId: string | null
    tenantId: string | null
    vendorId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    landlordId: number
    tenantId: number
    vendorId: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    landlordId?: true
    tenantId?: true
    vendorId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    landlordId?: true
    tenantId?: true
    vendorId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    landlordId?: true
    tenantId?: true
    vendorId?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    landlordId: string | null
    tenantId: string | null
    vendorId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      landlordId?: boolean
      tenantId?: boolean
      vendorId?: boolean
      landlord?: boolean | User$landlordArgs<ExtArgs>
      tenant?: boolean | User$tenantArgs<ExtArgs>
      vendor?: boolean | User$vendorArgs<ExtArgs>
      notifications?: boolean | User$notificationsArgs<ExtArgs>
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      landlordId?: boolean
      tenantId?: boolean
      vendorId?: boolean
      landlord?: boolean | User$landlordArgs<ExtArgs>
      tenant?: boolean | User$tenantArgs<ExtArgs>
      vendor?: boolean | User$vendorArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      landlordId?: boolean
      tenantId?: boolean
      vendorId?: boolean
      landlord?: boolean | User$landlordArgs<ExtArgs>
      tenant?: boolean | User$tenantArgs<ExtArgs>
      vendor?: boolean | User$vendorArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectScalar = {
    id?: boolean
    landlordId?: boolean
    tenantId?: boolean
    vendorId?: boolean
  }

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'landlordId' | 'tenantId' | 'vendorId',
    ExtArgs['result']['user']
  >
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | User$landlordArgs<ExtArgs>
    tenant?: boolean | User$tenantArgs<ExtArgs>
    vendor?: boolean | User$vendorArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | User$landlordArgs<ExtArgs>
    tenant?: boolean | User$tenantArgs<ExtArgs>
    vendor?: boolean | User$vendorArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | User$landlordArgs<ExtArgs>
    tenant?: boolean | User$tenantArgs<ExtArgs>
    vendor?: boolean | User$vendorArgs<ExtArgs>
  }

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User'
    objects: {
      landlord: Prisma.$LandlordPayload<ExtArgs> | null
      tenant: Prisma.$TenantPayload<ExtArgs> | null
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        landlordId: string | null
        tenantId: string | null
        vendorId: string | null
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User']
      meta: { name: 'User' }
    }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    landlord<T extends User$landlordArgs<ExtArgs> = {}>(
      args?: Subset<T, User$landlordArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    tenant<T extends User$tenantArgs<ExtArgs> = {}>(
      args?: Subset<T, User$tenantArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    vendor<T extends User$vendorArgs<ExtArgs> = {}>(
      args?: Subset<T, User$vendorArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$notificationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>
    readonly landlordId: FieldRef<'User', 'String'>
    readonly tenantId: FieldRef<'User', 'String'>
    readonly vendorId: FieldRef<'User', 'String'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.landlord
   */
  export type User$landlordArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    where?: LandlordWhereInput
  }

  /**
   * User.tenant
   */
  export type User$tenantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * User.vendor
   */
  export type User$vendorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }

  /**
   * Model Complex
   */

  export type AggregateComplex = {
    _count: ComplexCountAggregateOutputType | null
    _min: ComplexMinAggregateOutputType | null
    _max: ComplexMaxAggregateOutputType | null
  }

  export type ComplexMinAggregateOutputType = {
    id: string | null
    landlordId: string | null
    name: string | null
    countryCode: string | null
    cityName: string | null
    street: string | null
    address: string | null
    description: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ComplexMaxAggregateOutputType = {
    id: string | null
    landlordId: string | null
    name: string | null
    countryCode: string | null
    cityName: string | null
    street: string | null
    address: string | null
    description: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ComplexCountAggregateOutputType = {
    id: number
    landlordId: number
    name: number
    countryCode: number
    cityName: number
    street: number
    address: number
    description: number
    notes: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type ComplexMinAggregateInputType = {
    id?: true
    landlordId?: true
    name?: true
    countryCode?: true
    cityName?: true
    street?: true
    address?: true
    description?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ComplexMaxAggregateInputType = {
    id?: true
    landlordId?: true
    name?: true
    countryCode?: true
    cityName?: true
    street?: true
    address?: true
    description?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ComplexCountAggregateInputType = {
    id?: true
    landlordId?: true
    name?: true
    countryCode?: true
    cityName?: true
    street?: true
    address?: true
    description?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ComplexAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Complex to aggregate.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Complexes to fetch.
     */
    orderBy?:
      | ComplexOrderByWithRelationInput
      | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Complexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Complexes
     **/
    _count?: true | ComplexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ComplexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ComplexMaxAggregateInputType
  }

  export type GetComplexAggregateType<T extends ComplexAggregateArgs> = {
    [P in keyof T & keyof AggregateComplex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplex[P]>
      : GetScalarType<T[P], AggregateComplex[P]>
  }

  export type ComplexGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ComplexWhereInput
    orderBy?:
      | ComplexOrderByWithAggregationInput
      | ComplexOrderByWithAggregationInput[]
    by: ComplexScalarFieldEnum[] | ComplexScalarFieldEnum
    having?: ComplexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplexCountAggregateInputType | true
    _min?: ComplexMinAggregateInputType
    _max?: ComplexMaxAggregateInputType
  }

  export type ComplexGroupByOutputType = {
    id: string
    landlordId: string
    name: string
    countryCode: string
    cityName: string
    street: string | null
    address: string | null
    description: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ComplexCountAggregateOutputType | null
    _min: ComplexMinAggregateOutputType | null
    _max: ComplexMaxAggregateOutputType | null
  }

  type GetComplexGroupByPayload<T extends ComplexGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ComplexGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ComplexGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplexGroupByOutputType[P]>
            : GetScalarType<T[P], ComplexGroupByOutputType[P]>
        }
      >
    >

  export type ComplexSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      landlordId?: boolean
      name?: boolean
      countryCode?: boolean
      cityName?: boolean
      street?: boolean
      address?: boolean
      description?: boolean
      notes?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      landlord?: boolean | LandlordDefaultArgs<ExtArgs>
      units?: boolean | Complex$unitsArgs<ExtArgs>
      _count?: boolean | ComplexCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['complex']
  >

  export type ComplexSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      landlordId?: boolean
      name?: boolean
      countryCode?: boolean
      cityName?: boolean
      street?: boolean
      address?: boolean
      description?: boolean
      notes?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['complex']
  >

  export type ComplexSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      landlordId?: boolean
      name?: boolean
      countryCode?: boolean
      cityName?: boolean
      street?: boolean
      address?: boolean
      description?: boolean
      notes?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['complex']
  >

  export type ComplexSelectScalar = {
    id?: boolean
    landlordId?: boolean
    name?: boolean
    countryCode?: boolean
    cityName?: boolean
    street?: boolean
    address?: boolean
    description?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ComplexOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'landlordId'
    | 'name'
    | 'countryCode'
    | 'cityName'
    | 'street'
    | 'address'
    | 'description'
    | 'notes'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['complex']
  >
  export type ComplexInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    units?: boolean | Complex$unitsArgs<ExtArgs>
    _count?: boolean | ComplexCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComplexIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
  }
  export type ComplexIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
  }

  export type $ComplexPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Complex'
    objects: {
      landlord: Prisma.$LandlordPayload<ExtArgs>
      units: Prisma.$UnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        landlordId: string
        name: string
        countryCode: string
        cityName: string
        street: string | null
        address: string | null
        description: string | null
        notes: string | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['complex']
    >
    composites: {}
  }

  type ComplexGetPayload<
    S extends boolean | null | undefined | ComplexDefaultArgs,
  > = $Result.GetResult<Prisma.$ComplexPayload, S>

  type ComplexCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ComplexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComplexCountAggregateInputType | true
  }

  export interface ComplexDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Complex']
      meta: { name: 'Complex' }
    }
    /**
     * Find zero or one Complex that matches the filter.
     * @param {ComplexFindUniqueArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplexFindUniqueArgs>(
      args: SelectSubset<T, ComplexFindUniqueArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Complex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplexFindUniqueOrThrowArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplexFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ComplexFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Complex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexFindFirstArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplexFindFirstArgs>(
      args?: SelectSubset<T, ComplexFindFirstArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Complex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexFindFirstOrThrowArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplexFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ComplexFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Complexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complexes
     * const complexes = await prisma.complex.findMany()
     *
     * // Get first 10 Complexes
     * const complexes = await prisma.complex.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const complexWithIdOnly = await prisma.complex.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ComplexFindManyArgs>(
      args?: SelectSubset<T, ComplexFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Complex.
     * @param {ComplexCreateArgs} args - Arguments to create a Complex.
     * @example
     * // Create one Complex
     * const Complex = await prisma.complex.create({
     *   data: {
     *     // ... data to create a Complex
     *   }
     * })
     *
     */
    create<T extends ComplexCreateArgs>(
      args: SelectSubset<T, ComplexCreateArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Complexes.
     * @param {ComplexCreateManyArgs} args - Arguments to create many Complexes.
     * @example
     * // Create many Complexes
     * const complex = await prisma.complex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ComplexCreateManyArgs>(
      args?: SelectSubset<T, ComplexCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complexes and returns the data saved in the database.
     * @param {ComplexCreateManyAndReturnArgs} args - Arguments to create many Complexes.
     * @example
     * // Create many Complexes
     * const complex = await prisma.complex.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Complexes and only return the `id`
     * const complexWithIdOnly = await prisma.complex.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ComplexCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ComplexCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Complex.
     * @param {ComplexDeleteArgs} args - Arguments to delete one Complex.
     * @example
     * // Delete one Complex
     * const Complex = await prisma.complex.delete({
     *   where: {
     *     // ... filter to delete one Complex
     *   }
     * })
     *
     */
    delete<T extends ComplexDeleteArgs>(
      args: SelectSubset<T, ComplexDeleteArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Complex.
     * @param {ComplexUpdateArgs} args - Arguments to update one Complex.
     * @example
     * // Update one Complex
     * const complex = await prisma.complex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ComplexUpdateArgs>(
      args: SelectSubset<T, ComplexUpdateArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Complexes.
     * @param {ComplexDeleteManyArgs} args - Arguments to filter Complexes to delete.
     * @example
     * // Delete a few Complexes
     * const { count } = await prisma.complex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ComplexDeleteManyArgs>(
      args?: SelectSubset<T, ComplexDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complexes
     * const complex = await prisma.complex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ComplexUpdateManyArgs>(
      args: SelectSubset<T, ComplexUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complexes and returns the data updated in the database.
     * @param {ComplexUpdateManyAndReturnArgs} args - Arguments to update many Complexes.
     * @example
     * // Update many Complexes
     * const complex = await prisma.complex.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Complexes and only return the `id`
     * const complexWithIdOnly = await prisma.complex.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComplexUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ComplexUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Complex.
     * @param {ComplexUpsertArgs} args - Arguments to update or create a Complex.
     * @example
     * // Update or create a Complex
     * const complex = await prisma.complex.upsert({
     *   create: {
     *     // ... data to create a Complex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complex we want to update
     *   }
     * })
     */
    upsert<T extends ComplexUpsertArgs>(
      args: SelectSubset<T, ComplexUpsertArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      $Result.GetResult<
        Prisma.$ComplexPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Complexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexCountArgs} args - Arguments to filter Complexes to count.
     * @example
     * // Count the number of Complexes
     * const count = await prisma.complex.count({
     *   where: {
     *     // ... the filter for the Complexes we want to count
     *   }
     * })
     **/
    count<T extends ComplexCountArgs>(
      args?: Subset<T, ComplexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplexAggregateArgs>(
      args: Subset<T, ComplexAggregateArgs>,
    ): Prisma.PrismaPromise<GetComplexAggregateType<T>>

    /**
     * Group by Complex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexGroupByArgs} args - Group by arguments.
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
      T extends ComplexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplexGroupByArgs['orderBy'] }
        : { orderBy?: ComplexGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ComplexGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetComplexGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Complex model
     */
    readonly fields: ComplexFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplexClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    landlord<T extends LandlordDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LandlordDefaultArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      | $Result.GetResult<
          Prisma.$LandlordPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    units<T extends Complex$unitsArgs<ExtArgs> = {}>(
      args?: Subset<T, Complex$unitsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UnitPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Complex model
   */
  interface ComplexFieldRefs {
    readonly id: FieldRef<'Complex', 'String'>
    readonly landlordId: FieldRef<'Complex', 'String'>
    readonly name: FieldRef<'Complex', 'String'>
    readonly countryCode: FieldRef<'Complex', 'String'>
    readonly cityName: FieldRef<'Complex', 'String'>
    readonly street: FieldRef<'Complex', 'String'>
    readonly address: FieldRef<'Complex', 'String'>
    readonly description: FieldRef<'Complex', 'String'>
    readonly notes: FieldRef<'Complex', 'String'>
    readonly createdAt: FieldRef<'Complex', 'DateTime'>
    readonly updatedAt: FieldRef<'Complex', 'DateTime'>
    readonly deletedAt: FieldRef<'Complex', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Complex findUnique
   */
  export type ComplexFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex findUniqueOrThrow
   */
  export type ComplexFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex findFirst
   */
  export type ComplexFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Complexes to fetch.
     */
    orderBy?:
      | ComplexOrderByWithRelationInput
      | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Complexes.
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Complexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Complexes.
     */
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * Complex findFirstOrThrow
   */
  export type ComplexFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Complexes to fetch.
     */
    orderBy?:
      | ComplexOrderByWithRelationInput
      | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Complexes.
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Complexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Complexes.
     */
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * Complex findMany
   */
  export type ComplexFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complexes to fetch.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Complexes to fetch.
     */
    orderBy?:
      | ComplexOrderByWithRelationInput
      | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Complexes.
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Complexes.
     */
    skip?: number
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * Complex create
   */
  export type ComplexCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * The data needed to create a Complex.
     */
    data: XOR<ComplexCreateInput, ComplexUncheckedCreateInput>
  }

  /**
   * Complex createMany
   */
  export type ComplexCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Complexes.
     */
    data: ComplexCreateManyInput | ComplexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complex createManyAndReturn
   */
  export type ComplexCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * The data used to create many Complexes.
     */
    data: ComplexCreateManyInput | ComplexCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complex update
   */
  export type ComplexUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * The data needed to update a Complex.
     */
    data: XOR<ComplexUpdateInput, ComplexUncheckedUpdateInput>
    /**
     * Choose, which Complex to update.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex updateMany
   */
  export type ComplexUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Complexes.
     */
    data: XOR<ComplexUpdateManyMutationInput, ComplexUncheckedUpdateManyInput>
    /**
     * Filter which Complexes to update
     */
    where?: ComplexWhereInput
    /**
     * Limit how many Complexes to update.
     */
    limit?: number
  }

  /**
   * Complex updateManyAndReturn
   */
  export type ComplexUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * The data used to update Complexes.
     */
    data: XOR<ComplexUpdateManyMutationInput, ComplexUncheckedUpdateManyInput>
    /**
     * Filter which Complexes to update
     */
    where?: ComplexWhereInput
    /**
     * Limit how many Complexes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complex upsert
   */
  export type ComplexUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * The filter to search for the Complex to update in case it exists.
     */
    where: ComplexWhereUniqueInput
    /**
     * In case the Complex found by the `where` argument doesn't exist, create a new Complex with this data.
     */
    create: XOR<ComplexCreateInput, ComplexUncheckedCreateInput>
    /**
     * In case the Complex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplexUpdateInput, ComplexUncheckedUpdateInput>
  }

  /**
   * Complex delete
   */
  export type ComplexDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter which Complex to delete.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex deleteMany
   */
  export type ComplexDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Complexes to delete
     */
    where?: ComplexWhereInput
    /**
     * Limit how many Complexes to delete.
     */
    limit?: number
  }

  /**
   * Complex.units
   */
  export type Complex$unitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Complex without action
   */
  export type ComplexDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
  }

  /**
   * Model Landlord
   */

  export type AggregateLandlord = {
    _count: LandlordCountAggregateOutputType | null
    _min: LandlordMinAggregateOutputType | null
    _max: LandlordMaxAggregateOutputType | null
  }

  export type LandlordMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    idType: $Enums.IdType | null
    idNumber: string | null
    idDocumentUrl: string | null
    isVerified: boolean | null
    proofOfOwnership: string | null
    bankName: string | null
    bankAccount: string | null
    mobileMoneyNumber: string | null
    notificationPrefs: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LandlordMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    idType: $Enums.IdType | null
    idNumber: string | null
    idDocumentUrl: string | null
    isVerified: boolean | null
    proofOfOwnership: string | null
    bankName: string | null
    bankAccount: string | null
    mobileMoneyNumber: string | null
    notificationPrefs: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LandlordCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    passwordHash: number
    idType: number
    idNumber: number
    idDocumentUrl: number
    isVerified: number
    proofOfOwnership: number
    bankName: number
    bankAccount: number
    mobileMoneyNumber: number
    notificationPrefs: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type LandlordMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    idType?: true
    idNumber?: true
    idDocumentUrl?: true
    isVerified?: true
    proofOfOwnership?: true
    bankName?: true
    bankAccount?: true
    mobileMoneyNumber?: true
    notificationPrefs?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LandlordMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    idType?: true
    idNumber?: true
    idDocumentUrl?: true
    isVerified?: true
    proofOfOwnership?: true
    bankName?: true
    bankAccount?: true
    mobileMoneyNumber?: true
    notificationPrefs?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LandlordCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    idType?: true
    idNumber?: true
    idDocumentUrl?: true
    isVerified?: true
    proofOfOwnership?: true
    bankName?: true
    bankAccount?: true
    mobileMoneyNumber?: true
    notificationPrefs?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LandlordAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Landlord to aggregate.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Landlords to fetch.
     */
    orderBy?:
      | LandlordOrderByWithRelationInput
      | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Landlords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Landlords
     **/
    _count?: true | LandlordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LandlordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LandlordMaxAggregateInputType
  }

  export type GetLandlordAggregateType<T extends LandlordAggregateArgs> = {
    [P in keyof T & keyof AggregateLandlord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandlord[P]>
      : GetScalarType<T[P], AggregateLandlord[P]>
  }

  export type LandlordGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LandlordWhereInput
    orderBy?:
      | LandlordOrderByWithAggregationInput
      | LandlordOrderByWithAggregationInput[]
    by: LandlordScalarFieldEnum[] | LandlordScalarFieldEnum
    having?: LandlordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandlordCountAggregateInputType | true
    _min?: LandlordMinAggregateInputType
    _max?: LandlordMaxAggregateInputType
  }

  export type LandlordGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType: $Enums.IdType | null
    idNumber: string | null
    idDocumentUrl: string | null
    isVerified: boolean | null
    proofOfOwnership: string | null
    bankName: string | null
    bankAccount: string | null
    mobileMoneyNumber: string | null
    notificationPrefs: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: LandlordCountAggregateOutputType | null
    _min: LandlordMinAggregateOutputType | null
    _max: LandlordMaxAggregateOutputType | null
  }

  type GetLandlordGroupByPayload<T extends LandlordGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LandlordGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LandlordGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandlordGroupByOutputType[P]>
            : GetScalarType<T[P], LandlordGroupByOutputType[P]>
        }
      >
    >

  export type LandlordSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      firstName?: boolean
      lastName?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      idType?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      isVerified?: boolean
      proofOfOwnership?: boolean
      bankName?: boolean
      bankAccount?: boolean
      mobileMoneyNumber?: boolean
      notificationPrefs?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      user?: boolean | Landlord$userArgs<ExtArgs>
      complexes?: boolean | Landlord$complexesArgs<ExtArgs>
      leases?: boolean | Landlord$leasesArgs<ExtArgs>
      _count?: boolean | LandlordCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['landlord']
  >

  export type LandlordSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      firstName?: boolean
      lastName?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      idType?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      isVerified?: boolean
      proofOfOwnership?: boolean
      bankName?: boolean
      bankAccount?: boolean
      mobileMoneyNumber?: boolean
      notificationPrefs?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
    },
    ExtArgs['result']['landlord']
  >

  export type LandlordSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      firstName?: boolean
      lastName?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      idType?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      isVerified?: boolean
      proofOfOwnership?: boolean
      bankName?: boolean
      bankAccount?: boolean
      mobileMoneyNumber?: boolean
      notificationPrefs?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
    },
    ExtArgs['result']['landlord']
  >

  export type LandlordSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    idType?: boolean
    idNumber?: boolean
    idDocumentUrl?: boolean
    isVerified?: boolean
    proofOfOwnership?: boolean
    bankName?: boolean
    bankAccount?: boolean
    mobileMoneyNumber?: boolean
    notificationPrefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type LandlordOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phone'
    | 'passwordHash'
    | 'idType'
    | 'idNumber'
    | 'idDocumentUrl'
    | 'isVerified'
    | 'proofOfOwnership'
    | 'bankName'
    | 'bankAccount'
    | 'mobileMoneyNumber'
    | 'notificationPrefs'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['landlord']
  >
  export type LandlordInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Landlord$userArgs<ExtArgs>
    complexes?: boolean | Landlord$complexesArgs<ExtArgs>
    leases?: boolean | Landlord$leasesArgs<ExtArgs>
    _count?: boolean | LandlordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LandlordIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type LandlordIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $LandlordPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Landlord'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      complexes: Prisma.$ComplexPayload<ExtArgs>[]
      leases: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        firstName: string
        lastName: string
        email: string
        phone: string
        passwordHash: string
        idType: $Enums.IdType | null
        idNumber: string | null
        idDocumentUrl: string | null
        isVerified: boolean | null
        proofOfOwnership: string | null
        bankName: string | null
        bankAccount: string | null
        mobileMoneyNumber: string | null
        notificationPrefs: string | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['landlord']
    >
    composites: {}
  }

  type LandlordGetPayload<
    S extends boolean | null | undefined | LandlordDefaultArgs,
  > = $Result.GetResult<Prisma.$LandlordPayload, S>

  type LandlordCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LandlordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LandlordCountAggregateInputType | true
  }

  export interface LandlordDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Landlord']
      meta: { name: 'Landlord' }
    }
    /**
     * Find zero or one Landlord that matches the filter.
     * @param {LandlordFindUniqueArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandlordFindUniqueArgs>(
      args: SelectSubset<T, LandlordFindUniqueArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Landlord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandlordFindUniqueOrThrowArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandlordFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LandlordFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Landlord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindFirstArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandlordFindFirstArgs>(
      args?: SelectSubset<T, LandlordFindFirstArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Landlord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindFirstOrThrowArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandlordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LandlordFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Landlords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landlords
     * const landlords = await prisma.landlord.findMany()
     *
     * // Get first 10 Landlords
     * const landlords = await prisma.landlord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const landlordWithIdOnly = await prisma.landlord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LandlordFindManyArgs>(
      args?: SelectSubset<T, LandlordFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Landlord.
     * @param {LandlordCreateArgs} args - Arguments to create a Landlord.
     * @example
     * // Create one Landlord
     * const Landlord = await prisma.landlord.create({
     *   data: {
     *     // ... data to create a Landlord
     *   }
     * })
     *
     */
    create<T extends LandlordCreateArgs>(
      args: SelectSubset<T, LandlordCreateArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Landlords.
     * @param {LandlordCreateManyArgs} args - Arguments to create many Landlords.
     * @example
     * // Create many Landlords
     * const landlord = await prisma.landlord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LandlordCreateManyArgs>(
      args?: SelectSubset<T, LandlordCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Landlords and returns the data saved in the database.
     * @param {LandlordCreateManyAndReturnArgs} args - Arguments to create many Landlords.
     * @example
     * // Create many Landlords
     * const landlord = await prisma.landlord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Landlords and only return the `id`
     * const landlordWithIdOnly = await prisma.landlord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LandlordCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LandlordCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Landlord.
     * @param {LandlordDeleteArgs} args - Arguments to delete one Landlord.
     * @example
     * // Delete one Landlord
     * const Landlord = await prisma.landlord.delete({
     *   where: {
     *     // ... filter to delete one Landlord
     *   }
     * })
     *
     */
    delete<T extends LandlordDeleteArgs>(
      args: SelectSubset<T, LandlordDeleteArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Landlord.
     * @param {LandlordUpdateArgs} args - Arguments to update one Landlord.
     * @example
     * // Update one Landlord
     * const landlord = await prisma.landlord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LandlordUpdateArgs>(
      args: SelectSubset<T, LandlordUpdateArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Landlords.
     * @param {LandlordDeleteManyArgs} args - Arguments to filter Landlords to delete.
     * @example
     * // Delete a few Landlords
     * const { count } = await prisma.landlord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LandlordDeleteManyArgs>(
      args?: SelectSubset<T, LandlordDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landlords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landlords
     * const landlord = await prisma.landlord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LandlordUpdateManyArgs>(
      args: SelectSubset<T, LandlordUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landlords and returns the data updated in the database.
     * @param {LandlordUpdateManyAndReturnArgs} args - Arguments to update many Landlords.
     * @example
     * // Update many Landlords
     * const landlord = await prisma.landlord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Landlords and only return the `id`
     * const landlordWithIdOnly = await prisma.landlord.updateManyAndReturn({
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
    updateManyAndReturn<T extends LandlordUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LandlordUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Landlord.
     * @param {LandlordUpsertArgs} args - Arguments to update or create a Landlord.
     * @example
     * // Update or create a Landlord
     * const landlord = await prisma.landlord.upsert({
     *   create: {
     *     // ... data to create a Landlord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landlord we want to update
     *   }
     * })
     */
    upsert<T extends LandlordUpsertArgs>(
      args: SelectSubset<T, LandlordUpsertArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      $Result.GetResult<
        Prisma.$LandlordPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Landlords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordCountArgs} args - Arguments to filter Landlords to count.
     * @example
     * // Count the number of Landlords
     * const count = await prisma.landlord.count({
     *   where: {
     *     // ... the filter for the Landlords we want to count
     *   }
     * })
     **/
    count<T extends LandlordCountArgs>(
      args?: Subset<T, LandlordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandlordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landlord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandlordAggregateArgs>(
      args: Subset<T, LandlordAggregateArgs>,
    ): Prisma.PrismaPromise<GetLandlordAggregateType<T>>

    /**
     * Group by Landlord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordGroupByArgs} args - Group by arguments.
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
      T extends LandlordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandlordGroupByArgs['orderBy'] }
        : { orderBy?: LandlordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LandlordGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLandlordGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Landlord model
     */
    readonly fields: LandlordFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Landlord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandlordClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends Landlord$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Landlord$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    complexes<T extends Landlord$complexesArgs<ExtArgs> = {}>(
      args?: Subset<T, Landlord$complexesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ComplexPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    leases<T extends Landlord$leasesArgs<ExtArgs> = {}>(
      args?: Subset<T, Landlord$leasesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LeasePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Landlord model
   */
  interface LandlordFieldRefs {
    readonly id: FieldRef<'Landlord', 'String'>
    readonly firstName: FieldRef<'Landlord', 'String'>
    readonly lastName: FieldRef<'Landlord', 'String'>
    readonly email: FieldRef<'Landlord', 'String'>
    readonly phone: FieldRef<'Landlord', 'String'>
    readonly passwordHash: FieldRef<'Landlord', 'String'>
    readonly idType: FieldRef<'Landlord', 'IdType'>
    readonly idNumber: FieldRef<'Landlord', 'String'>
    readonly idDocumentUrl: FieldRef<'Landlord', 'String'>
    readonly isVerified: FieldRef<'Landlord', 'Boolean'>
    readonly proofOfOwnership: FieldRef<'Landlord', 'String'>
    readonly bankName: FieldRef<'Landlord', 'String'>
    readonly bankAccount: FieldRef<'Landlord', 'String'>
    readonly mobileMoneyNumber: FieldRef<'Landlord', 'String'>
    readonly notificationPrefs: FieldRef<'Landlord', 'String'>
    readonly createdAt: FieldRef<'Landlord', 'DateTime'>
    readonly updatedAt: FieldRef<'Landlord', 'DateTime'>
    readonly deletedAt: FieldRef<'Landlord', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Landlord findUnique
   */
  export type LandlordFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord findUniqueOrThrow
   */
  export type LandlordFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord findFirst
   */
  export type LandlordFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Landlords to fetch.
     */
    orderBy?:
      | LandlordOrderByWithRelationInput
      | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Landlords.
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Landlords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Landlords.
     */
    distinct?: LandlordScalarFieldEnum | LandlordScalarFieldEnum[]
  }

  /**
   * Landlord findFirstOrThrow
   */
  export type LandlordFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Landlords to fetch.
     */
    orderBy?:
      | LandlordOrderByWithRelationInput
      | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Landlords.
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Landlords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Landlords.
     */
    distinct?: LandlordScalarFieldEnum | LandlordScalarFieldEnum[]
  }

  /**
   * Landlord findMany
   */
  export type LandlordFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlords to fetch.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Landlords to fetch.
     */
    orderBy?:
      | LandlordOrderByWithRelationInput
      | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Landlords.
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Landlords.
     */
    skip?: number
    distinct?: LandlordScalarFieldEnum | LandlordScalarFieldEnum[]
  }

  /**
   * Landlord create
   */
  export type LandlordCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * The data needed to create a Landlord.
     */
    data: XOR<LandlordCreateInput, LandlordUncheckedCreateInput>
  }

  /**
   * Landlord createMany
   */
  export type LandlordCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Landlords.
     */
    data: LandlordCreateManyInput | LandlordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landlord createManyAndReturn
   */
  export type LandlordCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * The data used to create many Landlords.
     */
    data: LandlordCreateManyInput | LandlordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landlord update
   */
  export type LandlordUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * The data needed to update a Landlord.
     */
    data: XOR<LandlordUpdateInput, LandlordUncheckedUpdateInput>
    /**
     * Choose, which Landlord to update.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord updateMany
   */
  export type LandlordUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Landlords.
     */
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyInput>
    /**
     * Filter which Landlords to update
     */
    where?: LandlordWhereInput
    /**
     * Limit how many Landlords to update.
     */
    limit?: number
  }

  /**
   * Landlord updateManyAndReturn
   */
  export type LandlordUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * The data used to update Landlords.
     */
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyInput>
    /**
     * Filter which Landlords to update
     */
    where?: LandlordWhereInput
    /**
     * Limit how many Landlords to update.
     */
    limit?: number
  }

  /**
   * Landlord upsert
   */
  export type LandlordUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * The filter to search for the Landlord to update in case it exists.
     */
    where: LandlordWhereUniqueInput
    /**
     * In case the Landlord found by the `where` argument doesn't exist, create a new Landlord with this data.
     */
    create: XOR<LandlordCreateInput, LandlordUncheckedCreateInput>
    /**
     * In case the Landlord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandlordUpdateInput, LandlordUncheckedUpdateInput>
  }

  /**
   * Landlord delete
   */
  export type LandlordDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter which Landlord to delete.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord deleteMany
   */
  export type LandlordDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Landlords to delete
     */
    where?: LandlordWhereInput
    /**
     * Limit how many Landlords to delete.
     */
    limit?: number
  }

  /**
   * Landlord.user
   */
  export type Landlord$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Landlord.complexes
   */
  export type Landlord$complexesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    where?: ComplexWhereInput
    orderBy?:
      | ComplexOrderByWithRelationInput
      | ComplexOrderByWithRelationInput[]
    cursor?: ComplexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * Landlord.leases
   */
  export type Landlord$leasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Landlord without action
   */
  export type LandlordDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
  }

  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseAvgAggregateOutputType = {
    rentAmount: Decimal | null
    advanceMonths: number | null
    noticePeriod: number | null
  }

  export type LeaseSumAggregateOutputType = {
    rentAmount: Decimal | null
    advanceMonths: number | null
    noticePeriod: number | null
  }

  export type LeaseMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    tenantId: string | null
    landlordId: string | null
    startedAt: Date | null
    endsAt: Date | null
    rentAmount: Decimal | null
    currency: string | null
    advanceMonths: number | null
    documentUrl: string | null
    status: $Enums.LeaseStatus | null
    rules: string | null
    noticePeriod: number | null
    parentLeaseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    tenantId: string | null
    landlordId: string | null
    startedAt: Date | null
    endsAt: Date | null
    rentAmount: Decimal | null
    currency: string | null
    advanceMonths: number | null
    documentUrl: string | null
    status: $Enums.LeaseStatus | null
    rules: string | null
    noticePeriod: number | null
    parentLeaseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    unitId: number
    tenantId: number
    landlordId: number
    startedAt: number
    endsAt: number
    rentAmount: number
    currency: number
    advanceMonths: number
    documentUrl: number
    status: number
    rules: number
    noticePeriod: number
    parentLeaseId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type LeaseAvgAggregateInputType = {
    rentAmount?: true
    advanceMonths?: true
    noticePeriod?: true
  }

  export type LeaseSumAggregateInputType = {
    rentAmount?: true
    advanceMonths?: true
    noticePeriod?: true
  }

  export type LeaseMinAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    landlordId?: true
    startedAt?: true
    endsAt?: true
    rentAmount?: true
    currency?: true
    advanceMonths?: true
    documentUrl?: true
    status?: true
    rules?: true
    noticePeriod?: true
    parentLeaseId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    landlordId?: true
    startedAt?: true
    endsAt?: true
    rentAmount?: true
    currency?: true
    advanceMonths?: true
    documentUrl?: true
    status?: true
    rules?: true
    noticePeriod?: true
    parentLeaseId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    landlordId?: true
    startedAt?: true
    endsAt?: true
    rentAmount?: true
    currency?: true
    advanceMonths?: true
    documentUrl?: true
    status?: true
    rules?: true
    noticePeriod?: true
    parentLeaseId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LeaseAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Leases
     **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LeaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LeaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
    [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }

  export type LeaseGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeaseWhereInput
    orderBy?:
      | LeaseOrderByWithAggregationInput
      | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _avg?: LeaseAvgAggregateInputType
    _sum?: LeaseSumAggregateInputType
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: string
    unitId: string
    tenantId: string
    landlordId: string
    startedAt: Date
    endsAt: Date
    rentAmount: Decimal
    currency: string
    advanceMonths: number | null
    documentUrl: string | null
    status: $Enums.LeaseStatus | null
    rules: string | null
    noticePeriod: number | null
    parentLeaseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LeaseGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LeaseGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >

  export type LeaseSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      unitId?: boolean
      tenantId?: boolean
      landlordId?: boolean
      startedAt?: boolean
      endsAt?: boolean
      rentAmount?: boolean
      currency?: boolean
      advanceMonths?: boolean
      documentUrl?: boolean
      status?: boolean
      rules?: boolean
      noticePeriod?: boolean
      parentLeaseId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      landlord?: boolean | LandlordDefaultArgs<ExtArgs>
      tenant?: boolean | TenantDefaultArgs<ExtArgs>
      unit?: boolean | UnitDefaultArgs<ExtArgs>
      payments?: boolean | Lease$paymentsArgs<ExtArgs>
      parentLease?: boolean | Lease$parentLeaseArgs<ExtArgs>
      renewals?: boolean | Lease$renewalsArgs<ExtArgs>
      _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['lease']
  >

  export type LeaseSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      unitId?: boolean
      tenantId?: boolean
      landlordId?: boolean
      startedAt?: boolean
      endsAt?: boolean
      rentAmount?: boolean
      currency?: boolean
      advanceMonths?: boolean
      documentUrl?: boolean
      status?: boolean
      rules?: boolean
      noticePeriod?: boolean
      parentLeaseId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      landlord?: boolean | LandlordDefaultArgs<ExtArgs>
      tenant?: boolean | TenantDefaultArgs<ExtArgs>
      unit?: boolean | UnitDefaultArgs<ExtArgs>
      parentLease?: boolean | Lease$parentLeaseArgs<ExtArgs>
    },
    ExtArgs['result']['lease']
  >

  export type LeaseSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      unitId?: boolean
      tenantId?: boolean
      landlordId?: boolean
      startedAt?: boolean
      endsAt?: boolean
      rentAmount?: boolean
      currency?: boolean
      advanceMonths?: boolean
      documentUrl?: boolean
      status?: boolean
      rules?: boolean
      noticePeriod?: boolean
      parentLeaseId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      landlord?: boolean | LandlordDefaultArgs<ExtArgs>
      tenant?: boolean | TenantDefaultArgs<ExtArgs>
      unit?: boolean | UnitDefaultArgs<ExtArgs>
      parentLease?: boolean | Lease$parentLeaseArgs<ExtArgs>
    },
    ExtArgs['result']['lease']
  >

  export type LeaseSelectScalar = {
    id?: boolean
    unitId?: boolean
    tenantId?: boolean
    landlordId?: boolean
    startedAt?: boolean
    endsAt?: boolean
    rentAmount?: boolean
    currency?: boolean
    advanceMonths?: boolean
    documentUrl?: boolean
    status?: boolean
    rules?: boolean
    noticePeriod?: boolean
    parentLeaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type LeaseOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'unitId'
    | 'tenantId'
    | 'landlordId'
    | 'startedAt'
    | 'endsAt'
    | 'rentAmount'
    | 'currency'
    | 'advanceMonths'
    | 'documentUrl'
    | 'status'
    | 'rules'
    | 'noticePeriod'
    | 'parentLeaseId'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['lease']
  >
  export type LeaseInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    payments?: boolean | Lease$paymentsArgs<ExtArgs>
    parentLease?: boolean | Lease$parentLeaseArgs<ExtArgs>
    renewals?: boolean | Lease$renewalsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    parentLease?: boolean | Lease$parentLeaseArgs<ExtArgs>
  }
  export type LeaseIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    parentLease?: boolean | Lease$parentLeaseArgs<ExtArgs>
  }

  export type $LeasePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Lease'
    objects: {
      landlord: Prisma.$LandlordPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      parentLease: Prisma.$LeasePayload<ExtArgs> | null
      renewals: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        unitId: string
        tenantId: string
        landlordId: string
        startedAt: Date
        endsAt: Date
        rentAmount: Prisma.Decimal
        currency: string
        advanceMonths: number | null
        documentUrl: string | null
        status: $Enums.LeaseStatus | null
        rules: string | null
        noticePeriod: number | null
        parentLeaseId: string | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['lease']
    >
    composites: {}
  }

  type LeaseGetPayload<
    S extends boolean | null | undefined | LeaseDefaultArgs,
  > = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaseCountAggregateInputType | true
  }

  export interface LeaseDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Lease']
      meta: { name: 'Lease' }
    }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(
      args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(
      args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     *
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeaseFindManyArgs>(
      args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     *
     */
    create<T extends LeaseCreateArgs>(
      args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeaseCreateManyArgs>(
      args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leases and returns the data saved in the database.
     * @param {LeaseCreateManyAndReturnArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeaseCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LeaseCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     *
     */
    delete<T extends LeaseDeleteArgs>(
      args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeaseUpdateArgs>(
      args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeaseDeleteManyArgs>(
      args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeaseUpdateManyArgs>(
      args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases and returns the data updated in the database.
     * @param {LeaseUpdateManyAndReturnArgs} args - Arguments to update many Leases.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaseUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LeaseUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(
      args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
     **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaseAggregateArgs>(
      args: Subset<T, LeaseAggregateArgs>,
    ): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
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
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetLeaseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Lease model
     */
    readonly fields: LeaseFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    landlord<T extends LandlordDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LandlordDefaultArgs<ExtArgs>>,
    ): Prisma__LandlordClient<
      | $Result.GetResult<
          Prisma.$LandlordPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TenantDefaultArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      | $Result.GetResult<
          Prisma.$TenantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UnitDefaultArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      | $Result.GetResult<
          Prisma.$UnitPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    payments<T extends Lease$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Lease$paymentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PaymentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    parentLease<T extends Lease$parentLeaseArgs<ExtArgs> = {}>(
      args?: Subset<T, Lease$parentLeaseArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      $Result.GetResult<
        Prisma.$LeasePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    renewals<T extends Lease$renewalsArgs<ExtArgs> = {}>(
      args?: Subset<T, Lease$renewalsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LeasePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Lease model
   */
  interface LeaseFieldRefs {
    readonly id: FieldRef<'Lease', 'String'>
    readonly unitId: FieldRef<'Lease', 'String'>
    readonly tenantId: FieldRef<'Lease', 'String'>
    readonly landlordId: FieldRef<'Lease', 'String'>
    readonly startedAt: FieldRef<'Lease', 'DateTime'>
    readonly endsAt: FieldRef<'Lease', 'DateTime'>
    readonly rentAmount: FieldRef<'Lease', 'Decimal'>
    readonly currency: FieldRef<'Lease', 'String'>
    readonly advanceMonths: FieldRef<'Lease', 'Int'>
    readonly documentUrl: FieldRef<'Lease', 'String'>
    readonly status: FieldRef<'Lease', 'LeaseStatus'>
    readonly rules: FieldRef<'Lease', 'String'>
    readonly noticePeriod: FieldRef<'Lease', 'Int'>
    readonly parentLeaseId: FieldRef<'Lease', 'String'>
    readonly createdAt: FieldRef<'Lease', 'DateTime'>
    readonly updatedAt: FieldRef<'Lease', 'DateTime'>
    readonly deletedAt: FieldRef<'Lease', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leases.
     */
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease createManyAndReturn
   */
  export type LeaseCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
  }

  /**
   * Lease updateManyAndReturn
   */
  export type LeaseUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to delete.
     */
    limit?: number
  }

  /**
   * Lease.payments
   */
  export type Lease$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Lease.parentLease
   */
  export type Lease$parentLeaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
  }

  /**
   * Lease.renewals
   */
  export type Lease$renewalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }

  /**
   * Model MaintenanceRequest
   */

  export type AggregateMaintenanceRequest = {
    _count: MaintenanceRequestCountAggregateOutputType | null
    _avg: MaintenanceRequestAvgAggregateOutputType | null
    _sum: MaintenanceRequestSumAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  export type MaintenanceRequestAvgAggregateOutputType = {
    cost: Decimal | null
  }

  export type MaintenanceRequestSumAggregateOutputType = {
    cost: Decimal | null
  }

  export type MaintenanceRequestMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    tenantId: string | null
    description: string | null
    photoUrl: string | null
    status: $Enums.MaintenanceStatus | null
    vendorId: string | null
    vendorResponse: string | null
    scheduledFor: Date | null
    completedAt: Date | null
    cost: Decimal | null
    costCurrency: string | null
    paymentStatus: $Enums.InvoiceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MaintenanceRequestMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    tenantId: string | null
    description: string | null
    photoUrl: string | null
    status: $Enums.MaintenanceStatus | null
    vendorId: string | null
    vendorResponse: string | null
    scheduledFor: Date | null
    completedAt: Date | null
    cost: Decimal | null
    costCurrency: string | null
    paymentStatus: $Enums.InvoiceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MaintenanceRequestCountAggregateOutputType = {
    id: number
    unitId: number
    tenantId: number
    description: number
    photoUrl: number
    status: number
    vendorId: number
    vendorResponse: number
    scheduledFor: number
    completedAt: number
    cost: number
    costCurrency: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type MaintenanceRequestAvgAggregateInputType = {
    cost?: true
  }

  export type MaintenanceRequestSumAggregateInputType = {
    cost?: true
  }

  export type MaintenanceRequestMinAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    description?: true
    photoUrl?: true
    status?: true
    vendorId?: true
    vendorResponse?: true
    scheduledFor?: true
    completedAt?: true
    cost?: true
    costCurrency?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MaintenanceRequestMaxAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    description?: true
    photoUrl?: true
    status?: true
    vendorId?: true
    vendorResponse?: true
    scheduledFor?: true
    completedAt?: true
    cost?: true
    costCurrency?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MaintenanceRequestCountAggregateInputType = {
    id?: true
    unitId?: true
    tenantId?: true
    description?: true
    photoUrl?: true
    status?: true
    vendorId?: true
    vendorResponse?: true
    scheduledFor?: true
    completedAt?: true
    cost?: true
    costCurrency?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MaintenanceRequestAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MaintenanceRequest to aggregate.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?:
      | MaintenanceRequestOrderByWithRelationInput
      | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MaintenanceRequests
     **/
    _count?: true | MaintenanceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MaintenanceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MaintenanceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MaintenanceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type GetMaintenanceRequestAggregateType<
    T extends MaintenanceRequestAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMaintenanceRequest]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
      : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
  }

  export type MaintenanceRequestGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MaintenanceRequestWhereInput
    orderBy?:
      | MaintenanceRequestOrderByWithAggregationInput
      | MaintenanceRequestOrderByWithAggregationInput[]
    by: MaintenanceRequestScalarFieldEnum[] | MaintenanceRequestScalarFieldEnum
    having?: MaintenanceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRequestCountAggregateInputType | true
    _avg?: MaintenanceRequestAvgAggregateInputType
    _sum?: MaintenanceRequestSumAggregateInputType
    _min?: MaintenanceRequestMinAggregateInputType
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type MaintenanceRequestGroupByOutputType = {
    id: string
    unitId: string
    tenantId: string
    description: string
    photoUrl: string | null
    status: $Enums.MaintenanceStatus | null
    vendorId: string | null
    vendorResponse: string | null
    scheduledFor: Date | null
    completedAt: Date | null
    cost: Decimal | null
    costCurrency: string | null
    paymentStatus: $Enums.InvoiceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: MaintenanceRequestCountAggregateOutputType | null
    _avg: MaintenanceRequestAvgAggregateOutputType | null
    _sum: MaintenanceRequestSumAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  type GetMaintenanceRequestGroupByPayload<
    T extends MaintenanceRequestGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRequestGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof MaintenanceRequestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
          : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
      }
    >
  >

  export type MaintenanceRequestSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      unitId?: boolean
      tenantId?: boolean
      description?: boolean
      photoUrl?: boolean
      status?: boolean
      vendorId?: boolean
      vendorResponse?: boolean
      scheduledFor?: boolean
      completedAt?: boolean
      cost?: boolean
      costCurrency?: boolean
      paymentStatus?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      tenant?: boolean | TenantDefaultArgs<ExtArgs>
      unit?: boolean | UnitDefaultArgs<ExtArgs>
      vendor?: boolean | MaintenanceRequest$vendorArgs<ExtArgs>
    },
    ExtArgs['result']['maintenanceRequest']
  >

  export type MaintenanceRequestSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      unitId?: boolean
      tenantId?: boolean
      description?: boolean
      photoUrl?: boolean
      status?: boolean
      vendorId?: boolean
      vendorResponse?: boolean
      scheduledFor?: boolean
      completedAt?: boolean
      cost?: boolean
      costCurrency?: boolean
      paymentStatus?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      tenant?: boolean | TenantDefaultArgs<ExtArgs>
      unit?: boolean | UnitDefaultArgs<ExtArgs>
      vendor?: boolean | MaintenanceRequest$vendorArgs<ExtArgs>
    },
    ExtArgs['result']['maintenanceRequest']
  >

  export type MaintenanceRequestSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      unitId?: boolean
      tenantId?: boolean
      description?: boolean
      photoUrl?: boolean
      status?: boolean
      vendorId?: boolean
      vendorResponse?: boolean
      scheduledFor?: boolean
      completedAt?: boolean
      cost?: boolean
      costCurrency?: boolean
      paymentStatus?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      tenant?: boolean | TenantDefaultArgs<ExtArgs>
      unit?: boolean | UnitDefaultArgs<ExtArgs>
      vendor?: boolean | MaintenanceRequest$vendorArgs<ExtArgs>
    },
    ExtArgs['result']['maintenanceRequest']
  >

  export type MaintenanceRequestSelectScalar = {
    id?: boolean
    unitId?: boolean
    tenantId?: boolean
    description?: boolean
    photoUrl?: boolean
    status?: boolean
    vendorId?: boolean
    vendorResponse?: boolean
    scheduledFor?: boolean
    completedAt?: boolean
    cost?: boolean
    costCurrency?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type MaintenanceRequestOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'unitId'
    | 'tenantId'
    | 'description'
    | 'photoUrl'
    | 'status'
    | 'vendorId'
    | 'vendorResponse'
    | 'scheduledFor'
    | 'completedAt'
    | 'cost'
    | 'costCurrency'
    | 'paymentStatus'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['maintenanceRequest']
  >
  export type MaintenanceRequestInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    vendor?: boolean | MaintenanceRequest$vendorArgs<ExtArgs>
  }
  export type MaintenanceRequestIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    vendor?: boolean | MaintenanceRequest$vendorArgs<ExtArgs>
  }
  export type MaintenanceRequestIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    vendor?: boolean | MaintenanceRequest$vendorArgs<ExtArgs>
  }

  export type $MaintenanceRequestPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MaintenanceRequest'
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        unitId: string
        tenantId: string
        description: string
        photoUrl: string | null
        status: $Enums.MaintenanceStatus | null
        vendorId: string | null
        vendorResponse: string | null
        scheduledFor: Date | null
        completedAt: Date | null
        cost: Prisma.Decimal | null
        costCurrency: string | null
        paymentStatus: $Enums.InvoiceStatus | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['maintenanceRequest']
    >
    composites: {}
  }

  type MaintenanceRequestGetPayload<
    S extends boolean | null | undefined | MaintenanceRequestDefaultArgs,
  > = $Result.GetResult<Prisma.$MaintenanceRequestPayload, S>

  type MaintenanceRequestCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MaintenanceRequestFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MaintenanceRequestCountAggregateInputType | true
  }

  export interface MaintenanceRequestDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRequest']
      meta: { name: 'MaintenanceRequest' }
    }
    /**
     * Find zero or one MaintenanceRequest that matches the filter.
     * @param {MaintenanceRequestFindUniqueArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRequestFindUniqueArgs>(
      args: SelectSubset<T, MaintenanceRequestFindUniqueArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one MaintenanceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceRequestFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRequestFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first MaintenanceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRequestFindFirstArgs>(
      args?: SelectSubset<T, MaintenanceRequestFindFirstArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first MaintenanceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more MaintenanceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
     *
     * // Get first 10 MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MaintenanceRequestFindManyArgs>(
      args?: SelectSubset<T, MaintenanceRequestFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a MaintenanceRequest.
     * @param {MaintenanceRequestCreateArgs} args - Arguments to create a MaintenanceRequest.
     * @example
     * // Create one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.create({
     *   data: {
     *     // ... data to create a MaintenanceRequest
     *   }
     * })
     *
     */
    create<T extends MaintenanceRequestCreateArgs>(
      args: SelectSubset<T, MaintenanceRequestCreateArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many MaintenanceRequests.
     * @param {MaintenanceRequestCreateManyArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MaintenanceRequestCreateManyArgs>(
      args?: SelectSubset<T, MaintenanceRequestCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceRequests and returns the data saved in the database.
     * @param {MaintenanceRequestCreateManyAndReturnArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MaintenanceRequests and only return the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MaintenanceRequestCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a MaintenanceRequest.
     * @param {MaintenanceRequestDeleteArgs} args - Arguments to delete one MaintenanceRequest.
     * @example
     * // Delete one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRequest
     *   }
     * })
     *
     */
    delete<T extends MaintenanceRequestDeleteArgs>(
      args: SelectSubset<T, MaintenanceRequestDeleteArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one MaintenanceRequest.
     * @param {MaintenanceRequestUpdateArgs} args - Arguments to update one MaintenanceRequest.
     * @example
     * // Update one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MaintenanceRequestUpdateArgs>(
      args: SelectSubset<T, MaintenanceRequestUpdateArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more MaintenanceRequests.
     * @param {MaintenanceRequestDeleteManyArgs} args - Arguments to filter MaintenanceRequests to delete.
     * @example
     * // Delete a few MaintenanceRequests
     * const { count } = await prisma.maintenanceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MaintenanceRequestDeleteManyArgs>(
      args?: SelectSubset<T, MaintenanceRequestDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MaintenanceRequestUpdateManyArgs>(
      args: SelectSubset<T, MaintenanceRequestUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests and returns the data updated in the database.
     * @param {MaintenanceRequestUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceRequests.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MaintenanceRequests and only return the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaintenanceRequestUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one MaintenanceRequest.
     * @param {MaintenanceRequestUpsertArgs} args - Arguments to update or create a MaintenanceRequest.
     * @example
     * // Update or create a MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRequest we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRequestUpsertArgs>(
      args: SelectSubset<T, MaintenanceRequestUpsertArgs<ExtArgs>>,
    ): Prisma__MaintenanceRequestClient<
      $Result.GetResult<
        Prisma.$MaintenanceRequestPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestCountArgs} args - Arguments to filter MaintenanceRequests to count.
     * @example
     * // Count the number of MaintenanceRequests
     * const count = await prisma.maintenanceRequest.count({
     *   where: {
     *     // ... the filter for the MaintenanceRequests we want to count
     *   }
     * })
     **/
    count<T extends MaintenanceRequestCountArgs>(
      args?: Subset<T, MaintenanceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              MaintenanceRequestCountAggregateOutputType
            >
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceRequestAggregateArgs>(
      args: Subset<T, MaintenanceRequestAggregateArgs>,
    ): Prisma.PrismaPromise<GetMaintenanceRequestAggregateType<T>>

    /**
     * Group by MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRequestGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MaintenanceRequestGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMaintenanceRequestGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the MaintenanceRequest model
     */
    readonly fields: MaintenanceRequestFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRequestClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TenantDefaultArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      | $Result.GetResult<
          Prisma.$TenantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UnitDefaultArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      | $Result.GetResult<
          Prisma.$UnitPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    vendor<T extends MaintenanceRequest$vendorArgs<ExtArgs> = {}>(
      args?: Subset<T, MaintenanceRequest$vendorArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the MaintenanceRequest model
   */
  interface MaintenanceRequestFieldRefs {
    readonly id: FieldRef<'MaintenanceRequest', 'String'>
    readonly unitId: FieldRef<'MaintenanceRequest', 'String'>
    readonly tenantId: FieldRef<'MaintenanceRequest', 'String'>
    readonly description: FieldRef<'MaintenanceRequest', 'String'>
    readonly photoUrl: FieldRef<'MaintenanceRequest', 'String'>
    readonly status: FieldRef<'MaintenanceRequest', 'MaintenanceStatus'>
    readonly vendorId: FieldRef<'MaintenanceRequest', 'String'>
    readonly vendorResponse: FieldRef<'MaintenanceRequest', 'String'>
    readonly scheduledFor: FieldRef<'MaintenanceRequest', 'DateTime'>
    readonly completedAt: FieldRef<'MaintenanceRequest', 'DateTime'>
    readonly cost: FieldRef<'MaintenanceRequest', 'Decimal'>
    readonly costCurrency: FieldRef<'MaintenanceRequest', 'String'>
    readonly paymentStatus: FieldRef<'MaintenanceRequest', 'InvoiceStatus'>
    readonly createdAt: FieldRef<'MaintenanceRequest', 'DateTime'>
    readonly updatedAt: FieldRef<'MaintenanceRequest', 'DateTime'>
    readonly deletedAt: FieldRef<'MaintenanceRequest', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * MaintenanceRequest findUnique
   */
  export type MaintenanceRequestFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findUniqueOrThrow
   */
  export type MaintenanceRequestFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findFirst
   */
  export type MaintenanceRequestFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?:
      | MaintenanceRequestOrderByWithRelationInput
      | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?:
      | MaintenanceRequestScalarFieldEnum
      | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findFirstOrThrow
   */
  export type MaintenanceRequestFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?:
      | MaintenanceRequestOrderByWithRelationInput
      | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?:
      | MaintenanceRequestScalarFieldEnum
      | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findMany
   */
  export type MaintenanceRequestFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequests to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?:
      | MaintenanceRequestOrderByWithRelationInput
      | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    distinct?:
      | MaintenanceRequestScalarFieldEnum
      | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest create
   */
  export type MaintenanceRequestCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRequest.
     */
    data: XOR<
      MaintenanceRequestCreateInput,
      MaintenanceRequestUncheckedCreateInput
    >
  }

  /**
   * MaintenanceRequest createMany
   */
  export type MaintenanceRequestCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MaintenanceRequests.
     */
    data:
      | MaintenanceRequestCreateManyInput
      | MaintenanceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceRequest createManyAndReturn
   */
  export type MaintenanceRequestCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceRequests.
     */
    data:
      | MaintenanceRequestCreateManyInput
      | MaintenanceRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRequest update
   */
  export type MaintenanceRequestUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRequest.
     */
    data: XOR<
      MaintenanceRequestUpdateInput,
      MaintenanceRequestUncheckedUpdateInput
    >
    /**
     * Choose, which MaintenanceRequest to update.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest updateMany
   */
  export type MaintenanceRequestUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<
      MaintenanceRequestUpdateManyMutationInput,
      MaintenanceRequestUncheckedUpdateManyInput
    >
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to update.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest updateManyAndReturn
   */
  export type MaintenanceRequestUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<
      MaintenanceRequestUpdateManyMutationInput,
      MaintenanceRequestUncheckedUpdateManyInput
    >
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRequest upsert
   */
  export type MaintenanceRequestUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRequest to update in case it exists.
     */
    where: MaintenanceRequestWhereUniqueInput
    /**
     * In case the MaintenanceRequest found by the `where` argument doesn't exist, create a new MaintenanceRequest with this data.
     */
    create: XOR<
      MaintenanceRequestCreateInput,
      MaintenanceRequestUncheckedCreateInput
    >
    /**
     * In case the MaintenanceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      MaintenanceRequestUpdateInput,
      MaintenanceRequestUncheckedUpdateInput
    >
  }

  /**
   * MaintenanceRequest delete
   */
  export type MaintenanceRequestDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRequest to delete.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest deleteMany
   */
  export type MaintenanceRequestDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MaintenanceRequests to delete
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest.vendor
   */
  export type MaintenanceRequest$vendorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * MaintenanceRequest without action
   */
  export type MaintenanceRequestDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
  }

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
    feeAmount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
    feeAmount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    amount: Decimal | null
    currency: string | null
    type: $Enums.PaymentType | null
    dueDate: Date | null
    paidAt: Date | null
    method: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionRef: string | null
    feeAmount: Decimal | null
    receiptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    amount: Decimal | null
    currency: string | null
    type: $Enums.PaymentType | null
    dueDate: Date | null
    paidAt: Date | null
    method: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionRef: string | null
    feeAmount: Decimal | null
    receiptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    leaseId: number
    amount: number
    currency: number
    type: number
    dueDate: number
    paidAt: number
    method: number
    paymentStatus: number
    transactionRef: number
    feeAmount: number
    receiptUrl: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type PaymentAvgAggregateInputType = {
    amount?: true
    feeAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    feeAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    leaseId?: true
    amount?: true
    currency?: true
    type?: true
    dueDate?: true
    paidAt?: true
    method?: true
    paymentStatus?: true
    transactionRef?: true
    feeAmount?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    leaseId?: true
    amount?: true
    currency?: true
    type?: true
    dueDate?: true
    paidAt?: true
    method?: true
    paymentStatus?: true
    transactionRef?: true
    feeAmount?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    leaseId?: true
    amount?: true
    currency?: true
    type?: true
    dueDate?: true
    paidAt?: true
    method?: true
    paymentStatus?: true
    transactionRef?: true
    feeAmount?: true
    receiptUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
     **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }

  export type PaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput
    orderBy?:
      | PaymentOrderByWithAggregationInput
      | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    leaseId: string
    amount: Decimal
    currency: string
    type: $Enums.PaymentType
    dueDate: Date
    paidAt: Date | null
    method: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus | null
    transactionRef: string | null
    feeAmount: Decimal | null
    receiptUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PaymentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >

  export type PaymentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      leaseId?: boolean
      amount?: boolean
      currency?: boolean
      type?: boolean
      dueDate?: boolean
      paidAt?: boolean
      method?: boolean
      paymentStatus?: boolean
      transactionRef?: boolean
      feeAmount?: boolean
      receiptUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      lease?: boolean | LeaseDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['payment']
  >

  export type PaymentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      leaseId?: boolean
      amount?: boolean
      currency?: boolean
      type?: boolean
      dueDate?: boolean
      paidAt?: boolean
      method?: boolean
      paymentStatus?: boolean
      transactionRef?: boolean
      feeAmount?: boolean
      receiptUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      lease?: boolean | LeaseDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['payment']
  >

  export type PaymentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      leaseId?: boolean
      amount?: boolean
      currency?: boolean
      type?: boolean
      dueDate?: boolean
      paidAt?: boolean
      method?: boolean
      paymentStatus?: boolean
      transactionRef?: boolean
      feeAmount?: boolean
      receiptUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      lease?: boolean | LeaseDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['payment']
  >

  export type PaymentSelectScalar = {
    id?: boolean
    leaseId?: boolean
    amount?: boolean
    currency?: boolean
    type?: boolean
    dueDate?: boolean
    paidAt?: boolean
    method?: boolean
    paymentStatus?: boolean
    transactionRef?: boolean
    feeAmount?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PaymentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'leaseId'
    | 'amount'
    | 'currency'
    | 'type'
    | 'dueDate'
    | 'paidAt'
    | 'method'
    | 'paymentStatus'
    | 'transactionRef'
    | 'feeAmount'
    | 'receiptUrl'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['payment']
  >
  export type PaymentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Payment'
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        leaseId: string
        amount: Prisma.Decimal
        currency: string
        type: $Enums.PaymentType
        dueDate: Date
        paidAt: Date | null
        method: $Enums.PaymentMethod
        paymentStatus: $Enums.PaymentStatus | null
        transactionRef: string | null
        feeAmount: Prisma.Decimal | null
        receiptUrl: string | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['payment']
    >
    composites: {}
  }

  type PaymentGetPayload<
    S extends boolean | null | undefined | PaymentDefaultArgs,
  > = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true
  }

  export interface PaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Payment']
      meta: { name: 'Payment' }
    }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     */
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     */
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPaymentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LeaseDefaultArgs<ExtArgs>>,
    ): Prisma__LeaseClient<
      | $Result.GetResult<
          Prisma.$LeasePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<'Payment', 'String'>
    readonly leaseId: FieldRef<'Payment', 'String'>
    readonly amount: FieldRef<'Payment', 'Decimal'>
    readonly currency: FieldRef<'Payment', 'String'>
    readonly type: FieldRef<'Payment', 'PaymentType'>
    readonly dueDate: FieldRef<'Payment', 'DateTime'>
    readonly paidAt: FieldRef<'Payment', 'DateTime'>
    readonly method: FieldRef<'Payment', 'PaymentMethod'>
    readonly paymentStatus: FieldRef<'Payment', 'PaymentStatus'>
    readonly transactionRef: FieldRef<'Payment', 'String'>
    readonly feeAmount: FieldRef<'Payment', 'Decimal'>
    readonly receiptUrl: FieldRef<'Payment', 'String'>
    readonly createdAt: FieldRef<'Payment', 'DateTime'>
    readonly updatedAt: FieldRef<'Payment', 'DateTime'>
    readonly deletedAt: FieldRef<'Payment', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    idType: $Enums.IdType | null
    idNumber: string | null
    idDocumentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    idType: $Enums.IdType | null
    idNumber: string | null
    idDocumentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    passwordHash: number
    idType: number
    idNumber: number
    idDocumentUrl: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type TenantMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    idType?: true
    idNumber?: true
    idDocumentUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    idType?: true
    idNumber?: true
    idDocumentUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passwordHash?: true
    idType?: true
    idNumber?: true
    idDocumentUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tenants
     **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
    [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }

  export type TenantGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TenantWhereInput
    orderBy?:
      | TenantOrderByWithAggregationInput
      | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType: $Enums.IdType | null
    idNumber: string | null
    idDocumentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TenantGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TenantGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >

  export type TenantSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      firstName?: boolean
      lastName?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      idType?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      user?: boolean | Tenant$userArgs<ExtArgs>
      leases?: boolean | Tenant$leasesArgs<ExtArgs>
      maintenanceRequests?: boolean | Tenant$maintenanceRequestsArgs<ExtArgs>
      units?: boolean | Tenant$unitsArgs<ExtArgs>
      _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['tenant']
  >

  export type TenantSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      firstName?: boolean
      lastName?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      idType?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
    },
    ExtArgs['result']['tenant']
  >

  export type TenantSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      firstName?: boolean
      lastName?: boolean
      email?: boolean
      phone?: boolean
      passwordHash?: boolean
      idType?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
    },
    ExtArgs['result']['tenant']
  >

  export type TenantSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    idType?: boolean
    idNumber?: boolean
    idDocumentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TenantOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phone'
    | 'passwordHash'
    | 'idType'
    | 'idNumber'
    | 'idDocumentUrl'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['tenant']
  >
  export type TenantInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Tenant$userArgs<ExtArgs>
    leases?: boolean | Tenant$leasesArgs<ExtArgs>
    maintenanceRequests?: boolean | Tenant$maintenanceRequestsArgs<ExtArgs>
    units?: boolean | Tenant$unitsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type TenantIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $TenantPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Tenant'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      leases: Prisma.$LeasePayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      units: Prisma.$UnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        firstName: string
        lastName: string
        email: string
        phone: string
        passwordHash: string
        idType: $Enums.IdType | null
        idNumber: string | null
        idDocumentUrl: string | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['tenant']
    >
    composites: {}
  }

  type TenantGetPayload<
    S extends boolean | null | undefined | TenantDefaultArgs,
  > = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TenantCountAggregateInputType | true
  }

  export interface TenantDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Tenant']
      meta: { name: 'Tenant' }
    }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(
      args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(
      args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     *
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TenantFindManyArgs>(
      args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     *
     */
    create<T extends TenantCreateArgs>(
      args: SelectSubset<T, TenantCreateArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TenantCreateManyArgs>(
      args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     *
     */
    delete<T extends TenantDeleteArgs>(
      args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TenantUpdateArgs>(
      args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TenantDeleteManyArgs>(
      args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TenantUpdateManyArgs>(
      args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(
      args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
     **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(
      args: Subset<T, TenantAggregateArgs>,
    ): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTenantGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Tenant model
     */
    readonly fields: TenantFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends Tenant$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Tenant$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    leases<T extends Tenant$leasesArgs<ExtArgs> = {}>(
      args?: Subset<T, Tenant$leasesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LeasePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    maintenanceRequests<T extends Tenant$maintenanceRequestsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tenant$maintenanceRequestsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MaintenanceRequestPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    units<T extends Tenant$unitsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tenant$unitsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UnitPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<'Tenant', 'String'>
    readonly firstName: FieldRef<'Tenant', 'String'>
    readonly lastName: FieldRef<'Tenant', 'String'>
    readonly email: FieldRef<'Tenant', 'String'>
    readonly phone: FieldRef<'Tenant', 'String'>
    readonly passwordHash: FieldRef<'Tenant', 'String'>
    readonly idType: FieldRef<'Tenant', 'IdType'>
    readonly idNumber: FieldRef<'Tenant', 'String'>
    readonly idDocumentUrl: FieldRef<'Tenant', 'String'>
    readonly createdAt: FieldRef<'Tenant', 'DateTime'>
    readonly updatedAt: FieldRef<'Tenant', 'DateTime'>
    readonly deletedAt: FieldRef<'Tenant', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.user
   */
  export type Tenant$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.leases
   */
  export type Tenant$leasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Tenant.maintenanceRequests
   */
  export type Tenant$maintenanceRequestsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?:
      | MaintenanceRequestOrderByWithRelationInput
      | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?:
      | MaintenanceRequestScalarFieldEnum
      | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Tenant.units
   */
  export type Tenant$unitsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }

  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    complexId: string | null
    label: string | null
    type: $Enums.UnitType | null
    description: string | null
    notes: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    complexId: string | null
    label: string | null
    type: $Enums.UnitType | null
    description: string | null
    notes: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    complexId: number
    label: number
    type: number
    description: number
    notes: number
    tenantId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type UnitMinAggregateInputType = {
    id?: true
    complexId?: true
    label?: true
    type?: true
    description?: true
    notes?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    complexId?: true
    label?: true
    type?: true
    description?: true
    notes?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    complexId?: true
    label?: true
    type?: true
    description?: true
    notes?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Units
     **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
    [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }

  export type UnitGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UnitWhereInput
    orderBy?:
      | UnitOrderByWithAggregationInput
      | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    complexId: string
    label: string
    type: $Enums.UnitType | null
    description: string | null
    notes: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UnitGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
          : GetScalarType<T[P], UnitGroupByOutputType[P]>
      }
    >
  >

  export type UnitSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      complexId?: boolean
      label?: boolean
      type?: boolean
      description?: boolean
      notes?: boolean
      tenantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      leases?: boolean | Unit$leasesArgs<ExtArgs>
      maintenanceRequests?: boolean | Unit$maintenanceRequestsArgs<ExtArgs>
      complex?: boolean | ComplexDefaultArgs<ExtArgs>
      tenant?: boolean | Unit$tenantArgs<ExtArgs>
      _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['unit']
  >

  export type UnitSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      complexId?: boolean
      label?: boolean
      type?: boolean
      description?: boolean
      notes?: boolean
      tenantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      complex?: boolean | ComplexDefaultArgs<ExtArgs>
      tenant?: boolean | Unit$tenantArgs<ExtArgs>
    },
    ExtArgs['result']['unit']
  >

  export type UnitSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      complexId?: boolean
      label?: boolean
      type?: boolean
      description?: boolean
      notes?: boolean
      tenantId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      complex?: boolean | ComplexDefaultArgs<ExtArgs>
      tenant?: boolean | Unit$tenantArgs<ExtArgs>
    },
    ExtArgs['result']['unit']
  >

  export type UnitSelectScalar = {
    id?: boolean
    complexId?: boolean
    label?: boolean
    type?: boolean
    description?: boolean
    notes?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UnitOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'complexId'
    | 'label'
    | 'type'
    | 'description'
    | 'notes'
    | 'tenantId'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['unit']
  >
  export type UnitInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    maintenanceRequests?: boolean | Unit$maintenanceRequestsArgs<ExtArgs>
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    tenant?: boolean | Unit$tenantArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    tenant?: boolean | Unit$tenantArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    tenant?: boolean | Unit$tenantArgs<ExtArgs>
  }

  export type $UnitPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Unit'
    objects: {
      leases: Prisma.$LeasePayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      complex: Prisma.$ComplexPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        complexId: string
        label: string
        type: $Enums.UnitType | null
        description: string | null
        notes: string | null
        tenantId: string | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['unit']
    >
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> =
    $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UnitCountAggregateInputType | true
  }

  export interface UnitDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Unit']
      meta: { name: 'Unit' }
    }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(
      args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(
      args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     *
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UnitFindManyArgs>(
      args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     *
     */
    create<T extends UnitCreateArgs>(
      args: SelectSubset<T, UnitCreateArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UnitCreateManyArgs>(
      args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     *
     */
    delete<T extends UnitDeleteArgs>(
      args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UnitUpdateArgs>(
      args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UnitDeleteManyArgs>(
      args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UnitUpdateManyArgs>(
      args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(
      args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>,
    ): Prisma__UnitClient<
      $Result.GetResult<
        Prisma.$UnitPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
     **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(
      args: Subset<T, UnitAggregateArgs>,
    ): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUnitGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Unit model
     */
    readonly fields: UnitFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    leases<T extends Unit$leasesArgs<ExtArgs> = {}>(
      args?: Subset<T, Unit$leasesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LeasePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    maintenanceRequests<T extends Unit$maintenanceRequestsArgs<ExtArgs> = {}>(
      args?: Subset<T, Unit$maintenanceRequestsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MaintenanceRequestPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    complex<T extends ComplexDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ComplexDefaultArgs<ExtArgs>>,
    ): Prisma__ComplexClient<
      | $Result.GetResult<
          Prisma.$ComplexPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    tenant<T extends Unit$tenantArgs<ExtArgs> = {}>(
      args?: Subset<T, Unit$tenantArgs<ExtArgs>>,
    ): Prisma__TenantClient<
      $Result.GetResult<
        Prisma.$TenantPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<'Unit', 'String'>
    readonly complexId: FieldRef<'Unit', 'String'>
    readonly label: FieldRef<'Unit', 'String'>
    readonly type: FieldRef<'Unit', 'UnitType'>
    readonly description: FieldRef<'Unit', 'String'>
    readonly notes: FieldRef<'Unit', 'String'>
    readonly tenantId: FieldRef<'Unit', 'String'>
    readonly createdAt: FieldRef<'Unit', 'DateTime'>
    readonly updatedAt: FieldRef<'Unit', 'DateTime'>
    readonly deletedAt: FieldRef<'Unit', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.leases
   */
  export type Unit$leasesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Unit.maintenanceRequests
   */
  export type Unit$maintenanceRequestsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?:
      | MaintenanceRequestOrderByWithRelationInput
      | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?:
      | MaintenanceRequestScalarFieldEnum
      | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Unit.tenant
   */
  export type Unit$tenantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }

  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    rating: number | null
  }

  export type VendorSumAggregateOutputType = {
    rating: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    specialty: string | null
    idNumber: string | null
    idDocumentUrl: string | null
    isVerified: boolean | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    specialty: string | null
    idNumber: string | null
    idDocumentUrl: string | null
    isVerified: boolean | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    specialty: number
    idNumber: number
    idDocumentUrl: number
    isVerified: number
    rating: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type VendorAvgAggregateInputType = {
    rating?: true
  }

  export type VendorSumAggregateInputType = {
    rating?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    specialty?: true
    idNumber?: true
    idDocumentUrl?: true
    isVerified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    specialty?: true
    idNumber?: true
    idDocumentUrl?: true
    isVerified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    specialty?: true
    idNumber?: true
    idDocumentUrl?: true
    isVerified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Vendors
     **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
    [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }

  export type VendorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VendorWhereInput
    orderBy?:
      | VendorOrderByWithAggregationInput
      | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string | null
    specialty: string | null
    idNumber: string | null
    idDocumentUrl: string | null
    isVerified: boolean | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<VendorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof VendorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >

  export type VendorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      phone?: boolean
      email?: boolean
      specialty?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      isVerified?: boolean
      rating?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      user?: boolean | Vendor$userArgs<ExtArgs>
      maintenanceRequests?: boolean | Vendor$maintenanceRequestsArgs<ExtArgs>
      _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['vendor']
  >

  export type VendorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      phone?: boolean
      email?: boolean
      specialty?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      isVerified?: boolean
      rating?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
    },
    ExtArgs['result']['vendor']
  >

  export type VendorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      phone?: boolean
      email?: boolean
      specialty?: boolean
      idNumber?: boolean
      idDocumentUrl?: boolean
      isVerified?: boolean
      rating?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
    },
    ExtArgs['result']['vendor']
  >

  export type VendorSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    specialty?: boolean
    idNumber?: boolean
    idDocumentUrl?: boolean
    isVerified?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type VendorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'phone'
    | 'email'
    | 'specialty'
    | 'idNumber'
    | 'idDocumentUrl'
    | 'isVerified'
    | 'rating'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['vendor']
  >
  export type VendorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Vendor$userArgs<ExtArgs>
    maintenanceRequests?: boolean | Vendor$maintenanceRequestsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type VendorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $VendorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Vendor'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        phone: string
        email: string | null
        specialty: string | null
        idNumber: string | null
        idDocumentUrl: string | null
        isVerified: boolean | null
        rating: number | null
        createdAt: Date | null
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['vendor']
    >
    composites: {}
  }

  type VendorGetPayload<
    S extends boolean | null | undefined | VendorDefaultArgs,
  > = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VendorCountAggregateInputType | true
  }

  export interface VendorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Vendor']
      meta: { name: 'Vendor' }
    }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(
      args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(
      args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     *
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VendorFindManyArgs>(
      args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     *
     */
    create<T extends VendorCreateArgs>(
      args: SelectSubset<T, VendorCreateArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VendorCreateManyArgs>(
      args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     *
     */
    delete<T extends VendorDeleteArgs>(
      args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VendorUpdateArgs>(
      args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VendorDeleteManyArgs>(
      args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VendorUpdateManyArgs>(
      args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.updateManyAndReturn({
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
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(
      args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>,
    ): Prisma__VendorClient<
      $Result.GetResult<
        Prisma.$VendorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
     **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(
      args: Subset<T, VendorAggregateArgs>,
    ): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetVendorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Vendor model
     */
    readonly fields: VendorFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends Vendor$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Vendor$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    maintenanceRequests<T extends Vendor$maintenanceRequestsArgs<ExtArgs> = {}>(
      args?: Subset<T, Vendor$maintenanceRequestsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MaintenanceRequestPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<'Vendor', 'String'>
    readonly name: FieldRef<'Vendor', 'String'>
    readonly phone: FieldRef<'Vendor', 'String'>
    readonly email: FieldRef<'Vendor', 'String'>
    readonly specialty: FieldRef<'Vendor', 'String'>
    readonly idNumber: FieldRef<'Vendor', 'String'>
    readonly idDocumentUrl: FieldRef<'Vendor', 'String'>
    readonly isVerified: FieldRef<'Vendor', 'Boolean'>
    readonly rating: FieldRef<'Vendor', 'Float'>
    readonly createdAt: FieldRef<'Vendor', 'DateTime'>
    readonly updatedAt: FieldRef<'Vendor', 'DateTime'>
    readonly deletedAt: FieldRef<'Vendor', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.user
   */
  export type Vendor$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Vendor.maintenanceRequests
   */
  export type Vendor$maintenanceRequestsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?:
      | MaintenanceRequestOrderByWithRelationInput
      | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?:
      | MaintenanceRequestScalarFieldEnum
      | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    channel: string | null
    content: string | null
    status: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    channel: string | null
    content: string | null
    status: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    channel: number
    content: number
    status: number
    scheduledAt: number
    sentAt: number
    createdAt: number
    deletedAt: number
    _all: number
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    channel?: true
    content?: true
    status?: true
    scheduledAt?: true
    sentAt?: true
    createdAt?: true
    deletedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    channel?: true
    content?: true
    status?: true
    scheduledAt?: true
    sentAt?: true
    createdAt?: true
    deletedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    channel?: true
    content?: true
    status?: true
    scheduledAt?: true
    sentAt?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifications
     **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<
    T extends NotificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }

  export type NotificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput
    orderBy?:
      | NotificationOrderByWithAggregationInput
      | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    channel: string
    content: string
    status: string
    scheduledAt: Date | null
    sentAt: Date | null
    createdAt: Date | null
    deletedAt: Date | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotificationGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof NotificationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >

  export type NotificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      userId?: boolean
      type?: boolean
      channel?: boolean
      content?: boolean
      status?: boolean
      scheduledAt?: boolean
      sentAt?: boolean
      createdAt?: boolean
      deletedAt?: boolean
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['notification']
  >

  export type NotificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      userId?: boolean
      type?: boolean
      channel?: boolean
      content?: boolean
      status?: boolean
      scheduledAt?: boolean
      sentAt?: boolean
      createdAt?: boolean
      deletedAt?: boolean
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['notification']
  >

  export type NotificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      userId?: boolean
      type?: boolean
      channel?: boolean
      content?: boolean
      status?: boolean
      scheduledAt?: boolean
      sentAt?: boolean
      createdAt?: boolean
      deletedAt?: boolean
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['notification']
  >

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    channel?: boolean
    content?: boolean
    status?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type NotificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'type'
    | 'channel'
    | 'content'
    | 'status'
    | 'scheduledAt'
    | 'sentAt'
    | 'createdAt'
    | 'deletedAt',
    ExtArgs['result']['notification']
  >
  export type NotificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Notification'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        userId: string
        type: string
        channel: string
        content: string
        status: string
        scheduledAt: Date | null
        sentAt: Date | null
        createdAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['notification']
    >
    composites: {}
  }

  type NotificationGetPayload<
    S extends boolean | null | undefined | NotificationDefaultArgs,
  > = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotificationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: NotificationCountAggregateInputType | true
  }

  export interface NotificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Notification']
      meta: { name: 'Notification' }
    }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     *
     */
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     *
     */
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
     **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(
      args: Subset<T, NotificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNotificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Notification model
     */
    readonly fields: NotificationFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<'Notification', 'String'>
    readonly userId: FieldRef<'Notification', 'String'>
    readonly type: FieldRef<'Notification', 'String'>
    readonly channel: FieldRef<'Notification', 'String'>
    readonly content: FieldRef<'Notification', 'String'>
    readonly status: FieldRef<'Notification', 'String'>
    readonly scheduledAt: FieldRef<'Notification', 'DateTime'>
    readonly sentAt: FieldRef<'Notification', 'DateTime'>
    readonly createdAt: FieldRef<'Notification', 'DateTime'>
    readonly deletedAt: FieldRef<'Notification', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UserScalarFieldEnum: {
    id: 'id'
    landlordId: 'landlordId'
    tenantId: 'tenantId'
    vendorId: 'vendorId'
  }

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const ComplexScalarFieldEnum: {
    id: 'id'
    landlordId: 'landlordId'
    name: 'name'
    countryCode: 'countryCode'
    cityName: 'cityName'
    street: 'street'
    address: 'address'
    description: 'description'
    notes: 'notes'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type ComplexScalarFieldEnum =
    (typeof ComplexScalarFieldEnum)[keyof typeof ComplexScalarFieldEnum]

  export const LandlordScalarFieldEnum: {
    id: 'id'
    firstName: 'firstName'
    lastName: 'lastName'
    email: 'email'
    phone: 'phone'
    passwordHash: 'passwordHash'
    idType: 'idType'
    idNumber: 'idNumber'
    idDocumentUrl: 'idDocumentUrl'
    isVerified: 'isVerified'
    proofOfOwnership: 'proofOfOwnership'
    bankName: 'bankName'
    bankAccount: 'bankAccount'
    mobileMoneyNumber: 'mobileMoneyNumber'
    notificationPrefs: 'notificationPrefs'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type LandlordScalarFieldEnum =
    (typeof LandlordScalarFieldEnum)[keyof typeof LandlordScalarFieldEnum]

  export const LeaseScalarFieldEnum: {
    id: 'id'
    unitId: 'unitId'
    tenantId: 'tenantId'
    landlordId: 'landlordId'
    startedAt: 'startedAt'
    endsAt: 'endsAt'
    rentAmount: 'rentAmount'
    currency: 'currency'
    advanceMonths: 'advanceMonths'
    documentUrl: 'documentUrl'
    status: 'status'
    rules: 'rules'
    noticePeriod: 'noticePeriod'
    parentLeaseId: 'parentLeaseId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type LeaseScalarFieldEnum =
    (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]

  export const MaintenanceRequestScalarFieldEnum: {
    id: 'id'
    unitId: 'unitId'
    tenantId: 'tenantId'
    description: 'description'
    photoUrl: 'photoUrl'
    status: 'status'
    vendorId: 'vendorId'
    vendorResponse: 'vendorResponse'
    scheduledFor: 'scheduledFor'
    completedAt: 'completedAt'
    cost: 'cost'
    costCurrency: 'costCurrency'
    paymentStatus: 'paymentStatus'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type MaintenanceRequestScalarFieldEnum =
    (typeof MaintenanceRequestScalarFieldEnum)[keyof typeof MaintenanceRequestScalarFieldEnum]

  export const PaymentScalarFieldEnum: {
    id: 'id'
    leaseId: 'leaseId'
    amount: 'amount'
    currency: 'currency'
    type: 'type'
    dueDate: 'dueDate'
    paidAt: 'paidAt'
    method: 'method'
    paymentStatus: 'paymentStatus'
    transactionRef: 'transactionRef'
    feeAmount: 'feeAmount'
    receiptUrl: 'receiptUrl'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type PaymentScalarFieldEnum =
    (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]

  export const TenantScalarFieldEnum: {
    id: 'id'
    firstName: 'firstName'
    lastName: 'lastName'
    email: 'email'
    phone: 'phone'
    passwordHash: 'passwordHash'
    idType: 'idType'
    idNumber: 'idNumber'
    idDocumentUrl: 'idDocumentUrl'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type TenantScalarFieldEnum =
    (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]

  export const UnitScalarFieldEnum: {
    id: 'id'
    complexId: 'complexId'
    label: 'label'
    type: 'type'
    description: 'description'
    notes: 'notes'
    tenantId: 'tenantId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type UnitScalarFieldEnum =
    (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]

  export const VendorScalarFieldEnum: {
    id: 'id'
    name: 'name'
    phone: 'phone'
    email: 'email'
    specialty: 'specialty'
    idNumber: 'idNumber'
    idDocumentUrl: 'idDocumentUrl'
    isVerified: 'isVerified'
    rating: 'rating'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type VendorScalarFieldEnum =
    (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]

  export const NotificationScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    type: 'type'
    channel: 'channel'
    content: 'content'
    status: 'status'
    scheduledAt: 'scheduledAt'
    sentAt: 'sentAt'
    createdAt: 'createdAt'
    deletedAt: 'deletedAt'
  }

  export type NotificationScalarFieldEnum =
    (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >

  /**
   * Reference to a field of type 'IdType'
   */
  export type EnumIdTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'IdType'
  >

  /**
   * Reference to a field of type 'IdType[]'
   */
  export type ListEnumIdTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'IdType[]'
  >

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >

  /**
   * Reference to a field of type 'LeaseStatus'
   */
  export type EnumLeaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'LeaseStatus'
  >

  /**
   * Reference to a field of type 'LeaseStatus[]'
   */
  export type ListEnumLeaseStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'LeaseStatus[]'>

  /**
   * Reference to a field of type 'MaintenanceStatus'
   */
  export type EnumMaintenanceStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'MaintenanceStatus'>

  /**
   * Reference to a field of type 'MaintenanceStatus[]'
   */
  export type ListEnumMaintenanceStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'MaintenanceStatus[]'>

  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'InvoiceStatus'
  >

  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>

  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentType'
  >

  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PaymentType[]'>

  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentMethod'
  >

  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>

  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentStatus'
  >

  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>

  /**
   * Reference to a field of type 'UnitType'
   */
  export type EnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UnitType'
  >

  /**
   * Reference to a field of type 'UnitType[]'
   */
  export type ListEnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UnitType[]'
  >

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<'User'> | string
    landlordId?: UuidNullableFilter<'User'> | string | null
    tenantId?: UuidNullableFilter<'User'> | string | null
    vendorId?: UuidNullableFilter<'User'> | string | null
    landlord?: XOR<
      LandlordNullableScalarRelationFilter,
      LandlordWhereInput
    > | null
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    landlordId?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    landlord?: LandlordOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      landlordId?: UuidNullableFilter<'User'> | string | null
      tenantId?: UuidNullableFilter<'User'> | string | null
      vendorId?: UuidNullableFilter<'User'> | string | null
      landlord?: XOR<
        LandlordNullableScalarRelationFilter,
        LandlordWhereInput
      > | null
      tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
      vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
      notifications?: NotificationListRelationFilter
    },
    'id'
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    landlordId?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'User'> | string
    landlordId?: UuidNullableWithAggregatesFilter<'User'> | string | null
    tenantId?: UuidNullableWithAggregatesFilter<'User'> | string | null
    vendorId?: UuidNullableWithAggregatesFilter<'User'> | string | null
  }

  export type ComplexWhereInput = {
    AND?: ComplexWhereInput | ComplexWhereInput[]
    OR?: ComplexWhereInput[]
    NOT?: ComplexWhereInput | ComplexWhereInput[]
    id?: UuidFilter<'Complex'> | string
    landlordId?: UuidFilter<'Complex'> | string
    name?: StringFilter<'Complex'> | string
    countryCode?: StringFilter<'Complex'> | string
    cityName?: StringFilter<'Complex'> | string
    street?: StringNullableFilter<'Complex'> | string | null
    address?: StringNullableFilter<'Complex'> | string | null
    description?: StringNullableFilter<'Complex'> | string | null
    notes?: StringNullableFilter<'Complex'> | string | null
    createdAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
    landlord?: XOR<LandlordScalarRelationFilter, LandlordWhereInput>
    units?: UnitListRelationFilter
  }

  export type ComplexOrderByWithRelationInput = {
    id?: SortOrder
    landlordId?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    street?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    landlord?: LandlordOrderByWithRelationInput
    units?: UnitOrderByRelationAggregateInput
  }

  export type ComplexWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ComplexWhereInput | ComplexWhereInput[]
      OR?: ComplexWhereInput[]
      NOT?: ComplexWhereInput | ComplexWhereInput[]
      landlordId?: UuidFilter<'Complex'> | string
      name?: StringFilter<'Complex'> | string
      countryCode?: StringFilter<'Complex'> | string
      cityName?: StringFilter<'Complex'> | string
      street?: StringNullableFilter<'Complex'> | string | null
      address?: StringNullableFilter<'Complex'> | string | null
      description?: StringNullableFilter<'Complex'> | string | null
      notes?: StringNullableFilter<'Complex'> | string | null
      createdAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
      landlord?: XOR<LandlordScalarRelationFilter, LandlordWhereInput>
      units?: UnitListRelationFilter
    },
    'id'
  >

  export type ComplexOrderByWithAggregationInput = {
    id?: SortOrder
    landlordId?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    street?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ComplexCountOrderByAggregateInput
    _max?: ComplexMaxOrderByAggregateInput
    _min?: ComplexMinOrderByAggregateInput
  }

  export type ComplexScalarWhereWithAggregatesInput = {
    AND?:
      | ComplexScalarWhereWithAggregatesInput
      | ComplexScalarWhereWithAggregatesInput[]
    OR?: ComplexScalarWhereWithAggregatesInput[]
    NOT?:
      | ComplexScalarWhereWithAggregatesInput
      | ComplexScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Complex'> | string
    landlordId?: UuidWithAggregatesFilter<'Complex'> | string
    name?: StringWithAggregatesFilter<'Complex'> | string
    countryCode?: StringWithAggregatesFilter<'Complex'> | string
    cityName?: StringWithAggregatesFilter<'Complex'> | string
    street?: StringNullableWithAggregatesFilter<'Complex'> | string | null
    address?: StringNullableWithAggregatesFilter<'Complex'> | string | null
    description?: StringNullableWithAggregatesFilter<'Complex'> | string | null
    notes?: StringNullableWithAggregatesFilter<'Complex'> | string | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Complex'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Complex'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Complex'>
      | Date
      | string
      | null
  }

  export type LandlordWhereInput = {
    AND?: LandlordWhereInput | LandlordWhereInput[]
    OR?: LandlordWhereInput[]
    NOT?: LandlordWhereInput | LandlordWhereInput[]
    id?: UuidFilter<'Landlord'> | string
    firstName?: StringFilter<'Landlord'> | string
    lastName?: StringFilter<'Landlord'> | string
    email?: StringFilter<'Landlord'> | string
    phone?: StringFilter<'Landlord'> | string
    passwordHash?: StringFilter<'Landlord'> | string
    idType?: EnumIdTypeNullableFilter<'Landlord'> | $Enums.IdType | null
    idNumber?: StringNullableFilter<'Landlord'> | string | null
    idDocumentUrl?: StringNullableFilter<'Landlord'> | string | null
    isVerified?: BoolNullableFilter<'Landlord'> | boolean | null
    proofOfOwnership?: StringNullableFilter<'Landlord'> | string | null
    bankName?: StringNullableFilter<'Landlord'> | string | null
    bankAccount?: StringNullableFilter<'Landlord'> | string | null
    mobileMoneyNumber?: StringNullableFilter<'Landlord'> | string | null
    notificationPrefs?: StringNullableFilter<'Landlord'> | string | null
    createdAt?: DateTimeNullableFilter<'Landlord'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Landlord'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Landlord'> | Date | string | null
    user?: UserListRelationFilter
    complexes?: ComplexListRelationFilter
    leases?: LeaseListRelationFilter
  }

  export type LandlordOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    proofOfOwnership?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    mobileMoneyNumber?: SortOrderInput | SortOrder
    notificationPrefs?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByRelationAggregateInput
    complexes?: ComplexOrderByRelationAggregateInput
    leases?: LeaseOrderByRelationAggregateInput
  }

  export type LandlordWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      email?: string
      phone?: string
      idNumber?: string
      AND?: LandlordWhereInput | LandlordWhereInput[]
      OR?: LandlordWhereInput[]
      NOT?: LandlordWhereInput | LandlordWhereInput[]
      firstName?: StringFilter<'Landlord'> | string
      lastName?: StringFilter<'Landlord'> | string
      passwordHash?: StringFilter<'Landlord'> | string
      idType?: EnumIdTypeNullableFilter<'Landlord'> | $Enums.IdType | null
      idDocumentUrl?: StringNullableFilter<'Landlord'> | string | null
      isVerified?: BoolNullableFilter<'Landlord'> | boolean | null
      proofOfOwnership?: StringNullableFilter<'Landlord'> | string | null
      bankName?: StringNullableFilter<'Landlord'> | string | null
      bankAccount?: StringNullableFilter<'Landlord'> | string | null
      mobileMoneyNumber?: StringNullableFilter<'Landlord'> | string | null
      notificationPrefs?: StringNullableFilter<'Landlord'> | string | null
      createdAt?: DateTimeNullableFilter<'Landlord'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Landlord'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Landlord'> | Date | string | null
      user?: UserListRelationFilter
      complexes?: ComplexListRelationFilter
      leases?: LeaseListRelationFilter
    },
    'id' | 'email' | 'phone' | 'idNumber'
  >

  export type LandlordOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    proofOfOwnership?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    mobileMoneyNumber?: SortOrderInput | SortOrder
    notificationPrefs?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LandlordCountOrderByAggregateInput
    _max?: LandlordMaxOrderByAggregateInput
    _min?: LandlordMinOrderByAggregateInput
  }

  export type LandlordScalarWhereWithAggregatesInput = {
    AND?:
      | LandlordScalarWhereWithAggregatesInput
      | LandlordScalarWhereWithAggregatesInput[]
    OR?: LandlordScalarWhereWithAggregatesInput[]
    NOT?:
      | LandlordScalarWhereWithAggregatesInput
      | LandlordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Landlord'> | string
    firstName?: StringWithAggregatesFilter<'Landlord'> | string
    lastName?: StringWithAggregatesFilter<'Landlord'> | string
    email?: StringWithAggregatesFilter<'Landlord'> | string
    phone?: StringWithAggregatesFilter<'Landlord'> | string
    passwordHash?: StringWithAggregatesFilter<'Landlord'> | string
    idType?:
      | EnumIdTypeNullableWithAggregatesFilter<'Landlord'>
      | $Enums.IdType
      | null
    idNumber?: StringNullableWithAggregatesFilter<'Landlord'> | string | null
    idDocumentUrl?:
      | StringNullableWithAggregatesFilter<'Landlord'>
      | string
      | null
    isVerified?: BoolNullableWithAggregatesFilter<'Landlord'> | boolean | null
    proofOfOwnership?:
      | StringNullableWithAggregatesFilter<'Landlord'>
      | string
      | null
    bankName?: StringNullableWithAggregatesFilter<'Landlord'> | string | null
    bankAccount?: StringNullableWithAggregatesFilter<'Landlord'> | string | null
    mobileMoneyNumber?:
      | StringNullableWithAggregatesFilter<'Landlord'>
      | string
      | null
    notificationPrefs?:
      | StringNullableWithAggregatesFilter<'Landlord'>
      | string
      | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Landlord'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Landlord'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Landlord'>
      | Date
      | string
      | null
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: UuidFilter<'Lease'> | string
    unitId?: UuidFilter<'Lease'> | string
    tenantId?: UuidFilter<'Lease'> | string
    landlordId?: UuidFilter<'Lease'> | string
    startedAt?: DateTimeFilter<'Lease'> | Date | string
    endsAt?: DateTimeFilter<'Lease'> | Date | string
    rentAmount?:
      | DecimalFilter<'Lease'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFilter<'Lease'> | string
    advanceMonths?: IntNullableFilter<'Lease'> | number | null
    documentUrl?: StringNullableFilter<'Lease'> | string | null
    status?: EnumLeaseStatusNullableFilter<'Lease'> | $Enums.LeaseStatus | null
    rules?: StringNullableFilter<'Lease'> | string | null
    noticePeriod?: IntNullableFilter<'Lease'> | number | null
    parentLeaseId?: UuidNullableFilter<'Lease'> | string | null
    createdAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
    landlord?: XOR<LandlordScalarRelationFilter, LandlordWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    payments?: PaymentListRelationFilter
    parentLease?: XOR<LeaseNullableScalarRelationFilter, LeaseWhereInput> | null
    renewals?: LeaseListRelationFilter
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    landlordId?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    rentAmount?: SortOrder
    currency?: SortOrder
    advanceMonths?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    noticePeriod?: SortOrderInput | SortOrder
    parentLeaseId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    landlord?: LandlordOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    parentLease?: LeaseOrderByWithRelationInput
    renewals?: LeaseOrderByRelationAggregateInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: LeaseWhereInput | LeaseWhereInput[]
      OR?: LeaseWhereInput[]
      NOT?: LeaseWhereInput | LeaseWhereInput[]
      unitId?: UuidFilter<'Lease'> | string
      tenantId?: UuidFilter<'Lease'> | string
      landlordId?: UuidFilter<'Lease'> | string
      startedAt?: DateTimeFilter<'Lease'> | Date | string
      endsAt?: DateTimeFilter<'Lease'> | Date | string
      rentAmount?:
        | DecimalFilter<'Lease'>
        | Decimal
        | DecimalJsLike
        | number
        | string
      currency?: StringFilter<'Lease'> | string
      advanceMonths?: IntNullableFilter<'Lease'> | number | null
      documentUrl?: StringNullableFilter<'Lease'> | string | null
      status?:
        | EnumLeaseStatusNullableFilter<'Lease'>
        | $Enums.LeaseStatus
        | null
      rules?: StringNullableFilter<'Lease'> | string | null
      noticePeriod?: IntNullableFilter<'Lease'> | number | null
      parentLeaseId?: UuidNullableFilter<'Lease'> | string | null
      createdAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
      landlord?: XOR<LandlordScalarRelationFilter, LandlordWhereInput>
      tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
      unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
      payments?: PaymentListRelationFilter
      parentLease?: XOR<
        LeaseNullableScalarRelationFilter,
        LeaseWhereInput
      > | null
      renewals?: LeaseListRelationFilter
    },
    'id'
  >

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    landlordId?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    rentAmount?: SortOrder
    currency?: SortOrder
    advanceMonths?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    noticePeriod?: SortOrderInput | SortOrder
    parentLeaseId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _avg?: LeaseAvgOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
    _sum?: LeaseSumOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?:
      | LeaseScalarWhereWithAggregatesInput
      | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?:
      | LeaseScalarWhereWithAggregatesInput
      | LeaseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Lease'> | string
    unitId?: UuidWithAggregatesFilter<'Lease'> | string
    tenantId?: UuidWithAggregatesFilter<'Lease'> | string
    landlordId?: UuidWithAggregatesFilter<'Lease'> | string
    startedAt?: DateTimeWithAggregatesFilter<'Lease'> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<'Lease'> | Date | string
    rentAmount?:
      | DecimalWithAggregatesFilter<'Lease'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringWithAggregatesFilter<'Lease'> | string
    advanceMonths?: IntNullableWithAggregatesFilter<'Lease'> | number | null
    documentUrl?: StringNullableWithAggregatesFilter<'Lease'> | string | null
    status?:
      | EnumLeaseStatusNullableWithAggregatesFilter<'Lease'>
      | $Enums.LeaseStatus
      | null
    rules?: StringNullableWithAggregatesFilter<'Lease'> | string | null
    noticePeriod?: IntNullableWithAggregatesFilter<'Lease'> | number | null
    parentLeaseId?: UuidNullableWithAggregatesFilter<'Lease'> | string | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Lease'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Lease'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Lease'>
      | Date
      | string
      | null
  }

  export type MaintenanceRequestWhereInput = {
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    id?: UuidFilter<'MaintenanceRequest'> | string
    unitId?: UuidFilter<'MaintenanceRequest'> | string
    tenantId?: UuidFilter<'MaintenanceRequest'> | string
    description?: StringFilter<'MaintenanceRequest'> | string
    photoUrl?: StringNullableFilter<'MaintenanceRequest'> | string | null
    status?:
      | EnumMaintenanceStatusNullableFilter<'MaintenanceRequest'>
      | $Enums.MaintenanceStatus
      | null
    vendorId?: UuidNullableFilter<'MaintenanceRequest'> | string | null
    vendorResponse?: StringNullableFilter<'MaintenanceRequest'> | string | null
    scheduledFor?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    completedAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    cost?:
      | DecimalNullableFilter<'MaintenanceRequest'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: StringNullableFilter<'MaintenanceRequest'> | string | null
    paymentStatus?:
      | EnumInvoiceStatusNullableFilter<'MaintenanceRequest'>
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }

  export type MaintenanceRequestOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    vendorResponse?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    costCurrency?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type MaintenanceRequestWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
      OR?: MaintenanceRequestWhereInput[]
      NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
      unitId?: UuidFilter<'MaintenanceRequest'> | string
      tenantId?: UuidFilter<'MaintenanceRequest'> | string
      description?: StringFilter<'MaintenanceRequest'> | string
      photoUrl?: StringNullableFilter<'MaintenanceRequest'> | string | null
      status?:
        | EnumMaintenanceStatusNullableFilter<'MaintenanceRequest'>
        | $Enums.MaintenanceStatus
        | null
      vendorId?: UuidNullableFilter<'MaintenanceRequest'> | string | null
      vendorResponse?:
        | StringNullableFilter<'MaintenanceRequest'>
        | string
        | null
      scheduledFor?:
        | DateTimeNullableFilter<'MaintenanceRequest'>
        | Date
        | string
        | null
      completedAt?:
        | DateTimeNullableFilter<'MaintenanceRequest'>
        | Date
        | string
        | null
      cost?:
        | DecimalNullableFilter<'MaintenanceRequest'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null
      costCurrency?: StringNullableFilter<'MaintenanceRequest'> | string | null
      paymentStatus?:
        | EnumInvoiceStatusNullableFilter<'MaintenanceRequest'>
        | $Enums.InvoiceStatus
        | null
      createdAt?:
        | DateTimeNullableFilter<'MaintenanceRequest'>
        | Date
        | string
        | null
      updatedAt?:
        | DateTimeNullableFilter<'MaintenanceRequest'>
        | Date
        | string
        | null
      deletedAt?:
        | DateTimeNullableFilter<'MaintenanceRequest'>
        | Date
        | string
        | null
      tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
      unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
      vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    },
    'id'
  >

  export type MaintenanceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    vendorResponse?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    costCurrency?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MaintenanceRequestCountOrderByAggregateInput
    _avg?: MaintenanceRequestAvgOrderByAggregateInput
    _max?: MaintenanceRequestMaxOrderByAggregateInput
    _min?: MaintenanceRequestMinOrderByAggregateInput
    _sum?: MaintenanceRequestSumOrderByAggregateInput
  }

  export type MaintenanceRequestScalarWhereWithAggregatesInput = {
    AND?:
      | MaintenanceRequestScalarWhereWithAggregatesInput
      | MaintenanceRequestScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRequestScalarWhereWithAggregatesInput[]
    NOT?:
      | MaintenanceRequestScalarWhereWithAggregatesInput
      | MaintenanceRequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'MaintenanceRequest'> | string
    unitId?: UuidWithAggregatesFilter<'MaintenanceRequest'> | string
    tenantId?: UuidWithAggregatesFilter<'MaintenanceRequest'> | string
    description?: StringWithAggregatesFilter<'MaintenanceRequest'> | string
    photoUrl?:
      | StringNullableWithAggregatesFilter<'MaintenanceRequest'>
      | string
      | null
    status?:
      | EnumMaintenanceStatusNullableWithAggregatesFilter<'MaintenanceRequest'>
      | $Enums.MaintenanceStatus
      | null
    vendorId?:
      | UuidNullableWithAggregatesFilter<'MaintenanceRequest'>
      | string
      | null
    vendorResponse?:
      | StringNullableWithAggregatesFilter<'MaintenanceRequest'>
      | string
      | null
    scheduledFor?:
      | DateTimeNullableWithAggregatesFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    completedAt?:
      | DateTimeNullableWithAggregatesFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    cost?:
      | DecimalNullableWithAggregatesFilter<'MaintenanceRequest'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?:
      | StringNullableWithAggregatesFilter<'MaintenanceRequest'>
      | string
      | null
    paymentStatus?:
      | EnumInvoiceStatusNullableWithAggregatesFilter<'MaintenanceRequest'>
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: UuidFilter<'Payment'> | string
    leaseId?: UuidFilter<'Payment'> | string
    amount?:
      | DecimalFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFilter<'Payment'> | string
    type?: EnumPaymentTypeFilter<'Payment'> | $Enums.PaymentType
    dueDate?: DateTimeFilter<'Payment'> | Date | string
    paidAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
    method?: EnumPaymentMethodFilter<'Payment'> | $Enums.PaymentMethod
    paymentStatus?:
      | EnumPaymentStatusNullableFilter<'Payment'>
      | $Enums.PaymentStatus
      | null
    transactionRef?: StringNullableFilter<'Payment'> | string | null
    feeAmount?:
      | DecimalNullableFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: StringNullableFilter<'Payment'> | string | null
    createdAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    method?: SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    transactionRef?: SortOrderInput | SortOrder
    feeAmount?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    lease?: LeaseOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      transactionRef?: string
      AND?: PaymentWhereInput | PaymentWhereInput[]
      OR?: PaymentWhereInput[]
      NOT?: PaymentWhereInput | PaymentWhereInput[]
      leaseId?: UuidFilter<'Payment'> | string
      amount?:
        | DecimalFilter<'Payment'>
        | Decimal
        | DecimalJsLike
        | number
        | string
      currency?: StringFilter<'Payment'> | string
      type?: EnumPaymentTypeFilter<'Payment'> | $Enums.PaymentType
      dueDate?: DateTimeFilter<'Payment'> | Date | string
      paidAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
      method?: EnumPaymentMethodFilter<'Payment'> | $Enums.PaymentMethod
      paymentStatus?:
        | EnumPaymentStatusNullableFilter<'Payment'>
        | $Enums.PaymentStatus
        | null
      feeAmount?:
        | DecimalNullableFilter<'Payment'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null
      receiptUrl?: StringNullableFilter<'Payment'> | string | null
      createdAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
      lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
    },
    'id' | 'transactionRef'
  >

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    method?: SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    transactionRef?: SortOrderInput | SortOrder
    feeAmount?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Payment'> | string
    leaseId?: UuidWithAggregatesFilter<'Payment'> | string
    amount?:
      | DecimalWithAggregatesFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringWithAggregatesFilter<'Payment'> | string
    type?: EnumPaymentTypeWithAggregatesFilter<'Payment'> | $Enums.PaymentType
    dueDate?: DateTimeWithAggregatesFilter<'Payment'> | Date | string
    paidAt?:
      | DateTimeNullableWithAggregatesFilter<'Payment'>
      | Date
      | string
      | null
    method?:
      | EnumPaymentMethodWithAggregatesFilter<'Payment'>
      | $Enums.PaymentMethod
    paymentStatus?:
      | EnumPaymentStatusNullableWithAggregatesFilter<'Payment'>
      | $Enums.PaymentStatus
      | null
    transactionRef?:
      | StringNullableWithAggregatesFilter<'Payment'>
      | string
      | null
    feeAmount?:
      | DecimalNullableWithAggregatesFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: StringNullableWithAggregatesFilter<'Payment'> | string | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Payment'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Payment'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Payment'>
      | Date
      | string
      | null
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: UuidFilter<'Tenant'> | string
    firstName?: StringFilter<'Tenant'> | string
    lastName?: StringFilter<'Tenant'> | string
    email?: StringFilter<'Tenant'> | string
    phone?: StringFilter<'Tenant'> | string
    passwordHash?: StringFilter<'Tenant'> | string
    idType?: EnumIdTypeNullableFilter<'Tenant'> | $Enums.IdType | null
    idNumber?: StringNullableFilter<'Tenant'> | string | null
    idDocumentUrl?: StringNullableFilter<'Tenant'> | string | null
    createdAt?: DateTimeNullableFilter<'Tenant'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Tenant'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Tenant'> | Date | string | null
    user?: UserListRelationFilter
    leases?: LeaseListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    units?: UnitListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByRelationAggregateInput
    leases?: LeaseOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    units?: UnitOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      email?: string
      phone?: string
      idNumber?: string
      AND?: TenantWhereInput | TenantWhereInput[]
      OR?: TenantWhereInput[]
      NOT?: TenantWhereInput | TenantWhereInput[]
      firstName?: StringFilter<'Tenant'> | string
      lastName?: StringFilter<'Tenant'> | string
      passwordHash?: StringFilter<'Tenant'> | string
      idType?: EnumIdTypeNullableFilter<'Tenant'> | $Enums.IdType | null
      idDocumentUrl?: StringNullableFilter<'Tenant'> | string | null
      createdAt?: DateTimeNullableFilter<'Tenant'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Tenant'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Tenant'> | Date | string | null
      user?: UserListRelationFilter
      leases?: LeaseListRelationFilter
      maintenanceRequests?: MaintenanceRequestListRelationFilter
      units?: UnitListRelationFilter
    },
    'id' | 'email' | 'phone' | 'idNumber'
  >

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?:
      | TenantScalarWhereWithAggregatesInput
      | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?:
      | TenantScalarWhereWithAggregatesInput
      | TenantScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Tenant'> | string
    firstName?: StringWithAggregatesFilter<'Tenant'> | string
    lastName?: StringWithAggregatesFilter<'Tenant'> | string
    email?: StringWithAggregatesFilter<'Tenant'> | string
    phone?: StringWithAggregatesFilter<'Tenant'> | string
    passwordHash?: StringWithAggregatesFilter<'Tenant'> | string
    idType?:
      | EnumIdTypeNullableWithAggregatesFilter<'Tenant'>
      | $Enums.IdType
      | null
    idNumber?: StringNullableWithAggregatesFilter<'Tenant'> | string | null
    idDocumentUrl?: StringNullableWithAggregatesFilter<'Tenant'> | string | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Tenant'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Tenant'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Tenant'>
      | Date
      | string
      | null
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: UuidFilter<'Unit'> | string
    complexId?: UuidFilter<'Unit'> | string
    label?: StringFilter<'Unit'> | string
    type?: EnumUnitTypeNullableFilter<'Unit'> | $Enums.UnitType | null
    description?: StringNullableFilter<'Unit'> | string | null
    notes?: StringNullableFilter<'Unit'> | string | null
    tenantId?: UuidNullableFilter<'Unit'> | string | null
    createdAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
    leases?: LeaseListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    complex?: XOR<ComplexScalarRelationFilter, ComplexWhereInput>
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    complexId?: SortOrder
    label?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    leases?: LeaseOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    complex?: ComplexOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: UnitWhereInput | UnitWhereInput[]
      OR?: UnitWhereInput[]
      NOT?: UnitWhereInput | UnitWhereInput[]
      complexId?: UuidFilter<'Unit'> | string
      label?: StringFilter<'Unit'> | string
      type?: EnumUnitTypeNullableFilter<'Unit'> | $Enums.UnitType | null
      description?: StringNullableFilter<'Unit'> | string | null
      notes?: StringNullableFilter<'Unit'> | string | null
      tenantId?: UuidNullableFilter<'Unit'> | string | null
      createdAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
      leases?: LeaseListRelationFilter
      maintenanceRequests?: MaintenanceRequestListRelationFilter
      complex?: XOR<ComplexScalarRelationFilter, ComplexWhereInput>
      tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    },
    'id'
  >

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    complexId?: SortOrder
    label?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?:
      | UnitScalarWhereWithAggregatesInput
      | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?:
      | UnitScalarWhereWithAggregatesInput
      | UnitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Unit'> | string
    complexId?: UuidWithAggregatesFilter<'Unit'> | string
    label?: StringWithAggregatesFilter<'Unit'> | string
    type?:
      | EnumUnitTypeNullableWithAggregatesFilter<'Unit'>
      | $Enums.UnitType
      | null
    description?: StringNullableWithAggregatesFilter<'Unit'> | string | null
    notes?: StringNullableWithAggregatesFilter<'Unit'> | string | null
    tenantId?: UuidNullableWithAggregatesFilter<'Unit'> | string | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Unit'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Unit'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Unit'>
      | Date
      | string
      | null
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: UuidFilter<'Vendor'> | string
    name?: StringFilter<'Vendor'> | string
    phone?: StringFilter<'Vendor'> | string
    email?: StringNullableFilter<'Vendor'> | string | null
    specialty?: StringNullableFilter<'Vendor'> | string | null
    idNumber?: StringNullableFilter<'Vendor'> | string | null
    idDocumentUrl?: StringNullableFilter<'Vendor'> | string | null
    isVerified?: BoolNullableFilter<'Vendor'> | boolean | null
    rating?: FloatNullableFilter<'Vendor'> | number | null
    createdAt?: DateTimeNullableFilter<'Vendor'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Vendor'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Vendor'> | Date | string | null
    user?: UserListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    specialty?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      phone?: string
      email?: string
      idNumber?: string
      AND?: VendorWhereInput | VendorWhereInput[]
      OR?: VendorWhereInput[]
      NOT?: VendorWhereInput | VendorWhereInput[]
      name?: StringFilter<'Vendor'> | string
      specialty?: StringNullableFilter<'Vendor'> | string | null
      idDocumentUrl?: StringNullableFilter<'Vendor'> | string | null
      isVerified?: BoolNullableFilter<'Vendor'> | boolean | null
      rating?: FloatNullableFilter<'Vendor'> | number | null
      createdAt?: DateTimeNullableFilter<'Vendor'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Vendor'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Vendor'> | Date | string | null
      user?: UserListRelationFilter
      maintenanceRequests?: MaintenanceRequestListRelationFilter
    },
    'id' | 'phone' | 'email' | 'idNumber'
  >

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    specialty?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?:
      | VendorScalarWhereWithAggregatesInput
      | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?:
      | VendorScalarWhereWithAggregatesInput
      | VendorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Vendor'> | string
    name?: StringWithAggregatesFilter<'Vendor'> | string
    phone?: StringWithAggregatesFilter<'Vendor'> | string
    email?: StringNullableWithAggregatesFilter<'Vendor'> | string | null
    specialty?: StringNullableWithAggregatesFilter<'Vendor'> | string | null
    idNumber?: StringNullableWithAggregatesFilter<'Vendor'> | string | null
    idDocumentUrl?: StringNullableWithAggregatesFilter<'Vendor'> | string | null
    isVerified?: BoolNullableWithAggregatesFilter<'Vendor'> | boolean | null
    rating?: FloatNullableWithAggregatesFilter<'Vendor'> | number | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Vendor'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Vendor'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Vendor'>
      | Date
      | string
      | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<'Notification'> | string
    userId?: UuidFilter<'Notification'> | string
    type?: StringFilter<'Notification'> | string
    channel?: StringFilter<'Notification'> | string
    content?: StringFilter<'Notification'> | string
    status?: StringFilter<'Notification'> | string
    scheduledAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
    sentAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
    createdAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    content?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: NotificationWhereInput | NotificationWhereInput[]
      OR?: NotificationWhereInput[]
      NOT?: NotificationWhereInput | NotificationWhereInput[]
      userId?: UuidFilter<'Notification'> | string
      type?: StringFilter<'Notification'> | string
      channel?: StringFilter<'Notification'> | string
      content?: StringFilter<'Notification'> | string
      status?: StringFilter<'Notification'> | string
      scheduledAt?:
        | DateTimeNullableFilter<'Notification'>
        | Date
        | string
        | null
      sentAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
      createdAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'id'
  >

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    content?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'Notification'> | string
    userId?: UuidWithAggregatesFilter<'Notification'> | string
    type?: StringWithAggregatesFilter<'Notification'> | string
    channel?: StringWithAggregatesFilter<'Notification'> | string
    content?: StringWithAggregatesFilter<'Notification'> | string
    status?: StringWithAggregatesFilter<'Notification'> | string
    scheduledAt?:
      | DateTimeNullableWithAggregatesFilter<'Notification'>
      | Date
      | string
      | null
    sentAt?:
      | DateTimeNullableWithAggregatesFilter<'Notification'>
      | Date
      | string
      | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Notification'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Notification'>
      | Date
      | string
      | null
  }

  export type UserCreateInput = {
    id?: string
    landlord?: LandlordCreateNestedOneWithoutUserInput
    tenant?: TenantCreateNestedOneWithoutUserInput
    vendor?: VendorCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    landlordId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlord?: LandlordUpdateOneWithoutUserNestedInput
    tenant?: TenantUpdateOneWithoutUserNestedInput
    vendor?: VendorUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    landlordId?: string | null
    tenantId?: string | null
    vendorId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplexCreateInput = {
    id?: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutComplexesInput
    units?: UnitCreateNestedManyWithoutComplexInput
  }

  export type ComplexUncheckedCreateInput = {
    id?: string
    landlordId: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    units?: UnitUncheckedCreateNestedManyWithoutComplexInput
  }

  export type ComplexUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutComplexesNestedInput
    units?: UnitUpdateManyWithoutComplexNestedInput
  }

  export type ComplexUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    units?: UnitUncheckedUpdateManyWithoutComplexNestedInput
  }

  export type ComplexCreateManyInput = {
    id?: string
    landlordId: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ComplexUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type ComplexUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LandlordCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutLandlordInput
    complexes?: ComplexCreateNestedManyWithoutLandlordInput
    leases?: LeaseCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutLandlordInput
    complexes?: ComplexUncheckedCreateNestedManyWithoutLandlordInput
    leases?: LeaseUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutLandlordNestedInput
    complexes?: ComplexUpdateManyWithoutLandlordNestedInput
    leases?: LeaseUpdateManyWithoutLandlordNestedInput
  }

  export type LandlordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutLandlordNestedInput
    complexes?: ComplexUncheckedUpdateManyWithoutLandlordNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutLandlordNestedInput
  }

  export type LandlordCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LandlordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LandlordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LeaseCreateInput = {
    id?: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutLeasesInput
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
    parentLease?: LeaseCreateNestedOneWithoutRenewalsInput
    renewals?: LeaseCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: string
    unitId: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
    renewals?: LeaseUncheckedCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutLeasesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
    parentLease?: LeaseUpdateOneWithoutRenewalsNestedInput
    renewals?: LeaseUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
    renewals?: LeaseUncheckedUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseCreateManyInput = {
    id?: string
    unitId: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LeaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestCreateInput = {
    id?: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutMaintenanceRequestsInput
    unit: UnitCreateNestedOneWithoutMaintenanceRequestsInput
    vendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateInput = {
    id?: string
    unitId: string
    tenantId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorId?: string | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MaintenanceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    tenant?: TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    unit?: UnitUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    vendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestCreateManyInput = {
    id?: string
    unitId: string
    tenantId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorId?: string | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MaintenanceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type: $Enums.PaymentType
    dueDate: Date | string
    paidAt?: Date | string | null
    method: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus | null
    transactionRef?: string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    receiptUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    lease: LeaseCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    leaseId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type: $Enums.PaymentType
    dueDate: Date | string
    paidAt?: Date | string | null
    method: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus | null
    transactionRef?: string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    receiptUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?:
      | NullableEnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus
      | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    feeAmount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    lease?: LeaseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?:
      | NullableEnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus
      | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    feeAmount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    leaseId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type: $Enums.PaymentType
    dueDate: Date | string
    paidAt?: Date | string | null
    method: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus | null
    transactionRef?: string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    receiptUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?:
      | NullableEnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus
      | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    feeAmount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?:
      | NullableEnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus
      | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    feeAmount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type TenantCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutTenantInput
    leases?: LeaseCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    units?: UnitCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutTenantInput
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    units?: UnitUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutTenantNestedInput
    leases?: LeaseUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    units?: UnitUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    units?: UnitUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UnitCreateInput = {
    id?: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutUnitInput
    complex: ComplexCreateNestedOneWithoutUnitsInput
    tenant?: TenantCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    complexId: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    tenantId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutUnitNestedInput
    complex?: ComplexUpdateOneRequiredWithoutUnitsNestedInput
    tenant?: TenantUpdateOneWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    complexId: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    tenantId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type VendorCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    specialty?: string | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    rating?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutVendorInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    specialty?: string | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    rating?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutVendorInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutVendorNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutVendorNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    specialty?: string | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    rating?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    channel: string
    content: string
    status?: string
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    channel: string
    content: string
    status?: string
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    channel: string
    content: string
    status?: string
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type LandlordNullableScalarRelationFilter = {
    is?: LandlordWhereInput | null
    isNot?: LandlordWhereInput | null
  }

  export type TenantNullableScalarRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    vendorId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    vendorId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    tenantId?: SortOrder
    vendorId?: SortOrder
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type LandlordScalarRelationFilter = {
    is?: LandlordWhereInput
    isNot?: LandlordWhereInput
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplexCountOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    street?: SortOrder
    address?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ComplexMaxOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    street?: SortOrder
    address?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ComplexMinOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    street?: SortOrder
    address?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumIdTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIdTypeNullableFilter<$PrismaModel> | $Enums.IdType | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ComplexListRelationFilter = {
    every?: ComplexWhereInput
    some?: ComplexWhereInput
    none?: ComplexWhereInput
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandlordCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    isVerified?: SortOrder
    proofOfOwnership?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
    mobileMoneyNumber?: SortOrder
    notificationPrefs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LandlordMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    isVerified?: SortOrder
    proofOfOwnership?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
    mobileMoneyNumber?: SortOrder
    notificationPrefs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LandlordMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    isVerified?: SortOrder
    proofOfOwnership?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
    mobileMoneyNumber?: SortOrder
    notificationPrefs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumIdTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    not?:
      | NestedEnumIdTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.IdType
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIdTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIdTypeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumLeaseStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.LeaseStatus
      | EnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumLeaseStatusNullableFilter<$PrismaModel>
      | $Enums.LeaseStatus
      | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type LeaseNullableScalarRelationFilter = {
    is?: LeaseWhereInput | null
    isNot?: LeaseWhereInput | null
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    landlordId?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    rentAmount?: SortOrder
    currency?: SortOrder
    advanceMonths?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rules?: SortOrder
    noticePeriod?: SortOrder
    parentLeaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LeaseAvgOrderByAggregateInput = {
    rentAmount?: SortOrder
    advanceMonths?: SortOrder
    noticePeriod?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    landlordId?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    rentAmount?: SortOrder
    currency?: SortOrder
    advanceMonths?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rules?: SortOrder
    noticePeriod?: SortOrder
    parentLeaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    landlordId?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    rentAmount?: SortOrder
    currency?: SortOrder
    advanceMonths?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    rules?: SortOrder
    noticePeriod?: SortOrder
    parentLeaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LeaseSumOrderByAggregateInput = {
    rentAmount?: SortOrder
    advanceMonths?: SortOrder
    noticePeriod?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLeaseStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.LeaseStatus
      | EnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumLeaseStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.LeaseStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeaseStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLeaseStatusNullableFilter<$PrismaModel>
  }

  export type EnumMaintenanceStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MaintenanceStatus
      | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.MaintenanceStatus[]
      | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.MaintenanceStatus[]
      | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumMaintenanceStatusNullableFilter<$PrismaModel>
      | $Enums.MaintenanceStatus
      | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
  }

  export type EnumInvoiceStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumInvoiceStatusNullableFilter<$PrismaModel>
      | $Enums.InvoiceStatus
      | null
  }

  export type MaintenanceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    vendorResponse?: SortOrder
    scheduledFor?: SortOrder
    completedAt?: SortOrder
    cost?: SortOrder
    costCurrency?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MaintenanceRequestAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type MaintenanceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    vendorResponse?: SortOrder
    scheduledFor?: SortOrder
    completedAt?: SortOrder
    cost?: SortOrder
    costCurrency?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MaintenanceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    vendorResponse?: SortOrder
    scheduledFor?: SortOrder
    completedAt?: SortOrder
    cost?: SortOrder
    costCurrency?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MaintenanceRequestSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type EnumMaintenanceStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.MaintenanceStatus
      | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.MaintenanceStatus[]
      | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.MaintenanceStatus[]
      | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumMaintenanceStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.MaintenanceStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumInvoiceStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.InvoiceStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusNullableFilter<$PrismaModel>
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PaymentType[]
      | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumPaymentStatusNullableFilter<$PrismaModel>
      | $Enums.PaymentStatus
      | null
  }

  export type LeaseScalarRelationFilter = {
    is?: LeaseWhereInput
    isNot?: LeaseWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    feeAmount?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    feeAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    feeAmount?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    paymentStatus?: SortOrder
    transactionRef?: SortOrder
    feeAmount?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    feeAmount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PaymentType[]
      | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
  }

  export type MaintenanceRequestListRelationFilter = {
    every?: MaintenanceRequestWhereInput
    some?: MaintenanceRequestWhereInput
    none?: MaintenanceRequestWhereInput
  }

  export type MaintenanceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    idType?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumUnitTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel> | null
    notIn?:
      | $Enums.UnitType[]
      | ListEnumUnitTypeFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumUnitTypeNullableFilter<$PrismaModel>
      | $Enums.UnitType
      | null
  }

  export type ComplexScalarRelationFilter = {
    is?: ComplexWhereInput
    isNot?: ComplexWhereInput
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    complexId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    complexId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    complexId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumUnitTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel> | null
    notIn?:
      | $Enums.UnitType[]
      | ListEnumUnitTypeFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumUnitTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.UnitType
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    idNumber?: SortOrder
    idDocumentUrl?: SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    content?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    content?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    content?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LandlordCreateNestedOneWithoutUserInput = {
    create?: XOR<
      LandlordCreateWithoutUserInput,
      LandlordUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: LandlordCreateOrConnectWithoutUserInput
    connect?: LandlordWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutUserInput = {
    create?: XOR<
      TenantCreateWithoutUserInput,
      TenantUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutUserInput = {
    create?: XOR<
      VendorCreateWithoutUserInput,
      VendorUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LandlordUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      LandlordCreateWithoutUserInput,
      LandlordUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: LandlordCreateOrConnectWithoutUserInput
    upsert?: LandlordUpsertWithoutUserInput
    disconnect?: LandlordWhereInput | boolean
    delete?: LandlordWhereInput | boolean
    connect?: LandlordWhereUniqueInput
    update?: XOR<
      XOR<
        LandlordUpdateToOneWithWhereWithoutUserInput,
        LandlordUpdateWithoutUserInput
      >,
      LandlordUncheckedUpdateWithoutUserInput
    >
  }

  export type TenantUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      TenantCreateWithoutUserInput,
      TenantUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<
      XOR<
        TenantUpdateToOneWithWhereWithoutUserInput,
        TenantUpdateWithoutUserInput
      >,
      TenantUncheckedUpdateWithoutUserInput
    >
  }

  export type VendorUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      VendorCreateWithoutUserInput,
      VendorUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<
      XOR<
        VendorUpdateToOneWithWhereWithoutUserInput,
        VendorUpdateWithoutUserInput
      >,
      VendorUncheckedUpdateWithoutUserInput
    >
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[]
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutUserInput
      | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?:
      | NotificationUpdateWithWhereUniqueWithoutUserInput
      | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutUserInput
      | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutUserInput,
          NotificationUncheckedCreateWithoutUserInput
        >
      | NotificationCreateWithoutUserInput[]
      | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutUserInput
      | NotificationCreateOrConnectWithoutUserInput[]
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutUserInput
      | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?:
      | NotificationUpdateWithWhereUniqueWithoutUserInput
      | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutUserInput
      | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type LandlordCreateNestedOneWithoutComplexesInput = {
    create?: XOR<
      LandlordCreateWithoutComplexesInput,
      LandlordUncheckedCreateWithoutComplexesInput
    >
    connectOrCreate?: LandlordCreateOrConnectWithoutComplexesInput
    connect?: LandlordWhereUniqueInput
  }

  export type UnitCreateNestedManyWithoutComplexInput = {
    create?:
      | XOR<
          UnitCreateWithoutComplexInput,
          UnitUncheckedCreateWithoutComplexInput
        >
      | UnitCreateWithoutComplexInput[]
      | UnitUncheckedCreateWithoutComplexInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutComplexInput
      | UnitCreateOrConnectWithoutComplexInput[]
    createMany?: UnitCreateManyComplexInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutComplexInput = {
    create?:
      | XOR<
          UnitCreateWithoutComplexInput,
          UnitUncheckedCreateWithoutComplexInput
        >
      | UnitCreateWithoutComplexInput[]
      | UnitUncheckedCreateWithoutComplexInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutComplexInput
      | UnitCreateOrConnectWithoutComplexInput[]
    createMany?: UnitCreateManyComplexInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LandlordUpdateOneRequiredWithoutComplexesNestedInput = {
    create?: XOR<
      LandlordCreateWithoutComplexesInput,
      LandlordUncheckedCreateWithoutComplexesInput
    >
    connectOrCreate?: LandlordCreateOrConnectWithoutComplexesInput
    upsert?: LandlordUpsertWithoutComplexesInput
    connect?: LandlordWhereUniqueInput
    update?: XOR<
      XOR<
        LandlordUpdateToOneWithWhereWithoutComplexesInput,
        LandlordUpdateWithoutComplexesInput
      >,
      LandlordUncheckedUpdateWithoutComplexesInput
    >
  }

  export type UnitUpdateManyWithoutComplexNestedInput = {
    create?:
      | XOR<
          UnitCreateWithoutComplexInput,
          UnitUncheckedCreateWithoutComplexInput
        >
      | UnitCreateWithoutComplexInput[]
      | UnitUncheckedCreateWithoutComplexInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutComplexInput
      | UnitCreateOrConnectWithoutComplexInput[]
    upsert?:
      | UnitUpsertWithWhereUniqueWithoutComplexInput
      | UnitUpsertWithWhereUniqueWithoutComplexInput[]
    createMany?: UnitCreateManyComplexInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?:
      | UnitUpdateWithWhereUniqueWithoutComplexInput
      | UnitUpdateWithWhereUniqueWithoutComplexInput[]
    updateMany?:
      | UnitUpdateManyWithWhereWithoutComplexInput
      | UnitUpdateManyWithWhereWithoutComplexInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutComplexNestedInput = {
    create?:
      | XOR<
          UnitCreateWithoutComplexInput,
          UnitUncheckedCreateWithoutComplexInput
        >
      | UnitCreateWithoutComplexInput[]
      | UnitUncheckedCreateWithoutComplexInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutComplexInput
      | UnitCreateOrConnectWithoutComplexInput[]
    upsert?:
      | UnitUpsertWithWhereUniqueWithoutComplexInput
      | UnitUpsertWithWhereUniqueWithoutComplexInput[]
    createMany?: UnitCreateManyComplexInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?:
      | UnitUpdateWithWhereUniqueWithoutComplexInput
      | UnitUpdateWithWhereUniqueWithoutComplexInput[]
    updateMany?:
      | UnitUpdateManyWithWhereWithoutComplexInput
      | UnitUpdateManyWithWhereWithoutComplexInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutLandlordInput = {
    create?:
      | XOR<
          UserCreateWithoutLandlordInput,
          UserUncheckedCreateWithoutLandlordInput
        >
      | UserCreateWithoutLandlordInput[]
      | UserUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutLandlordInput
      | UserCreateOrConnectWithoutLandlordInput[]
    createMany?: UserCreateManyLandlordInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ComplexCreateNestedManyWithoutLandlordInput = {
    create?:
      | XOR<
          ComplexCreateWithoutLandlordInput,
          ComplexUncheckedCreateWithoutLandlordInput
        >
      | ComplexCreateWithoutLandlordInput[]
      | ComplexUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | ComplexCreateOrConnectWithoutLandlordInput
      | ComplexCreateOrConnectWithoutLandlordInput[]
    createMany?: ComplexCreateManyLandlordInputEnvelope
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutLandlordInput = {
    create?:
      | XOR<
          LeaseCreateWithoutLandlordInput,
          LeaseUncheckedCreateWithoutLandlordInput
        >
      | LeaseCreateWithoutLandlordInput[]
      | LeaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutLandlordInput
      | LeaseCreateOrConnectWithoutLandlordInput[]
    createMany?: LeaseCreateManyLandlordInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLandlordInput = {
    create?:
      | XOR<
          UserCreateWithoutLandlordInput,
          UserUncheckedCreateWithoutLandlordInput
        >
      | UserCreateWithoutLandlordInput[]
      | UserUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutLandlordInput
      | UserCreateOrConnectWithoutLandlordInput[]
    createMany?: UserCreateManyLandlordInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ComplexUncheckedCreateNestedManyWithoutLandlordInput = {
    create?:
      | XOR<
          ComplexCreateWithoutLandlordInput,
          ComplexUncheckedCreateWithoutLandlordInput
        >
      | ComplexCreateWithoutLandlordInput[]
      | ComplexUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | ComplexCreateOrConnectWithoutLandlordInput
      | ComplexCreateOrConnectWithoutLandlordInput[]
    createMany?: ComplexCreateManyLandlordInputEnvelope
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutLandlordInput = {
    create?:
      | XOR<
          LeaseCreateWithoutLandlordInput,
          LeaseUncheckedCreateWithoutLandlordInput
        >
      | LeaseCreateWithoutLandlordInput[]
      | LeaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutLandlordInput
      | LeaseCreateOrConnectWithoutLandlordInput[]
    createMany?: LeaseCreateManyLandlordInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type NullableEnumIdTypeFieldUpdateOperationsInput = {
    set?: $Enums.IdType | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateManyWithoutLandlordNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutLandlordInput,
          UserUncheckedCreateWithoutLandlordInput
        >
      | UserCreateWithoutLandlordInput[]
      | UserUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutLandlordInput
      | UserCreateOrConnectWithoutLandlordInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutLandlordInput
      | UserUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: UserCreateManyLandlordInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutLandlordInput
      | UserUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutLandlordInput
      | UserUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ComplexUpdateManyWithoutLandlordNestedInput = {
    create?:
      | XOR<
          ComplexCreateWithoutLandlordInput,
          ComplexUncheckedCreateWithoutLandlordInput
        >
      | ComplexCreateWithoutLandlordInput[]
      | ComplexUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | ComplexCreateOrConnectWithoutLandlordInput
      | ComplexCreateOrConnectWithoutLandlordInput[]
    upsert?:
      | ComplexUpsertWithWhereUniqueWithoutLandlordInput
      | ComplexUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: ComplexCreateManyLandlordInputEnvelope
    set?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    disconnect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    delete?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    update?:
      | ComplexUpdateWithWhereUniqueWithoutLandlordInput
      | ComplexUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?:
      | ComplexUpdateManyWithWhereWithoutLandlordInput
      | ComplexUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutLandlordNestedInput = {
    create?:
      | XOR<
          LeaseCreateWithoutLandlordInput,
          LeaseUncheckedCreateWithoutLandlordInput
        >
      | LeaseCreateWithoutLandlordInput[]
      | LeaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutLandlordInput
      | LeaseCreateOrConnectWithoutLandlordInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutLandlordInput
      | LeaseUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: LeaseCreateManyLandlordInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutLandlordInput
      | LeaseUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutLandlordInput
      | LeaseUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLandlordNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutLandlordInput,
          UserUncheckedCreateWithoutLandlordInput
        >
      | UserCreateWithoutLandlordInput[]
      | UserUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutLandlordInput
      | UserCreateOrConnectWithoutLandlordInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutLandlordInput
      | UserUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: UserCreateManyLandlordInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutLandlordInput
      | UserUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutLandlordInput
      | UserUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ComplexUncheckedUpdateManyWithoutLandlordNestedInput = {
    create?:
      | XOR<
          ComplexCreateWithoutLandlordInput,
          ComplexUncheckedCreateWithoutLandlordInput
        >
      | ComplexCreateWithoutLandlordInput[]
      | ComplexUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | ComplexCreateOrConnectWithoutLandlordInput
      | ComplexCreateOrConnectWithoutLandlordInput[]
    upsert?:
      | ComplexUpsertWithWhereUniqueWithoutLandlordInput
      | ComplexUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: ComplexCreateManyLandlordInputEnvelope
    set?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    disconnect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    delete?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    update?:
      | ComplexUpdateWithWhereUniqueWithoutLandlordInput
      | ComplexUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?:
      | ComplexUpdateManyWithWhereWithoutLandlordInput
      | ComplexUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutLandlordNestedInput = {
    create?:
      | XOR<
          LeaseCreateWithoutLandlordInput,
          LeaseUncheckedCreateWithoutLandlordInput
        >
      | LeaseCreateWithoutLandlordInput[]
      | LeaseUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutLandlordInput
      | LeaseCreateOrConnectWithoutLandlordInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutLandlordInput
      | LeaseUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: LeaseCreateManyLandlordInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutLandlordInput
      | LeaseUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutLandlordInput
      | LeaseUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LandlordCreateNestedOneWithoutLeasesInput = {
    create?: XOR<
      LandlordCreateWithoutLeasesInput,
      LandlordUncheckedCreateWithoutLeasesInput
    >
    connectOrCreate?: LandlordCreateOrConnectWithoutLeasesInput
    connect?: LandlordWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutLeasesInput = {
    create?: XOR<
      TenantCreateWithoutLeasesInput,
      TenantUncheckedCreateWithoutLeasesInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    connect?: TenantWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutLeasesInput = {
    create?: XOR<
      UnitCreateWithoutLeasesInput,
      UnitUncheckedCreateWithoutLeasesInput
    >
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    connect?: UnitWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutLeaseInput = {
    create?:
      | XOR<
          PaymentCreateWithoutLeaseInput,
          PaymentUncheckedCreateWithoutLeaseInput
        >
      | PaymentCreateWithoutLeaseInput[]
      | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutLeaseInput
      | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type LeaseCreateNestedOneWithoutRenewalsInput = {
    create?: XOR<
      LeaseCreateWithoutRenewalsInput,
      LeaseUncheckedCreateWithoutRenewalsInput
    >
    connectOrCreate?: LeaseCreateOrConnectWithoutRenewalsInput
    connect?: LeaseWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutParentLeaseInput = {
    create?:
      | XOR<
          LeaseCreateWithoutParentLeaseInput,
          LeaseUncheckedCreateWithoutParentLeaseInput
        >
      | LeaseCreateWithoutParentLeaseInput[]
      | LeaseUncheckedCreateWithoutParentLeaseInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutParentLeaseInput
      | LeaseCreateOrConnectWithoutParentLeaseInput[]
    createMany?: LeaseCreateManyParentLeaseInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutLeaseInput = {
    create?:
      | XOR<
          PaymentCreateWithoutLeaseInput,
          PaymentUncheckedCreateWithoutLeaseInput
        >
      | PaymentCreateWithoutLeaseInput[]
      | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutLeaseInput
      | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutParentLeaseInput = {
    create?:
      | XOR<
          LeaseCreateWithoutParentLeaseInput,
          LeaseUncheckedCreateWithoutParentLeaseInput
        >
      | LeaseCreateWithoutParentLeaseInput[]
      | LeaseUncheckedCreateWithoutParentLeaseInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutParentLeaseInput
      | LeaseCreateOrConnectWithoutParentLeaseInput[]
    createMany?: LeaseCreateManyParentLeaseInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumLeaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaseStatus | null
  }

  export type LandlordUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<
      LandlordCreateWithoutLeasesInput,
      LandlordUncheckedCreateWithoutLeasesInput
    >
    connectOrCreate?: LandlordCreateOrConnectWithoutLeasesInput
    upsert?: LandlordUpsertWithoutLeasesInput
    connect?: LandlordWhereUniqueInput
    update?: XOR<
      XOR<
        LandlordUpdateToOneWithWhereWithoutLeasesInput,
        LandlordUpdateWithoutLeasesInput
      >,
      LandlordUncheckedUpdateWithoutLeasesInput
    >
  }

  export type TenantUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<
      TenantCreateWithoutLeasesInput,
      TenantUncheckedCreateWithoutLeasesInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    upsert?: TenantUpsertWithoutLeasesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<
      XOR<
        TenantUpdateToOneWithWhereWithoutLeasesInput,
        TenantUpdateWithoutLeasesInput
      >,
      TenantUncheckedUpdateWithoutLeasesInput
    >
  }

  export type UnitUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<
      UnitCreateWithoutLeasesInput,
      UnitUncheckedCreateWithoutLeasesInput
    >
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    upsert?: UnitUpsertWithoutLeasesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<
      XOR<
        UnitUpdateToOneWithWhereWithoutLeasesInput,
        UnitUpdateWithoutLeasesInput
      >,
      UnitUncheckedUpdateWithoutLeasesInput
    >
  }

  export type PaymentUpdateManyWithoutLeaseNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutLeaseInput,
          PaymentUncheckedCreateWithoutLeaseInput
        >
      | PaymentCreateWithoutLeaseInput[]
      | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutLeaseInput
      | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutLeaseInput
      | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?:
      | PaymentUpdateWithWhereUniqueWithoutLeaseInput
      | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutLeaseInput
      | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type LeaseUpdateOneWithoutRenewalsNestedInput = {
    create?: XOR<
      LeaseCreateWithoutRenewalsInput,
      LeaseUncheckedCreateWithoutRenewalsInput
    >
    connectOrCreate?: LeaseCreateOrConnectWithoutRenewalsInput
    upsert?: LeaseUpsertWithoutRenewalsInput
    disconnect?: LeaseWhereInput | boolean
    delete?: LeaseWhereInput | boolean
    connect?: LeaseWhereUniqueInput
    update?: XOR<
      XOR<
        LeaseUpdateToOneWithWhereWithoutRenewalsInput,
        LeaseUpdateWithoutRenewalsInput
      >,
      LeaseUncheckedUpdateWithoutRenewalsInput
    >
  }

  export type LeaseUpdateManyWithoutParentLeaseNestedInput = {
    create?:
      | XOR<
          LeaseCreateWithoutParentLeaseInput,
          LeaseUncheckedCreateWithoutParentLeaseInput
        >
      | LeaseCreateWithoutParentLeaseInput[]
      | LeaseUncheckedCreateWithoutParentLeaseInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutParentLeaseInput
      | LeaseCreateOrConnectWithoutParentLeaseInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutParentLeaseInput
      | LeaseUpsertWithWhereUniqueWithoutParentLeaseInput[]
    createMany?: LeaseCreateManyParentLeaseInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutParentLeaseInput
      | LeaseUpdateWithWhereUniqueWithoutParentLeaseInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutParentLeaseInput
      | LeaseUpdateManyWithWhereWithoutParentLeaseInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutLeaseInput,
          PaymentUncheckedCreateWithoutLeaseInput
        >
      | PaymentCreateWithoutLeaseInput[]
      | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutLeaseInput
      | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutLeaseInput
      | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?:
      | PaymentUpdateWithWhereUniqueWithoutLeaseInput
      | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutLeaseInput
      | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutParentLeaseNestedInput = {
    create?:
      | XOR<
          LeaseCreateWithoutParentLeaseInput,
          LeaseUncheckedCreateWithoutParentLeaseInput
        >
      | LeaseCreateWithoutParentLeaseInput[]
      | LeaseUncheckedCreateWithoutParentLeaseInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutParentLeaseInput
      | LeaseCreateOrConnectWithoutParentLeaseInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutParentLeaseInput
      | LeaseUpsertWithWhereUniqueWithoutParentLeaseInput[]
    createMany?: LeaseCreateManyParentLeaseInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutParentLeaseInput
      | LeaseUpdateWithWhereUniqueWithoutParentLeaseInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutParentLeaseInput
      | LeaseUpdateManyWithWhereWithoutParentLeaseInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<
      TenantCreateWithoutMaintenanceRequestsInput,
      TenantUncheckedCreateWithoutMaintenanceRequestsInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: TenantWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<
      UnitCreateWithoutMaintenanceRequestsInput,
      UnitUncheckedCreateWithoutMaintenanceRequestsInput
    >
    connectOrCreate?: UnitCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: UnitWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<
      VendorCreateWithoutMaintenanceRequestsInput,
      VendorUncheckedCreateWithoutMaintenanceRequestsInput
    >
    connectOrCreate?: VendorCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: VendorWhereUniqueInput
  }

  export type NullableEnumMaintenanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceStatus | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus | null
  }

  export type TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<
      TenantCreateWithoutMaintenanceRequestsInput,
      TenantUncheckedCreateWithoutMaintenanceRequestsInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: TenantUpsertWithoutMaintenanceRequestsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<
      XOR<
        TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput,
        TenantUpdateWithoutMaintenanceRequestsInput
      >,
      TenantUncheckedUpdateWithoutMaintenanceRequestsInput
    >
  }

  export type UnitUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<
      UnitCreateWithoutMaintenanceRequestsInput,
      UnitUncheckedCreateWithoutMaintenanceRequestsInput
    >
    connectOrCreate?: UnitCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: UnitUpsertWithoutMaintenanceRequestsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<
      XOR<
        UnitUpdateToOneWithWhereWithoutMaintenanceRequestsInput,
        UnitUpdateWithoutMaintenanceRequestsInput
      >,
      UnitUncheckedUpdateWithoutMaintenanceRequestsInput
    >
  }

  export type VendorUpdateOneWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<
      VendorCreateWithoutMaintenanceRequestsInput,
      VendorUncheckedCreateWithoutMaintenanceRequestsInput
    >
    connectOrCreate?: VendorCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: VendorUpsertWithoutMaintenanceRequestsInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<
      XOR<
        VendorUpdateToOneWithWhereWithoutMaintenanceRequestsInput,
        VendorUpdateWithoutMaintenanceRequestsInput
      >,
      VendorUncheckedUpdateWithoutMaintenanceRequestsInput
    >
  }

  export type LeaseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<
      LeaseCreateWithoutPaymentsInput,
      LeaseUncheckedCreateWithoutPaymentsInput
    >
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    connect?: LeaseWhereUniqueInput
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type NullableEnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus | null
  }

  export type LeaseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<
      LeaseCreateWithoutPaymentsInput,
      LeaseUncheckedCreateWithoutPaymentsInput
    >
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    upsert?: LeaseUpsertWithoutPaymentsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<
      XOR<
        LeaseUpdateToOneWithWhereWithoutPaymentsInput,
        LeaseUpdateWithoutPaymentsInput
      >,
      LeaseUncheckedUpdateWithoutPaymentsInput
    >
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
      | UserCreateWithoutTenantInput[]
      | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutTenantInput
      | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<
          LeaseCreateWithoutTenantInput,
          LeaseUncheckedCreateWithoutTenantInput
        >
      | LeaseCreateWithoutTenantInput[]
      | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutTenantInput
      | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutTenantInput,
          MaintenanceRequestUncheckedCreateWithoutTenantInput
        >
      | MaintenanceRequestCreateWithoutTenantInput[]
      | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutTenantInput
      | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
  }

  export type UnitCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<UnitCreateWithoutTenantInput, UnitUncheckedCreateWithoutTenantInput>
      | UnitCreateWithoutTenantInput[]
      | UnitUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutTenantInput
      | UnitCreateOrConnectWithoutTenantInput[]
    createMany?: UnitCreateManyTenantInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
      | UserCreateWithoutTenantInput[]
      | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutTenantInput
      | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<
          LeaseCreateWithoutTenantInput,
          LeaseUncheckedCreateWithoutTenantInput
        >
      | LeaseCreateWithoutTenantInput[]
      | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutTenantInput
      | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutTenantInput,
          MaintenanceRequestUncheckedCreateWithoutTenantInput
        >
      | MaintenanceRequestCreateWithoutTenantInput[]
      | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutTenantInput
      | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<UnitCreateWithoutTenantInput, UnitUncheckedCreateWithoutTenantInput>
      | UnitCreateWithoutTenantInput[]
      | UnitUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutTenantInput
      | UnitCreateOrConnectWithoutTenantInput[]
    createMany?: UnitCreateManyTenantInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
      | UserCreateWithoutTenantInput[]
      | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutTenantInput
      | UserCreateOrConnectWithoutTenantInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutTenantInput
      | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutTenantInput
      | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutTenantInput
      | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<
          LeaseCreateWithoutTenantInput,
          LeaseUncheckedCreateWithoutTenantInput
        >
      | LeaseCreateWithoutTenantInput[]
      | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutTenantInput
      | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutTenantInput
      | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutTenantInput
      | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutTenantInput
      | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutTenantInput,
          MaintenanceRequestUncheckedCreateWithoutTenantInput
        >
      | MaintenanceRequestCreateWithoutTenantInput[]
      | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutTenantInput
      | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?:
      | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput
      | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    disconnect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    delete?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    update?:
      | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput
      | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput
      | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
  }

  export type UnitUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<UnitCreateWithoutTenantInput, UnitUncheckedCreateWithoutTenantInput>
      | UnitCreateWithoutTenantInput[]
      | UnitUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutTenantInput
      | UnitCreateOrConnectWithoutTenantInput[]
    upsert?:
      | UnitUpsertWithWhereUniqueWithoutTenantInput
      | UnitUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UnitCreateManyTenantInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?:
      | UnitUpdateWithWhereUniqueWithoutTenantInput
      | UnitUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | UnitUpdateManyWithWhereWithoutTenantInput
      | UnitUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
      | UserCreateWithoutTenantInput[]
      | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutTenantInput
      | UserCreateOrConnectWithoutTenantInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutTenantInput
      | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutTenantInput
      | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutTenantInput
      | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<
          LeaseCreateWithoutTenantInput,
          LeaseUncheckedCreateWithoutTenantInput
        >
      | LeaseCreateWithoutTenantInput[]
      | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutTenantInput
      | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutTenantInput
      | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutTenantInput
      | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutTenantInput
      | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutTenantInput,
          MaintenanceRequestUncheckedCreateWithoutTenantInput
        >
      | MaintenanceRequestCreateWithoutTenantInput[]
      | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutTenantInput
      | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?:
      | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput
      | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    disconnect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    delete?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    update?:
      | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput
      | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput
      | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<UnitCreateWithoutTenantInput, UnitUncheckedCreateWithoutTenantInput>
      | UnitCreateWithoutTenantInput[]
      | UnitUncheckedCreateWithoutTenantInput[]
    connectOrCreate?:
      | UnitCreateOrConnectWithoutTenantInput
      | UnitCreateOrConnectWithoutTenantInput[]
    upsert?:
      | UnitUpsertWithWhereUniqueWithoutTenantInput
      | UnitUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UnitCreateManyTenantInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?:
      | UnitUpdateWithWhereUniqueWithoutTenantInput
      | UnitUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?:
      | UnitUpdateManyWithWhereWithoutTenantInput
      | UnitUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type LeaseCreateNestedManyWithoutUnitInput = {
    create?:
      | XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
      | LeaseCreateWithoutUnitInput[]
      | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutUnitInput
      | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutUnitInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutUnitInput,
          MaintenanceRequestUncheckedCreateWithoutUnitInput
        >
      | MaintenanceRequestCreateWithoutUnitInput[]
      | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutUnitInput
      | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
  }

  export type ComplexCreateNestedOneWithoutUnitsInput = {
    create?: XOR<
      ComplexCreateWithoutUnitsInput,
      ComplexUncheckedCreateWithoutUnitsInput
    >
    connectOrCreate?: ComplexCreateOrConnectWithoutUnitsInput
    connect?: ComplexWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutUnitsInput = {
    create?: XOR<
      TenantCreateWithoutUnitsInput,
      TenantUncheckedCreateWithoutUnitsInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutUnitsInput
    connect?: TenantWhereUniqueInput
  }

  export type LeaseUncheckedCreateNestedManyWithoutUnitInput = {
    create?:
      | XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
      | LeaseCreateWithoutUnitInput[]
      | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutUnitInput
      | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutUnitInput,
          MaintenanceRequestUncheckedCreateWithoutUnitInput
        >
      | MaintenanceRequestCreateWithoutUnitInput[]
      | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutUnitInput
      | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
  }

  export type NullableEnumUnitTypeFieldUpdateOperationsInput = {
    set?: $Enums.UnitType | null
  }

  export type LeaseUpdateManyWithoutUnitNestedInput = {
    create?:
      | XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
      | LeaseCreateWithoutUnitInput[]
      | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutUnitInput
      | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutUnitInput
      | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutUnitInput
      | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutUnitInput
      | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutUnitNestedInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutUnitInput,
          MaintenanceRequestUncheckedCreateWithoutUnitInput
        >
      | MaintenanceRequestCreateWithoutUnitInput[]
      | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutUnitInput
      | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    upsert?:
      | MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput
      | MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    set?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    disconnect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    delete?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    update?:
      | MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput
      | MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?:
      | MaintenanceRequestUpdateManyWithWhereWithoutUnitInput
      | MaintenanceRequestUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
  }

  export type ComplexUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<
      ComplexCreateWithoutUnitsInput,
      ComplexUncheckedCreateWithoutUnitsInput
    >
    connectOrCreate?: ComplexCreateOrConnectWithoutUnitsInput
    upsert?: ComplexUpsertWithoutUnitsInput
    connect?: ComplexWhereUniqueInput
    update?: XOR<
      XOR<
        ComplexUpdateToOneWithWhereWithoutUnitsInput,
        ComplexUpdateWithoutUnitsInput
      >,
      ComplexUncheckedUpdateWithoutUnitsInput
    >
  }

  export type TenantUpdateOneWithoutUnitsNestedInput = {
    create?: XOR<
      TenantCreateWithoutUnitsInput,
      TenantUncheckedCreateWithoutUnitsInput
    >
    connectOrCreate?: TenantCreateOrConnectWithoutUnitsInput
    upsert?: TenantUpsertWithoutUnitsInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<
      XOR<
        TenantUpdateToOneWithWhereWithoutUnitsInput,
        TenantUpdateWithoutUnitsInput
      >,
      TenantUncheckedUpdateWithoutUnitsInput
    >
  }

  export type LeaseUncheckedUpdateManyWithoutUnitNestedInput = {
    create?:
      | XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
      | LeaseCreateWithoutUnitInput[]
      | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | LeaseCreateOrConnectWithoutUnitInput
      | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?:
      | LeaseUpsertWithWhereUniqueWithoutUnitInput
      | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?:
      | LeaseUpdateWithWhereUniqueWithoutUnitInput
      | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?:
      | LeaseUpdateManyWithWhereWithoutUnitInput
      | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutUnitInput,
          MaintenanceRequestUncheckedCreateWithoutUnitInput
        >
      | MaintenanceRequestCreateWithoutUnitInput[]
      | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutUnitInput
      | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    upsert?:
      | MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput
      | MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    set?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    disconnect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    delete?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    update?:
      | MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput
      | MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?:
      | MaintenanceRequestUpdateManyWithWhereWithoutUnitInput
      | MaintenanceRequestUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
      | UserCreateWithoutVendorInput[]
      | UserUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutVendorInput
      | UserCreateOrConnectWithoutVendorInput[]
    createMany?: UserCreateManyVendorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutVendorInput,
          MaintenanceRequestUncheckedCreateWithoutVendorInput
        >
      | MaintenanceRequestCreateWithoutVendorInput[]
      | MaintenanceRequestUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutVendorInput
      | MaintenanceRequestCreateOrConnectWithoutVendorInput[]
    createMany?: MaintenanceRequestCreateManyVendorInputEnvelope
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
      | UserCreateWithoutVendorInput[]
      | UserUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutVendorInput
      | UserCreateOrConnectWithoutVendorInput[]
    createMany?: UserCreateManyVendorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutVendorInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutVendorInput,
          MaintenanceRequestUncheckedCreateWithoutVendorInput
        >
      | MaintenanceRequestCreateWithoutVendorInput[]
      | MaintenanceRequestUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutVendorInput
      | MaintenanceRequestCreateOrConnectWithoutVendorInput[]
    createMany?: MaintenanceRequestCreateManyVendorInputEnvelope
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
      | UserCreateWithoutVendorInput[]
      | UserUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutVendorInput
      | UserCreateOrConnectWithoutVendorInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutVendorInput
      | UserUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: UserCreateManyVendorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutVendorInput
      | UserUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutVendorInput
      | UserUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutVendorInput,
          MaintenanceRequestUncheckedCreateWithoutVendorInput
        >
      | MaintenanceRequestCreateWithoutVendorInput[]
      | MaintenanceRequestUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutVendorInput
      | MaintenanceRequestCreateOrConnectWithoutVendorInput[]
    upsert?:
      | MaintenanceRequestUpsertWithWhereUniqueWithoutVendorInput
      | MaintenanceRequestUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MaintenanceRequestCreateManyVendorInputEnvelope
    set?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    disconnect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    delete?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    update?:
      | MaintenanceRequestUpdateWithWhereUniqueWithoutVendorInput
      | MaintenanceRequestUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?:
      | MaintenanceRequestUpdateManyWithWhereWithoutVendorInput
      | MaintenanceRequestUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
      | UserCreateWithoutVendorInput[]
      | UserUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | UserCreateOrConnectWithoutVendorInput
      | UserCreateOrConnectWithoutVendorInput[]
    upsert?:
      | UserUpsertWithWhereUniqueWithoutVendorInput
      | UserUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: UserCreateManyVendorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?:
      | UserUpdateWithWhereUniqueWithoutVendorInput
      | UserUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?:
      | UserUpdateManyWithWhereWithoutVendorInput
      | UserUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutVendorNestedInput = {
    create?:
      | XOR<
          MaintenanceRequestCreateWithoutVendorInput,
          MaintenanceRequestUncheckedCreateWithoutVendorInput
        >
      | MaintenanceRequestCreateWithoutVendorInput[]
      | MaintenanceRequestUncheckedCreateWithoutVendorInput[]
    connectOrCreate?:
      | MaintenanceRequestCreateOrConnectWithoutVendorInput
      | MaintenanceRequestCreateOrConnectWithoutVendorInput[]
    upsert?:
      | MaintenanceRequestUpsertWithWhereUniqueWithoutVendorInput
      | MaintenanceRequestUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MaintenanceRequestCreateManyVendorInputEnvelope
    set?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    disconnect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    delete?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    connect?:
      | MaintenanceRequestWhereUniqueInput
      | MaintenanceRequestWhereUniqueInput[]
    update?:
      | MaintenanceRequestUpdateWithWhereUniqueWithoutVendorInput
      | MaintenanceRequestUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?:
      | MaintenanceRequestUpdateManyWithWhereWithoutVendorInput
      | MaintenanceRequestUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutNotificationsInput,
        UserUpdateWithoutNotificationsInput
      >,
      UserUncheckedUpdateWithoutNotificationsInput
    >
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
      notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null
      _count?: NestedIntNullableFilter<$PrismaModel>
      _min?: NestedDateTimeNullableFilter<$PrismaModel>
      _max?: NestedDateTimeNullableFilter<$PrismaModel>
    }

  export type NestedEnumIdTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIdTypeNullableFilter<$PrismaModel> | $Enums.IdType | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumIdTypeNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel> | null
    not?:
      | NestedEnumIdTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.IdType
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIdTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIdTypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
  }

  export type NestedEnumLeaseStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.LeaseStatus
      | EnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumLeaseStatusNullableFilter<$PrismaModel>
      | $Enums.LeaseStatus
      | null
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLeaseStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.LeaseStatus
      | EnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.LeaseStatus[]
      | ListEnumLeaseStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumLeaseStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.LeaseStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeaseStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLeaseStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumMaintenanceStatusNullableFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.MaintenanceStatus
        | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
        | null
      in?:
        | $Enums.MaintenanceStatus[]
        | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
        | null
      notIn?:
        | $Enums.MaintenanceStatus[]
        | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
        | null
      not?:
        | NestedEnumMaintenanceStatusNullableFilter<$PrismaModel>
        | $Enums.MaintenanceStatus
        | null
    }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
  }

  export type NestedEnumInvoiceStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumInvoiceStatusNullableFilter<$PrismaModel>
      | $Enums.InvoiceStatus
      | null
  }

  export type NestedEnumMaintenanceStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.MaintenanceStatus
      | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.MaintenanceStatus[]
      | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.MaintenanceStatus[]
      | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumMaintenanceStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.MaintenanceStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
        | null
      in?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null
      notIn?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null
      lt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      lte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      gt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      gte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      not?:
        | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null
      _count?: NestedIntNullableFilter<$PrismaModel>
      _avg?: NestedDecimalNullableFilter<$PrismaModel>
      _sum?: NestedDecimalNullableFilter<$PrismaModel>
      _min?: NestedDecimalNullableFilter<$PrismaModel>
      _max?: NestedDecimalNullableFilter<$PrismaModel>
    }

  export type NestedEnumInvoiceStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumInvoiceStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.InvoiceStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PaymentType[]
      | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumPaymentStatusNullableFilter<$PrismaModel>
      | $Enums.PaymentStatus
      | null
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
      in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
      notIn?:
        | $Enums.PaymentType[]
        | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
      not?:
        | NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.PaymentType
      _count?: NestedIntFilter<$PrismaModel>
      _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
      _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
    }

  export type NestedEnumPaymentMethodWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PaymentMethod[]
      | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumUnitTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel> | null
    notIn?:
      | $Enums.UnitType[]
      | ListEnumUnitTypeFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumUnitTypeNullableFilter<$PrismaModel>
      | $Enums.UnitType
      | null
  }

  export type NestedEnumUnitTypeNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel> | null
    notIn?:
      | $Enums.UnitType[]
      | ListEnumUnitTypeFieldRefInput<$PrismaModel>
      | null
    not?:
      | NestedEnumUnitTypeNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.UnitType
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LandlordCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    complexes?: ComplexCreateNestedManyWithoutLandlordInput
    leases?: LeaseCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    complexes?: ComplexUncheckedCreateNestedManyWithoutLandlordInput
    leases?: LeaseUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutUserInput = {
    where: LandlordWhereUniqueInput
    create: XOR<
      LandlordCreateWithoutUserInput,
      LandlordUncheckedCreateWithoutUserInput
    >
  }

  export type TenantCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    units?: UnitCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    units?: UnitUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUserInput = {
    where: TenantWhereUniqueInput
    create: XOR<
      TenantCreateWithoutUserInput,
      TenantUncheckedCreateWithoutUserInput
    >
  }

  export type VendorCreateWithoutUserInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    specialty?: string | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    rating?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    specialty?: string | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    rating?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutUserInput = {
    where: VendorWhereUniqueInput
    create: XOR<
      VendorCreateWithoutUserInput,
      VendorUncheckedCreateWithoutUserInput
    >
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    channel: string
    content: string
    status?: string
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    channel: string
    content: string
    status?: string
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<
      NotificationCreateWithoutUserInput,
      NotificationUncheckedCreateWithoutUserInput
    >
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LandlordUpsertWithoutUserInput = {
    update: XOR<
      LandlordUpdateWithoutUserInput,
      LandlordUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      LandlordCreateWithoutUserInput,
      LandlordUncheckedCreateWithoutUserInput
    >
    where?: LandlordWhereInput
  }

  export type LandlordUpdateToOneWithWhereWithoutUserInput = {
    where?: LandlordWhereInput
    data: XOR<
      LandlordUpdateWithoutUserInput,
      LandlordUncheckedUpdateWithoutUserInput
    >
  }

  export type LandlordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    complexes?: ComplexUpdateManyWithoutLandlordNestedInput
    leases?: LeaseUpdateManyWithoutLandlordNestedInput
  }

  export type LandlordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    complexes?: ComplexUncheckedUpdateManyWithoutLandlordNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutLandlordNestedInput
  }

  export type TenantUpsertWithoutUserInput = {
    update: XOR<
      TenantUpdateWithoutUserInput,
      TenantUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      TenantCreateWithoutUserInput,
      TenantUncheckedCreateWithoutUserInput
    >
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantWhereInput
    data: XOR<
      TenantUpdateWithoutUserInput,
      TenantUncheckedUpdateWithoutUserInput
    >
  }

  export type TenantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    units?: UnitUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    units?: UnitUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type VendorUpsertWithoutUserInput = {
    update: XOR<
      VendorUpdateWithoutUserInput,
      VendorUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      VendorCreateWithoutUserInput,
      VendorUncheckedCreateWithoutUserInput
    >
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorWhereInput
    data: XOR<
      VendorUpdateWithoutUserInput,
      VendorUncheckedUpdateWithoutUserInput
    >
  }

  export type VendorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<
      NotificationUpdateWithoutUserInput,
      NotificationUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      NotificationCreateWithoutUserInput,
      NotificationUncheckedCreateWithoutUserInput
    >
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<
      NotificationUpdateWithoutUserInput,
      NotificationUncheckedUpdateWithoutUserInput
    >
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutUserInput
    >
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<'Notification'> | string
    userId?: UuidFilter<'Notification'> | string
    type?: StringFilter<'Notification'> | string
    channel?: StringFilter<'Notification'> | string
    content?: StringFilter<'Notification'> | string
    status?: StringFilter<'Notification'> | string
    scheduledAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
    sentAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
    createdAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Notification'> | Date | string | null
  }

  export type LandlordCreateWithoutComplexesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutLandlordInput
    leases?: LeaseCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutComplexesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutLandlordInput
    leases?: LeaseUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutComplexesInput = {
    where: LandlordWhereUniqueInput
    create: XOR<
      LandlordCreateWithoutComplexesInput,
      LandlordUncheckedCreateWithoutComplexesInput
    >
  }

  export type UnitCreateWithoutComplexInput = {
    id?: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutUnitInput
    tenant?: TenantCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutComplexInput = {
    id?: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    tenantId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutComplexInput = {
    where: UnitWhereUniqueInput
    create: XOR<
      UnitCreateWithoutComplexInput,
      UnitUncheckedCreateWithoutComplexInput
    >
  }

  export type UnitCreateManyComplexInputEnvelope = {
    data: UnitCreateManyComplexInput | UnitCreateManyComplexInput[]
    skipDuplicates?: boolean
  }

  export type LandlordUpsertWithoutComplexesInput = {
    update: XOR<
      LandlordUpdateWithoutComplexesInput,
      LandlordUncheckedUpdateWithoutComplexesInput
    >
    create: XOR<
      LandlordCreateWithoutComplexesInput,
      LandlordUncheckedCreateWithoutComplexesInput
    >
    where?: LandlordWhereInput
  }

  export type LandlordUpdateToOneWithWhereWithoutComplexesInput = {
    where?: LandlordWhereInput
    data: XOR<
      LandlordUpdateWithoutComplexesInput,
      LandlordUncheckedUpdateWithoutComplexesInput
    >
  }

  export type LandlordUpdateWithoutComplexesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutLandlordNestedInput
    leases?: LeaseUpdateManyWithoutLandlordNestedInput
  }

  export type LandlordUncheckedUpdateWithoutComplexesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutLandlordNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutLandlordNestedInput
  }

  export type UnitUpsertWithWhereUniqueWithoutComplexInput = {
    where: UnitWhereUniqueInput
    update: XOR<
      UnitUpdateWithoutComplexInput,
      UnitUncheckedUpdateWithoutComplexInput
    >
    create: XOR<
      UnitCreateWithoutComplexInput,
      UnitUncheckedCreateWithoutComplexInput
    >
  }

  export type UnitUpdateWithWhereUniqueWithoutComplexInput = {
    where: UnitWhereUniqueInput
    data: XOR<
      UnitUpdateWithoutComplexInput,
      UnitUncheckedUpdateWithoutComplexInput
    >
  }

  export type UnitUpdateManyWithWhereWithoutComplexInput = {
    where: UnitScalarWhereInput
    data: XOR<
      UnitUpdateManyMutationInput,
      UnitUncheckedUpdateManyWithoutComplexInput
    >
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: UuidFilter<'Unit'> | string
    complexId?: UuidFilter<'Unit'> | string
    label?: StringFilter<'Unit'> | string
    type?: EnumUnitTypeNullableFilter<'Unit'> | $Enums.UnitType | null
    description?: StringNullableFilter<'Unit'> | string | null
    notes?: StringNullableFilter<'Unit'> | string | null
    tenantId?: UuidNullableFilter<'Unit'> | string | null
    createdAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Unit'> | Date | string | null
  }

  export type UserCreateWithoutLandlordInput = {
    id?: string
    tenant?: TenantCreateNestedOneWithoutUserInput
    vendor?: VendorCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLandlordInput = {
    id?: string
    tenantId?: string | null
    vendorId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLandlordInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutLandlordInput,
      UserUncheckedCreateWithoutLandlordInput
    >
  }

  export type UserCreateManyLandlordInputEnvelope = {
    data: UserCreateManyLandlordInput | UserCreateManyLandlordInput[]
    skipDuplicates?: boolean
  }

  export type ComplexCreateWithoutLandlordInput = {
    id?: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    units?: UnitCreateNestedManyWithoutComplexInput
  }

  export type ComplexUncheckedCreateWithoutLandlordInput = {
    id?: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    units?: UnitUncheckedCreateNestedManyWithoutComplexInput
  }

  export type ComplexCreateOrConnectWithoutLandlordInput = {
    where: ComplexWhereUniqueInput
    create: XOR<
      ComplexCreateWithoutLandlordInput,
      ComplexUncheckedCreateWithoutLandlordInput
    >
  }

  export type ComplexCreateManyLandlordInputEnvelope = {
    data: ComplexCreateManyLandlordInput | ComplexCreateManyLandlordInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutLandlordInput = {
    id?: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
    parentLease?: LeaseCreateNestedOneWithoutRenewalsInput
    renewals?: LeaseCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseUncheckedCreateWithoutLandlordInput = {
    id?: string
    unitId: string
    tenantId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
    renewals?: LeaseUncheckedCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseCreateOrConnectWithoutLandlordInput = {
    where: LeaseWhereUniqueInput
    create: XOR<
      LeaseCreateWithoutLandlordInput,
      LeaseUncheckedCreateWithoutLandlordInput
    >
  }

  export type LeaseCreateManyLandlordInputEnvelope = {
    data: LeaseCreateManyLandlordInput | LeaseCreateManyLandlordInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutLandlordInput = {
    where: UserWhereUniqueInput
    update: XOR<
      UserUpdateWithoutLandlordInput,
      UserUncheckedUpdateWithoutLandlordInput
    >
    create: XOR<
      UserCreateWithoutLandlordInput,
      UserUncheckedCreateWithoutLandlordInput
    >
  }

  export type UserUpdateWithWhereUniqueWithoutLandlordInput = {
    where: UserWhereUniqueInput
    data: XOR<
      UserUpdateWithoutLandlordInput,
      UserUncheckedUpdateWithoutLandlordInput
    >
  }

  export type UserUpdateManyWithWhereWithoutLandlordInput = {
    where: UserScalarWhereInput
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutLandlordInput
    >
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<'User'> | string
    landlordId?: UuidNullableFilter<'User'> | string | null
    tenantId?: UuidNullableFilter<'User'> | string | null
    vendorId?: UuidNullableFilter<'User'> | string | null
  }

  export type ComplexUpsertWithWhereUniqueWithoutLandlordInput = {
    where: ComplexWhereUniqueInput
    update: XOR<
      ComplexUpdateWithoutLandlordInput,
      ComplexUncheckedUpdateWithoutLandlordInput
    >
    create: XOR<
      ComplexCreateWithoutLandlordInput,
      ComplexUncheckedCreateWithoutLandlordInput
    >
  }

  export type ComplexUpdateWithWhereUniqueWithoutLandlordInput = {
    where: ComplexWhereUniqueInput
    data: XOR<
      ComplexUpdateWithoutLandlordInput,
      ComplexUncheckedUpdateWithoutLandlordInput
    >
  }

  export type ComplexUpdateManyWithWhereWithoutLandlordInput = {
    where: ComplexScalarWhereInput
    data: XOR<
      ComplexUpdateManyMutationInput,
      ComplexUncheckedUpdateManyWithoutLandlordInput
    >
  }

  export type ComplexScalarWhereInput = {
    AND?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
    OR?: ComplexScalarWhereInput[]
    NOT?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
    id?: UuidFilter<'Complex'> | string
    landlordId?: UuidFilter<'Complex'> | string
    name?: StringFilter<'Complex'> | string
    countryCode?: StringFilter<'Complex'> | string
    cityName?: StringFilter<'Complex'> | string
    street?: StringNullableFilter<'Complex'> | string | null
    address?: StringNullableFilter<'Complex'> | string | null
    description?: StringNullableFilter<'Complex'> | string | null
    notes?: StringNullableFilter<'Complex'> | string | null
    createdAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Complex'> | Date | string | null
  }

  export type LeaseUpsertWithWhereUniqueWithoutLandlordInput = {
    where: LeaseWhereUniqueInput
    update: XOR<
      LeaseUpdateWithoutLandlordInput,
      LeaseUncheckedUpdateWithoutLandlordInput
    >
    create: XOR<
      LeaseCreateWithoutLandlordInput,
      LeaseUncheckedCreateWithoutLandlordInput
    >
  }

  export type LeaseUpdateWithWhereUniqueWithoutLandlordInput = {
    where: LeaseWhereUniqueInput
    data: XOR<
      LeaseUpdateWithoutLandlordInput,
      LeaseUncheckedUpdateWithoutLandlordInput
    >
  }

  export type LeaseUpdateManyWithWhereWithoutLandlordInput = {
    where: LeaseScalarWhereInput
    data: XOR<
      LeaseUpdateManyMutationInput,
      LeaseUncheckedUpdateManyWithoutLandlordInput
    >
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: UuidFilter<'Lease'> | string
    unitId?: UuidFilter<'Lease'> | string
    tenantId?: UuidFilter<'Lease'> | string
    landlordId?: UuidFilter<'Lease'> | string
    startedAt?: DateTimeFilter<'Lease'> | Date | string
    endsAt?: DateTimeFilter<'Lease'> | Date | string
    rentAmount?:
      | DecimalFilter<'Lease'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFilter<'Lease'> | string
    advanceMonths?: IntNullableFilter<'Lease'> | number | null
    documentUrl?: StringNullableFilter<'Lease'> | string | null
    status?: EnumLeaseStatusNullableFilter<'Lease'> | $Enums.LeaseStatus | null
    rules?: StringNullableFilter<'Lease'> | string | null
    noticePeriod?: IntNullableFilter<'Lease'> | number | null
    parentLeaseId?: UuidNullableFilter<'Lease'> | string | null
    createdAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Lease'> | Date | string | null
  }

  export type LandlordCreateWithoutLeasesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutLandlordInput
    complexes?: ComplexCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateWithoutLeasesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    proofOfOwnership?: string | null
    bankName?: string | null
    bankAccount?: string | null
    mobileMoneyNumber?: string | null
    notificationPrefs?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutLandlordInput
    complexes?: ComplexUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordCreateOrConnectWithoutLeasesInput = {
    where: LandlordWhereUniqueInput
    create: XOR<
      LandlordCreateWithoutLeasesInput,
      LandlordUncheckedCreateWithoutLeasesInput
    >
  }

  export type TenantCreateWithoutLeasesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    units?: UnitCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutLeasesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    units?: UnitUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutLeasesInput = {
    where: TenantWhereUniqueInput
    create: XOR<
      TenantCreateWithoutLeasesInput,
      TenantUncheckedCreateWithoutLeasesInput
    >
  }

  export type UnitCreateWithoutLeasesInput = {
    id?: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutUnitInput
    complex: ComplexCreateNestedOneWithoutUnitsInput
    tenant?: TenantCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutLeasesInput = {
    id?: string
    complexId: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    tenantId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutLeasesInput = {
    where: UnitWhereUniqueInput
    create: XOR<
      UnitCreateWithoutLeasesInput,
      UnitUncheckedCreateWithoutLeasesInput
    >
  }

  export type PaymentCreateWithoutLeaseInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type: $Enums.PaymentType
    dueDate: Date | string
    paidAt?: Date | string | null
    method: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus | null
    transactionRef?: string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    receiptUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PaymentUncheckedCreateWithoutLeaseInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type: $Enums.PaymentType
    dueDate: Date | string
    paidAt?: Date | string | null
    method: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus | null
    transactionRef?: string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    receiptUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    create: XOR<
      PaymentCreateWithoutLeaseInput,
      PaymentUncheckedCreateWithoutLeaseInput
    >
  }

  export type PaymentCreateManyLeaseInputEnvelope = {
    data: PaymentCreateManyLeaseInput | PaymentCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutRenewalsInput = {
    id?: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutLeasesInput
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
    parentLease?: LeaseCreateNestedOneWithoutRenewalsInput
  }

  export type LeaseUncheckedCreateWithoutRenewalsInput = {
    id?: string
    unitId: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutRenewalsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<
      LeaseCreateWithoutRenewalsInput,
      LeaseUncheckedCreateWithoutRenewalsInput
    >
  }

  export type LeaseCreateWithoutParentLeaseInput = {
    id?: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutLeasesInput
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
    renewals?: LeaseCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseUncheckedCreateWithoutParentLeaseInput = {
    id?: string
    unitId: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
    renewals?: LeaseUncheckedCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseCreateOrConnectWithoutParentLeaseInput = {
    where: LeaseWhereUniqueInput
    create: XOR<
      LeaseCreateWithoutParentLeaseInput,
      LeaseUncheckedCreateWithoutParentLeaseInput
    >
  }

  export type LeaseCreateManyParentLeaseInputEnvelope = {
    data: LeaseCreateManyParentLeaseInput | LeaseCreateManyParentLeaseInput[]
    skipDuplicates?: boolean
  }

  export type LandlordUpsertWithoutLeasesInput = {
    update: XOR<
      LandlordUpdateWithoutLeasesInput,
      LandlordUncheckedUpdateWithoutLeasesInput
    >
    create: XOR<
      LandlordCreateWithoutLeasesInput,
      LandlordUncheckedCreateWithoutLeasesInput
    >
    where?: LandlordWhereInput
  }

  export type LandlordUpdateToOneWithWhereWithoutLeasesInput = {
    where?: LandlordWhereInput
    data: XOR<
      LandlordUpdateWithoutLeasesInput,
      LandlordUncheckedUpdateWithoutLeasesInput
    >
  }

  export type LandlordUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutLandlordNestedInput
    complexes?: ComplexUpdateManyWithoutLandlordNestedInput
  }

  export type LandlordUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    proofOfOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notificationPrefs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutLandlordNestedInput
    complexes?: ComplexUncheckedUpdateManyWithoutLandlordNestedInput
  }

  export type TenantUpsertWithoutLeasesInput = {
    update: XOR<
      TenantUpdateWithoutLeasesInput,
      TenantUncheckedUpdateWithoutLeasesInput
    >
    create: XOR<
      TenantCreateWithoutLeasesInput,
      TenantUncheckedCreateWithoutLeasesInput
    >
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeasesInput = {
    where?: TenantWhereInput
    data: XOR<
      TenantUpdateWithoutLeasesInput,
      TenantUncheckedUpdateWithoutLeasesInput
    >
  }

  export type TenantUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    units?: UnitUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    units?: UnitUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UnitUpsertWithoutLeasesInput = {
    update: XOR<
      UnitUpdateWithoutLeasesInput,
      UnitUncheckedUpdateWithoutLeasesInput
    >
    create: XOR<
      UnitCreateWithoutLeasesInput,
      UnitUncheckedCreateWithoutLeasesInput
    >
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutLeasesInput = {
    where?: UnitWhereInput
    data: XOR<
      UnitUpdateWithoutLeasesInput,
      UnitUncheckedUpdateWithoutLeasesInput
    >
  }

  export type UnitUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutUnitNestedInput
    complex?: ComplexUpdateOneRequiredWithoutUnitsNestedInput
    tenant?: TenantUpdateOneWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    update: XOR<
      PaymentUpdateWithoutLeaseInput,
      PaymentUncheckedUpdateWithoutLeaseInput
    >
    create: XOR<
      PaymentCreateWithoutLeaseInput,
      PaymentUncheckedCreateWithoutLeaseInput
    >
  }

  export type PaymentUpdateWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    data: XOR<
      PaymentUpdateWithoutLeaseInput,
      PaymentUncheckedUpdateWithoutLeaseInput
    >
  }

  export type PaymentUpdateManyWithWhereWithoutLeaseInput = {
    where: PaymentScalarWhereInput
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutLeaseInput
    >
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: UuidFilter<'Payment'> | string
    leaseId?: UuidFilter<'Payment'> | string
    amount?:
      | DecimalFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFilter<'Payment'> | string
    type?: EnumPaymentTypeFilter<'Payment'> | $Enums.PaymentType
    dueDate?: DateTimeFilter<'Payment'> | Date | string
    paidAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
    method?: EnumPaymentMethodFilter<'Payment'> | $Enums.PaymentMethod
    paymentStatus?:
      | EnumPaymentStatusNullableFilter<'Payment'>
      | $Enums.PaymentStatus
      | null
    transactionRef?: StringNullableFilter<'Payment'> | string | null
    feeAmount?:
      | DecimalNullableFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: StringNullableFilter<'Payment'> | string | null
    createdAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null
  }

  export type LeaseUpsertWithoutRenewalsInput = {
    update: XOR<
      LeaseUpdateWithoutRenewalsInput,
      LeaseUncheckedUpdateWithoutRenewalsInput
    >
    create: XOR<
      LeaseCreateWithoutRenewalsInput,
      LeaseUncheckedCreateWithoutRenewalsInput
    >
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutRenewalsInput = {
    where?: LeaseWhereInput
    data: XOR<
      LeaseUpdateWithoutRenewalsInput,
      LeaseUncheckedUpdateWithoutRenewalsInput
    >
  }

  export type LeaseUpdateWithoutRenewalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutLeasesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
    parentLease?: LeaseUpdateOneWithoutRenewalsNestedInput
  }

  export type LeaseUncheckedUpdateWithoutRenewalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUpsertWithWhereUniqueWithoutParentLeaseInput = {
    where: LeaseWhereUniqueInput
    update: XOR<
      LeaseUpdateWithoutParentLeaseInput,
      LeaseUncheckedUpdateWithoutParentLeaseInput
    >
    create: XOR<
      LeaseCreateWithoutParentLeaseInput,
      LeaseUncheckedCreateWithoutParentLeaseInput
    >
  }

  export type LeaseUpdateWithWhereUniqueWithoutParentLeaseInput = {
    where: LeaseWhereUniqueInput
    data: XOR<
      LeaseUpdateWithoutParentLeaseInput,
      LeaseUncheckedUpdateWithoutParentLeaseInput
    >
  }

  export type LeaseUpdateManyWithWhereWithoutParentLeaseInput = {
    where: LeaseScalarWhereInput
    data: XOR<
      LeaseUpdateManyMutationInput,
      LeaseUncheckedUpdateManyWithoutParentLeaseInput
    >
  }

  export type TenantCreateWithoutMaintenanceRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutTenantInput
    leases?: LeaseCreateNestedManyWithoutTenantInput
    units?: UnitCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutTenantInput
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
    units?: UnitUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: TenantWhereUniqueInput
    create: XOR<
      TenantCreateWithoutMaintenanceRequestsInput,
      TenantUncheckedCreateWithoutMaintenanceRequestsInput
    >
  }

  export type UnitCreateWithoutMaintenanceRequestsInput = {
    id?: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseCreateNestedManyWithoutUnitInput
    complex: ComplexCreateNestedOneWithoutUnitsInput
    tenant?: TenantCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    complexId: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    tenantId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: UnitWhereUniqueInput
    create: XOR<
      UnitCreateWithoutMaintenanceRequestsInput,
      UnitUncheckedCreateWithoutMaintenanceRequestsInput
    >
  }

  export type VendorCreateWithoutMaintenanceRequestsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    specialty?: string | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    rating?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    specialty?: string | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    isVerified?: boolean | null
    rating?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: VendorWhereUniqueInput
    create: XOR<
      VendorCreateWithoutMaintenanceRequestsInput,
      VendorUncheckedCreateWithoutMaintenanceRequestsInput
    >
  }

  export type TenantUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<
      TenantUpdateWithoutMaintenanceRequestsInput,
      TenantUncheckedUpdateWithoutMaintenanceRequestsInput
    >
    create: XOR<
      TenantCreateWithoutMaintenanceRequestsInput,
      TenantUncheckedCreateWithoutMaintenanceRequestsInput
    >
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: TenantWhereInput
    data: XOR<
      TenantUpdateWithoutMaintenanceRequestsInput,
      TenantUncheckedUpdateWithoutMaintenanceRequestsInput
    >
  }

  export type TenantUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutTenantNestedInput
    leases?: LeaseUpdateManyWithoutTenantNestedInput
    units?: UnitUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
    units?: UnitUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UnitUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<
      UnitUpdateWithoutMaintenanceRequestsInput,
      UnitUncheckedUpdateWithoutMaintenanceRequestsInput
    >
    create: XOR<
      UnitCreateWithoutMaintenanceRequestsInput,
      UnitUncheckedCreateWithoutMaintenanceRequestsInput
    >
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: UnitWhereInput
    data: XOR<
      UnitUpdateWithoutMaintenanceRequestsInput,
      UnitUncheckedUpdateWithoutMaintenanceRequestsInput
    >
  }

  export type UnitUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    complex?: ComplexUpdateOneRequiredWithoutUnitsNestedInput
    tenant?: TenantUpdateOneWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type VendorUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<
      VendorUpdateWithoutMaintenanceRequestsInput,
      VendorUncheckedUpdateWithoutMaintenanceRequestsInput
    >
    create: XOR<
      VendorCreateWithoutMaintenanceRequestsInput,
      VendorUncheckedCreateWithoutMaintenanceRequestsInput
    >
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: VendorWhereInput
    data: XOR<
      VendorUpdateWithoutMaintenanceRequestsInput,
      VendorUncheckedUpdateWithoutMaintenanceRequestsInput
    >
  }

  export type VendorUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type LeaseCreateWithoutPaymentsInput = {
    id?: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutLeasesInput
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    parentLease?: LeaseCreateNestedOneWithoutRenewalsInput
    renewals?: LeaseCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseUncheckedCreateWithoutPaymentsInput = {
    id?: string
    unitId: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    renewals?: LeaseUncheckedCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseCreateOrConnectWithoutPaymentsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<
      LeaseCreateWithoutPaymentsInput,
      LeaseUncheckedCreateWithoutPaymentsInput
    >
  }

  export type LeaseUpsertWithoutPaymentsInput = {
    update: XOR<
      LeaseUpdateWithoutPaymentsInput,
      LeaseUncheckedUpdateWithoutPaymentsInput
    >
    create: XOR<
      LeaseCreateWithoutPaymentsInput,
      LeaseUncheckedCreateWithoutPaymentsInput
    >
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: LeaseWhereInput
    data: XOR<
      LeaseUpdateWithoutPaymentsInput,
      LeaseUncheckedUpdateWithoutPaymentsInput
    >
  }

  export type LeaseUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutLeasesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    parentLease?: LeaseUpdateOneWithoutRenewalsNestedInput
    renewals?: LeaseUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    renewals?: LeaseUncheckedUpdateManyWithoutParentLeaseNestedInput
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    landlord?: LandlordCreateNestedOneWithoutUserInput
    vendor?: VendorCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    landlordId?: string | null
    vendorId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutTenantInput,
      UserUncheckedCreateWithoutTenantInput
    >
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutTenantInput = {
    id?: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
    parentLease?: LeaseCreateNestedOneWithoutRenewalsInput
    renewals?: LeaseCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseUncheckedCreateWithoutTenantInput = {
    id?: string
    unitId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
    renewals?: LeaseUncheckedCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseCreateOrConnectWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    create: XOR<
      LeaseCreateWithoutTenantInput,
      LeaseUncheckedCreateWithoutTenantInput
    >
  }

  export type LeaseCreateManyTenantInputEnvelope = {
    data: LeaseCreateManyTenantInput | LeaseCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutTenantInput = {
    id?: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    unit: UnitCreateNestedOneWithoutMaintenanceRequestsInput
    vendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutTenantInput = {
    id?: string
    unitId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorId?: string | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateOrConnectWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<
      MaintenanceRequestCreateWithoutTenantInput,
      MaintenanceRequestUncheckedCreateWithoutTenantInput
    >
  }

  export type MaintenanceRequestCreateManyTenantInputEnvelope = {
    data:
      | MaintenanceRequestCreateManyTenantInput
      | MaintenanceRequestCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UnitCreateWithoutTenantInput = {
    id?: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutUnitInput
    complex: ComplexCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutTenantInput = {
    id?: string
    complexId: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutTenantInput = {
    where: UnitWhereUniqueInput
    create: XOR<
      UnitCreateWithoutTenantInput,
      UnitUncheckedCreateWithoutTenantInput
    >
  }

  export type UnitCreateManyTenantInputEnvelope = {
    data: UnitCreateManyTenantInput | UnitCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<
      UserUpdateWithoutTenantInput,
      UserUncheckedUpdateWithoutTenantInput
    >
    create: XOR<
      UserCreateWithoutTenantInput,
      UserUncheckedCreateWithoutTenantInput
    >
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<
      UserUpdateWithoutTenantInput,
      UserUncheckedUpdateWithoutTenantInput
    >
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutTenantInput
    >
  }

  export type LeaseUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    update: XOR<
      LeaseUpdateWithoutTenantInput,
      LeaseUncheckedUpdateWithoutTenantInput
    >
    create: XOR<
      LeaseCreateWithoutTenantInput,
      LeaseUncheckedCreateWithoutTenantInput
    >
  }

  export type LeaseUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    data: XOR<
      LeaseUpdateWithoutTenantInput,
      LeaseUncheckedUpdateWithoutTenantInput
    >
  }

  export type LeaseUpdateManyWithWhereWithoutTenantInput = {
    where: LeaseScalarWhereInput
    data: XOR<
      LeaseUpdateManyMutationInput,
      LeaseUncheckedUpdateManyWithoutTenantInput
    >
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<
      MaintenanceRequestUpdateWithoutTenantInput,
      MaintenanceRequestUncheckedUpdateWithoutTenantInput
    >
    create: XOR<
      MaintenanceRequestCreateWithoutTenantInput,
      MaintenanceRequestUncheckedCreateWithoutTenantInput
    >
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<
      MaintenanceRequestUpdateWithoutTenantInput,
      MaintenanceRequestUncheckedUpdateWithoutTenantInput
    >
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutTenantInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<
      MaintenanceRequestUpdateManyMutationInput,
      MaintenanceRequestUncheckedUpdateManyWithoutTenantInput
    >
  }

  export type MaintenanceRequestScalarWhereInput = {
    AND?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
    OR?: MaintenanceRequestScalarWhereInput[]
    NOT?:
      | MaintenanceRequestScalarWhereInput
      | MaintenanceRequestScalarWhereInput[]
    id?: UuidFilter<'MaintenanceRequest'> | string
    unitId?: UuidFilter<'MaintenanceRequest'> | string
    tenantId?: UuidFilter<'MaintenanceRequest'> | string
    description?: StringFilter<'MaintenanceRequest'> | string
    photoUrl?: StringNullableFilter<'MaintenanceRequest'> | string | null
    status?:
      | EnumMaintenanceStatusNullableFilter<'MaintenanceRequest'>
      | $Enums.MaintenanceStatus
      | null
    vendorId?: UuidNullableFilter<'MaintenanceRequest'> | string | null
    vendorResponse?: StringNullableFilter<'MaintenanceRequest'> | string | null
    scheduledFor?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    completedAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    cost?:
      | DecimalNullableFilter<'MaintenanceRequest'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: StringNullableFilter<'MaintenanceRequest'> | string | null
    paymentStatus?:
      | EnumInvoiceStatusNullableFilter<'MaintenanceRequest'>
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableFilter<'MaintenanceRequest'>
      | Date
      | string
      | null
  }

  export type UnitUpsertWithWhereUniqueWithoutTenantInput = {
    where: UnitWhereUniqueInput
    update: XOR<
      UnitUpdateWithoutTenantInput,
      UnitUncheckedUpdateWithoutTenantInput
    >
    create: XOR<
      UnitCreateWithoutTenantInput,
      UnitUncheckedCreateWithoutTenantInput
    >
  }

  export type UnitUpdateWithWhereUniqueWithoutTenantInput = {
    where: UnitWhereUniqueInput
    data: XOR<
      UnitUpdateWithoutTenantInput,
      UnitUncheckedUpdateWithoutTenantInput
    >
  }

  export type UnitUpdateManyWithWhereWithoutTenantInput = {
    where: UnitScalarWhereInput
    data: XOR<
      UnitUpdateManyMutationInput,
      UnitUncheckedUpdateManyWithoutTenantInput
    >
  }

  export type LeaseCreateWithoutUnitInput = {
    id?: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutLeasesInput
    tenant: TenantCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
    parentLease?: LeaseCreateNestedOneWithoutRenewalsInput
    renewals?: LeaseCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseUncheckedCreateWithoutUnitInput = {
    id?: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
    renewals?: LeaseUncheckedCreateNestedManyWithoutParentLeaseInput
  }

  export type LeaseCreateOrConnectWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    create: XOR<
      LeaseCreateWithoutUnitInput,
      LeaseUncheckedCreateWithoutUnitInput
    >
  }

  export type LeaseCreateManyUnitInputEnvelope = {
    data: LeaseCreateManyUnitInput | LeaseCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutUnitInput = {
    id?: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutMaintenanceRequestsInput
    vendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutUnitInput = {
    id?: string
    tenantId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorId?: string | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateOrConnectWithoutUnitInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<
      MaintenanceRequestCreateWithoutUnitInput,
      MaintenanceRequestUncheckedCreateWithoutUnitInput
    >
  }

  export type MaintenanceRequestCreateManyUnitInputEnvelope = {
    data:
      | MaintenanceRequestCreateManyUnitInput
      | MaintenanceRequestCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type ComplexCreateWithoutUnitsInput = {
    id?: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    landlord: LandlordCreateNestedOneWithoutComplexesInput
  }

  export type ComplexUncheckedCreateWithoutUnitsInput = {
    id?: string
    landlordId: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ComplexCreateOrConnectWithoutUnitsInput = {
    where: ComplexWhereUniqueInput
    create: XOR<
      ComplexCreateWithoutUnitsInput,
      ComplexUncheckedCreateWithoutUnitsInput
    >
  }

  export type TenantCreateWithoutUnitsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserCreateNestedManyWithoutTenantInput
    leases?: LeaseCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUnitsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    passwordHash: string
    idType?: $Enums.IdType | null
    idNumber?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user?: UserUncheckedCreateNestedManyWithoutTenantInput
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUnitsInput = {
    where: TenantWhereUniqueInput
    create: XOR<
      TenantCreateWithoutUnitsInput,
      TenantUncheckedCreateWithoutUnitsInput
    >
  }

  export type LeaseUpsertWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    update: XOR<
      LeaseUpdateWithoutUnitInput,
      LeaseUncheckedUpdateWithoutUnitInput
    >
    create: XOR<
      LeaseCreateWithoutUnitInput,
      LeaseUncheckedCreateWithoutUnitInput
    >
  }

  export type LeaseUpdateWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
  }

  export type LeaseUpdateManyWithWhereWithoutUnitInput = {
    where: LeaseScalarWhereInput
    data: XOR<
      LeaseUpdateManyMutationInput,
      LeaseUncheckedUpdateManyWithoutUnitInput
    >
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<
      MaintenanceRequestUpdateWithoutUnitInput,
      MaintenanceRequestUncheckedUpdateWithoutUnitInput
    >
    create: XOR<
      MaintenanceRequestCreateWithoutUnitInput,
      MaintenanceRequestUncheckedCreateWithoutUnitInput
    >
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<
      MaintenanceRequestUpdateWithoutUnitInput,
      MaintenanceRequestUncheckedUpdateWithoutUnitInput
    >
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutUnitInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<
      MaintenanceRequestUpdateManyMutationInput,
      MaintenanceRequestUncheckedUpdateManyWithoutUnitInput
    >
  }

  export type ComplexUpsertWithoutUnitsInput = {
    update: XOR<
      ComplexUpdateWithoutUnitsInput,
      ComplexUncheckedUpdateWithoutUnitsInput
    >
    create: XOR<
      ComplexCreateWithoutUnitsInput,
      ComplexUncheckedCreateWithoutUnitsInput
    >
    where?: ComplexWhereInput
  }

  export type ComplexUpdateToOneWithWhereWithoutUnitsInput = {
    where?: ComplexWhereInput
    data: XOR<
      ComplexUpdateWithoutUnitsInput,
      ComplexUncheckedUpdateWithoutUnitsInput
    >
  }

  export type ComplexUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutComplexesNestedInput
  }

  export type ComplexUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type TenantUpsertWithoutUnitsInput = {
    update: XOR<
      TenantUpdateWithoutUnitsInput,
      TenantUncheckedUpdateWithoutUnitsInput
    >
    create: XOR<
      TenantCreateWithoutUnitsInput,
      TenantUncheckedCreateWithoutUnitsInput
    >
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUnitsInput = {
    where?: TenantWhereInput
    data: XOR<
      TenantUpdateWithoutUnitsInput,
      TenantUncheckedUpdateWithoutUnitsInput
    >
  }

  export type TenantUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUpdateManyWithoutTenantNestedInput
    leases?: LeaseUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    idType?: NullableEnumIdTypeFieldUpdateOperationsInput | $Enums.IdType | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    user?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateWithoutVendorInput = {
    id?: string
    landlord?: LandlordCreateNestedOneWithoutUserInput
    tenant?: TenantCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVendorInput = {
    id?: string
    landlordId?: string | null
    tenantId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVendorInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutVendorInput,
      UserUncheckedCreateWithoutVendorInput
    >
  }

  export type UserCreateManyVendorInputEnvelope = {
    data: UserCreateManyVendorInput | UserCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutVendorInput = {
    id?: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutMaintenanceRequestsInput
    unit: UnitCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutVendorInput = {
    id?: string
    unitId: string
    tenantId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateOrConnectWithoutVendorInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<
      MaintenanceRequestCreateWithoutVendorInput,
      MaintenanceRequestUncheckedCreateWithoutVendorInput
    >
  }

  export type MaintenanceRequestCreateManyVendorInputEnvelope = {
    data:
      | MaintenanceRequestCreateManyVendorInput
      | MaintenanceRequestCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutVendorInput = {
    where: UserWhereUniqueInput
    update: XOR<
      UserUpdateWithoutVendorInput,
      UserUncheckedUpdateWithoutVendorInput
    >
    create: XOR<
      UserCreateWithoutVendorInput,
      UserUncheckedCreateWithoutVendorInput
    >
  }

  export type UserUpdateWithWhereUniqueWithoutVendorInput = {
    where: UserWhereUniqueInput
    data: XOR<
      UserUpdateWithoutVendorInput,
      UserUncheckedUpdateWithoutVendorInput
    >
  }

  export type UserUpdateManyWithWhereWithoutVendorInput = {
    where: UserScalarWhereInput
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutVendorInput
    >
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutVendorInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<
      MaintenanceRequestUpdateWithoutVendorInput,
      MaintenanceRequestUncheckedUpdateWithoutVendorInput
    >
    create: XOR<
      MaintenanceRequestCreateWithoutVendorInput,
      MaintenanceRequestUncheckedCreateWithoutVendorInput
    >
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutVendorInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<
      MaintenanceRequestUpdateWithoutVendorInput,
      MaintenanceRequestUncheckedUpdateWithoutVendorInput
    >
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutVendorInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<
      MaintenanceRequestUpdateManyMutationInput,
      MaintenanceRequestUncheckedUpdateManyWithoutVendorInput
    >
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    landlord?: LandlordCreateNestedOneWithoutUserInput
    tenant?: TenantCreateNestedOneWithoutUserInput
    vendor?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    landlordId?: string | null
    tenantId?: string | null
    vendorId?: string | null
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<
      UserUpdateWithoutNotificationsInput,
      UserUncheckedUpdateWithoutNotificationsInput
    >
    create: XOR<
      UserCreateWithoutNotificationsInput,
      UserUncheckedCreateWithoutNotificationsInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutNotificationsInput,
      UserUncheckedUpdateWithoutNotificationsInput
    >
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlord?: LandlordUpdateOneWithoutUserNestedInput
    tenant?: TenantUpdateOneWithoutUserNestedInput
    vendor?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    channel: string
    content: string
    status?: string
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UnitCreateManyComplexInput = {
    id?: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    tenantId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UnitUpdateWithoutComplexInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutUnitNestedInput
    tenant?: TenantUpdateOneWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutComplexInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutComplexInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UserCreateManyLandlordInput = {
    id?: string
    tenantId?: string | null
    vendorId?: string | null
  }

  export type ComplexCreateManyLandlordInput = {
    id?: string
    name: string
    countryCode: string
    cityName: string
    street?: string | null
    address?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LeaseCreateManyLandlordInput = {
    id?: string
    unitId: string
    tenantId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneWithoutUserNestedInput
    vendor?: VendorUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplexUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    units?: UnitUpdateManyWithoutComplexNestedInput
  }

  export type ComplexUncheckedUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    units?: UnitUncheckedUpdateManyWithoutComplexNestedInput
  }

  export type ComplexUncheckedUpdateManyWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LeaseUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
    parentLease?: LeaseUpdateOneWithoutRenewalsNestedInput
    renewals?: LeaseUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
    renewals?: LeaseUncheckedUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutLandlordInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PaymentCreateManyLeaseInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type: $Enums.PaymentType
    dueDate: Date | string
    paidAt?: Date | string | null
    method: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus | null
    transactionRef?: string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    receiptUrl?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LeaseCreateManyParentLeaseInput = {
    id?: string
    unitId: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?:
      | NullableEnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus
      | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    feeAmount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PaymentUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?:
      | NullableEnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus
      | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    feeAmount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?:
      | NullableEnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus
      | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    feeAmount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LeaseUpdateWithoutParentLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutLeasesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
    renewals?: LeaseUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutParentLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
    renewals?: LeaseUncheckedUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutParentLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UserCreateManyTenantInput = {
    id?: string
    landlordId?: string | null
    vendorId?: string | null
  }

  export type LeaseCreateManyTenantInput = {
    id?: string
    unitId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateManyTenantInput = {
    id?: string
    unitId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorId?: string | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UnitCreateManyTenantInput = {
    id?: string
    complexId: string
    label: string
    type?: $Enums.UnitType | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlord?: LandlordUpdateOneWithoutUserNestedInput
    vendor?: VendorUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
    parentLease?: LeaseUpdateOneWithoutRenewalsNestedInput
    renewals?: LeaseUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
    renewals?: LeaseUncheckedUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    unit?: UnitUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    vendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UnitUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutUnitNestedInput
    complex?: ComplexUpdateOneRequiredWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?:
      | NullableEnumUnitTypeFieldUpdateOperationsInput
      | $Enums.UnitType
      | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LeaseCreateManyUnitInput = {
    id?: string
    tenantId: string
    landlordId: string
    startedAt: Date | string
    endsAt: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    advanceMonths?: number | null
    documentUrl?: string | null
    status?: $Enums.LeaseStatus | null
    rules?: string | null
    noticePeriod?: number | null
    parentLeaseId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateManyUnitInput = {
    id?: string
    tenantId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorId?: string | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LeaseUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    landlord?: LandlordUpdateOneRequiredWithoutLeasesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
    parentLease?: LeaseUpdateOneWithoutRenewalsNestedInput
    renewals?: LeaseUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
    renewals?: LeaseUncheckedUpdateManyWithoutParentLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    landlordId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    advanceMonths?: NullableIntFieldUpdateOperationsInput | number | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumLeaseStatusFieldUpdateOperationsInput
      | $Enums.LeaseStatus
      | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    noticePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    parentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    tenant?: TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    vendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UserCreateManyVendorInput = {
    id?: string
    landlordId?: string | null
    tenantId?: string | null
  }

  export type MaintenanceRequestCreateManyVendorInput = {
    id?: string
    unitId: string
    tenantId: string
    description: string
    photoUrl?: string | null
    status?: $Enums.MaintenanceStatus | null
    vendorResponse?: string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    costCurrency?: string | null
    paymentStatus?: $Enums.InvoiceStatus | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlord?: LandlordUpdateOneWithoutUserNestedInput
    tenant?: TenantUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    landlordId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceRequestUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    tenant?: TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    unit?: UnitUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?:
      | NullableEnumMaintenanceStatusFieldUpdateOperationsInput
      | $Enums.MaintenanceStatus
      | null
    vendorResponse?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    costCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?:
      | NullableEnumInvoiceStatusFieldUpdateOperationsInput
      | $Enums.InvoiceStatus
      | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
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
