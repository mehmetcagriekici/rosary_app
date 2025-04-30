
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
 * Model Prayer
 * 
 */
export type Prayer = $Result.DefaultSelection<Prisma.$PrayerPayload>
/**
 * Model Mystery
 * 
 */
export type Mystery = $Result.DefaultSelection<Prisma.$MysteryPayload>
/**
 * Model MysterySet
 * 
 */
export type MysterySet = $Result.DefaultSelection<Prisma.$MysterySetPayload>
/**
 * Model MysterySetItem
 * 
 */
export type MysterySetItem = $Result.DefaultSelection<Prisma.$MysterySetItemPayload>
/**
 * Model MysterySetItemPrayer
 * 
 */
export type MysterySetItemPrayer = $Result.DefaultSelection<Prisma.$MysterySetItemPrayerPayload>
/**
 * Model Rosary
 * 
 */
export type Rosary = $Result.DefaultSelection<Prisma.$RosaryPayload>
/**
 * Model RosaryOpeningPrayer
 * 
 */
export type RosaryOpeningPrayer = $Result.DefaultSelection<Prisma.$RosaryOpeningPrayerPayload>
/**
 * Model RosaryClosingPrayer
 * 
 */
export type RosaryClosingPrayer = $Result.DefaultSelection<Prisma.$RosaryClosingPrayerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prayers
 * const prayers = await prisma.prayer.findMany()
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
   * // Fetch zero or more Prayers
   * const prayers = await prisma.prayer.findMany()
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
   * `prisma.prayer`: Exposes CRUD operations for the **Prayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prayers
    * const prayers = await prisma.prayer.findMany()
    * ```
    */
  get prayer(): Prisma.PrayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mystery`: Exposes CRUD operations for the **Mystery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mysteries
    * const mysteries = await prisma.mystery.findMany()
    * ```
    */
  get mystery(): Prisma.MysteryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mysterySet`: Exposes CRUD operations for the **MysterySet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MysterySets
    * const mysterySets = await prisma.mysterySet.findMany()
    * ```
    */
  get mysterySet(): Prisma.MysterySetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mysterySetItem`: Exposes CRUD operations for the **MysterySetItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MysterySetItems
    * const mysterySetItems = await prisma.mysterySetItem.findMany()
    * ```
    */
  get mysterySetItem(): Prisma.MysterySetItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mysterySetItemPrayer`: Exposes CRUD operations for the **MysterySetItemPrayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MysterySetItemPrayers
    * const mysterySetItemPrayers = await prisma.mysterySetItemPrayer.findMany()
    * ```
    */
  get mysterySetItemPrayer(): Prisma.MysterySetItemPrayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rosary`: Exposes CRUD operations for the **Rosary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rosaries
    * const rosaries = await prisma.rosary.findMany()
    * ```
    */
  get rosary(): Prisma.RosaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rosaryOpeningPrayer`: Exposes CRUD operations for the **RosaryOpeningPrayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RosaryOpeningPrayers
    * const rosaryOpeningPrayers = await prisma.rosaryOpeningPrayer.findMany()
    * ```
    */
  get rosaryOpeningPrayer(): Prisma.RosaryOpeningPrayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rosaryClosingPrayer`: Exposes CRUD operations for the **RosaryClosingPrayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RosaryClosingPrayers
    * const rosaryClosingPrayers = await prisma.rosaryClosingPrayer.findMany()
    * ```
    */
  get rosaryClosingPrayer(): Prisma.RosaryClosingPrayerDelegate<ExtArgs, ClientOptions>;
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
    Prayer: 'Prayer',
    Mystery: 'Mystery',
    MysterySet: 'MysterySet',
    MysterySetItem: 'MysterySetItem',
    MysterySetItemPrayer: 'MysterySetItemPrayer',
    Rosary: 'Rosary',
    RosaryOpeningPrayer: 'RosaryOpeningPrayer',
    RosaryClosingPrayer: 'RosaryClosingPrayer'
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
      modelProps: "prayer" | "mystery" | "mysterySet" | "mysterySetItem" | "mysterySetItemPrayer" | "rosary" | "rosaryOpeningPrayer" | "rosaryClosingPrayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Prayer: {
        payload: Prisma.$PrayerPayload<ExtArgs>
        fields: Prisma.PrayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          findFirst: {
            args: Prisma.PrayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          findMany: {
            args: Prisma.PrayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>[]
          }
          create: {
            args: Prisma.PrayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          createMany: {
            args: Prisma.PrayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>[]
          }
          delete: {
            args: Prisma.PrayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          update: {
            args: Prisma.PrayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          deleteMany: {
            args: Prisma.PrayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>[]
          }
          upsert: {
            args: Prisma.PrayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrayerPayload>
          }
          aggregate: {
            args: Prisma.PrayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrayer>
          }
          groupBy: {
            args: Prisma.PrayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrayerCountArgs<ExtArgs>
            result: $Utils.Optional<PrayerCountAggregateOutputType> | number
          }
        }
      }
      Mystery: {
        payload: Prisma.$MysteryPayload<ExtArgs>
        fields: Prisma.MysteryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MysteryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MysteryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>
          }
          findFirst: {
            args: Prisma.MysteryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MysteryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>
          }
          findMany: {
            args: Prisma.MysteryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>[]
          }
          create: {
            args: Prisma.MysteryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>
          }
          createMany: {
            args: Prisma.MysteryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MysteryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>[]
          }
          delete: {
            args: Prisma.MysteryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>
          }
          update: {
            args: Prisma.MysteryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>
          }
          deleteMany: {
            args: Prisma.MysteryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MysteryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MysteryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>[]
          }
          upsert: {
            args: Prisma.MysteryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysteryPayload>
          }
          aggregate: {
            args: Prisma.MysteryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMystery>
          }
          groupBy: {
            args: Prisma.MysteryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MysteryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MysteryCountArgs<ExtArgs>
            result: $Utils.Optional<MysteryCountAggregateOutputType> | number
          }
        }
      }
      MysterySet: {
        payload: Prisma.$MysterySetPayload<ExtArgs>
        fields: Prisma.MysterySetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MysterySetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MysterySetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>
          }
          findFirst: {
            args: Prisma.MysterySetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MysterySetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>
          }
          findMany: {
            args: Prisma.MysterySetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>[]
          }
          create: {
            args: Prisma.MysterySetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>
          }
          createMany: {
            args: Prisma.MysterySetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MysterySetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>[]
          }
          delete: {
            args: Prisma.MysterySetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>
          }
          update: {
            args: Prisma.MysterySetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>
          }
          deleteMany: {
            args: Prisma.MysterySetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MysterySetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MysterySetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>[]
          }
          upsert: {
            args: Prisma.MysterySetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetPayload>
          }
          aggregate: {
            args: Prisma.MysterySetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMysterySet>
          }
          groupBy: {
            args: Prisma.MysterySetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MysterySetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MysterySetCountArgs<ExtArgs>
            result: $Utils.Optional<MysterySetCountAggregateOutputType> | number
          }
        }
      }
      MysterySetItem: {
        payload: Prisma.$MysterySetItemPayload<ExtArgs>
        fields: Prisma.MysterySetItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MysterySetItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MysterySetItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>
          }
          findFirst: {
            args: Prisma.MysterySetItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MysterySetItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>
          }
          findMany: {
            args: Prisma.MysterySetItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>[]
          }
          create: {
            args: Prisma.MysterySetItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>
          }
          createMany: {
            args: Prisma.MysterySetItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MysterySetItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>[]
          }
          delete: {
            args: Prisma.MysterySetItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>
          }
          update: {
            args: Prisma.MysterySetItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>
          }
          deleteMany: {
            args: Prisma.MysterySetItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MysterySetItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MysterySetItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>[]
          }
          upsert: {
            args: Prisma.MysterySetItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPayload>
          }
          aggregate: {
            args: Prisma.MysterySetItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMysterySetItem>
          }
          groupBy: {
            args: Prisma.MysterySetItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MysterySetItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MysterySetItemCountArgs<ExtArgs>
            result: $Utils.Optional<MysterySetItemCountAggregateOutputType> | number
          }
        }
      }
      MysterySetItemPrayer: {
        payload: Prisma.$MysterySetItemPrayerPayload<ExtArgs>
        fields: Prisma.MysterySetItemPrayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MysterySetItemPrayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MysterySetItemPrayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>
          }
          findFirst: {
            args: Prisma.MysterySetItemPrayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MysterySetItemPrayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>
          }
          findMany: {
            args: Prisma.MysterySetItemPrayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>[]
          }
          create: {
            args: Prisma.MysterySetItemPrayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>
          }
          createMany: {
            args: Prisma.MysterySetItemPrayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MysterySetItemPrayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>[]
          }
          delete: {
            args: Prisma.MysterySetItemPrayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>
          }
          update: {
            args: Prisma.MysterySetItemPrayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>
          }
          deleteMany: {
            args: Prisma.MysterySetItemPrayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MysterySetItemPrayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MysterySetItemPrayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>[]
          }
          upsert: {
            args: Prisma.MysterySetItemPrayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MysterySetItemPrayerPayload>
          }
          aggregate: {
            args: Prisma.MysterySetItemPrayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMysterySetItemPrayer>
          }
          groupBy: {
            args: Prisma.MysterySetItemPrayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MysterySetItemPrayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MysterySetItemPrayerCountArgs<ExtArgs>
            result: $Utils.Optional<MysterySetItemPrayerCountAggregateOutputType> | number
          }
        }
      }
      Rosary: {
        payload: Prisma.$RosaryPayload<ExtArgs>
        fields: Prisma.RosaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RosaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RosaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>
          }
          findFirst: {
            args: Prisma.RosaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RosaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>
          }
          findMany: {
            args: Prisma.RosaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>[]
          }
          create: {
            args: Prisma.RosaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>
          }
          createMany: {
            args: Prisma.RosaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RosaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>[]
          }
          delete: {
            args: Prisma.RosaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>
          }
          update: {
            args: Prisma.RosaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>
          }
          deleteMany: {
            args: Prisma.RosaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RosaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RosaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>[]
          }
          upsert: {
            args: Prisma.RosaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryPayload>
          }
          aggregate: {
            args: Prisma.RosaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRosary>
          }
          groupBy: {
            args: Prisma.RosaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RosaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RosaryCountArgs<ExtArgs>
            result: $Utils.Optional<RosaryCountAggregateOutputType> | number
          }
        }
      }
      RosaryOpeningPrayer: {
        payload: Prisma.$RosaryOpeningPrayerPayload<ExtArgs>
        fields: Prisma.RosaryOpeningPrayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RosaryOpeningPrayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RosaryOpeningPrayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>
          }
          findFirst: {
            args: Prisma.RosaryOpeningPrayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RosaryOpeningPrayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>
          }
          findMany: {
            args: Prisma.RosaryOpeningPrayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>[]
          }
          create: {
            args: Prisma.RosaryOpeningPrayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>
          }
          createMany: {
            args: Prisma.RosaryOpeningPrayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RosaryOpeningPrayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>[]
          }
          delete: {
            args: Prisma.RosaryOpeningPrayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>
          }
          update: {
            args: Prisma.RosaryOpeningPrayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>
          }
          deleteMany: {
            args: Prisma.RosaryOpeningPrayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RosaryOpeningPrayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RosaryOpeningPrayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>[]
          }
          upsert: {
            args: Prisma.RosaryOpeningPrayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryOpeningPrayerPayload>
          }
          aggregate: {
            args: Prisma.RosaryOpeningPrayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRosaryOpeningPrayer>
          }
          groupBy: {
            args: Prisma.RosaryOpeningPrayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RosaryOpeningPrayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RosaryOpeningPrayerCountArgs<ExtArgs>
            result: $Utils.Optional<RosaryOpeningPrayerCountAggregateOutputType> | number
          }
        }
      }
      RosaryClosingPrayer: {
        payload: Prisma.$RosaryClosingPrayerPayload<ExtArgs>
        fields: Prisma.RosaryClosingPrayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RosaryClosingPrayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RosaryClosingPrayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>
          }
          findFirst: {
            args: Prisma.RosaryClosingPrayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RosaryClosingPrayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>
          }
          findMany: {
            args: Prisma.RosaryClosingPrayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>[]
          }
          create: {
            args: Prisma.RosaryClosingPrayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>
          }
          createMany: {
            args: Prisma.RosaryClosingPrayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RosaryClosingPrayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>[]
          }
          delete: {
            args: Prisma.RosaryClosingPrayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>
          }
          update: {
            args: Prisma.RosaryClosingPrayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>
          }
          deleteMany: {
            args: Prisma.RosaryClosingPrayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RosaryClosingPrayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RosaryClosingPrayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>[]
          }
          upsert: {
            args: Prisma.RosaryClosingPrayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosaryClosingPrayerPayload>
          }
          aggregate: {
            args: Prisma.RosaryClosingPrayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRosaryClosingPrayer>
          }
          groupBy: {
            args: Prisma.RosaryClosingPrayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RosaryClosingPrayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RosaryClosingPrayerCountArgs<ExtArgs>
            result: $Utils.Optional<RosaryClosingPrayerCountAggregateOutputType> | number
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
    prayer?: PrayerOmit
    mystery?: MysteryOmit
    mysterySet?: MysterySetOmit
    mysterySetItem?: MysterySetItemOmit
    mysterySetItemPrayer?: MysterySetItemPrayerOmit
    rosary?: RosaryOmit
    rosaryOpeningPrayer?: RosaryOpeningPrayerOmit
    rosaryClosingPrayer?: RosaryClosingPrayerOmit
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
   * Count Type PrayerCountOutputType
   */

  export type PrayerCountOutputType = {
    rosaryOpeningPrayers: number
    rosaryClosingPrayers: number
    mysterySetItemPrayers: number
  }

  export type PrayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosaryOpeningPrayers?: boolean | PrayerCountOutputTypeCountRosaryOpeningPrayersArgs
    rosaryClosingPrayers?: boolean | PrayerCountOutputTypeCountRosaryClosingPrayersArgs
    mysterySetItemPrayers?: boolean | PrayerCountOutputTypeCountMysterySetItemPrayersArgs
  }

  // Custom InputTypes
  /**
   * PrayerCountOutputType without action
   */
  export type PrayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrayerCountOutputType
     */
    select?: PrayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrayerCountOutputType without action
   */
  export type PrayerCountOutputTypeCountRosaryOpeningPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryOpeningPrayerWhereInput
  }

  /**
   * PrayerCountOutputType without action
   */
  export type PrayerCountOutputTypeCountRosaryClosingPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryClosingPrayerWhereInput
  }

  /**
   * PrayerCountOutputType without action
   */
  export type PrayerCountOutputTypeCountMysterySetItemPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysterySetItemPrayerWhereInput
  }


  /**
   * Count Type MysteryCountOutputType
   */

  export type MysteryCountOutputType = {
    setItems: number
  }

  export type MysteryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setItems?: boolean | MysteryCountOutputTypeCountSetItemsArgs
  }

  // Custom InputTypes
  /**
   * MysteryCountOutputType without action
   */
  export type MysteryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysteryCountOutputType
     */
    select?: MysteryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MysteryCountOutputType without action
   */
  export type MysteryCountOutputTypeCountSetItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysterySetItemWhereInput
  }


  /**
   * Count Type MysterySetCountOutputType
   */

  export type MysterySetCountOutputType = {
    mysteries: number
    rosaries: number
  }

  export type MysterySetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mysteries?: boolean | MysterySetCountOutputTypeCountMysteriesArgs
    rosaries?: boolean | MysterySetCountOutputTypeCountRosariesArgs
  }

  // Custom InputTypes
  /**
   * MysterySetCountOutputType without action
   */
  export type MysterySetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetCountOutputType
     */
    select?: MysterySetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MysterySetCountOutputType without action
   */
  export type MysterySetCountOutputTypeCountMysteriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysterySetItemWhereInput
  }

  /**
   * MysterySetCountOutputType without action
   */
  export type MysterySetCountOutputTypeCountRosariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryWhereInput
  }


  /**
   * Count Type MysterySetItemCountOutputType
   */

  export type MysterySetItemCountOutputType = {
    prayersAfter: number
  }

  export type MysterySetItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayersAfter?: boolean | MysterySetItemCountOutputTypeCountPrayersAfterArgs
  }

  // Custom InputTypes
  /**
   * MysterySetItemCountOutputType without action
   */
  export type MysterySetItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemCountOutputType
     */
    select?: MysterySetItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MysterySetItemCountOutputType without action
   */
  export type MysterySetItemCountOutputTypeCountPrayersAfterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysterySetItemPrayerWhereInput
  }


  /**
   * Count Type RosaryCountOutputType
   */

  export type RosaryCountOutputType = {
    openingPrayers: number
    closingPrayers: number
  }

  export type RosaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    openingPrayers?: boolean | RosaryCountOutputTypeCountOpeningPrayersArgs
    closingPrayers?: boolean | RosaryCountOutputTypeCountClosingPrayersArgs
  }

  // Custom InputTypes
  /**
   * RosaryCountOutputType without action
   */
  export type RosaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryCountOutputType
     */
    select?: RosaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RosaryCountOutputType without action
   */
  export type RosaryCountOutputTypeCountOpeningPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryOpeningPrayerWhereInput
  }

  /**
   * RosaryCountOutputType without action
   */
  export type RosaryCountOutputTypeCountClosingPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryClosingPrayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Prayer
   */

  export type AggregatePrayer = {
    _count: PrayerCountAggregateOutputType | null
    _avg: PrayerAvgAggregateOutputType | null
    _sum: PrayerSumAggregateOutputType | null
    _min: PrayerMinAggregateOutputType | null
    _max: PrayerMaxAggregateOutputType | null
  }

  export type PrayerAvgAggregateOutputType = {
    id: number | null
  }

  export type PrayerSumAggregateOutputType = {
    id: number | null
  }

  export type PrayerMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
  }

  export type PrayerMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
  }

  export type PrayerCountAggregateOutputType = {
    id: number
    title: number
    content: number
    _all: number
  }


  export type PrayerAvgAggregateInputType = {
    id?: true
  }

  export type PrayerSumAggregateInputType = {
    id?: true
  }

  export type PrayerMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type PrayerMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type PrayerCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    _all?: true
  }

  export type PrayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prayer to aggregate.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prayers
    **/
    _count?: true | PrayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrayerMaxAggregateInputType
  }

  export type GetPrayerAggregateType<T extends PrayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePrayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrayer[P]>
      : GetScalarType<T[P], AggregatePrayer[P]>
  }




  export type PrayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrayerWhereInput
    orderBy?: PrayerOrderByWithAggregationInput | PrayerOrderByWithAggregationInput[]
    by: PrayerScalarFieldEnum[] | PrayerScalarFieldEnum
    having?: PrayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrayerCountAggregateInputType | true
    _avg?: PrayerAvgAggregateInputType
    _sum?: PrayerSumAggregateInputType
    _min?: PrayerMinAggregateInputType
    _max?: PrayerMaxAggregateInputType
  }

  export type PrayerGroupByOutputType = {
    id: number
    title: string
    content: string
    _count: PrayerCountAggregateOutputType | null
    _avg: PrayerAvgAggregateOutputType | null
    _sum: PrayerSumAggregateOutputType | null
    _min: PrayerMinAggregateOutputType | null
    _max: PrayerMaxAggregateOutputType | null
  }

  type GetPrayerGroupByPayload<T extends PrayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrayerGroupByOutputType[P]>
            : GetScalarType<T[P], PrayerGroupByOutputType[P]>
        }
      >
    >


  export type PrayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    rosaryOpeningPrayers?: boolean | Prayer$rosaryOpeningPrayersArgs<ExtArgs>
    rosaryClosingPrayers?: boolean | Prayer$rosaryClosingPrayersArgs<ExtArgs>
    mysterySetItemPrayers?: boolean | Prayer$mysterySetItemPrayersArgs<ExtArgs>
    _count?: boolean | PrayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prayer"]>

  export type PrayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["prayer"]>

  export type PrayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["prayer"]>

  export type PrayerSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
  }

  export type PrayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content", ExtArgs["result"]["prayer"]>
  export type PrayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosaryOpeningPrayers?: boolean | Prayer$rosaryOpeningPrayersArgs<ExtArgs>
    rosaryClosingPrayers?: boolean | Prayer$rosaryClosingPrayersArgs<ExtArgs>
    mysterySetItemPrayers?: boolean | Prayer$mysterySetItemPrayersArgs<ExtArgs>
    _count?: boolean | PrayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PrayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prayer"
    objects: {
      rosaryOpeningPrayers: Prisma.$RosaryOpeningPrayerPayload<ExtArgs>[]
      rosaryClosingPrayers: Prisma.$RosaryClosingPrayerPayload<ExtArgs>[]
      mysterySetItemPrayers: Prisma.$MysterySetItemPrayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
    }, ExtArgs["result"]["prayer"]>
    composites: {}
  }

  type PrayerGetPayload<S extends boolean | null | undefined | PrayerDefaultArgs> = $Result.GetResult<Prisma.$PrayerPayload, S>

  type PrayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrayerCountAggregateInputType | true
    }

  export interface PrayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prayer'], meta: { name: 'Prayer' } }
    /**
     * Find zero or one Prayer that matches the filter.
     * @param {PrayerFindUniqueArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrayerFindUniqueArgs>(args: SelectSubset<T, PrayerFindUniqueArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrayerFindUniqueOrThrowArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PrayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindFirstArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrayerFindFirstArgs>(args?: SelectSubset<T, PrayerFindFirstArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindFirstOrThrowArgs} args - Arguments to find a Prayer
     * @example
     * // Get one Prayer
     * const prayer = await prisma.prayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PrayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prayers
     * const prayers = await prisma.prayer.findMany()
     * 
     * // Get first 10 Prayers
     * const prayers = await prisma.prayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prayerWithIdOnly = await prisma.prayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrayerFindManyArgs>(args?: SelectSubset<T, PrayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prayer.
     * @param {PrayerCreateArgs} args - Arguments to create a Prayer.
     * @example
     * // Create one Prayer
     * const Prayer = await prisma.prayer.create({
     *   data: {
     *     // ... data to create a Prayer
     *   }
     * })
     * 
     */
    create<T extends PrayerCreateArgs>(args: SelectSubset<T, PrayerCreateArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prayers.
     * @param {PrayerCreateManyArgs} args - Arguments to create many Prayers.
     * @example
     * // Create many Prayers
     * const prayer = await prisma.prayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrayerCreateManyArgs>(args?: SelectSubset<T, PrayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prayers and returns the data saved in the database.
     * @param {PrayerCreateManyAndReturnArgs} args - Arguments to create many Prayers.
     * @example
     * // Create many Prayers
     * const prayer = await prisma.prayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prayers and only return the `id`
     * const prayerWithIdOnly = await prisma.prayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PrayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prayer.
     * @param {PrayerDeleteArgs} args - Arguments to delete one Prayer.
     * @example
     * // Delete one Prayer
     * const Prayer = await prisma.prayer.delete({
     *   where: {
     *     // ... filter to delete one Prayer
     *   }
     * })
     * 
     */
    delete<T extends PrayerDeleteArgs>(args: SelectSubset<T, PrayerDeleteArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prayer.
     * @param {PrayerUpdateArgs} args - Arguments to update one Prayer.
     * @example
     * // Update one Prayer
     * const prayer = await prisma.prayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrayerUpdateArgs>(args: SelectSubset<T, PrayerUpdateArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prayers.
     * @param {PrayerDeleteManyArgs} args - Arguments to filter Prayers to delete.
     * @example
     * // Delete a few Prayers
     * const { count } = await prisma.prayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrayerDeleteManyArgs>(args?: SelectSubset<T, PrayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prayers
     * const prayer = await prisma.prayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrayerUpdateManyArgs>(args: SelectSubset<T, PrayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prayers and returns the data updated in the database.
     * @param {PrayerUpdateManyAndReturnArgs} args - Arguments to update many Prayers.
     * @example
     * // Update many Prayers
     * const prayer = await prisma.prayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prayers and only return the `id`
     * const prayerWithIdOnly = await prisma.prayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PrayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prayer.
     * @param {PrayerUpsertArgs} args - Arguments to update or create a Prayer.
     * @example
     * // Update or create a Prayer
     * const prayer = await prisma.prayer.upsert({
     *   create: {
     *     // ... data to create a Prayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prayer we want to update
     *   }
     * })
     */
    upsert<T extends PrayerUpsertArgs>(args: SelectSubset<T, PrayerUpsertArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerCountArgs} args - Arguments to filter Prayers to count.
     * @example
     * // Count the number of Prayers
     * const count = await prisma.prayer.count({
     *   where: {
     *     // ... the filter for the Prayers we want to count
     *   }
     * })
    **/
    count<T extends PrayerCountArgs>(
      args?: Subset<T, PrayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrayerAggregateArgs>(args: Subset<T, PrayerAggregateArgs>): Prisma.PrismaPromise<GetPrayerAggregateType<T>>

    /**
     * Group by Prayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrayerGroupByArgs} args - Group by arguments.
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
      T extends PrayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrayerGroupByArgs['orderBy'] }
        : { orderBy?: PrayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prayer model
   */
  readonly fields: PrayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rosaryOpeningPrayers<T extends Prayer$rosaryOpeningPrayersArgs<ExtArgs> = {}>(args?: Subset<T, Prayer$rosaryOpeningPrayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rosaryClosingPrayers<T extends Prayer$rosaryClosingPrayersArgs<ExtArgs> = {}>(args?: Subset<T, Prayer$rosaryClosingPrayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mysterySetItemPrayers<T extends Prayer$mysterySetItemPrayersArgs<ExtArgs> = {}>(args?: Subset<T, Prayer$mysterySetItemPrayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prayer model
   */
  interface PrayerFieldRefs {
    readonly id: FieldRef<"Prayer", 'Int'>
    readonly title: FieldRef<"Prayer", 'String'>
    readonly content: FieldRef<"Prayer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prayer findUnique
   */
  export type PrayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where: PrayerWhereUniqueInput
  }

  /**
   * Prayer findUniqueOrThrow
   */
  export type PrayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where: PrayerWhereUniqueInput
  }

  /**
   * Prayer findFirst
   */
  export type PrayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prayers.
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prayers.
     */
    distinct?: PrayerScalarFieldEnum | PrayerScalarFieldEnum[]
  }

  /**
   * Prayer findFirstOrThrow
   */
  export type PrayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayer to fetch.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prayers.
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prayers.
     */
    distinct?: PrayerScalarFieldEnum | PrayerScalarFieldEnum[]
  }

  /**
   * Prayer findMany
   */
  export type PrayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter, which Prayers to fetch.
     */
    where?: PrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prayers to fetch.
     */
    orderBy?: PrayerOrderByWithRelationInput | PrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prayers.
     */
    cursor?: PrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prayers.
     */
    skip?: number
    distinct?: PrayerScalarFieldEnum | PrayerScalarFieldEnum[]
  }

  /**
   * Prayer create
   */
  export type PrayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Prayer.
     */
    data: XOR<PrayerCreateInput, PrayerUncheckedCreateInput>
  }

  /**
   * Prayer createMany
   */
  export type PrayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prayers.
     */
    data: PrayerCreateManyInput | PrayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prayer createManyAndReturn
   */
  export type PrayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * The data used to create many Prayers.
     */
    data: PrayerCreateManyInput | PrayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prayer update
   */
  export type PrayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Prayer.
     */
    data: XOR<PrayerUpdateInput, PrayerUncheckedUpdateInput>
    /**
     * Choose, which Prayer to update.
     */
    where: PrayerWhereUniqueInput
  }

  /**
   * Prayer updateMany
   */
  export type PrayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prayers.
     */
    data: XOR<PrayerUpdateManyMutationInput, PrayerUncheckedUpdateManyInput>
    /**
     * Filter which Prayers to update
     */
    where?: PrayerWhereInput
    /**
     * Limit how many Prayers to update.
     */
    limit?: number
  }

  /**
   * Prayer updateManyAndReturn
   */
  export type PrayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * The data used to update Prayers.
     */
    data: XOR<PrayerUpdateManyMutationInput, PrayerUncheckedUpdateManyInput>
    /**
     * Filter which Prayers to update
     */
    where?: PrayerWhereInput
    /**
     * Limit how many Prayers to update.
     */
    limit?: number
  }

  /**
   * Prayer upsert
   */
  export type PrayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Prayer to update in case it exists.
     */
    where: PrayerWhereUniqueInput
    /**
     * In case the Prayer found by the `where` argument doesn't exist, create a new Prayer with this data.
     */
    create: XOR<PrayerCreateInput, PrayerUncheckedCreateInput>
    /**
     * In case the Prayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrayerUpdateInput, PrayerUncheckedUpdateInput>
  }

  /**
   * Prayer delete
   */
  export type PrayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
    /**
     * Filter which Prayer to delete.
     */
    where: PrayerWhereUniqueInput
  }

  /**
   * Prayer deleteMany
   */
  export type PrayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prayers to delete
     */
    where?: PrayerWhereInput
    /**
     * Limit how many Prayers to delete.
     */
    limit?: number
  }

  /**
   * Prayer.rosaryOpeningPrayers
   */
  export type Prayer$rosaryOpeningPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    where?: RosaryOpeningPrayerWhereInput
    orderBy?: RosaryOpeningPrayerOrderByWithRelationInput | RosaryOpeningPrayerOrderByWithRelationInput[]
    cursor?: RosaryOpeningPrayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RosaryOpeningPrayerScalarFieldEnum | RosaryOpeningPrayerScalarFieldEnum[]
  }

  /**
   * Prayer.rosaryClosingPrayers
   */
  export type Prayer$rosaryClosingPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    where?: RosaryClosingPrayerWhereInput
    orderBy?: RosaryClosingPrayerOrderByWithRelationInput | RosaryClosingPrayerOrderByWithRelationInput[]
    cursor?: RosaryClosingPrayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RosaryClosingPrayerScalarFieldEnum | RosaryClosingPrayerScalarFieldEnum[]
  }

  /**
   * Prayer.mysterySetItemPrayers
   */
  export type Prayer$mysterySetItemPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    where?: MysterySetItemPrayerWhereInput
    orderBy?: MysterySetItemPrayerOrderByWithRelationInput | MysterySetItemPrayerOrderByWithRelationInput[]
    cursor?: MysterySetItemPrayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MysterySetItemPrayerScalarFieldEnum | MysterySetItemPrayerScalarFieldEnum[]
  }

  /**
   * Prayer without action
   */
  export type PrayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prayer
     */
    select?: PrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prayer
     */
    omit?: PrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrayerInclude<ExtArgs> | null
  }


  /**
   * Model Mystery
   */

  export type AggregateMystery = {
    _count: MysteryCountAggregateOutputType | null
    _avg: MysteryAvgAggregateOutputType | null
    _sum: MysterySumAggregateOutputType | null
    _min: MysteryMinAggregateOutputType | null
    _max: MysteryMaxAggregateOutputType | null
  }

  export type MysteryAvgAggregateOutputType = {
    id: number | null
  }

  export type MysterySumAggregateOutputType = {
    id: number | null
  }

  export type MysteryMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
  }

  export type MysteryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
  }

  export type MysteryCountAggregateOutputType = {
    id: number
    title: number
    content: number
    _all: number
  }


  export type MysteryAvgAggregateInputType = {
    id?: true
  }

  export type MysterySumAggregateInputType = {
    id?: true
  }

  export type MysteryMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type MysteryMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
  }

  export type MysteryCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    _all?: true
  }

  export type MysteryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mystery to aggregate.
     */
    where?: MysteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mysteries to fetch.
     */
    orderBy?: MysteryOrderByWithRelationInput | MysteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MysteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mysteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mysteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mysteries
    **/
    _count?: true | MysteryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MysteryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MysterySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MysteryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MysteryMaxAggregateInputType
  }

  export type GetMysteryAggregateType<T extends MysteryAggregateArgs> = {
        [P in keyof T & keyof AggregateMystery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMystery[P]>
      : GetScalarType<T[P], AggregateMystery[P]>
  }




  export type MysteryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysteryWhereInput
    orderBy?: MysteryOrderByWithAggregationInput | MysteryOrderByWithAggregationInput[]
    by: MysteryScalarFieldEnum[] | MysteryScalarFieldEnum
    having?: MysteryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MysteryCountAggregateInputType | true
    _avg?: MysteryAvgAggregateInputType
    _sum?: MysterySumAggregateInputType
    _min?: MysteryMinAggregateInputType
    _max?: MysteryMaxAggregateInputType
  }

  export type MysteryGroupByOutputType = {
    id: number
    title: string
    content: string
    _count: MysteryCountAggregateOutputType | null
    _avg: MysteryAvgAggregateOutputType | null
    _sum: MysterySumAggregateOutputType | null
    _min: MysteryMinAggregateOutputType | null
    _max: MysteryMaxAggregateOutputType | null
  }

  type GetMysteryGroupByPayload<T extends MysteryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MysteryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MysteryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MysteryGroupByOutputType[P]>
            : GetScalarType<T[P], MysteryGroupByOutputType[P]>
        }
      >
    >


  export type MysterySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    setItems?: boolean | Mystery$setItemsArgs<ExtArgs>
    _count?: boolean | MysteryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mystery"]>

  export type MysterySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["mystery"]>

  export type MysterySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["mystery"]>

  export type MysterySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
  }

  export type MysteryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content", ExtArgs["result"]["mystery"]>
  export type MysteryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setItems?: boolean | Mystery$setItemsArgs<ExtArgs>
    _count?: boolean | MysteryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MysteryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MysteryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MysteryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mystery"
    objects: {
      setItems: Prisma.$MysterySetItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
    }, ExtArgs["result"]["mystery"]>
    composites: {}
  }

  type MysteryGetPayload<S extends boolean | null | undefined | MysteryDefaultArgs> = $Result.GetResult<Prisma.$MysteryPayload, S>

  type MysteryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MysteryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MysteryCountAggregateInputType | true
    }

  export interface MysteryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mystery'], meta: { name: 'Mystery' } }
    /**
     * Find zero or one Mystery that matches the filter.
     * @param {MysteryFindUniqueArgs} args - Arguments to find a Mystery
     * @example
     * // Get one Mystery
     * const mystery = await prisma.mystery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MysteryFindUniqueArgs>(args: SelectSubset<T, MysteryFindUniqueArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mystery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MysteryFindUniqueOrThrowArgs} args - Arguments to find a Mystery
     * @example
     * // Get one Mystery
     * const mystery = await prisma.mystery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MysteryFindUniqueOrThrowArgs>(args: SelectSubset<T, MysteryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mystery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysteryFindFirstArgs} args - Arguments to find a Mystery
     * @example
     * // Get one Mystery
     * const mystery = await prisma.mystery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MysteryFindFirstArgs>(args?: SelectSubset<T, MysteryFindFirstArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mystery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysteryFindFirstOrThrowArgs} args - Arguments to find a Mystery
     * @example
     * // Get one Mystery
     * const mystery = await prisma.mystery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MysteryFindFirstOrThrowArgs>(args?: SelectSubset<T, MysteryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mysteries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysteryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mysteries
     * const mysteries = await prisma.mystery.findMany()
     * 
     * // Get first 10 Mysteries
     * const mysteries = await prisma.mystery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mysteryWithIdOnly = await prisma.mystery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MysteryFindManyArgs>(args?: SelectSubset<T, MysteryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mystery.
     * @param {MysteryCreateArgs} args - Arguments to create a Mystery.
     * @example
     * // Create one Mystery
     * const Mystery = await prisma.mystery.create({
     *   data: {
     *     // ... data to create a Mystery
     *   }
     * })
     * 
     */
    create<T extends MysteryCreateArgs>(args: SelectSubset<T, MysteryCreateArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mysteries.
     * @param {MysteryCreateManyArgs} args - Arguments to create many Mysteries.
     * @example
     * // Create many Mysteries
     * const mystery = await prisma.mystery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MysteryCreateManyArgs>(args?: SelectSubset<T, MysteryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mysteries and returns the data saved in the database.
     * @param {MysteryCreateManyAndReturnArgs} args - Arguments to create many Mysteries.
     * @example
     * // Create many Mysteries
     * const mystery = await prisma.mystery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mysteries and only return the `id`
     * const mysteryWithIdOnly = await prisma.mystery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MysteryCreateManyAndReturnArgs>(args?: SelectSubset<T, MysteryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mystery.
     * @param {MysteryDeleteArgs} args - Arguments to delete one Mystery.
     * @example
     * // Delete one Mystery
     * const Mystery = await prisma.mystery.delete({
     *   where: {
     *     // ... filter to delete one Mystery
     *   }
     * })
     * 
     */
    delete<T extends MysteryDeleteArgs>(args: SelectSubset<T, MysteryDeleteArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mystery.
     * @param {MysteryUpdateArgs} args - Arguments to update one Mystery.
     * @example
     * // Update one Mystery
     * const mystery = await prisma.mystery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MysteryUpdateArgs>(args: SelectSubset<T, MysteryUpdateArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mysteries.
     * @param {MysteryDeleteManyArgs} args - Arguments to filter Mysteries to delete.
     * @example
     * // Delete a few Mysteries
     * const { count } = await prisma.mystery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MysteryDeleteManyArgs>(args?: SelectSubset<T, MysteryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mysteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysteryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mysteries
     * const mystery = await prisma.mystery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MysteryUpdateManyArgs>(args: SelectSubset<T, MysteryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mysteries and returns the data updated in the database.
     * @param {MysteryUpdateManyAndReturnArgs} args - Arguments to update many Mysteries.
     * @example
     * // Update many Mysteries
     * const mystery = await prisma.mystery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mysteries and only return the `id`
     * const mysteryWithIdOnly = await prisma.mystery.updateManyAndReturn({
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
    updateManyAndReturn<T extends MysteryUpdateManyAndReturnArgs>(args: SelectSubset<T, MysteryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mystery.
     * @param {MysteryUpsertArgs} args - Arguments to update or create a Mystery.
     * @example
     * // Update or create a Mystery
     * const mystery = await prisma.mystery.upsert({
     *   create: {
     *     // ... data to create a Mystery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mystery we want to update
     *   }
     * })
     */
    upsert<T extends MysteryUpsertArgs>(args: SelectSubset<T, MysteryUpsertArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mysteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysteryCountArgs} args - Arguments to filter Mysteries to count.
     * @example
     * // Count the number of Mysteries
     * const count = await prisma.mystery.count({
     *   where: {
     *     // ... the filter for the Mysteries we want to count
     *   }
     * })
    **/
    count<T extends MysteryCountArgs>(
      args?: Subset<T, MysteryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MysteryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mystery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysteryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MysteryAggregateArgs>(args: Subset<T, MysteryAggregateArgs>): Prisma.PrismaPromise<GetMysteryAggregateType<T>>

    /**
     * Group by Mystery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysteryGroupByArgs} args - Group by arguments.
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
      T extends MysteryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MysteryGroupByArgs['orderBy'] }
        : { orderBy?: MysteryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MysteryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMysteryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mystery model
   */
  readonly fields: MysteryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mystery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MysteryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setItems<T extends Mystery$setItemsArgs<ExtArgs> = {}>(args?: Subset<T, Mystery$setItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mystery model
   */
  interface MysteryFieldRefs {
    readonly id: FieldRef<"Mystery", 'Int'>
    readonly title: FieldRef<"Mystery", 'String'>
    readonly content: FieldRef<"Mystery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mystery findUnique
   */
  export type MysteryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * Filter, which Mystery to fetch.
     */
    where: MysteryWhereUniqueInput
  }

  /**
   * Mystery findUniqueOrThrow
   */
  export type MysteryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * Filter, which Mystery to fetch.
     */
    where: MysteryWhereUniqueInput
  }

  /**
   * Mystery findFirst
   */
  export type MysteryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * Filter, which Mystery to fetch.
     */
    where?: MysteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mysteries to fetch.
     */
    orderBy?: MysteryOrderByWithRelationInput | MysteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mysteries.
     */
    cursor?: MysteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mysteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mysteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mysteries.
     */
    distinct?: MysteryScalarFieldEnum | MysteryScalarFieldEnum[]
  }

  /**
   * Mystery findFirstOrThrow
   */
  export type MysteryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * Filter, which Mystery to fetch.
     */
    where?: MysteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mysteries to fetch.
     */
    orderBy?: MysteryOrderByWithRelationInput | MysteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mysteries.
     */
    cursor?: MysteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mysteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mysteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mysteries.
     */
    distinct?: MysteryScalarFieldEnum | MysteryScalarFieldEnum[]
  }

  /**
   * Mystery findMany
   */
  export type MysteryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * Filter, which Mysteries to fetch.
     */
    where?: MysteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mysteries to fetch.
     */
    orderBy?: MysteryOrderByWithRelationInput | MysteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mysteries.
     */
    cursor?: MysteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mysteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mysteries.
     */
    skip?: number
    distinct?: MysteryScalarFieldEnum | MysteryScalarFieldEnum[]
  }

  /**
   * Mystery create
   */
  export type MysteryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * The data needed to create a Mystery.
     */
    data: XOR<MysteryCreateInput, MysteryUncheckedCreateInput>
  }

  /**
   * Mystery createMany
   */
  export type MysteryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mysteries.
     */
    data: MysteryCreateManyInput | MysteryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mystery createManyAndReturn
   */
  export type MysteryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * The data used to create many Mysteries.
     */
    data: MysteryCreateManyInput | MysteryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mystery update
   */
  export type MysteryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * The data needed to update a Mystery.
     */
    data: XOR<MysteryUpdateInput, MysteryUncheckedUpdateInput>
    /**
     * Choose, which Mystery to update.
     */
    where: MysteryWhereUniqueInput
  }

  /**
   * Mystery updateMany
   */
  export type MysteryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mysteries.
     */
    data: XOR<MysteryUpdateManyMutationInput, MysteryUncheckedUpdateManyInput>
    /**
     * Filter which Mysteries to update
     */
    where?: MysteryWhereInput
    /**
     * Limit how many Mysteries to update.
     */
    limit?: number
  }

  /**
   * Mystery updateManyAndReturn
   */
  export type MysteryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * The data used to update Mysteries.
     */
    data: XOR<MysteryUpdateManyMutationInput, MysteryUncheckedUpdateManyInput>
    /**
     * Filter which Mysteries to update
     */
    where?: MysteryWhereInput
    /**
     * Limit how many Mysteries to update.
     */
    limit?: number
  }

  /**
   * Mystery upsert
   */
  export type MysteryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * The filter to search for the Mystery to update in case it exists.
     */
    where: MysteryWhereUniqueInput
    /**
     * In case the Mystery found by the `where` argument doesn't exist, create a new Mystery with this data.
     */
    create: XOR<MysteryCreateInput, MysteryUncheckedCreateInput>
    /**
     * In case the Mystery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MysteryUpdateInput, MysteryUncheckedUpdateInput>
  }

  /**
   * Mystery delete
   */
  export type MysteryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
    /**
     * Filter which Mystery to delete.
     */
    where: MysteryWhereUniqueInput
  }

  /**
   * Mystery deleteMany
   */
  export type MysteryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mysteries to delete
     */
    where?: MysteryWhereInput
    /**
     * Limit how many Mysteries to delete.
     */
    limit?: number
  }

  /**
   * Mystery.setItems
   */
  export type Mystery$setItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    where?: MysterySetItemWhereInput
    orderBy?: MysterySetItemOrderByWithRelationInput | MysterySetItemOrderByWithRelationInput[]
    cursor?: MysterySetItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MysterySetItemScalarFieldEnum | MysterySetItemScalarFieldEnum[]
  }

  /**
   * Mystery without action
   */
  export type MysteryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mystery
     */
    select?: MysterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mystery
     */
    omit?: MysteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysteryInclude<ExtArgs> | null
  }


  /**
   * Model MysterySet
   */

  export type AggregateMysterySet = {
    _count: MysterySetCountAggregateOutputType | null
    _avg: MysterySetAvgAggregateOutputType | null
    _sum: MysterySetSumAggregateOutputType | null
    _min: MysterySetMinAggregateOutputType | null
    _max: MysterySetMaxAggregateOutputType | null
  }

  export type MysterySetAvgAggregateOutputType = {
    id: number | null
  }

  export type MysterySetSumAggregateOutputType = {
    id: number | null
  }

  export type MysterySetMinAggregateOutputType = {
    id: number | null
    name: string | null
    day: string | null
  }

  export type MysterySetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    day: string | null
  }

  export type MysterySetCountAggregateOutputType = {
    id: number
    name: number
    day: number
    _all: number
  }


  export type MysterySetAvgAggregateInputType = {
    id?: true
  }

  export type MysterySetSumAggregateInputType = {
    id?: true
  }

  export type MysterySetMinAggregateInputType = {
    id?: true
    name?: true
    day?: true
  }

  export type MysterySetMaxAggregateInputType = {
    id?: true
    name?: true
    day?: true
  }

  export type MysterySetCountAggregateInputType = {
    id?: true
    name?: true
    day?: true
    _all?: true
  }

  export type MysterySetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MysterySet to aggregate.
     */
    where?: MysterySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySets to fetch.
     */
    orderBy?: MysterySetOrderByWithRelationInput | MysterySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MysterySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MysterySets
    **/
    _count?: true | MysterySetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MysterySetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MysterySetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MysterySetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MysterySetMaxAggregateInputType
  }

  export type GetMysterySetAggregateType<T extends MysterySetAggregateArgs> = {
        [P in keyof T & keyof AggregateMysterySet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMysterySet[P]>
      : GetScalarType<T[P], AggregateMysterySet[P]>
  }




  export type MysterySetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysterySetWhereInput
    orderBy?: MysterySetOrderByWithAggregationInput | MysterySetOrderByWithAggregationInput[]
    by: MysterySetScalarFieldEnum[] | MysterySetScalarFieldEnum
    having?: MysterySetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MysterySetCountAggregateInputType | true
    _avg?: MysterySetAvgAggregateInputType
    _sum?: MysterySetSumAggregateInputType
    _min?: MysterySetMinAggregateInputType
    _max?: MysterySetMaxAggregateInputType
  }

  export type MysterySetGroupByOutputType = {
    id: number
    name: string
    day: string
    _count: MysterySetCountAggregateOutputType | null
    _avg: MysterySetAvgAggregateOutputType | null
    _sum: MysterySetSumAggregateOutputType | null
    _min: MysterySetMinAggregateOutputType | null
    _max: MysterySetMaxAggregateOutputType | null
  }

  type GetMysterySetGroupByPayload<T extends MysterySetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MysterySetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MysterySetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MysterySetGroupByOutputType[P]>
            : GetScalarType<T[P], MysterySetGroupByOutputType[P]>
        }
      >
    >


  export type MysterySetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    day?: boolean
    mysteries?: boolean | MysterySet$mysteriesArgs<ExtArgs>
    rosaries?: boolean | MysterySet$rosariesArgs<ExtArgs>
    _count?: boolean | MysterySetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mysterySet"]>

  export type MysterySetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    day?: boolean
  }, ExtArgs["result"]["mysterySet"]>

  export type MysterySetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    day?: boolean
  }, ExtArgs["result"]["mysterySet"]>

  export type MysterySetSelectScalar = {
    id?: boolean
    name?: boolean
    day?: boolean
  }

  export type MysterySetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "day", ExtArgs["result"]["mysterySet"]>
  export type MysterySetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mysteries?: boolean | MysterySet$mysteriesArgs<ExtArgs>
    rosaries?: boolean | MysterySet$rosariesArgs<ExtArgs>
    _count?: boolean | MysterySetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MysterySetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MysterySetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MysterySetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MysterySet"
    objects: {
      mysteries: Prisma.$MysterySetItemPayload<ExtArgs>[]
      rosaries: Prisma.$RosaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      day: string
    }, ExtArgs["result"]["mysterySet"]>
    composites: {}
  }

  type MysterySetGetPayload<S extends boolean | null | undefined | MysterySetDefaultArgs> = $Result.GetResult<Prisma.$MysterySetPayload, S>

  type MysterySetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MysterySetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MysterySetCountAggregateInputType | true
    }

  export interface MysterySetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MysterySet'], meta: { name: 'MysterySet' } }
    /**
     * Find zero or one MysterySet that matches the filter.
     * @param {MysterySetFindUniqueArgs} args - Arguments to find a MysterySet
     * @example
     * // Get one MysterySet
     * const mysterySet = await prisma.mysterySet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MysterySetFindUniqueArgs>(args: SelectSubset<T, MysterySetFindUniqueArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MysterySet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MysterySetFindUniqueOrThrowArgs} args - Arguments to find a MysterySet
     * @example
     * // Get one MysterySet
     * const mysterySet = await prisma.mysterySet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MysterySetFindUniqueOrThrowArgs>(args: SelectSubset<T, MysterySetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MysterySet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetFindFirstArgs} args - Arguments to find a MysterySet
     * @example
     * // Get one MysterySet
     * const mysterySet = await prisma.mysterySet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MysterySetFindFirstArgs>(args?: SelectSubset<T, MysterySetFindFirstArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MysterySet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetFindFirstOrThrowArgs} args - Arguments to find a MysterySet
     * @example
     * // Get one MysterySet
     * const mysterySet = await prisma.mysterySet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MysterySetFindFirstOrThrowArgs>(args?: SelectSubset<T, MysterySetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MysterySets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MysterySets
     * const mysterySets = await prisma.mysterySet.findMany()
     * 
     * // Get first 10 MysterySets
     * const mysterySets = await prisma.mysterySet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mysterySetWithIdOnly = await prisma.mysterySet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MysterySetFindManyArgs>(args?: SelectSubset<T, MysterySetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MysterySet.
     * @param {MysterySetCreateArgs} args - Arguments to create a MysterySet.
     * @example
     * // Create one MysterySet
     * const MysterySet = await prisma.mysterySet.create({
     *   data: {
     *     // ... data to create a MysterySet
     *   }
     * })
     * 
     */
    create<T extends MysterySetCreateArgs>(args: SelectSubset<T, MysterySetCreateArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MysterySets.
     * @param {MysterySetCreateManyArgs} args - Arguments to create many MysterySets.
     * @example
     * // Create many MysterySets
     * const mysterySet = await prisma.mysterySet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MysterySetCreateManyArgs>(args?: SelectSubset<T, MysterySetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MysterySets and returns the data saved in the database.
     * @param {MysterySetCreateManyAndReturnArgs} args - Arguments to create many MysterySets.
     * @example
     * // Create many MysterySets
     * const mysterySet = await prisma.mysterySet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MysterySets and only return the `id`
     * const mysterySetWithIdOnly = await prisma.mysterySet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MysterySetCreateManyAndReturnArgs>(args?: SelectSubset<T, MysterySetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MysterySet.
     * @param {MysterySetDeleteArgs} args - Arguments to delete one MysterySet.
     * @example
     * // Delete one MysterySet
     * const MysterySet = await prisma.mysterySet.delete({
     *   where: {
     *     // ... filter to delete one MysterySet
     *   }
     * })
     * 
     */
    delete<T extends MysterySetDeleteArgs>(args: SelectSubset<T, MysterySetDeleteArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MysterySet.
     * @param {MysterySetUpdateArgs} args - Arguments to update one MysterySet.
     * @example
     * // Update one MysterySet
     * const mysterySet = await prisma.mysterySet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MysterySetUpdateArgs>(args: SelectSubset<T, MysterySetUpdateArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MysterySets.
     * @param {MysterySetDeleteManyArgs} args - Arguments to filter MysterySets to delete.
     * @example
     * // Delete a few MysterySets
     * const { count } = await prisma.mysterySet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MysterySetDeleteManyArgs>(args?: SelectSubset<T, MysterySetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MysterySets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MysterySets
     * const mysterySet = await prisma.mysterySet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MysterySetUpdateManyArgs>(args: SelectSubset<T, MysterySetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MysterySets and returns the data updated in the database.
     * @param {MysterySetUpdateManyAndReturnArgs} args - Arguments to update many MysterySets.
     * @example
     * // Update many MysterySets
     * const mysterySet = await prisma.mysterySet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MysterySets and only return the `id`
     * const mysterySetWithIdOnly = await prisma.mysterySet.updateManyAndReturn({
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
    updateManyAndReturn<T extends MysterySetUpdateManyAndReturnArgs>(args: SelectSubset<T, MysterySetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MysterySet.
     * @param {MysterySetUpsertArgs} args - Arguments to update or create a MysterySet.
     * @example
     * // Update or create a MysterySet
     * const mysterySet = await prisma.mysterySet.upsert({
     *   create: {
     *     // ... data to create a MysterySet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MysterySet we want to update
     *   }
     * })
     */
    upsert<T extends MysterySetUpsertArgs>(args: SelectSubset<T, MysterySetUpsertArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MysterySets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetCountArgs} args - Arguments to filter MysterySets to count.
     * @example
     * // Count the number of MysterySets
     * const count = await prisma.mysterySet.count({
     *   where: {
     *     // ... the filter for the MysterySets we want to count
     *   }
     * })
    **/
    count<T extends MysterySetCountArgs>(
      args?: Subset<T, MysterySetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MysterySetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MysterySet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MysterySetAggregateArgs>(args: Subset<T, MysterySetAggregateArgs>): Prisma.PrismaPromise<GetMysterySetAggregateType<T>>

    /**
     * Group by MysterySet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetGroupByArgs} args - Group by arguments.
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
      T extends MysterySetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MysterySetGroupByArgs['orderBy'] }
        : { orderBy?: MysterySetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MysterySetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMysterySetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MysterySet model
   */
  readonly fields: MysterySetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MysterySet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MysterySetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mysteries<T extends MysterySet$mysteriesArgs<ExtArgs> = {}>(args?: Subset<T, MysterySet$mysteriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rosaries<T extends MysterySet$rosariesArgs<ExtArgs> = {}>(args?: Subset<T, MysterySet$rosariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MysterySet model
   */
  interface MysterySetFieldRefs {
    readonly id: FieldRef<"MysterySet", 'Int'>
    readonly name: FieldRef<"MysterySet", 'String'>
    readonly day: FieldRef<"MysterySet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MysterySet findUnique
   */
  export type MysterySetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * Filter, which MysterySet to fetch.
     */
    where: MysterySetWhereUniqueInput
  }

  /**
   * MysterySet findUniqueOrThrow
   */
  export type MysterySetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * Filter, which MysterySet to fetch.
     */
    where: MysterySetWhereUniqueInput
  }

  /**
   * MysterySet findFirst
   */
  export type MysterySetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * Filter, which MysterySet to fetch.
     */
    where?: MysterySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySets to fetch.
     */
    orderBy?: MysterySetOrderByWithRelationInput | MysterySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MysterySets.
     */
    cursor?: MysterySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MysterySets.
     */
    distinct?: MysterySetScalarFieldEnum | MysterySetScalarFieldEnum[]
  }

  /**
   * MysterySet findFirstOrThrow
   */
  export type MysterySetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * Filter, which MysterySet to fetch.
     */
    where?: MysterySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySets to fetch.
     */
    orderBy?: MysterySetOrderByWithRelationInput | MysterySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MysterySets.
     */
    cursor?: MysterySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MysterySets.
     */
    distinct?: MysterySetScalarFieldEnum | MysterySetScalarFieldEnum[]
  }

  /**
   * MysterySet findMany
   */
  export type MysterySetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * Filter, which MysterySets to fetch.
     */
    where?: MysterySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySets to fetch.
     */
    orderBy?: MysterySetOrderByWithRelationInput | MysterySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MysterySets.
     */
    cursor?: MysterySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySets.
     */
    skip?: number
    distinct?: MysterySetScalarFieldEnum | MysterySetScalarFieldEnum[]
  }

  /**
   * MysterySet create
   */
  export type MysterySetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * The data needed to create a MysterySet.
     */
    data: XOR<MysterySetCreateInput, MysterySetUncheckedCreateInput>
  }

  /**
   * MysterySet createMany
   */
  export type MysterySetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MysterySets.
     */
    data: MysterySetCreateManyInput | MysterySetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MysterySet createManyAndReturn
   */
  export type MysterySetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * The data used to create many MysterySets.
     */
    data: MysterySetCreateManyInput | MysterySetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MysterySet update
   */
  export type MysterySetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * The data needed to update a MysterySet.
     */
    data: XOR<MysterySetUpdateInput, MysterySetUncheckedUpdateInput>
    /**
     * Choose, which MysterySet to update.
     */
    where: MysterySetWhereUniqueInput
  }

  /**
   * MysterySet updateMany
   */
  export type MysterySetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MysterySets.
     */
    data: XOR<MysterySetUpdateManyMutationInput, MysterySetUncheckedUpdateManyInput>
    /**
     * Filter which MysterySets to update
     */
    where?: MysterySetWhereInput
    /**
     * Limit how many MysterySets to update.
     */
    limit?: number
  }

  /**
   * MysterySet updateManyAndReturn
   */
  export type MysterySetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * The data used to update MysterySets.
     */
    data: XOR<MysterySetUpdateManyMutationInput, MysterySetUncheckedUpdateManyInput>
    /**
     * Filter which MysterySets to update
     */
    where?: MysterySetWhereInput
    /**
     * Limit how many MysterySets to update.
     */
    limit?: number
  }

  /**
   * MysterySet upsert
   */
  export type MysterySetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * The filter to search for the MysterySet to update in case it exists.
     */
    where: MysterySetWhereUniqueInput
    /**
     * In case the MysterySet found by the `where` argument doesn't exist, create a new MysterySet with this data.
     */
    create: XOR<MysterySetCreateInput, MysterySetUncheckedCreateInput>
    /**
     * In case the MysterySet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MysterySetUpdateInput, MysterySetUncheckedUpdateInput>
  }

  /**
   * MysterySet delete
   */
  export type MysterySetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
    /**
     * Filter which MysterySet to delete.
     */
    where: MysterySetWhereUniqueInput
  }

  /**
   * MysterySet deleteMany
   */
  export type MysterySetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MysterySets to delete
     */
    where?: MysterySetWhereInput
    /**
     * Limit how many MysterySets to delete.
     */
    limit?: number
  }

  /**
   * MysterySet.mysteries
   */
  export type MysterySet$mysteriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    where?: MysterySetItemWhereInput
    orderBy?: MysterySetItemOrderByWithRelationInput | MysterySetItemOrderByWithRelationInput[]
    cursor?: MysterySetItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MysterySetItemScalarFieldEnum | MysterySetItemScalarFieldEnum[]
  }

  /**
   * MysterySet.rosaries
   */
  export type MysterySet$rosariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    where?: RosaryWhereInput
    orderBy?: RosaryOrderByWithRelationInput | RosaryOrderByWithRelationInput[]
    cursor?: RosaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RosaryScalarFieldEnum | RosaryScalarFieldEnum[]
  }

  /**
   * MysterySet without action
   */
  export type MysterySetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySet
     */
    select?: MysterySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySet
     */
    omit?: MysterySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetInclude<ExtArgs> | null
  }


  /**
   * Model MysterySetItem
   */

  export type AggregateMysterySetItem = {
    _count: MysterySetItemCountAggregateOutputType | null
    _avg: MysterySetItemAvgAggregateOutputType | null
    _sum: MysterySetItemSumAggregateOutputType | null
    _min: MysterySetItemMinAggregateOutputType | null
    _max: MysterySetItemMaxAggregateOutputType | null
  }

  export type MysterySetItemAvgAggregateOutputType = {
    id: number | null
    mysteryId: number | null
    mysterySetId: number | null
    orderInSet: number | null
  }

  export type MysterySetItemSumAggregateOutputType = {
    id: number | null
    mysteryId: number | null
    mysterySetId: number | null
    orderInSet: number | null
  }

  export type MysterySetItemMinAggregateOutputType = {
    id: number | null
    mysteryId: number | null
    mysterySetId: number | null
    orderInSet: number | null
  }

  export type MysterySetItemMaxAggregateOutputType = {
    id: number | null
    mysteryId: number | null
    mysterySetId: number | null
    orderInSet: number | null
  }

  export type MysterySetItemCountAggregateOutputType = {
    id: number
    mysteryId: number
    mysterySetId: number
    orderInSet: number
    _all: number
  }


  export type MysterySetItemAvgAggregateInputType = {
    id?: true
    mysteryId?: true
    mysterySetId?: true
    orderInSet?: true
  }

  export type MysterySetItemSumAggregateInputType = {
    id?: true
    mysteryId?: true
    mysterySetId?: true
    orderInSet?: true
  }

  export type MysterySetItemMinAggregateInputType = {
    id?: true
    mysteryId?: true
    mysterySetId?: true
    orderInSet?: true
  }

  export type MysterySetItemMaxAggregateInputType = {
    id?: true
    mysteryId?: true
    mysterySetId?: true
    orderInSet?: true
  }

  export type MysterySetItemCountAggregateInputType = {
    id?: true
    mysteryId?: true
    mysterySetId?: true
    orderInSet?: true
    _all?: true
  }

  export type MysterySetItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MysterySetItem to aggregate.
     */
    where?: MysterySetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItems to fetch.
     */
    orderBy?: MysterySetItemOrderByWithRelationInput | MysterySetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MysterySetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MysterySetItems
    **/
    _count?: true | MysterySetItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MysterySetItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MysterySetItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MysterySetItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MysterySetItemMaxAggregateInputType
  }

  export type GetMysterySetItemAggregateType<T extends MysterySetItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMysterySetItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMysterySetItem[P]>
      : GetScalarType<T[P], AggregateMysterySetItem[P]>
  }




  export type MysterySetItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysterySetItemWhereInput
    orderBy?: MysterySetItemOrderByWithAggregationInput | MysterySetItemOrderByWithAggregationInput[]
    by: MysterySetItemScalarFieldEnum[] | MysterySetItemScalarFieldEnum
    having?: MysterySetItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MysterySetItemCountAggregateInputType | true
    _avg?: MysterySetItemAvgAggregateInputType
    _sum?: MysterySetItemSumAggregateInputType
    _min?: MysterySetItemMinAggregateInputType
    _max?: MysterySetItemMaxAggregateInputType
  }

  export type MysterySetItemGroupByOutputType = {
    id: number
    mysteryId: number
    mysterySetId: number
    orderInSet: number
    _count: MysterySetItemCountAggregateOutputType | null
    _avg: MysterySetItemAvgAggregateOutputType | null
    _sum: MysterySetItemSumAggregateOutputType | null
    _min: MysterySetItemMinAggregateOutputType | null
    _max: MysterySetItemMaxAggregateOutputType | null
  }

  type GetMysterySetItemGroupByPayload<T extends MysterySetItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MysterySetItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MysterySetItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MysterySetItemGroupByOutputType[P]>
            : GetScalarType<T[P], MysterySetItemGroupByOutputType[P]>
        }
      >
    >


  export type MysterySetItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mysteryId?: boolean
    mysterySetId?: boolean
    orderInSet?: boolean
    mystery?: boolean | MysteryDefaultArgs<ExtArgs>
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
    prayersAfter?: boolean | MysterySetItem$prayersAfterArgs<ExtArgs>
    _count?: boolean | MysterySetItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mysterySetItem"]>

  export type MysterySetItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mysteryId?: boolean
    mysterySetId?: boolean
    orderInSet?: boolean
    mystery?: boolean | MysteryDefaultArgs<ExtArgs>
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mysterySetItem"]>

  export type MysterySetItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mysteryId?: boolean
    mysterySetId?: boolean
    orderInSet?: boolean
    mystery?: boolean | MysteryDefaultArgs<ExtArgs>
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mysterySetItem"]>

  export type MysterySetItemSelectScalar = {
    id?: boolean
    mysteryId?: boolean
    mysterySetId?: boolean
    orderInSet?: boolean
  }

  export type MysterySetItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mysteryId" | "mysterySetId" | "orderInSet", ExtArgs["result"]["mysterySetItem"]>
  export type MysterySetItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mystery?: boolean | MysteryDefaultArgs<ExtArgs>
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
    prayersAfter?: boolean | MysterySetItem$prayersAfterArgs<ExtArgs>
    _count?: boolean | MysterySetItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MysterySetItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mystery?: boolean | MysteryDefaultArgs<ExtArgs>
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }
  export type MysterySetItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mystery?: boolean | MysteryDefaultArgs<ExtArgs>
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }

  export type $MysterySetItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MysterySetItem"
    objects: {
      mystery: Prisma.$MysteryPayload<ExtArgs>
      mysterySet: Prisma.$MysterySetPayload<ExtArgs>
      prayersAfter: Prisma.$MysterySetItemPrayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mysteryId: number
      mysterySetId: number
      orderInSet: number
    }, ExtArgs["result"]["mysterySetItem"]>
    composites: {}
  }

  type MysterySetItemGetPayload<S extends boolean | null | undefined | MysterySetItemDefaultArgs> = $Result.GetResult<Prisma.$MysterySetItemPayload, S>

  type MysterySetItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MysterySetItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MysterySetItemCountAggregateInputType | true
    }

  export interface MysterySetItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MysterySetItem'], meta: { name: 'MysterySetItem' } }
    /**
     * Find zero or one MysterySetItem that matches the filter.
     * @param {MysterySetItemFindUniqueArgs} args - Arguments to find a MysterySetItem
     * @example
     * // Get one MysterySetItem
     * const mysterySetItem = await prisma.mysterySetItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MysterySetItemFindUniqueArgs>(args: SelectSubset<T, MysterySetItemFindUniqueArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MysterySetItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MysterySetItemFindUniqueOrThrowArgs} args - Arguments to find a MysterySetItem
     * @example
     * // Get one MysterySetItem
     * const mysterySetItem = await prisma.mysterySetItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MysterySetItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MysterySetItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MysterySetItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemFindFirstArgs} args - Arguments to find a MysterySetItem
     * @example
     * // Get one MysterySetItem
     * const mysterySetItem = await prisma.mysterySetItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MysterySetItemFindFirstArgs>(args?: SelectSubset<T, MysterySetItemFindFirstArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MysterySetItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemFindFirstOrThrowArgs} args - Arguments to find a MysterySetItem
     * @example
     * // Get one MysterySetItem
     * const mysterySetItem = await prisma.mysterySetItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MysterySetItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MysterySetItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MysterySetItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MysterySetItems
     * const mysterySetItems = await prisma.mysterySetItem.findMany()
     * 
     * // Get first 10 MysterySetItems
     * const mysterySetItems = await prisma.mysterySetItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mysterySetItemWithIdOnly = await prisma.mysterySetItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MysterySetItemFindManyArgs>(args?: SelectSubset<T, MysterySetItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MysterySetItem.
     * @param {MysterySetItemCreateArgs} args - Arguments to create a MysterySetItem.
     * @example
     * // Create one MysterySetItem
     * const MysterySetItem = await prisma.mysterySetItem.create({
     *   data: {
     *     // ... data to create a MysterySetItem
     *   }
     * })
     * 
     */
    create<T extends MysterySetItemCreateArgs>(args: SelectSubset<T, MysterySetItemCreateArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MysterySetItems.
     * @param {MysterySetItemCreateManyArgs} args - Arguments to create many MysterySetItems.
     * @example
     * // Create many MysterySetItems
     * const mysterySetItem = await prisma.mysterySetItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MysterySetItemCreateManyArgs>(args?: SelectSubset<T, MysterySetItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MysterySetItems and returns the data saved in the database.
     * @param {MysterySetItemCreateManyAndReturnArgs} args - Arguments to create many MysterySetItems.
     * @example
     * // Create many MysterySetItems
     * const mysterySetItem = await prisma.mysterySetItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MysterySetItems and only return the `id`
     * const mysterySetItemWithIdOnly = await prisma.mysterySetItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MysterySetItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MysterySetItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MysterySetItem.
     * @param {MysterySetItemDeleteArgs} args - Arguments to delete one MysterySetItem.
     * @example
     * // Delete one MysterySetItem
     * const MysterySetItem = await prisma.mysterySetItem.delete({
     *   where: {
     *     // ... filter to delete one MysterySetItem
     *   }
     * })
     * 
     */
    delete<T extends MysterySetItemDeleteArgs>(args: SelectSubset<T, MysterySetItemDeleteArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MysterySetItem.
     * @param {MysterySetItemUpdateArgs} args - Arguments to update one MysterySetItem.
     * @example
     * // Update one MysterySetItem
     * const mysterySetItem = await prisma.mysterySetItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MysterySetItemUpdateArgs>(args: SelectSubset<T, MysterySetItemUpdateArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MysterySetItems.
     * @param {MysterySetItemDeleteManyArgs} args - Arguments to filter MysterySetItems to delete.
     * @example
     * // Delete a few MysterySetItems
     * const { count } = await prisma.mysterySetItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MysterySetItemDeleteManyArgs>(args?: SelectSubset<T, MysterySetItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MysterySetItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MysterySetItems
     * const mysterySetItem = await prisma.mysterySetItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MysterySetItemUpdateManyArgs>(args: SelectSubset<T, MysterySetItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MysterySetItems and returns the data updated in the database.
     * @param {MysterySetItemUpdateManyAndReturnArgs} args - Arguments to update many MysterySetItems.
     * @example
     * // Update many MysterySetItems
     * const mysterySetItem = await prisma.mysterySetItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MysterySetItems and only return the `id`
     * const mysterySetItemWithIdOnly = await prisma.mysterySetItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MysterySetItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MysterySetItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MysterySetItem.
     * @param {MysterySetItemUpsertArgs} args - Arguments to update or create a MysterySetItem.
     * @example
     * // Update or create a MysterySetItem
     * const mysterySetItem = await prisma.mysterySetItem.upsert({
     *   create: {
     *     // ... data to create a MysterySetItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MysterySetItem we want to update
     *   }
     * })
     */
    upsert<T extends MysterySetItemUpsertArgs>(args: SelectSubset<T, MysterySetItemUpsertArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MysterySetItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemCountArgs} args - Arguments to filter MysterySetItems to count.
     * @example
     * // Count the number of MysterySetItems
     * const count = await prisma.mysterySetItem.count({
     *   where: {
     *     // ... the filter for the MysterySetItems we want to count
     *   }
     * })
    **/
    count<T extends MysterySetItemCountArgs>(
      args?: Subset<T, MysterySetItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MysterySetItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MysterySetItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MysterySetItemAggregateArgs>(args: Subset<T, MysterySetItemAggregateArgs>): Prisma.PrismaPromise<GetMysterySetItemAggregateType<T>>

    /**
     * Group by MysterySetItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemGroupByArgs} args - Group by arguments.
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
      T extends MysterySetItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MysterySetItemGroupByArgs['orderBy'] }
        : { orderBy?: MysterySetItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MysterySetItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMysterySetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MysterySetItem model
   */
  readonly fields: MysterySetItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MysterySetItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MysterySetItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mystery<T extends MysteryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MysteryDefaultArgs<ExtArgs>>): Prisma__MysteryClient<$Result.GetResult<Prisma.$MysteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mysterySet<T extends MysterySetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MysterySetDefaultArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prayersAfter<T extends MysterySetItem$prayersAfterArgs<ExtArgs> = {}>(args?: Subset<T, MysterySetItem$prayersAfterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MysterySetItem model
   */
  interface MysterySetItemFieldRefs {
    readonly id: FieldRef<"MysterySetItem", 'Int'>
    readonly mysteryId: FieldRef<"MysterySetItem", 'Int'>
    readonly mysterySetId: FieldRef<"MysterySetItem", 'Int'>
    readonly orderInSet: FieldRef<"MysterySetItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MysterySetItem findUnique
   */
  export type MysterySetItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItem to fetch.
     */
    where: MysterySetItemWhereUniqueInput
  }

  /**
   * MysterySetItem findUniqueOrThrow
   */
  export type MysterySetItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItem to fetch.
     */
    where: MysterySetItemWhereUniqueInput
  }

  /**
   * MysterySetItem findFirst
   */
  export type MysterySetItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItem to fetch.
     */
    where?: MysterySetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItems to fetch.
     */
    orderBy?: MysterySetItemOrderByWithRelationInput | MysterySetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MysterySetItems.
     */
    cursor?: MysterySetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MysterySetItems.
     */
    distinct?: MysterySetItemScalarFieldEnum | MysterySetItemScalarFieldEnum[]
  }

  /**
   * MysterySetItem findFirstOrThrow
   */
  export type MysterySetItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItem to fetch.
     */
    where?: MysterySetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItems to fetch.
     */
    orderBy?: MysterySetItemOrderByWithRelationInput | MysterySetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MysterySetItems.
     */
    cursor?: MysterySetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MysterySetItems.
     */
    distinct?: MysterySetItemScalarFieldEnum | MysterySetItemScalarFieldEnum[]
  }

  /**
   * MysterySetItem findMany
   */
  export type MysterySetItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItems to fetch.
     */
    where?: MysterySetItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItems to fetch.
     */
    orderBy?: MysterySetItemOrderByWithRelationInput | MysterySetItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MysterySetItems.
     */
    cursor?: MysterySetItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItems.
     */
    skip?: number
    distinct?: MysterySetItemScalarFieldEnum | MysterySetItemScalarFieldEnum[]
  }

  /**
   * MysterySetItem create
   */
  export type MysterySetItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MysterySetItem.
     */
    data: XOR<MysterySetItemCreateInput, MysterySetItemUncheckedCreateInput>
  }

  /**
   * MysterySetItem createMany
   */
  export type MysterySetItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MysterySetItems.
     */
    data: MysterySetItemCreateManyInput | MysterySetItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MysterySetItem createManyAndReturn
   */
  export type MysterySetItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * The data used to create many MysterySetItems.
     */
    data: MysterySetItemCreateManyInput | MysterySetItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MysterySetItem update
   */
  export type MysterySetItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MysterySetItem.
     */
    data: XOR<MysterySetItemUpdateInput, MysterySetItemUncheckedUpdateInput>
    /**
     * Choose, which MysterySetItem to update.
     */
    where: MysterySetItemWhereUniqueInput
  }

  /**
   * MysterySetItem updateMany
   */
  export type MysterySetItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MysterySetItems.
     */
    data: XOR<MysterySetItemUpdateManyMutationInput, MysterySetItemUncheckedUpdateManyInput>
    /**
     * Filter which MysterySetItems to update
     */
    where?: MysterySetItemWhereInput
    /**
     * Limit how many MysterySetItems to update.
     */
    limit?: number
  }

  /**
   * MysterySetItem updateManyAndReturn
   */
  export type MysterySetItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * The data used to update MysterySetItems.
     */
    data: XOR<MysterySetItemUpdateManyMutationInput, MysterySetItemUncheckedUpdateManyInput>
    /**
     * Filter which MysterySetItems to update
     */
    where?: MysterySetItemWhereInput
    /**
     * Limit how many MysterySetItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MysterySetItem upsert
   */
  export type MysterySetItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MysterySetItem to update in case it exists.
     */
    where: MysterySetItemWhereUniqueInput
    /**
     * In case the MysterySetItem found by the `where` argument doesn't exist, create a new MysterySetItem with this data.
     */
    create: XOR<MysterySetItemCreateInput, MysterySetItemUncheckedCreateInput>
    /**
     * In case the MysterySetItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MysterySetItemUpdateInput, MysterySetItemUncheckedUpdateInput>
  }

  /**
   * MysterySetItem delete
   */
  export type MysterySetItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
    /**
     * Filter which MysterySetItem to delete.
     */
    where: MysterySetItemWhereUniqueInput
  }

  /**
   * MysterySetItem deleteMany
   */
  export type MysterySetItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MysterySetItems to delete
     */
    where?: MysterySetItemWhereInput
    /**
     * Limit how many MysterySetItems to delete.
     */
    limit?: number
  }

  /**
   * MysterySetItem.prayersAfter
   */
  export type MysterySetItem$prayersAfterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    where?: MysterySetItemPrayerWhereInput
    orderBy?: MysterySetItemPrayerOrderByWithRelationInput | MysterySetItemPrayerOrderByWithRelationInput[]
    cursor?: MysterySetItemPrayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MysterySetItemPrayerScalarFieldEnum | MysterySetItemPrayerScalarFieldEnum[]
  }

  /**
   * MysterySetItem without action
   */
  export type MysterySetItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItem
     */
    select?: MysterySetItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItem
     */
    omit?: MysterySetItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemInclude<ExtArgs> | null
  }


  /**
   * Model MysterySetItemPrayer
   */

  export type AggregateMysterySetItemPrayer = {
    _count: MysterySetItemPrayerCountAggregateOutputType | null
    _avg: MysterySetItemPrayerAvgAggregateOutputType | null
    _sum: MysterySetItemPrayerSumAggregateOutputType | null
    _min: MysterySetItemPrayerMinAggregateOutputType | null
    _max: MysterySetItemPrayerMaxAggregateOutputType | null
  }

  export type MysterySetItemPrayerAvgAggregateOutputType = {
    id: number | null
    orderInSequence: number | null
    prayerId: number | null
    mysterySetItemId: number | null
  }

  export type MysterySetItemPrayerSumAggregateOutputType = {
    id: number | null
    orderInSequence: number | null
    prayerId: number | null
    mysterySetItemId: number | null
  }

  export type MysterySetItemPrayerMinAggregateOutputType = {
    id: number | null
    orderInSequence: number | null
    prayerId: number | null
    mysterySetItemId: number | null
  }

  export type MysterySetItemPrayerMaxAggregateOutputType = {
    id: number | null
    orderInSequence: number | null
    prayerId: number | null
    mysterySetItemId: number | null
  }

  export type MysterySetItemPrayerCountAggregateOutputType = {
    id: number
    orderInSequence: number
    prayerId: number
    mysterySetItemId: number
    _all: number
  }


  export type MysterySetItemPrayerAvgAggregateInputType = {
    id?: true
    orderInSequence?: true
    prayerId?: true
    mysterySetItemId?: true
  }

  export type MysterySetItemPrayerSumAggregateInputType = {
    id?: true
    orderInSequence?: true
    prayerId?: true
    mysterySetItemId?: true
  }

  export type MysterySetItemPrayerMinAggregateInputType = {
    id?: true
    orderInSequence?: true
    prayerId?: true
    mysterySetItemId?: true
  }

  export type MysterySetItemPrayerMaxAggregateInputType = {
    id?: true
    orderInSequence?: true
    prayerId?: true
    mysterySetItemId?: true
  }

  export type MysterySetItemPrayerCountAggregateInputType = {
    id?: true
    orderInSequence?: true
    prayerId?: true
    mysterySetItemId?: true
    _all?: true
  }

  export type MysterySetItemPrayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MysterySetItemPrayer to aggregate.
     */
    where?: MysterySetItemPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItemPrayers to fetch.
     */
    orderBy?: MysterySetItemPrayerOrderByWithRelationInput | MysterySetItemPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MysterySetItemPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItemPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItemPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MysterySetItemPrayers
    **/
    _count?: true | MysterySetItemPrayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MysterySetItemPrayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MysterySetItemPrayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MysterySetItemPrayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MysterySetItemPrayerMaxAggregateInputType
  }

  export type GetMysterySetItemPrayerAggregateType<T extends MysterySetItemPrayerAggregateArgs> = {
        [P in keyof T & keyof AggregateMysterySetItemPrayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMysterySetItemPrayer[P]>
      : GetScalarType<T[P], AggregateMysterySetItemPrayer[P]>
  }




  export type MysterySetItemPrayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MysterySetItemPrayerWhereInput
    orderBy?: MysterySetItemPrayerOrderByWithAggregationInput | MysterySetItemPrayerOrderByWithAggregationInput[]
    by: MysterySetItemPrayerScalarFieldEnum[] | MysterySetItemPrayerScalarFieldEnum
    having?: MysterySetItemPrayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MysterySetItemPrayerCountAggregateInputType | true
    _avg?: MysterySetItemPrayerAvgAggregateInputType
    _sum?: MysterySetItemPrayerSumAggregateInputType
    _min?: MysterySetItemPrayerMinAggregateInputType
    _max?: MysterySetItemPrayerMaxAggregateInputType
  }

  export type MysterySetItemPrayerGroupByOutputType = {
    id: number
    orderInSequence: number
    prayerId: number
    mysterySetItemId: number
    _count: MysterySetItemPrayerCountAggregateOutputType | null
    _avg: MysterySetItemPrayerAvgAggregateOutputType | null
    _sum: MysterySetItemPrayerSumAggregateOutputType | null
    _min: MysterySetItemPrayerMinAggregateOutputType | null
    _max: MysterySetItemPrayerMaxAggregateOutputType | null
  }

  type GetMysterySetItemPrayerGroupByPayload<T extends MysterySetItemPrayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MysterySetItemPrayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MysterySetItemPrayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MysterySetItemPrayerGroupByOutputType[P]>
            : GetScalarType<T[P], MysterySetItemPrayerGroupByOutputType[P]>
        }
      >
    >


  export type MysterySetItemPrayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderInSequence?: boolean
    prayerId?: boolean
    mysterySetItemId?: boolean
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    mysterySetItem?: boolean | MysterySetItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mysterySetItemPrayer"]>

  export type MysterySetItemPrayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderInSequence?: boolean
    prayerId?: boolean
    mysterySetItemId?: boolean
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    mysterySetItem?: boolean | MysterySetItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mysterySetItemPrayer"]>

  export type MysterySetItemPrayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderInSequence?: boolean
    prayerId?: boolean
    mysterySetItemId?: boolean
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    mysterySetItem?: boolean | MysterySetItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mysterySetItemPrayer"]>

  export type MysterySetItemPrayerSelectScalar = {
    id?: boolean
    orderInSequence?: boolean
    prayerId?: boolean
    mysterySetItemId?: boolean
  }

  export type MysterySetItemPrayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderInSequence" | "prayerId" | "mysterySetItemId", ExtArgs["result"]["mysterySetItemPrayer"]>
  export type MysterySetItemPrayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    mysterySetItem?: boolean | MysterySetItemDefaultArgs<ExtArgs>
  }
  export type MysterySetItemPrayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    mysterySetItem?: boolean | MysterySetItemDefaultArgs<ExtArgs>
  }
  export type MysterySetItemPrayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
    mysterySetItem?: boolean | MysterySetItemDefaultArgs<ExtArgs>
  }

  export type $MysterySetItemPrayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MysterySetItemPrayer"
    objects: {
      prayer: Prisma.$PrayerPayload<ExtArgs>
      mysterySetItem: Prisma.$MysterySetItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderInSequence: number
      prayerId: number
      mysterySetItemId: number
    }, ExtArgs["result"]["mysterySetItemPrayer"]>
    composites: {}
  }

  type MysterySetItemPrayerGetPayload<S extends boolean | null | undefined | MysterySetItemPrayerDefaultArgs> = $Result.GetResult<Prisma.$MysterySetItemPrayerPayload, S>

  type MysterySetItemPrayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MysterySetItemPrayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MysterySetItemPrayerCountAggregateInputType | true
    }

  export interface MysterySetItemPrayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MysterySetItemPrayer'], meta: { name: 'MysterySetItemPrayer' } }
    /**
     * Find zero or one MysterySetItemPrayer that matches the filter.
     * @param {MysterySetItemPrayerFindUniqueArgs} args - Arguments to find a MysterySetItemPrayer
     * @example
     * // Get one MysterySetItemPrayer
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MysterySetItemPrayerFindUniqueArgs>(args: SelectSubset<T, MysterySetItemPrayerFindUniqueArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MysterySetItemPrayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MysterySetItemPrayerFindUniqueOrThrowArgs} args - Arguments to find a MysterySetItemPrayer
     * @example
     * // Get one MysterySetItemPrayer
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MysterySetItemPrayerFindUniqueOrThrowArgs>(args: SelectSubset<T, MysterySetItemPrayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MysterySetItemPrayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemPrayerFindFirstArgs} args - Arguments to find a MysterySetItemPrayer
     * @example
     * // Get one MysterySetItemPrayer
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MysterySetItemPrayerFindFirstArgs>(args?: SelectSubset<T, MysterySetItemPrayerFindFirstArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MysterySetItemPrayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemPrayerFindFirstOrThrowArgs} args - Arguments to find a MysterySetItemPrayer
     * @example
     * // Get one MysterySetItemPrayer
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MysterySetItemPrayerFindFirstOrThrowArgs>(args?: SelectSubset<T, MysterySetItemPrayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MysterySetItemPrayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemPrayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MysterySetItemPrayers
     * const mysterySetItemPrayers = await prisma.mysterySetItemPrayer.findMany()
     * 
     * // Get first 10 MysterySetItemPrayers
     * const mysterySetItemPrayers = await prisma.mysterySetItemPrayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mysterySetItemPrayerWithIdOnly = await prisma.mysterySetItemPrayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MysterySetItemPrayerFindManyArgs>(args?: SelectSubset<T, MysterySetItemPrayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MysterySetItemPrayer.
     * @param {MysterySetItemPrayerCreateArgs} args - Arguments to create a MysterySetItemPrayer.
     * @example
     * // Create one MysterySetItemPrayer
     * const MysterySetItemPrayer = await prisma.mysterySetItemPrayer.create({
     *   data: {
     *     // ... data to create a MysterySetItemPrayer
     *   }
     * })
     * 
     */
    create<T extends MysterySetItemPrayerCreateArgs>(args: SelectSubset<T, MysterySetItemPrayerCreateArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MysterySetItemPrayers.
     * @param {MysterySetItemPrayerCreateManyArgs} args - Arguments to create many MysterySetItemPrayers.
     * @example
     * // Create many MysterySetItemPrayers
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MysterySetItemPrayerCreateManyArgs>(args?: SelectSubset<T, MysterySetItemPrayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MysterySetItemPrayers and returns the data saved in the database.
     * @param {MysterySetItemPrayerCreateManyAndReturnArgs} args - Arguments to create many MysterySetItemPrayers.
     * @example
     * // Create many MysterySetItemPrayers
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MysterySetItemPrayers and only return the `id`
     * const mysterySetItemPrayerWithIdOnly = await prisma.mysterySetItemPrayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MysterySetItemPrayerCreateManyAndReturnArgs>(args?: SelectSubset<T, MysterySetItemPrayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MysterySetItemPrayer.
     * @param {MysterySetItemPrayerDeleteArgs} args - Arguments to delete one MysterySetItemPrayer.
     * @example
     * // Delete one MysterySetItemPrayer
     * const MysterySetItemPrayer = await prisma.mysterySetItemPrayer.delete({
     *   where: {
     *     // ... filter to delete one MysterySetItemPrayer
     *   }
     * })
     * 
     */
    delete<T extends MysterySetItemPrayerDeleteArgs>(args: SelectSubset<T, MysterySetItemPrayerDeleteArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MysterySetItemPrayer.
     * @param {MysterySetItemPrayerUpdateArgs} args - Arguments to update one MysterySetItemPrayer.
     * @example
     * // Update one MysterySetItemPrayer
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MysterySetItemPrayerUpdateArgs>(args: SelectSubset<T, MysterySetItemPrayerUpdateArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MysterySetItemPrayers.
     * @param {MysterySetItemPrayerDeleteManyArgs} args - Arguments to filter MysterySetItemPrayers to delete.
     * @example
     * // Delete a few MysterySetItemPrayers
     * const { count } = await prisma.mysterySetItemPrayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MysterySetItemPrayerDeleteManyArgs>(args?: SelectSubset<T, MysterySetItemPrayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MysterySetItemPrayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemPrayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MysterySetItemPrayers
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MysterySetItemPrayerUpdateManyArgs>(args: SelectSubset<T, MysterySetItemPrayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MysterySetItemPrayers and returns the data updated in the database.
     * @param {MysterySetItemPrayerUpdateManyAndReturnArgs} args - Arguments to update many MysterySetItemPrayers.
     * @example
     * // Update many MysterySetItemPrayers
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MysterySetItemPrayers and only return the `id`
     * const mysterySetItemPrayerWithIdOnly = await prisma.mysterySetItemPrayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends MysterySetItemPrayerUpdateManyAndReturnArgs>(args: SelectSubset<T, MysterySetItemPrayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MysterySetItemPrayer.
     * @param {MysterySetItemPrayerUpsertArgs} args - Arguments to update or create a MysterySetItemPrayer.
     * @example
     * // Update or create a MysterySetItemPrayer
     * const mysterySetItemPrayer = await prisma.mysterySetItemPrayer.upsert({
     *   create: {
     *     // ... data to create a MysterySetItemPrayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MysterySetItemPrayer we want to update
     *   }
     * })
     */
    upsert<T extends MysterySetItemPrayerUpsertArgs>(args: SelectSubset<T, MysterySetItemPrayerUpsertArgs<ExtArgs>>): Prisma__MysterySetItemPrayerClient<$Result.GetResult<Prisma.$MysterySetItemPrayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MysterySetItemPrayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemPrayerCountArgs} args - Arguments to filter MysterySetItemPrayers to count.
     * @example
     * // Count the number of MysterySetItemPrayers
     * const count = await prisma.mysterySetItemPrayer.count({
     *   where: {
     *     // ... the filter for the MysterySetItemPrayers we want to count
     *   }
     * })
    **/
    count<T extends MysterySetItemPrayerCountArgs>(
      args?: Subset<T, MysterySetItemPrayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MysterySetItemPrayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MysterySetItemPrayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemPrayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MysterySetItemPrayerAggregateArgs>(args: Subset<T, MysterySetItemPrayerAggregateArgs>): Prisma.PrismaPromise<GetMysterySetItemPrayerAggregateType<T>>

    /**
     * Group by MysterySetItemPrayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MysterySetItemPrayerGroupByArgs} args - Group by arguments.
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
      T extends MysterySetItemPrayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MysterySetItemPrayerGroupByArgs['orderBy'] }
        : { orderBy?: MysterySetItemPrayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MysterySetItemPrayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMysterySetItemPrayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MysterySetItemPrayer model
   */
  readonly fields: MysterySetItemPrayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MysterySetItemPrayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MysterySetItemPrayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prayer<T extends PrayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrayerDefaultArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mysterySetItem<T extends MysterySetItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MysterySetItemDefaultArgs<ExtArgs>>): Prisma__MysterySetItemClient<$Result.GetResult<Prisma.$MysterySetItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MysterySetItemPrayer model
   */
  interface MysterySetItemPrayerFieldRefs {
    readonly id: FieldRef<"MysterySetItemPrayer", 'Int'>
    readonly orderInSequence: FieldRef<"MysterySetItemPrayer", 'Int'>
    readonly prayerId: FieldRef<"MysterySetItemPrayer", 'Int'>
    readonly mysterySetItemId: FieldRef<"MysterySetItemPrayer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MysterySetItemPrayer findUnique
   */
  export type MysterySetItemPrayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItemPrayer to fetch.
     */
    where: MysterySetItemPrayerWhereUniqueInput
  }

  /**
   * MysterySetItemPrayer findUniqueOrThrow
   */
  export type MysterySetItemPrayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItemPrayer to fetch.
     */
    where: MysterySetItemPrayerWhereUniqueInput
  }

  /**
   * MysterySetItemPrayer findFirst
   */
  export type MysterySetItemPrayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItemPrayer to fetch.
     */
    where?: MysterySetItemPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItemPrayers to fetch.
     */
    orderBy?: MysterySetItemPrayerOrderByWithRelationInput | MysterySetItemPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MysterySetItemPrayers.
     */
    cursor?: MysterySetItemPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItemPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItemPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MysterySetItemPrayers.
     */
    distinct?: MysterySetItemPrayerScalarFieldEnum | MysterySetItemPrayerScalarFieldEnum[]
  }

  /**
   * MysterySetItemPrayer findFirstOrThrow
   */
  export type MysterySetItemPrayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItemPrayer to fetch.
     */
    where?: MysterySetItemPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItemPrayers to fetch.
     */
    orderBy?: MysterySetItemPrayerOrderByWithRelationInput | MysterySetItemPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MysterySetItemPrayers.
     */
    cursor?: MysterySetItemPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItemPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItemPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MysterySetItemPrayers.
     */
    distinct?: MysterySetItemPrayerScalarFieldEnum | MysterySetItemPrayerScalarFieldEnum[]
  }

  /**
   * MysterySetItemPrayer findMany
   */
  export type MysterySetItemPrayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * Filter, which MysterySetItemPrayers to fetch.
     */
    where?: MysterySetItemPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MysterySetItemPrayers to fetch.
     */
    orderBy?: MysterySetItemPrayerOrderByWithRelationInput | MysterySetItemPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MysterySetItemPrayers.
     */
    cursor?: MysterySetItemPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MysterySetItemPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MysterySetItemPrayers.
     */
    skip?: number
    distinct?: MysterySetItemPrayerScalarFieldEnum | MysterySetItemPrayerScalarFieldEnum[]
  }

  /**
   * MysterySetItemPrayer create
   */
  export type MysterySetItemPrayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * The data needed to create a MysterySetItemPrayer.
     */
    data: XOR<MysterySetItemPrayerCreateInput, MysterySetItemPrayerUncheckedCreateInput>
  }

  /**
   * MysterySetItemPrayer createMany
   */
  export type MysterySetItemPrayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MysterySetItemPrayers.
     */
    data: MysterySetItemPrayerCreateManyInput | MysterySetItemPrayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MysterySetItemPrayer createManyAndReturn
   */
  export type MysterySetItemPrayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * The data used to create many MysterySetItemPrayers.
     */
    data: MysterySetItemPrayerCreateManyInput | MysterySetItemPrayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MysterySetItemPrayer update
   */
  export type MysterySetItemPrayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * The data needed to update a MysterySetItemPrayer.
     */
    data: XOR<MysterySetItemPrayerUpdateInput, MysterySetItemPrayerUncheckedUpdateInput>
    /**
     * Choose, which MysterySetItemPrayer to update.
     */
    where: MysterySetItemPrayerWhereUniqueInput
  }

  /**
   * MysterySetItemPrayer updateMany
   */
  export type MysterySetItemPrayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MysterySetItemPrayers.
     */
    data: XOR<MysterySetItemPrayerUpdateManyMutationInput, MysterySetItemPrayerUncheckedUpdateManyInput>
    /**
     * Filter which MysterySetItemPrayers to update
     */
    where?: MysterySetItemPrayerWhereInput
    /**
     * Limit how many MysterySetItemPrayers to update.
     */
    limit?: number
  }

  /**
   * MysterySetItemPrayer updateManyAndReturn
   */
  export type MysterySetItemPrayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * The data used to update MysterySetItemPrayers.
     */
    data: XOR<MysterySetItemPrayerUpdateManyMutationInput, MysterySetItemPrayerUncheckedUpdateManyInput>
    /**
     * Filter which MysterySetItemPrayers to update
     */
    where?: MysterySetItemPrayerWhereInput
    /**
     * Limit how many MysterySetItemPrayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MysterySetItemPrayer upsert
   */
  export type MysterySetItemPrayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * The filter to search for the MysterySetItemPrayer to update in case it exists.
     */
    where: MysterySetItemPrayerWhereUniqueInput
    /**
     * In case the MysterySetItemPrayer found by the `where` argument doesn't exist, create a new MysterySetItemPrayer with this data.
     */
    create: XOR<MysterySetItemPrayerCreateInput, MysterySetItemPrayerUncheckedCreateInput>
    /**
     * In case the MysterySetItemPrayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MysterySetItemPrayerUpdateInput, MysterySetItemPrayerUncheckedUpdateInput>
  }

  /**
   * MysterySetItemPrayer delete
   */
  export type MysterySetItemPrayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
    /**
     * Filter which MysterySetItemPrayer to delete.
     */
    where: MysterySetItemPrayerWhereUniqueInput
  }

  /**
   * MysterySetItemPrayer deleteMany
   */
  export type MysterySetItemPrayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MysterySetItemPrayers to delete
     */
    where?: MysterySetItemPrayerWhereInput
    /**
     * Limit how many MysterySetItemPrayers to delete.
     */
    limit?: number
  }

  /**
   * MysterySetItemPrayer without action
   */
  export type MysterySetItemPrayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MysterySetItemPrayer
     */
    select?: MysterySetItemPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MysterySetItemPrayer
     */
    omit?: MysterySetItemPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MysterySetItemPrayerInclude<ExtArgs> | null
  }


  /**
   * Model Rosary
   */

  export type AggregateRosary = {
    _count: RosaryCountAggregateOutputType | null
    _avg: RosaryAvgAggregateOutputType | null
    _sum: RosarySumAggregateOutputType | null
    _min: RosaryMinAggregateOutputType | null
    _max: RosaryMaxAggregateOutputType | null
  }

  export type RosaryAvgAggregateOutputType = {
    id: number | null
    mysterySetId: number | null
  }

  export type RosarySumAggregateOutputType = {
    id: number | null
    mysterySetId: number | null
  }

  export type RosaryMinAggregateOutputType = {
    id: number | null
    day: string | null
    mysterySetId: number | null
  }

  export type RosaryMaxAggregateOutputType = {
    id: number | null
    day: string | null
    mysterySetId: number | null
  }

  export type RosaryCountAggregateOutputType = {
    id: number
    day: number
    mysterySetId: number
    _all: number
  }


  export type RosaryAvgAggregateInputType = {
    id?: true
    mysterySetId?: true
  }

  export type RosarySumAggregateInputType = {
    id?: true
    mysterySetId?: true
  }

  export type RosaryMinAggregateInputType = {
    id?: true
    day?: true
    mysterySetId?: true
  }

  export type RosaryMaxAggregateInputType = {
    id?: true
    day?: true
    mysterySetId?: true
  }

  export type RosaryCountAggregateInputType = {
    id?: true
    day?: true
    mysterySetId?: true
    _all?: true
  }

  export type RosaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rosary to aggregate.
     */
    where?: RosaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rosaries to fetch.
     */
    orderBy?: RosaryOrderByWithRelationInput | RosaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RosaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rosaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rosaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rosaries
    **/
    _count?: true | RosaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RosaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RosarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RosaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RosaryMaxAggregateInputType
  }

  export type GetRosaryAggregateType<T extends RosaryAggregateArgs> = {
        [P in keyof T & keyof AggregateRosary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRosary[P]>
      : GetScalarType<T[P], AggregateRosary[P]>
  }




  export type RosaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryWhereInput
    orderBy?: RosaryOrderByWithAggregationInput | RosaryOrderByWithAggregationInput[]
    by: RosaryScalarFieldEnum[] | RosaryScalarFieldEnum
    having?: RosaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RosaryCountAggregateInputType | true
    _avg?: RosaryAvgAggregateInputType
    _sum?: RosarySumAggregateInputType
    _min?: RosaryMinAggregateInputType
    _max?: RosaryMaxAggregateInputType
  }

  export type RosaryGroupByOutputType = {
    id: number
    day: string
    mysterySetId: number
    _count: RosaryCountAggregateOutputType | null
    _avg: RosaryAvgAggregateOutputType | null
    _sum: RosarySumAggregateOutputType | null
    _min: RosaryMinAggregateOutputType | null
    _max: RosaryMaxAggregateOutputType | null
  }

  type GetRosaryGroupByPayload<T extends RosaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RosaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RosaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RosaryGroupByOutputType[P]>
            : GetScalarType<T[P], RosaryGroupByOutputType[P]>
        }
      >
    >


  export type RosarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    mysterySetId?: boolean
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
    openingPrayers?: boolean | Rosary$openingPrayersArgs<ExtArgs>
    closingPrayers?: boolean | Rosary$closingPrayersArgs<ExtArgs>
    _count?: boolean | RosaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosary"]>

  export type RosarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    mysterySetId?: boolean
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosary"]>

  export type RosarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    mysterySetId?: boolean
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosary"]>

  export type RosarySelectScalar = {
    id?: boolean
    day?: boolean
    mysterySetId?: boolean
  }

  export type RosaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "mysterySetId", ExtArgs["result"]["rosary"]>
  export type RosaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
    openingPrayers?: boolean | Rosary$openingPrayersArgs<ExtArgs>
    closingPrayers?: boolean | Rosary$closingPrayersArgs<ExtArgs>
    _count?: boolean | RosaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RosaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }
  export type RosaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mysterySet?: boolean | MysterySetDefaultArgs<ExtArgs>
  }

  export type $RosaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rosary"
    objects: {
      mysterySet: Prisma.$MysterySetPayload<ExtArgs>
      openingPrayers: Prisma.$RosaryOpeningPrayerPayload<ExtArgs>[]
      closingPrayers: Prisma.$RosaryClosingPrayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      day: string
      mysterySetId: number
    }, ExtArgs["result"]["rosary"]>
    composites: {}
  }

  type RosaryGetPayload<S extends boolean | null | undefined | RosaryDefaultArgs> = $Result.GetResult<Prisma.$RosaryPayload, S>

  type RosaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RosaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RosaryCountAggregateInputType | true
    }

  export interface RosaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rosary'], meta: { name: 'Rosary' } }
    /**
     * Find zero or one Rosary that matches the filter.
     * @param {RosaryFindUniqueArgs} args - Arguments to find a Rosary
     * @example
     * // Get one Rosary
     * const rosary = await prisma.rosary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RosaryFindUniqueArgs>(args: SelectSubset<T, RosaryFindUniqueArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rosary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RosaryFindUniqueOrThrowArgs} args - Arguments to find a Rosary
     * @example
     * // Get one Rosary
     * const rosary = await prisma.rosary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RosaryFindUniqueOrThrowArgs>(args: SelectSubset<T, RosaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rosary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryFindFirstArgs} args - Arguments to find a Rosary
     * @example
     * // Get one Rosary
     * const rosary = await prisma.rosary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RosaryFindFirstArgs>(args?: SelectSubset<T, RosaryFindFirstArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rosary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryFindFirstOrThrowArgs} args - Arguments to find a Rosary
     * @example
     * // Get one Rosary
     * const rosary = await prisma.rosary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RosaryFindFirstOrThrowArgs>(args?: SelectSubset<T, RosaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rosaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rosaries
     * const rosaries = await prisma.rosary.findMany()
     * 
     * // Get first 10 Rosaries
     * const rosaries = await prisma.rosary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rosaryWithIdOnly = await prisma.rosary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RosaryFindManyArgs>(args?: SelectSubset<T, RosaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rosary.
     * @param {RosaryCreateArgs} args - Arguments to create a Rosary.
     * @example
     * // Create one Rosary
     * const Rosary = await prisma.rosary.create({
     *   data: {
     *     // ... data to create a Rosary
     *   }
     * })
     * 
     */
    create<T extends RosaryCreateArgs>(args: SelectSubset<T, RosaryCreateArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rosaries.
     * @param {RosaryCreateManyArgs} args - Arguments to create many Rosaries.
     * @example
     * // Create many Rosaries
     * const rosary = await prisma.rosary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RosaryCreateManyArgs>(args?: SelectSubset<T, RosaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rosaries and returns the data saved in the database.
     * @param {RosaryCreateManyAndReturnArgs} args - Arguments to create many Rosaries.
     * @example
     * // Create many Rosaries
     * const rosary = await prisma.rosary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rosaries and only return the `id`
     * const rosaryWithIdOnly = await prisma.rosary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RosaryCreateManyAndReturnArgs>(args?: SelectSubset<T, RosaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rosary.
     * @param {RosaryDeleteArgs} args - Arguments to delete one Rosary.
     * @example
     * // Delete one Rosary
     * const Rosary = await prisma.rosary.delete({
     *   where: {
     *     // ... filter to delete one Rosary
     *   }
     * })
     * 
     */
    delete<T extends RosaryDeleteArgs>(args: SelectSubset<T, RosaryDeleteArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rosary.
     * @param {RosaryUpdateArgs} args - Arguments to update one Rosary.
     * @example
     * // Update one Rosary
     * const rosary = await prisma.rosary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RosaryUpdateArgs>(args: SelectSubset<T, RosaryUpdateArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rosaries.
     * @param {RosaryDeleteManyArgs} args - Arguments to filter Rosaries to delete.
     * @example
     * // Delete a few Rosaries
     * const { count } = await prisma.rosary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RosaryDeleteManyArgs>(args?: SelectSubset<T, RosaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rosaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rosaries
     * const rosary = await prisma.rosary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RosaryUpdateManyArgs>(args: SelectSubset<T, RosaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rosaries and returns the data updated in the database.
     * @param {RosaryUpdateManyAndReturnArgs} args - Arguments to update many Rosaries.
     * @example
     * // Update many Rosaries
     * const rosary = await prisma.rosary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rosaries and only return the `id`
     * const rosaryWithIdOnly = await prisma.rosary.updateManyAndReturn({
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
    updateManyAndReturn<T extends RosaryUpdateManyAndReturnArgs>(args: SelectSubset<T, RosaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rosary.
     * @param {RosaryUpsertArgs} args - Arguments to update or create a Rosary.
     * @example
     * // Update or create a Rosary
     * const rosary = await prisma.rosary.upsert({
     *   create: {
     *     // ... data to create a Rosary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rosary we want to update
     *   }
     * })
     */
    upsert<T extends RosaryUpsertArgs>(args: SelectSubset<T, RosaryUpsertArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rosaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryCountArgs} args - Arguments to filter Rosaries to count.
     * @example
     * // Count the number of Rosaries
     * const count = await prisma.rosary.count({
     *   where: {
     *     // ... the filter for the Rosaries we want to count
     *   }
     * })
    **/
    count<T extends RosaryCountArgs>(
      args?: Subset<T, RosaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RosaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rosary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RosaryAggregateArgs>(args: Subset<T, RosaryAggregateArgs>): Prisma.PrismaPromise<GetRosaryAggregateType<T>>

    /**
     * Group by Rosary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryGroupByArgs} args - Group by arguments.
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
      T extends RosaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RosaryGroupByArgs['orderBy'] }
        : { orderBy?: RosaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RosaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRosaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rosary model
   */
  readonly fields: RosaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rosary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RosaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mysterySet<T extends MysterySetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MysterySetDefaultArgs<ExtArgs>>): Prisma__MysterySetClient<$Result.GetResult<Prisma.$MysterySetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    openingPrayers<T extends Rosary$openingPrayersArgs<ExtArgs> = {}>(args?: Subset<T, Rosary$openingPrayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    closingPrayers<T extends Rosary$closingPrayersArgs<ExtArgs> = {}>(args?: Subset<T, Rosary$closingPrayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rosary model
   */
  interface RosaryFieldRefs {
    readonly id: FieldRef<"Rosary", 'Int'>
    readonly day: FieldRef<"Rosary", 'String'>
    readonly mysterySetId: FieldRef<"Rosary", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rosary findUnique
   */
  export type RosaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * Filter, which Rosary to fetch.
     */
    where: RosaryWhereUniqueInput
  }

  /**
   * Rosary findUniqueOrThrow
   */
  export type RosaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * Filter, which Rosary to fetch.
     */
    where: RosaryWhereUniqueInput
  }

  /**
   * Rosary findFirst
   */
  export type RosaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * Filter, which Rosary to fetch.
     */
    where?: RosaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rosaries to fetch.
     */
    orderBy?: RosaryOrderByWithRelationInput | RosaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rosaries.
     */
    cursor?: RosaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rosaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rosaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rosaries.
     */
    distinct?: RosaryScalarFieldEnum | RosaryScalarFieldEnum[]
  }

  /**
   * Rosary findFirstOrThrow
   */
  export type RosaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * Filter, which Rosary to fetch.
     */
    where?: RosaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rosaries to fetch.
     */
    orderBy?: RosaryOrderByWithRelationInput | RosaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rosaries.
     */
    cursor?: RosaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rosaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rosaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rosaries.
     */
    distinct?: RosaryScalarFieldEnum | RosaryScalarFieldEnum[]
  }

  /**
   * Rosary findMany
   */
  export type RosaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * Filter, which Rosaries to fetch.
     */
    where?: RosaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rosaries to fetch.
     */
    orderBy?: RosaryOrderByWithRelationInput | RosaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rosaries.
     */
    cursor?: RosaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rosaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rosaries.
     */
    skip?: number
    distinct?: RosaryScalarFieldEnum | RosaryScalarFieldEnum[]
  }

  /**
   * Rosary create
   */
  export type RosaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Rosary.
     */
    data: XOR<RosaryCreateInput, RosaryUncheckedCreateInput>
  }

  /**
   * Rosary createMany
   */
  export type RosaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rosaries.
     */
    data: RosaryCreateManyInput | RosaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rosary createManyAndReturn
   */
  export type RosaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * The data used to create many Rosaries.
     */
    data: RosaryCreateManyInput | RosaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rosary update
   */
  export type RosaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Rosary.
     */
    data: XOR<RosaryUpdateInput, RosaryUncheckedUpdateInput>
    /**
     * Choose, which Rosary to update.
     */
    where: RosaryWhereUniqueInput
  }

  /**
   * Rosary updateMany
   */
  export type RosaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rosaries.
     */
    data: XOR<RosaryUpdateManyMutationInput, RosaryUncheckedUpdateManyInput>
    /**
     * Filter which Rosaries to update
     */
    where?: RosaryWhereInput
    /**
     * Limit how many Rosaries to update.
     */
    limit?: number
  }

  /**
   * Rosary updateManyAndReturn
   */
  export type RosaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * The data used to update Rosaries.
     */
    data: XOR<RosaryUpdateManyMutationInput, RosaryUncheckedUpdateManyInput>
    /**
     * Filter which Rosaries to update
     */
    where?: RosaryWhereInput
    /**
     * Limit how many Rosaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rosary upsert
   */
  export type RosaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Rosary to update in case it exists.
     */
    where: RosaryWhereUniqueInput
    /**
     * In case the Rosary found by the `where` argument doesn't exist, create a new Rosary with this data.
     */
    create: XOR<RosaryCreateInput, RosaryUncheckedCreateInput>
    /**
     * In case the Rosary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RosaryUpdateInput, RosaryUncheckedUpdateInput>
  }

  /**
   * Rosary delete
   */
  export type RosaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
    /**
     * Filter which Rosary to delete.
     */
    where: RosaryWhereUniqueInput
  }

  /**
   * Rosary deleteMany
   */
  export type RosaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rosaries to delete
     */
    where?: RosaryWhereInput
    /**
     * Limit how many Rosaries to delete.
     */
    limit?: number
  }

  /**
   * Rosary.openingPrayers
   */
  export type Rosary$openingPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    where?: RosaryOpeningPrayerWhereInput
    orderBy?: RosaryOpeningPrayerOrderByWithRelationInput | RosaryOpeningPrayerOrderByWithRelationInput[]
    cursor?: RosaryOpeningPrayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RosaryOpeningPrayerScalarFieldEnum | RosaryOpeningPrayerScalarFieldEnum[]
  }

  /**
   * Rosary.closingPrayers
   */
  export type Rosary$closingPrayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    where?: RosaryClosingPrayerWhereInput
    orderBy?: RosaryClosingPrayerOrderByWithRelationInput | RosaryClosingPrayerOrderByWithRelationInput[]
    cursor?: RosaryClosingPrayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RosaryClosingPrayerScalarFieldEnum | RosaryClosingPrayerScalarFieldEnum[]
  }

  /**
   * Rosary without action
   */
  export type RosaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rosary
     */
    select?: RosarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rosary
     */
    omit?: RosaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryInclude<ExtArgs> | null
  }


  /**
   * Model RosaryOpeningPrayer
   */

  export type AggregateRosaryOpeningPrayer = {
    _count: RosaryOpeningPrayerCountAggregateOutputType | null
    _avg: RosaryOpeningPrayerAvgAggregateOutputType | null
    _sum: RosaryOpeningPrayerSumAggregateOutputType | null
    _min: RosaryOpeningPrayerMinAggregateOutputType | null
    _max: RosaryOpeningPrayerMaxAggregateOutputType | null
  }

  export type RosaryOpeningPrayerAvgAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryOpeningPrayerSumAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryOpeningPrayerMinAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryOpeningPrayerMaxAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryOpeningPrayerCountAggregateOutputType = {
    id: number
    rosaryId: number
    prayerId: number
    orderInSet: number
    _all: number
  }


  export type RosaryOpeningPrayerAvgAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryOpeningPrayerSumAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryOpeningPrayerMinAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryOpeningPrayerMaxAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryOpeningPrayerCountAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
    _all?: true
  }

  export type RosaryOpeningPrayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RosaryOpeningPrayer to aggregate.
     */
    where?: RosaryOpeningPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryOpeningPrayers to fetch.
     */
    orderBy?: RosaryOpeningPrayerOrderByWithRelationInput | RosaryOpeningPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RosaryOpeningPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryOpeningPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryOpeningPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RosaryOpeningPrayers
    **/
    _count?: true | RosaryOpeningPrayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RosaryOpeningPrayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RosaryOpeningPrayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RosaryOpeningPrayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RosaryOpeningPrayerMaxAggregateInputType
  }

  export type GetRosaryOpeningPrayerAggregateType<T extends RosaryOpeningPrayerAggregateArgs> = {
        [P in keyof T & keyof AggregateRosaryOpeningPrayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRosaryOpeningPrayer[P]>
      : GetScalarType<T[P], AggregateRosaryOpeningPrayer[P]>
  }




  export type RosaryOpeningPrayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryOpeningPrayerWhereInput
    orderBy?: RosaryOpeningPrayerOrderByWithAggregationInput | RosaryOpeningPrayerOrderByWithAggregationInput[]
    by: RosaryOpeningPrayerScalarFieldEnum[] | RosaryOpeningPrayerScalarFieldEnum
    having?: RosaryOpeningPrayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RosaryOpeningPrayerCountAggregateInputType | true
    _avg?: RosaryOpeningPrayerAvgAggregateInputType
    _sum?: RosaryOpeningPrayerSumAggregateInputType
    _min?: RosaryOpeningPrayerMinAggregateInputType
    _max?: RosaryOpeningPrayerMaxAggregateInputType
  }

  export type RosaryOpeningPrayerGroupByOutputType = {
    id: number
    rosaryId: number
    prayerId: number
    orderInSet: number
    _count: RosaryOpeningPrayerCountAggregateOutputType | null
    _avg: RosaryOpeningPrayerAvgAggregateOutputType | null
    _sum: RosaryOpeningPrayerSumAggregateOutputType | null
    _min: RosaryOpeningPrayerMinAggregateOutputType | null
    _max: RosaryOpeningPrayerMaxAggregateOutputType | null
  }

  type GetRosaryOpeningPrayerGroupByPayload<T extends RosaryOpeningPrayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RosaryOpeningPrayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RosaryOpeningPrayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RosaryOpeningPrayerGroupByOutputType[P]>
            : GetScalarType<T[P], RosaryOpeningPrayerGroupByOutputType[P]>
        }
      >
    >


  export type RosaryOpeningPrayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosaryOpeningPrayer"]>

  export type RosaryOpeningPrayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosaryOpeningPrayer"]>

  export type RosaryOpeningPrayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosaryOpeningPrayer"]>

  export type RosaryOpeningPrayerSelectScalar = {
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
  }

  export type RosaryOpeningPrayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rosaryId" | "prayerId" | "orderInSet", ExtArgs["result"]["rosaryOpeningPrayer"]>
  export type RosaryOpeningPrayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }
  export type RosaryOpeningPrayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }
  export type RosaryOpeningPrayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }

  export type $RosaryOpeningPrayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RosaryOpeningPrayer"
    objects: {
      rosary: Prisma.$RosaryPayload<ExtArgs>
      prayer: Prisma.$PrayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rosaryId: number
      prayerId: number
      orderInSet: number
    }, ExtArgs["result"]["rosaryOpeningPrayer"]>
    composites: {}
  }

  type RosaryOpeningPrayerGetPayload<S extends boolean | null | undefined | RosaryOpeningPrayerDefaultArgs> = $Result.GetResult<Prisma.$RosaryOpeningPrayerPayload, S>

  type RosaryOpeningPrayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RosaryOpeningPrayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RosaryOpeningPrayerCountAggregateInputType | true
    }

  export interface RosaryOpeningPrayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RosaryOpeningPrayer'], meta: { name: 'RosaryOpeningPrayer' } }
    /**
     * Find zero or one RosaryOpeningPrayer that matches the filter.
     * @param {RosaryOpeningPrayerFindUniqueArgs} args - Arguments to find a RosaryOpeningPrayer
     * @example
     * // Get one RosaryOpeningPrayer
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RosaryOpeningPrayerFindUniqueArgs>(args: SelectSubset<T, RosaryOpeningPrayerFindUniqueArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RosaryOpeningPrayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RosaryOpeningPrayerFindUniqueOrThrowArgs} args - Arguments to find a RosaryOpeningPrayer
     * @example
     * // Get one RosaryOpeningPrayer
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RosaryOpeningPrayerFindUniqueOrThrowArgs>(args: SelectSubset<T, RosaryOpeningPrayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RosaryOpeningPrayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryOpeningPrayerFindFirstArgs} args - Arguments to find a RosaryOpeningPrayer
     * @example
     * // Get one RosaryOpeningPrayer
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RosaryOpeningPrayerFindFirstArgs>(args?: SelectSubset<T, RosaryOpeningPrayerFindFirstArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RosaryOpeningPrayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryOpeningPrayerFindFirstOrThrowArgs} args - Arguments to find a RosaryOpeningPrayer
     * @example
     * // Get one RosaryOpeningPrayer
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RosaryOpeningPrayerFindFirstOrThrowArgs>(args?: SelectSubset<T, RosaryOpeningPrayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RosaryOpeningPrayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryOpeningPrayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RosaryOpeningPrayers
     * const rosaryOpeningPrayers = await prisma.rosaryOpeningPrayer.findMany()
     * 
     * // Get first 10 RosaryOpeningPrayers
     * const rosaryOpeningPrayers = await prisma.rosaryOpeningPrayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rosaryOpeningPrayerWithIdOnly = await prisma.rosaryOpeningPrayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RosaryOpeningPrayerFindManyArgs>(args?: SelectSubset<T, RosaryOpeningPrayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RosaryOpeningPrayer.
     * @param {RosaryOpeningPrayerCreateArgs} args - Arguments to create a RosaryOpeningPrayer.
     * @example
     * // Create one RosaryOpeningPrayer
     * const RosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.create({
     *   data: {
     *     // ... data to create a RosaryOpeningPrayer
     *   }
     * })
     * 
     */
    create<T extends RosaryOpeningPrayerCreateArgs>(args: SelectSubset<T, RosaryOpeningPrayerCreateArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RosaryOpeningPrayers.
     * @param {RosaryOpeningPrayerCreateManyArgs} args - Arguments to create many RosaryOpeningPrayers.
     * @example
     * // Create many RosaryOpeningPrayers
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RosaryOpeningPrayerCreateManyArgs>(args?: SelectSubset<T, RosaryOpeningPrayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RosaryOpeningPrayers and returns the data saved in the database.
     * @param {RosaryOpeningPrayerCreateManyAndReturnArgs} args - Arguments to create many RosaryOpeningPrayers.
     * @example
     * // Create many RosaryOpeningPrayers
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RosaryOpeningPrayers and only return the `id`
     * const rosaryOpeningPrayerWithIdOnly = await prisma.rosaryOpeningPrayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RosaryOpeningPrayerCreateManyAndReturnArgs>(args?: SelectSubset<T, RosaryOpeningPrayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RosaryOpeningPrayer.
     * @param {RosaryOpeningPrayerDeleteArgs} args - Arguments to delete one RosaryOpeningPrayer.
     * @example
     * // Delete one RosaryOpeningPrayer
     * const RosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.delete({
     *   where: {
     *     // ... filter to delete one RosaryOpeningPrayer
     *   }
     * })
     * 
     */
    delete<T extends RosaryOpeningPrayerDeleteArgs>(args: SelectSubset<T, RosaryOpeningPrayerDeleteArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RosaryOpeningPrayer.
     * @param {RosaryOpeningPrayerUpdateArgs} args - Arguments to update one RosaryOpeningPrayer.
     * @example
     * // Update one RosaryOpeningPrayer
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RosaryOpeningPrayerUpdateArgs>(args: SelectSubset<T, RosaryOpeningPrayerUpdateArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RosaryOpeningPrayers.
     * @param {RosaryOpeningPrayerDeleteManyArgs} args - Arguments to filter RosaryOpeningPrayers to delete.
     * @example
     * // Delete a few RosaryOpeningPrayers
     * const { count } = await prisma.rosaryOpeningPrayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RosaryOpeningPrayerDeleteManyArgs>(args?: SelectSubset<T, RosaryOpeningPrayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RosaryOpeningPrayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryOpeningPrayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RosaryOpeningPrayers
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RosaryOpeningPrayerUpdateManyArgs>(args: SelectSubset<T, RosaryOpeningPrayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RosaryOpeningPrayers and returns the data updated in the database.
     * @param {RosaryOpeningPrayerUpdateManyAndReturnArgs} args - Arguments to update many RosaryOpeningPrayers.
     * @example
     * // Update many RosaryOpeningPrayers
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RosaryOpeningPrayers and only return the `id`
     * const rosaryOpeningPrayerWithIdOnly = await prisma.rosaryOpeningPrayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends RosaryOpeningPrayerUpdateManyAndReturnArgs>(args: SelectSubset<T, RosaryOpeningPrayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RosaryOpeningPrayer.
     * @param {RosaryOpeningPrayerUpsertArgs} args - Arguments to update or create a RosaryOpeningPrayer.
     * @example
     * // Update or create a RosaryOpeningPrayer
     * const rosaryOpeningPrayer = await prisma.rosaryOpeningPrayer.upsert({
     *   create: {
     *     // ... data to create a RosaryOpeningPrayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RosaryOpeningPrayer we want to update
     *   }
     * })
     */
    upsert<T extends RosaryOpeningPrayerUpsertArgs>(args: SelectSubset<T, RosaryOpeningPrayerUpsertArgs<ExtArgs>>): Prisma__RosaryOpeningPrayerClient<$Result.GetResult<Prisma.$RosaryOpeningPrayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RosaryOpeningPrayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryOpeningPrayerCountArgs} args - Arguments to filter RosaryOpeningPrayers to count.
     * @example
     * // Count the number of RosaryOpeningPrayers
     * const count = await prisma.rosaryOpeningPrayer.count({
     *   where: {
     *     // ... the filter for the RosaryOpeningPrayers we want to count
     *   }
     * })
    **/
    count<T extends RosaryOpeningPrayerCountArgs>(
      args?: Subset<T, RosaryOpeningPrayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RosaryOpeningPrayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RosaryOpeningPrayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryOpeningPrayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RosaryOpeningPrayerAggregateArgs>(args: Subset<T, RosaryOpeningPrayerAggregateArgs>): Prisma.PrismaPromise<GetRosaryOpeningPrayerAggregateType<T>>

    /**
     * Group by RosaryOpeningPrayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryOpeningPrayerGroupByArgs} args - Group by arguments.
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
      T extends RosaryOpeningPrayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RosaryOpeningPrayerGroupByArgs['orderBy'] }
        : { orderBy?: RosaryOpeningPrayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RosaryOpeningPrayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRosaryOpeningPrayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RosaryOpeningPrayer model
   */
  readonly fields: RosaryOpeningPrayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RosaryOpeningPrayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RosaryOpeningPrayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rosary<T extends RosaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RosaryDefaultArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prayer<T extends PrayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrayerDefaultArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RosaryOpeningPrayer model
   */
  interface RosaryOpeningPrayerFieldRefs {
    readonly id: FieldRef<"RosaryOpeningPrayer", 'Int'>
    readonly rosaryId: FieldRef<"RosaryOpeningPrayer", 'Int'>
    readonly prayerId: FieldRef<"RosaryOpeningPrayer", 'Int'>
    readonly orderInSet: FieldRef<"RosaryOpeningPrayer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RosaryOpeningPrayer findUnique
   */
  export type RosaryOpeningPrayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryOpeningPrayer to fetch.
     */
    where: RosaryOpeningPrayerWhereUniqueInput
  }

  /**
   * RosaryOpeningPrayer findUniqueOrThrow
   */
  export type RosaryOpeningPrayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryOpeningPrayer to fetch.
     */
    where: RosaryOpeningPrayerWhereUniqueInput
  }

  /**
   * RosaryOpeningPrayer findFirst
   */
  export type RosaryOpeningPrayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryOpeningPrayer to fetch.
     */
    where?: RosaryOpeningPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryOpeningPrayers to fetch.
     */
    orderBy?: RosaryOpeningPrayerOrderByWithRelationInput | RosaryOpeningPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RosaryOpeningPrayers.
     */
    cursor?: RosaryOpeningPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryOpeningPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryOpeningPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RosaryOpeningPrayers.
     */
    distinct?: RosaryOpeningPrayerScalarFieldEnum | RosaryOpeningPrayerScalarFieldEnum[]
  }

  /**
   * RosaryOpeningPrayer findFirstOrThrow
   */
  export type RosaryOpeningPrayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryOpeningPrayer to fetch.
     */
    where?: RosaryOpeningPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryOpeningPrayers to fetch.
     */
    orderBy?: RosaryOpeningPrayerOrderByWithRelationInput | RosaryOpeningPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RosaryOpeningPrayers.
     */
    cursor?: RosaryOpeningPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryOpeningPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryOpeningPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RosaryOpeningPrayers.
     */
    distinct?: RosaryOpeningPrayerScalarFieldEnum | RosaryOpeningPrayerScalarFieldEnum[]
  }

  /**
   * RosaryOpeningPrayer findMany
   */
  export type RosaryOpeningPrayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryOpeningPrayers to fetch.
     */
    where?: RosaryOpeningPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryOpeningPrayers to fetch.
     */
    orderBy?: RosaryOpeningPrayerOrderByWithRelationInput | RosaryOpeningPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RosaryOpeningPrayers.
     */
    cursor?: RosaryOpeningPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryOpeningPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryOpeningPrayers.
     */
    skip?: number
    distinct?: RosaryOpeningPrayerScalarFieldEnum | RosaryOpeningPrayerScalarFieldEnum[]
  }

  /**
   * RosaryOpeningPrayer create
   */
  export type RosaryOpeningPrayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * The data needed to create a RosaryOpeningPrayer.
     */
    data: XOR<RosaryOpeningPrayerCreateInput, RosaryOpeningPrayerUncheckedCreateInput>
  }

  /**
   * RosaryOpeningPrayer createMany
   */
  export type RosaryOpeningPrayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RosaryOpeningPrayers.
     */
    data: RosaryOpeningPrayerCreateManyInput | RosaryOpeningPrayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RosaryOpeningPrayer createManyAndReturn
   */
  export type RosaryOpeningPrayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * The data used to create many RosaryOpeningPrayers.
     */
    data: RosaryOpeningPrayerCreateManyInput | RosaryOpeningPrayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RosaryOpeningPrayer update
   */
  export type RosaryOpeningPrayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * The data needed to update a RosaryOpeningPrayer.
     */
    data: XOR<RosaryOpeningPrayerUpdateInput, RosaryOpeningPrayerUncheckedUpdateInput>
    /**
     * Choose, which RosaryOpeningPrayer to update.
     */
    where: RosaryOpeningPrayerWhereUniqueInput
  }

  /**
   * RosaryOpeningPrayer updateMany
   */
  export type RosaryOpeningPrayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RosaryOpeningPrayers.
     */
    data: XOR<RosaryOpeningPrayerUpdateManyMutationInput, RosaryOpeningPrayerUncheckedUpdateManyInput>
    /**
     * Filter which RosaryOpeningPrayers to update
     */
    where?: RosaryOpeningPrayerWhereInput
    /**
     * Limit how many RosaryOpeningPrayers to update.
     */
    limit?: number
  }

  /**
   * RosaryOpeningPrayer updateManyAndReturn
   */
  export type RosaryOpeningPrayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * The data used to update RosaryOpeningPrayers.
     */
    data: XOR<RosaryOpeningPrayerUpdateManyMutationInput, RosaryOpeningPrayerUncheckedUpdateManyInput>
    /**
     * Filter which RosaryOpeningPrayers to update
     */
    where?: RosaryOpeningPrayerWhereInput
    /**
     * Limit how many RosaryOpeningPrayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RosaryOpeningPrayer upsert
   */
  export type RosaryOpeningPrayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * The filter to search for the RosaryOpeningPrayer to update in case it exists.
     */
    where: RosaryOpeningPrayerWhereUniqueInput
    /**
     * In case the RosaryOpeningPrayer found by the `where` argument doesn't exist, create a new RosaryOpeningPrayer with this data.
     */
    create: XOR<RosaryOpeningPrayerCreateInput, RosaryOpeningPrayerUncheckedCreateInput>
    /**
     * In case the RosaryOpeningPrayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RosaryOpeningPrayerUpdateInput, RosaryOpeningPrayerUncheckedUpdateInput>
  }

  /**
   * RosaryOpeningPrayer delete
   */
  export type RosaryOpeningPrayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
    /**
     * Filter which RosaryOpeningPrayer to delete.
     */
    where: RosaryOpeningPrayerWhereUniqueInput
  }

  /**
   * RosaryOpeningPrayer deleteMany
   */
  export type RosaryOpeningPrayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RosaryOpeningPrayers to delete
     */
    where?: RosaryOpeningPrayerWhereInput
    /**
     * Limit how many RosaryOpeningPrayers to delete.
     */
    limit?: number
  }

  /**
   * RosaryOpeningPrayer without action
   */
  export type RosaryOpeningPrayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryOpeningPrayer
     */
    select?: RosaryOpeningPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryOpeningPrayer
     */
    omit?: RosaryOpeningPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryOpeningPrayerInclude<ExtArgs> | null
  }


  /**
   * Model RosaryClosingPrayer
   */

  export type AggregateRosaryClosingPrayer = {
    _count: RosaryClosingPrayerCountAggregateOutputType | null
    _avg: RosaryClosingPrayerAvgAggregateOutputType | null
    _sum: RosaryClosingPrayerSumAggregateOutputType | null
    _min: RosaryClosingPrayerMinAggregateOutputType | null
    _max: RosaryClosingPrayerMaxAggregateOutputType | null
  }

  export type RosaryClosingPrayerAvgAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryClosingPrayerSumAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryClosingPrayerMinAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryClosingPrayerMaxAggregateOutputType = {
    id: number | null
    rosaryId: number | null
    prayerId: number | null
    orderInSet: number | null
  }

  export type RosaryClosingPrayerCountAggregateOutputType = {
    id: number
    rosaryId: number
    prayerId: number
    orderInSet: number
    _all: number
  }


  export type RosaryClosingPrayerAvgAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryClosingPrayerSumAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryClosingPrayerMinAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryClosingPrayerMaxAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
  }

  export type RosaryClosingPrayerCountAggregateInputType = {
    id?: true
    rosaryId?: true
    prayerId?: true
    orderInSet?: true
    _all?: true
  }

  export type RosaryClosingPrayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RosaryClosingPrayer to aggregate.
     */
    where?: RosaryClosingPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryClosingPrayers to fetch.
     */
    orderBy?: RosaryClosingPrayerOrderByWithRelationInput | RosaryClosingPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RosaryClosingPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryClosingPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryClosingPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RosaryClosingPrayers
    **/
    _count?: true | RosaryClosingPrayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RosaryClosingPrayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RosaryClosingPrayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RosaryClosingPrayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RosaryClosingPrayerMaxAggregateInputType
  }

  export type GetRosaryClosingPrayerAggregateType<T extends RosaryClosingPrayerAggregateArgs> = {
        [P in keyof T & keyof AggregateRosaryClosingPrayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRosaryClosingPrayer[P]>
      : GetScalarType<T[P], AggregateRosaryClosingPrayer[P]>
  }




  export type RosaryClosingPrayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosaryClosingPrayerWhereInput
    orderBy?: RosaryClosingPrayerOrderByWithAggregationInput | RosaryClosingPrayerOrderByWithAggregationInput[]
    by: RosaryClosingPrayerScalarFieldEnum[] | RosaryClosingPrayerScalarFieldEnum
    having?: RosaryClosingPrayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RosaryClosingPrayerCountAggregateInputType | true
    _avg?: RosaryClosingPrayerAvgAggregateInputType
    _sum?: RosaryClosingPrayerSumAggregateInputType
    _min?: RosaryClosingPrayerMinAggregateInputType
    _max?: RosaryClosingPrayerMaxAggregateInputType
  }

  export type RosaryClosingPrayerGroupByOutputType = {
    id: number
    rosaryId: number
    prayerId: number
    orderInSet: number
    _count: RosaryClosingPrayerCountAggregateOutputType | null
    _avg: RosaryClosingPrayerAvgAggregateOutputType | null
    _sum: RosaryClosingPrayerSumAggregateOutputType | null
    _min: RosaryClosingPrayerMinAggregateOutputType | null
    _max: RosaryClosingPrayerMaxAggregateOutputType | null
  }

  type GetRosaryClosingPrayerGroupByPayload<T extends RosaryClosingPrayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RosaryClosingPrayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RosaryClosingPrayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RosaryClosingPrayerGroupByOutputType[P]>
            : GetScalarType<T[P], RosaryClosingPrayerGroupByOutputType[P]>
        }
      >
    >


  export type RosaryClosingPrayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosaryClosingPrayer"]>

  export type RosaryClosingPrayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosaryClosingPrayer"]>

  export type RosaryClosingPrayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosaryClosingPrayer"]>

  export type RosaryClosingPrayerSelectScalar = {
    id?: boolean
    rosaryId?: boolean
    prayerId?: boolean
    orderInSet?: boolean
  }

  export type RosaryClosingPrayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rosaryId" | "prayerId" | "orderInSet", ExtArgs["result"]["rosaryClosingPrayer"]>
  export type RosaryClosingPrayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }
  export type RosaryClosingPrayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }
  export type RosaryClosingPrayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosary?: boolean | RosaryDefaultArgs<ExtArgs>
    prayer?: boolean | PrayerDefaultArgs<ExtArgs>
  }

  export type $RosaryClosingPrayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RosaryClosingPrayer"
    objects: {
      rosary: Prisma.$RosaryPayload<ExtArgs>
      prayer: Prisma.$PrayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rosaryId: number
      prayerId: number
      orderInSet: number
    }, ExtArgs["result"]["rosaryClosingPrayer"]>
    composites: {}
  }

  type RosaryClosingPrayerGetPayload<S extends boolean | null | undefined | RosaryClosingPrayerDefaultArgs> = $Result.GetResult<Prisma.$RosaryClosingPrayerPayload, S>

  type RosaryClosingPrayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RosaryClosingPrayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RosaryClosingPrayerCountAggregateInputType | true
    }

  export interface RosaryClosingPrayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RosaryClosingPrayer'], meta: { name: 'RosaryClosingPrayer' } }
    /**
     * Find zero or one RosaryClosingPrayer that matches the filter.
     * @param {RosaryClosingPrayerFindUniqueArgs} args - Arguments to find a RosaryClosingPrayer
     * @example
     * // Get one RosaryClosingPrayer
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RosaryClosingPrayerFindUniqueArgs>(args: SelectSubset<T, RosaryClosingPrayerFindUniqueArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RosaryClosingPrayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RosaryClosingPrayerFindUniqueOrThrowArgs} args - Arguments to find a RosaryClosingPrayer
     * @example
     * // Get one RosaryClosingPrayer
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RosaryClosingPrayerFindUniqueOrThrowArgs>(args: SelectSubset<T, RosaryClosingPrayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RosaryClosingPrayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryClosingPrayerFindFirstArgs} args - Arguments to find a RosaryClosingPrayer
     * @example
     * // Get one RosaryClosingPrayer
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RosaryClosingPrayerFindFirstArgs>(args?: SelectSubset<T, RosaryClosingPrayerFindFirstArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RosaryClosingPrayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryClosingPrayerFindFirstOrThrowArgs} args - Arguments to find a RosaryClosingPrayer
     * @example
     * // Get one RosaryClosingPrayer
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RosaryClosingPrayerFindFirstOrThrowArgs>(args?: SelectSubset<T, RosaryClosingPrayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RosaryClosingPrayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryClosingPrayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RosaryClosingPrayers
     * const rosaryClosingPrayers = await prisma.rosaryClosingPrayer.findMany()
     * 
     * // Get first 10 RosaryClosingPrayers
     * const rosaryClosingPrayers = await prisma.rosaryClosingPrayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rosaryClosingPrayerWithIdOnly = await prisma.rosaryClosingPrayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RosaryClosingPrayerFindManyArgs>(args?: SelectSubset<T, RosaryClosingPrayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RosaryClosingPrayer.
     * @param {RosaryClosingPrayerCreateArgs} args - Arguments to create a RosaryClosingPrayer.
     * @example
     * // Create one RosaryClosingPrayer
     * const RosaryClosingPrayer = await prisma.rosaryClosingPrayer.create({
     *   data: {
     *     // ... data to create a RosaryClosingPrayer
     *   }
     * })
     * 
     */
    create<T extends RosaryClosingPrayerCreateArgs>(args: SelectSubset<T, RosaryClosingPrayerCreateArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RosaryClosingPrayers.
     * @param {RosaryClosingPrayerCreateManyArgs} args - Arguments to create many RosaryClosingPrayers.
     * @example
     * // Create many RosaryClosingPrayers
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RosaryClosingPrayerCreateManyArgs>(args?: SelectSubset<T, RosaryClosingPrayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RosaryClosingPrayers and returns the data saved in the database.
     * @param {RosaryClosingPrayerCreateManyAndReturnArgs} args - Arguments to create many RosaryClosingPrayers.
     * @example
     * // Create many RosaryClosingPrayers
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RosaryClosingPrayers and only return the `id`
     * const rosaryClosingPrayerWithIdOnly = await prisma.rosaryClosingPrayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RosaryClosingPrayerCreateManyAndReturnArgs>(args?: SelectSubset<T, RosaryClosingPrayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RosaryClosingPrayer.
     * @param {RosaryClosingPrayerDeleteArgs} args - Arguments to delete one RosaryClosingPrayer.
     * @example
     * // Delete one RosaryClosingPrayer
     * const RosaryClosingPrayer = await prisma.rosaryClosingPrayer.delete({
     *   where: {
     *     // ... filter to delete one RosaryClosingPrayer
     *   }
     * })
     * 
     */
    delete<T extends RosaryClosingPrayerDeleteArgs>(args: SelectSubset<T, RosaryClosingPrayerDeleteArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RosaryClosingPrayer.
     * @param {RosaryClosingPrayerUpdateArgs} args - Arguments to update one RosaryClosingPrayer.
     * @example
     * // Update one RosaryClosingPrayer
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RosaryClosingPrayerUpdateArgs>(args: SelectSubset<T, RosaryClosingPrayerUpdateArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RosaryClosingPrayers.
     * @param {RosaryClosingPrayerDeleteManyArgs} args - Arguments to filter RosaryClosingPrayers to delete.
     * @example
     * // Delete a few RosaryClosingPrayers
     * const { count } = await prisma.rosaryClosingPrayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RosaryClosingPrayerDeleteManyArgs>(args?: SelectSubset<T, RosaryClosingPrayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RosaryClosingPrayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryClosingPrayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RosaryClosingPrayers
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RosaryClosingPrayerUpdateManyArgs>(args: SelectSubset<T, RosaryClosingPrayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RosaryClosingPrayers and returns the data updated in the database.
     * @param {RosaryClosingPrayerUpdateManyAndReturnArgs} args - Arguments to update many RosaryClosingPrayers.
     * @example
     * // Update many RosaryClosingPrayers
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RosaryClosingPrayers and only return the `id`
     * const rosaryClosingPrayerWithIdOnly = await prisma.rosaryClosingPrayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends RosaryClosingPrayerUpdateManyAndReturnArgs>(args: SelectSubset<T, RosaryClosingPrayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RosaryClosingPrayer.
     * @param {RosaryClosingPrayerUpsertArgs} args - Arguments to update or create a RosaryClosingPrayer.
     * @example
     * // Update or create a RosaryClosingPrayer
     * const rosaryClosingPrayer = await prisma.rosaryClosingPrayer.upsert({
     *   create: {
     *     // ... data to create a RosaryClosingPrayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RosaryClosingPrayer we want to update
     *   }
     * })
     */
    upsert<T extends RosaryClosingPrayerUpsertArgs>(args: SelectSubset<T, RosaryClosingPrayerUpsertArgs<ExtArgs>>): Prisma__RosaryClosingPrayerClient<$Result.GetResult<Prisma.$RosaryClosingPrayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RosaryClosingPrayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryClosingPrayerCountArgs} args - Arguments to filter RosaryClosingPrayers to count.
     * @example
     * // Count the number of RosaryClosingPrayers
     * const count = await prisma.rosaryClosingPrayer.count({
     *   where: {
     *     // ... the filter for the RosaryClosingPrayers we want to count
     *   }
     * })
    **/
    count<T extends RosaryClosingPrayerCountArgs>(
      args?: Subset<T, RosaryClosingPrayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RosaryClosingPrayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RosaryClosingPrayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryClosingPrayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RosaryClosingPrayerAggregateArgs>(args: Subset<T, RosaryClosingPrayerAggregateArgs>): Prisma.PrismaPromise<GetRosaryClosingPrayerAggregateType<T>>

    /**
     * Group by RosaryClosingPrayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosaryClosingPrayerGroupByArgs} args - Group by arguments.
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
      T extends RosaryClosingPrayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RosaryClosingPrayerGroupByArgs['orderBy'] }
        : { orderBy?: RosaryClosingPrayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RosaryClosingPrayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRosaryClosingPrayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RosaryClosingPrayer model
   */
  readonly fields: RosaryClosingPrayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RosaryClosingPrayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RosaryClosingPrayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rosary<T extends RosaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RosaryDefaultArgs<ExtArgs>>): Prisma__RosaryClient<$Result.GetResult<Prisma.$RosaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prayer<T extends PrayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrayerDefaultArgs<ExtArgs>>): Prisma__PrayerClient<$Result.GetResult<Prisma.$PrayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RosaryClosingPrayer model
   */
  interface RosaryClosingPrayerFieldRefs {
    readonly id: FieldRef<"RosaryClosingPrayer", 'Int'>
    readonly rosaryId: FieldRef<"RosaryClosingPrayer", 'Int'>
    readonly prayerId: FieldRef<"RosaryClosingPrayer", 'Int'>
    readonly orderInSet: FieldRef<"RosaryClosingPrayer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RosaryClosingPrayer findUnique
   */
  export type RosaryClosingPrayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryClosingPrayer to fetch.
     */
    where: RosaryClosingPrayerWhereUniqueInput
  }

  /**
   * RosaryClosingPrayer findUniqueOrThrow
   */
  export type RosaryClosingPrayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryClosingPrayer to fetch.
     */
    where: RosaryClosingPrayerWhereUniqueInput
  }

  /**
   * RosaryClosingPrayer findFirst
   */
  export type RosaryClosingPrayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryClosingPrayer to fetch.
     */
    where?: RosaryClosingPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryClosingPrayers to fetch.
     */
    orderBy?: RosaryClosingPrayerOrderByWithRelationInput | RosaryClosingPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RosaryClosingPrayers.
     */
    cursor?: RosaryClosingPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryClosingPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryClosingPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RosaryClosingPrayers.
     */
    distinct?: RosaryClosingPrayerScalarFieldEnum | RosaryClosingPrayerScalarFieldEnum[]
  }

  /**
   * RosaryClosingPrayer findFirstOrThrow
   */
  export type RosaryClosingPrayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryClosingPrayer to fetch.
     */
    where?: RosaryClosingPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryClosingPrayers to fetch.
     */
    orderBy?: RosaryClosingPrayerOrderByWithRelationInput | RosaryClosingPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RosaryClosingPrayers.
     */
    cursor?: RosaryClosingPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryClosingPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryClosingPrayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RosaryClosingPrayers.
     */
    distinct?: RosaryClosingPrayerScalarFieldEnum | RosaryClosingPrayerScalarFieldEnum[]
  }

  /**
   * RosaryClosingPrayer findMany
   */
  export type RosaryClosingPrayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * Filter, which RosaryClosingPrayers to fetch.
     */
    where?: RosaryClosingPrayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosaryClosingPrayers to fetch.
     */
    orderBy?: RosaryClosingPrayerOrderByWithRelationInput | RosaryClosingPrayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RosaryClosingPrayers.
     */
    cursor?: RosaryClosingPrayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosaryClosingPrayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosaryClosingPrayers.
     */
    skip?: number
    distinct?: RosaryClosingPrayerScalarFieldEnum | RosaryClosingPrayerScalarFieldEnum[]
  }

  /**
   * RosaryClosingPrayer create
   */
  export type RosaryClosingPrayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * The data needed to create a RosaryClosingPrayer.
     */
    data: XOR<RosaryClosingPrayerCreateInput, RosaryClosingPrayerUncheckedCreateInput>
  }

  /**
   * RosaryClosingPrayer createMany
   */
  export type RosaryClosingPrayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RosaryClosingPrayers.
     */
    data: RosaryClosingPrayerCreateManyInput | RosaryClosingPrayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RosaryClosingPrayer createManyAndReturn
   */
  export type RosaryClosingPrayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * The data used to create many RosaryClosingPrayers.
     */
    data: RosaryClosingPrayerCreateManyInput | RosaryClosingPrayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RosaryClosingPrayer update
   */
  export type RosaryClosingPrayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * The data needed to update a RosaryClosingPrayer.
     */
    data: XOR<RosaryClosingPrayerUpdateInput, RosaryClosingPrayerUncheckedUpdateInput>
    /**
     * Choose, which RosaryClosingPrayer to update.
     */
    where: RosaryClosingPrayerWhereUniqueInput
  }

  /**
   * RosaryClosingPrayer updateMany
   */
  export type RosaryClosingPrayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RosaryClosingPrayers.
     */
    data: XOR<RosaryClosingPrayerUpdateManyMutationInput, RosaryClosingPrayerUncheckedUpdateManyInput>
    /**
     * Filter which RosaryClosingPrayers to update
     */
    where?: RosaryClosingPrayerWhereInput
    /**
     * Limit how many RosaryClosingPrayers to update.
     */
    limit?: number
  }

  /**
   * RosaryClosingPrayer updateManyAndReturn
   */
  export type RosaryClosingPrayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * The data used to update RosaryClosingPrayers.
     */
    data: XOR<RosaryClosingPrayerUpdateManyMutationInput, RosaryClosingPrayerUncheckedUpdateManyInput>
    /**
     * Filter which RosaryClosingPrayers to update
     */
    where?: RosaryClosingPrayerWhereInput
    /**
     * Limit how many RosaryClosingPrayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RosaryClosingPrayer upsert
   */
  export type RosaryClosingPrayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * The filter to search for the RosaryClosingPrayer to update in case it exists.
     */
    where: RosaryClosingPrayerWhereUniqueInput
    /**
     * In case the RosaryClosingPrayer found by the `where` argument doesn't exist, create a new RosaryClosingPrayer with this data.
     */
    create: XOR<RosaryClosingPrayerCreateInput, RosaryClosingPrayerUncheckedCreateInput>
    /**
     * In case the RosaryClosingPrayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RosaryClosingPrayerUpdateInput, RosaryClosingPrayerUncheckedUpdateInput>
  }

  /**
   * RosaryClosingPrayer delete
   */
  export type RosaryClosingPrayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
    /**
     * Filter which RosaryClosingPrayer to delete.
     */
    where: RosaryClosingPrayerWhereUniqueInput
  }

  /**
   * RosaryClosingPrayer deleteMany
   */
  export type RosaryClosingPrayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RosaryClosingPrayers to delete
     */
    where?: RosaryClosingPrayerWhereInput
    /**
     * Limit how many RosaryClosingPrayers to delete.
     */
    limit?: number
  }

  /**
   * RosaryClosingPrayer without action
   */
  export type RosaryClosingPrayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosaryClosingPrayer
     */
    select?: RosaryClosingPrayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosaryClosingPrayer
     */
    omit?: RosaryClosingPrayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosaryClosingPrayerInclude<ExtArgs> | null
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


  export const PrayerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content'
  };

  export type PrayerScalarFieldEnum = (typeof PrayerScalarFieldEnum)[keyof typeof PrayerScalarFieldEnum]


  export const MysteryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content'
  };

  export type MysteryScalarFieldEnum = (typeof MysteryScalarFieldEnum)[keyof typeof MysteryScalarFieldEnum]


  export const MysterySetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    day: 'day'
  };

  export type MysterySetScalarFieldEnum = (typeof MysterySetScalarFieldEnum)[keyof typeof MysterySetScalarFieldEnum]


  export const MysterySetItemScalarFieldEnum: {
    id: 'id',
    mysteryId: 'mysteryId',
    mysterySetId: 'mysterySetId',
    orderInSet: 'orderInSet'
  };

  export type MysterySetItemScalarFieldEnum = (typeof MysterySetItemScalarFieldEnum)[keyof typeof MysterySetItemScalarFieldEnum]


  export const MysterySetItemPrayerScalarFieldEnum: {
    id: 'id',
    orderInSequence: 'orderInSequence',
    prayerId: 'prayerId',
    mysterySetItemId: 'mysterySetItemId'
  };

  export type MysterySetItemPrayerScalarFieldEnum = (typeof MysterySetItemPrayerScalarFieldEnum)[keyof typeof MysterySetItemPrayerScalarFieldEnum]


  export const RosaryScalarFieldEnum: {
    id: 'id',
    day: 'day',
    mysterySetId: 'mysterySetId'
  };

  export type RosaryScalarFieldEnum = (typeof RosaryScalarFieldEnum)[keyof typeof RosaryScalarFieldEnum]


  export const RosaryOpeningPrayerScalarFieldEnum: {
    id: 'id',
    rosaryId: 'rosaryId',
    prayerId: 'prayerId',
    orderInSet: 'orderInSet'
  };

  export type RosaryOpeningPrayerScalarFieldEnum = (typeof RosaryOpeningPrayerScalarFieldEnum)[keyof typeof RosaryOpeningPrayerScalarFieldEnum]


  export const RosaryClosingPrayerScalarFieldEnum: {
    id: 'id',
    rosaryId: 'rosaryId',
    prayerId: 'prayerId',
    orderInSet: 'orderInSet'
  };

  export type RosaryClosingPrayerScalarFieldEnum = (typeof RosaryClosingPrayerScalarFieldEnum)[keyof typeof RosaryClosingPrayerScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type PrayerWhereInput = {
    AND?: PrayerWhereInput | PrayerWhereInput[]
    OR?: PrayerWhereInput[]
    NOT?: PrayerWhereInput | PrayerWhereInput[]
    id?: IntFilter<"Prayer"> | number
    title?: StringFilter<"Prayer"> | string
    content?: StringFilter<"Prayer"> | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerListRelationFilter
    rosaryClosingPrayers?: RosaryClosingPrayerListRelationFilter
    mysterySetItemPrayers?: MysterySetItemPrayerListRelationFilter
  }

  export type PrayerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    rosaryOpeningPrayers?: RosaryOpeningPrayerOrderByRelationAggregateInput
    rosaryClosingPrayers?: RosaryClosingPrayerOrderByRelationAggregateInput
    mysterySetItemPrayers?: MysterySetItemPrayerOrderByRelationAggregateInput
  }

  export type PrayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrayerWhereInput | PrayerWhereInput[]
    OR?: PrayerWhereInput[]
    NOT?: PrayerWhereInput | PrayerWhereInput[]
    title?: StringFilter<"Prayer"> | string
    content?: StringFilter<"Prayer"> | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerListRelationFilter
    rosaryClosingPrayers?: RosaryClosingPrayerListRelationFilter
    mysterySetItemPrayers?: MysterySetItemPrayerListRelationFilter
  }, "id">

  export type PrayerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    _count?: PrayerCountOrderByAggregateInput
    _avg?: PrayerAvgOrderByAggregateInput
    _max?: PrayerMaxOrderByAggregateInput
    _min?: PrayerMinOrderByAggregateInput
    _sum?: PrayerSumOrderByAggregateInput
  }

  export type PrayerScalarWhereWithAggregatesInput = {
    AND?: PrayerScalarWhereWithAggregatesInput | PrayerScalarWhereWithAggregatesInput[]
    OR?: PrayerScalarWhereWithAggregatesInput[]
    NOT?: PrayerScalarWhereWithAggregatesInput | PrayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prayer"> | number
    title?: StringWithAggregatesFilter<"Prayer"> | string
    content?: StringWithAggregatesFilter<"Prayer"> | string
  }

  export type MysteryWhereInput = {
    AND?: MysteryWhereInput | MysteryWhereInput[]
    OR?: MysteryWhereInput[]
    NOT?: MysteryWhereInput | MysteryWhereInput[]
    id?: IntFilter<"Mystery"> | number
    title?: StringFilter<"Mystery"> | string
    content?: StringFilter<"Mystery"> | string
    setItems?: MysterySetItemListRelationFilter
  }

  export type MysteryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    setItems?: MysterySetItemOrderByRelationAggregateInput
  }

  export type MysteryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MysteryWhereInput | MysteryWhereInput[]
    OR?: MysteryWhereInput[]
    NOT?: MysteryWhereInput | MysteryWhereInput[]
    title?: StringFilter<"Mystery"> | string
    content?: StringFilter<"Mystery"> | string
    setItems?: MysterySetItemListRelationFilter
  }, "id">

  export type MysteryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    _count?: MysteryCountOrderByAggregateInput
    _avg?: MysteryAvgOrderByAggregateInput
    _max?: MysteryMaxOrderByAggregateInput
    _min?: MysteryMinOrderByAggregateInput
    _sum?: MysterySumOrderByAggregateInput
  }

  export type MysteryScalarWhereWithAggregatesInput = {
    AND?: MysteryScalarWhereWithAggregatesInput | MysteryScalarWhereWithAggregatesInput[]
    OR?: MysteryScalarWhereWithAggregatesInput[]
    NOT?: MysteryScalarWhereWithAggregatesInput | MysteryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mystery"> | number
    title?: StringWithAggregatesFilter<"Mystery"> | string
    content?: StringWithAggregatesFilter<"Mystery"> | string
  }

  export type MysterySetWhereInput = {
    AND?: MysterySetWhereInput | MysterySetWhereInput[]
    OR?: MysterySetWhereInput[]
    NOT?: MysterySetWhereInput | MysterySetWhereInput[]
    id?: IntFilter<"MysterySet"> | number
    name?: StringFilter<"MysterySet"> | string
    day?: StringFilter<"MysterySet"> | string
    mysteries?: MysterySetItemListRelationFilter
    rosaries?: RosaryListRelationFilter
  }

  export type MysterySetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    day?: SortOrder
    mysteries?: MysterySetItemOrderByRelationAggregateInput
    rosaries?: RosaryOrderByRelationAggregateInput
  }

  export type MysterySetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MysterySetWhereInput | MysterySetWhereInput[]
    OR?: MysterySetWhereInput[]
    NOT?: MysterySetWhereInput | MysterySetWhereInput[]
    name?: StringFilter<"MysterySet"> | string
    day?: StringFilter<"MysterySet"> | string
    mysteries?: MysterySetItemListRelationFilter
    rosaries?: RosaryListRelationFilter
  }, "id">

  export type MysterySetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    day?: SortOrder
    _count?: MysterySetCountOrderByAggregateInput
    _avg?: MysterySetAvgOrderByAggregateInput
    _max?: MysterySetMaxOrderByAggregateInput
    _min?: MysterySetMinOrderByAggregateInput
    _sum?: MysterySetSumOrderByAggregateInput
  }

  export type MysterySetScalarWhereWithAggregatesInput = {
    AND?: MysterySetScalarWhereWithAggregatesInput | MysterySetScalarWhereWithAggregatesInput[]
    OR?: MysterySetScalarWhereWithAggregatesInput[]
    NOT?: MysterySetScalarWhereWithAggregatesInput | MysterySetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MysterySet"> | number
    name?: StringWithAggregatesFilter<"MysterySet"> | string
    day?: StringWithAggregatesFilter<"MysterySet"> | string
  }

  export type MysterySetItemWhereInput = {
    AND?: MysterySetItemWhereInput | MysterySetItemWhereInput[]
    OR?: MysterySetItemWhereInput[]
    NOT?: MysterySetItemWhereInput | MysterySetItemWhereInput[]
    id?: IntFilter<"MysterySetItem"> | number
    mysteryId?: IntFilter<"MysterySetItem"> | number
    mysterySetId?: IntFilter<"MysterySetItem"> | number
    orderInSet?: IntFilter<"MysterySetItem"> | number
    mystery?: XOR<MysteryScalarRelationFilter, MysteryWhereInput>
    mysterySet?: XOR<MysterySetScalarRelationFilter, MysterySetWhereInput>
    prayersAfter?: MysterySetItemPrayerListRelationFilter
  }

  export type MysterySetItemOrderByWithRelationInput = {
    id?: SortOrder
    mysteryId?: SortOrder
    mysterySetId?: SortOrder
    orderInSet?: SortOrder
    mystery?: MysteryOrderByWithRelationInput
    mysterySet?: MysterySetOrderByWithRelationInput
    prayersAfter?: MysterySetItemPrayerOrderByRelationAggregateInput
  }

  export type MysterySetItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MysterySetItemWhereInput | MysterySetItemWhereInput[]
    OR?: MysterySetItemWhereInput[]
    NOT?: MysterySetItemWhereInput | MysterySetItemWhereInput[]
    mysteryId?: IntFilter<"MysterySetItem"> | number
    mysterySetId?: IntFilter<"MysterySetItem"> | number
    orderInSet?: IntFilter<"MysterySetItem"> | number
    mystery?: XOR<MysteryScalarRelationFilter, MysteryWhereInput>
    mysterySet?: XOR<MysterySetScalarRelationFilter, MysterySetWhereInput>
    prayersAfter?: MysterySetItemPrayerListRelationFilter
  }, "id">

  export type MysterySetItemOrderByWithAggregationInput = {
    id?: SortOrder
    mysteryId?: SortOrder
    mysterySetId?: SortOrder
    orderInSet?: SortOrder
    _count?: MysterySetItemCountOrderByAggregateInput
    _avg?: MysterySetItemAvgOrderByAggregateInput
    _max?: MysterySetItemMaxOrderByAggregateInput
    _min?: MysterySetItemMinOrderByAggregateInput
    _sum?: MysterySetItemSumOrderByAggregateInput
  }

  export type MysterySetItemScalarWhereWithAggregatesInput = {
    AND?: MysterySetItemScalarWhereWithAggregatesInput | MysterySetItemScalarWhereWithAggregatesInput[]
    OR?: MysterySetItemScalarWhereWithAggregatesInput[]
    NOT?: MysterySetItemScalarWhereWithAggregatesInput | MysterySetItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MysterySetItem"> | number
    mysteryId?: IntWithAggregatesFilter<"MysterySetItem"> | number
    mysterySetId?: IntWithAggregatesFilter<"MysterySetItem"> | number
    orderInSet?: IntWithAggregatesFilter<"MysterySetItem"> | number
  }

  export type MysterySetItemPrayerWhereInput = {
    AND?: MysterySetItemPrayerWhereInput | MysterySetItemPrayerWhereInput[]
    OR?: MysterySetItemPrayerWhereInput[]
    NOT?: MysterySetItemPrayerWhereInput | MysterySetItemPrayerWhereInput[]
    id?: IntFilter<"MysterySetItemPrayer"> | number
    orderInSequence?: IntFilter<"MysterySetItemPrayer"> | number
    prayerId?: IntFilter<"MysterySetItemPrayer"> | number
    mysterySetItemId?: IntFilter<"MysterySetItemPrayer"> | number
    prayer?: XOR<PrayerScalarRelationFilter, PrayerWhereInput>
    mysterySetItem?: XOR<MysterySetItemScalarRelationFilter, MysterySetItemWhereInput>
  }

  export type MysterySetItemPrayerOrderByWithRelationInput = {
    id?: SortOrder
    orderInSequence?: SortOrder
    prayerId?: SortOrder
    mysterySetItemId?: SortOrder
    prayer?: PrayerOrderByWithRelationInput
    mysterySetItem?: MysterySetItemOrderByWithRelationInput
  }

  export type MysterySetItemPrayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MysterySetItemPrayerWhereInput | MysterySetItemPrayerWhereInput[]
    OR?: MysterySetItemPrayerWhereInput[]
    NOT?: MysterySetItemPrayerWhereInput | MysterySetItemPrayerWhereInput[]
    orderInSequence?: IntFilter<"MysterySetItemPrayer"> | number
    prayerId?: IntFilter<"MysterySetItemPrayer"> | number
    mysterySetItemId?: IntFilter<"MysterySetItemPrayer"> | number
    prayer?: XOR<PrayerScalarRelationFilter, PrayerWhereInput>
    mysterySetItem?: XOR<MysterySetItemScalarRelationFilter, MysterySetItemWhereInput>
  }, "id">

  export type MysterySetItemPrayerOrderByWithAggregationInput = {
    id?: SortOrder
    orderInSequence?: SortOrder
    prayerId?: SortOrder
    mysterySetItemId?: SortOrder
    _count?: MysterySetItemPrayerCountOrderByAggregateInput
    _avg?: MysterySetItemPrayerAvgOrderByAggregateInput
    _max?: MysterySetItemPrayerMaxOrderByAggregateInput
    _min?: MysterySetItemPrayerMinOrderByAggregateInput
    _sum?: MysterySetItemPrayerSumOrderByAggregateInput
  }

  export type MysterySetItemPrayerScalarWhereWithAggregatesInput = {
    AND?: MysterySetItemPrayerScalarWhereWithAggregatesInput | MysterySetItemPrayerScalarWhereWithAggregatesInput[]
    OR?: MysterySetItemPrayerScalarWhereWithAggregatesInput[]
    NOT?: MysterySetItemPrayerScalarWhereWithAggregatesInput | MysterySetItemPrayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MysterySetItemPrayer"> | number
    orderInSequence?: IntWithAggregatesFilter<"MysterySetItemPrayer"> | number
    prayerId?: IntWithAggregatesFilter<"MysterySetItemPrayer"> | number
    mysterySetItemId?: IntWithAggregatesFilter<"MysterySetItemPrayer"> | number
  }

  export type RosaryWhereInput = {
    AND?: RosaryWhereInput | RosaryWhereInput[]
    OR?: RosaryWhereInput[]
    NOT?: RosaryWhereInput | RosaryWhereInput[]
    id?: IntFilter<"Rosary"> | number
    day?: StringFilter<"Rosary"> | string
    mysterySetId?: IntFilter<"Rosary"> | number
    mysterySet?: XOR<MysterySetScalarRelationFilter, MysterySetWhereInput>
    openingPrayers?: RosaryOpeningPrayerListRelationFilter
    closingPrayers?: RosaryClosingPrayerListRelationFilter
  }

  export type RosaryOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    mysterySetId?: SortOrder
    mysterySet?: MysterySetOrderByWithRelationInput
    openingPrayers?: RosaryOpeningPrayerOrderByRelationAggregateInput
    closingPrayers?: RosaryClosingPrayerOrderByRelationAggregateInput
  }

  export type RosaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RosaryWhereInput | RosaryWhereInput[]
    OR?: RosaryWhereInput[]
    NOT?: RosaryWhereInput | RosaryWhereInput[]
    day?: StringFilter<"Rosary"> | string
    mysterySetId?: IntFilter<"Rosary"> | number
    mysterySet?: XOR<MysterySetScalarRelationFilter, MysterySetWhereInput>
    openingPrayers?: RosaryOpeningPrayerListRelationFilter
    closingPrayers?: RosaryClosingPrayerListRelationFilter
  }, "id">

  export type RosaryOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    mysterySetId?: SortOrder
    _count?: RosaryCountOrderByAggregateInput
    _avg?: RosaryAvgOrderByAggregateInput
    _max?: RosaryMaxOrderByAggregateInput
    _min?: RosaryMinOrderByAggregateInput
    _sum?: RosarySumOrderByAggregateInput
  }

  export type RosaryScalarWhereWithAggregatesInput = {
    AND?: RosaryScalarWhereWithAggregatesInput | RosaryScalarWhereWithAggregatesInput[]
    OR?: RosaryScalarWhereWithAggregatesInput[]
    NOT?: RosaryScalarWhereWithAggregatesInput | RosaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rosary"> | number
    day?: StringWithAggregatesFilter<"Rosary"> | string
    mysterySetId?: IntWithAggregatesFilter<"Rosary"> | number
  }

  export type RosaryOpeningPrayerWhereInput = {
    AND?: RosaryOpeningPrayerWhereInput | RosaryOpeningPrayerWhereInput[]
    OR?: RosaryOpeningPrayerWhereInput[]
    NOT?: RosaryOpeningPrayerWhereInput | RosaryOpeningPrayerWhereInput[]
    id?: IntFilter<"RosaryOpeningPrayer"> | number
    rosaryId?: IntFilter<"RosaryOpeningPrayer"> | number
    prayerId?: IntFilter<"RosaryOpeningPrayer"> | number
    orderInSet?: IntFilter<"RosaryOpeningPrayer"> | number
    rosary?: XOR<RosaryScalarRelationFilter, RosaryWhereInput>
    prayer?: XOR<PrayerScalarRelationFilter, PrayerWhereInput>
  }

  export type RosaryOpeningPrayerOrderByWithRelationInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
    rosary?: RosaryOrderByWithRelationInput
    prayer?: PrayerOrderByWithRelationInput
  }

  export type RosaryOpeningPrayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RosaryOpeningPrayerWhereInput | RosaryOpeningPrayerWhereInput[]
    OR?: RosaryOpeningPrayerWhereInput[]
    NOT?: RosaryOpeningPrayerWhereInput | RosaryOpeningPrayerWhereInput[]
    rosaryId?: IntFilter<"RosaryOpeningPrayer"> | number
    prayerId?: IntFilter<"RosaryOpeningPrayer"> | number
    orderInSet?: IntFilter<"RosaryOpeningPrayer"> | number
    rosary?: XOR<RosaryScalarRelationFilter, RosaryWhereInput>
    prayer?: XOR<PrayerScalarRelationFilter, PrayerWhereInput>
  }, "id">

  export type RosaryOpeningPrayerOrderByWithAggregationInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
    _count?: RosaryOpeningPrayerCountOrderByAggregateInput
    _avg?: RosaryOpeningPrayerAvgOrderByAggregateInput
    _max?: RosaryOpeningPrayerMaxOrderByAggregateInput
    _min?: RosaryOpeningPrayerMinOrderByAggregateInput
    _sum?: RosaryOpeningPrayerSumOrderByAggregateInput
  }

  export type RosaryOpeningPrayerScalarWhereWithAggregatesInput = {
    AND?: RosaryOpeningPrayerScalarWhereWithAggregatesInput | RosaryOpeningPrayerScalarWhereWithAggregatesInput[]
    OR?: RosaryOpeningPrayerScalarWhereWithAggregatesInput[]
    NOT?: RosaryOpeningPrayerScalarWhereWithAggregatesInput | RosaryOpeningPrayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RosaryOpeningPrayer"> | number
    rosaryId?: IntWithAggregatesFilter<"RosaryOpeningPrayer"> | number
    prayerId?: IntWithAggregatesFilter<"RosaryOpeningPrayer"> | number
    orderInSet?: IntWithAggregatesFilter<"RosaryOpeningPrayer"> | number
  }

  export type RosaryClosingPrayerWhereInput = {
    AND?: RosaryClosingPrayerWhereInput | RosaryClosingPrayerWhereInput[]
    OR?: RosaryClosingPrayerWhereInput[]
    NOT?: RosaryClosingPrayerWhereInput | RosaryClosingPrayerWhereInput[]
    id?: IntFilter<"RosaryClosingPrayer"> | number
    rosaryId?: IntFilter<"RosaryClosingPrayer"> | number
    prayerId?: IntFilter<"RosaryClosingPrayer"> | number
    orderInSet?: IntFilter<"RosaryClosingPrayer"> | number
    rosary?: XOR<RosaryScalarRelationFilter, RosaryWhereInput>
    prayer?: XOR<PrayerScalarRelationFilter, PrayerWhereInput>
  }

  export type RosaryClosingPrayerOrderByWithRelationInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
    rosary?: RosaryOrderByWithRelationInput
    prayer?: PrayerOrderByWithRelationInput
  }

  export type RosaryClosingPrayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RosaryClosingPrayerWhereInput | RosaryClosingPrayerWhereInput[]
    OR?: RosaryClosingPrayerWhereInput[]
    NOT?: RosaryClosingPrayerWhereInput | RosaryClosingPrayerWhereInput[]
    rosaryId?: IntFilter<"RosaryClosingPrayer"> | number
    prayerId?: IntFilter<"RosaryClosingPrayer"> | number
    orderInSet?: IntFilter<"RosaryClosingPrayer"> | number
    rosary?: XOR<RosaryScalarRelationFilter, RosaryWhereInput>
    prayer?: XOR<PrayerScalarRelationFilter, PrayerWhereInput>
  }, "id">

  export type RosaryClosingPrayerOrderByWithAggregationInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
    _count?: RosaryClosingPrayerCountOrderByAggregateInput
    _avg?: RosaryClosingPrayerAvgOrderByAggregateInput
    _max?: RosaryClosingPrayerMaxOrderByAggregateInput
    _min?: RosaryClosingPrayerMinOrderByAggregateInput
    _sum?: RosaryClosingPrayerSumOrderByAggregateInput
  }

  export type RosaryClosingPrayerScalarWhereWithAggregatesInput = {
    AND?: RosaryClosingPrayerScalarWhereWithAggregatesInput | RosaryClosingPrayerScalarWhereWithAggregatesInput[]
    OR?: RosaryClosingPrayerScalarWhereWithAggregatesInput[]
    NOT?: RosaryClosingPrayerScalarWhereWithAggregatesInput | RosaryClosingPrayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RosaryClosingPrayer"> | number
    rosaryId?: IntWithAggregatesFilter<"RosaryClosingPrayer"> | number
    prayerId?: IntWithAggregatesFilter<"RosaryClosingPrayer"> | number
    orderInSet?: IntWithAggregatesFilter<"RosaryClosingPrayer"> | number
  }

  export type PrayerCreateInput = {
    title: string
    content: string
    rosaryOpeningPrayers?: RosaryOpeningPrayerCreateNestedManyWithoutPrayerInput
    rosaryClosingPrayers?: RosaryClosingPrayerCreateNestedManyWithoutPrayerInput
    mysterySetItemPrayers?: MysterySetItemPrayerCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUncheckedCreateNestedManyWithoutPrayerInput
    rosaryClosingPrayers?: RosaryClosingPrayerUncheckedCreateNestedManyWithoutPrayerInput
    mysterySetItemPrayers?: MysterySetItemPrayerUncheckedCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUpdateManyWithoutPrayerNestedInput
    rosaryClosingPrayers?: RosaryClosingPrayerUpdateManyWithoutPrayerNestedInput
    mysterySetItemPrayers?: MysterySetItemPrayerUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUncheckedUpdateManyWithoutPrayerNestedInput
    rosaryClosingPrayers?: RosaryClosingPrayerUncheckedUpdateManyWithoutPrayerNestedInput
    mysterySetItemPrayers?: MysterySetItemPrayerUncheckedUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerCreateManyInput = {
    id?: number
    title: string
    content: string
  }

  export type PrayerUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PrayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MysteryCreateInput = {
    title: string
    content: string
    setItems?: MysterySetItemCreateNestedManyWithoutMysteryInput
  }

  export type MysteryUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    setItems?: MysterySetItemUncheckedCreateNestedManyWithoutMysteryInput
  }

  export type MysteryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    setItems?: MysterySetItemUpdateManyWithoutMysteryNestedInput
  }

  export type MysteryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    setItems?: MysterySetItemUncheckedUpdateManyWithoutMysteryNestedInput
  }

  export type MysteryCreateManyInput = {
    id?: number
    title: string
    content: string
  }

  export type MysteryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MysteryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MysterySetCreateInput = {
    name: string
    day: string
    mysteries?: MysterySetItemCreateNestedManyWithoutMysterySetInput
    rosaries?: RosaryCreateNestedManyWithoutMysterySetInput
  }

  export type MysterySetUncheckedCreateInput = {
    id?: number
    name: string
    day: string
    mysteries?: MysterySetItemUncheckedCreateNestedManyWithoutMysterySetInput
    rosaries?: RosaryUncheckedCreateNestedManyWithoutMysterySetInput
  }

  export type MysterySetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    mysteries?: MysterySetItemUpdateManyWithoutMysterySetNestedInput
    rosaries?: RosaryUpdateManyWithoutMysterySetNestedInput
  }

  export type MysterySetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    mysteries?: MysterySetItemUncheckedUpdateManyWithoutMysterySetNestedInput
    rosaries?: RosaryUncheckedUpdateManyWithoutMysterySetNestedInput
  }

  export type MysterySetCreateManyInput = {
    id?: number
    name: string
    day: string
  }

  export type MysterySetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
  }

  export type MysterySetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
  }

  export type MysterySetItemCreateInput = {
    orderInSet: number
    mystery: MysteryCreateNestedOneWithoutSetItemsInput
    mysterySet: MysterySetCreateNestedOneWithoutMysteriesInput
    prayersAfter?: MysterySetItemPrayerCreateNestedManyWithoutMysterySetItemInput
  }

  export type MysterySetItemUncheckedCreateInput = {
    id?: number
    mysteryId: number
    mysterySetId: number
    orderInSet: number
    prayersAfter?: MysterySetItemPrayerUncheckedCreateNestedManyWithoutMysterySetItemInput
  }

  export type MysterySetItemUpdateInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    mystery?: MysteryUpdateOneRequiredWithoutSetItemsNestedInput
    mysterySet?: MysterySetUpdateOneRequiredWithoutMysteriesNestedInput
    prayersAfter?: MysterySetItemPrayerUpdateManyWithoutMysterySetItemNestedInput
  }

  export type MysterySetItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mysteryId?: IntFieldUpdateOperationsInput | number
    mysterySetId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
    prayersAfter?: MysterySetItemPrayerUncheckedUpdateManyWithoutMysterySetItemNestedInput
  }

  export type MysterySetItemCreateManyInput = {
    id?: number
    mysteryId: number
    mysterySetId: number
    orderInSet: number
  }

  export type MysterySetItemUpdateManyMutationInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mysteryId?: IntFieldUpdateOperationsInput | number
    mysterySetId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemPrayerCreateInput = {
    orderInSequence: number
    prayer: PrayerCreateNestedOneWithoutMysterySetItemPrayersInput
    mysterySetItem: MysterySetItemCreateNestedOneWithoutPrayersAfterInput
  }

  export type MysterySetItemPrayerUncheckedCreateInput = {
    id?: number
    orderInSequence: number
    prayerId: number
    mysterySetItemId: number
  }

  export type MysterySetItemPrayerUpdateInput = {
    orderInSequence?: IntFieldUpdateOperationsInput | number
    prayer?: PrayerUpdateOneRequiredWithoutMysterySetItemPrayersNestedInput
    mysterySetItem?: MysterySetItemUpdateOneRequiredWithoutPrayersAfterNestedInput
  }

  export type MysterySetItemPrayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderInSequence?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    mysterySetItemId?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemPrayerCreateManyInput = {
    id?: number
    orderInSequence: number
    prayerId: number
    mysterySetItemId: number
  }

  export type MysterySetItemPrayerUpdateManyMutationInput = {
    orderInSequence?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemPrayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderInSequence?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    mysterySetItemId?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryCreateInput = {
    day: string
    mysterySet: MysterySetCreateNestedOneWithoutRosariesInput
    openingPrayers?: RosaryOpeningPrayerCreateNestedManyWithoutRosaryInput
    closingPrayers?: RosaryClosingPrayerCreateNestedManyWithoutRosaryInput
  }

  export type RosaryUncheckedCreateInput = {
    id?: number
    day: string
    mysterySetId: number
    openingPrayers?: RosaryOpeningPrayerUncheckedCreateNestedManyWithoutRosaryInput
    closingPrayers?: RosaryClosingPrayerUncheckedCreateNestedManyWithoutRosaryInput
  }

  export type RosaryUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    mysterySet?: MysterySetUpdateOneRequiredWithoutRosariesNestedInput
    openingPrayers?: RosaryOpeningPrayerUpdateManyWithoutRosaryNestedInput
    closingPrayers?: RosaryClosingPrayerUpdateManyWithoutRosaryNestedInput
  }

  export type RosaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    mysterySetId?: IntFieldUpdateOperationsInput | number
    openingPrayers?: RosaryOpeningPrayerUncheckedUpdateManyWithoutRosaryNestedInput
    closingPrayers?: RosaryClosingPrayerUncheckedUpdateManyWithoutRosaryNestedInput
  }

  export type RosaryCreateManyInput = {
    id?: number
    day: string
    mysterySetId: number
  }

  export type RosaryUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
  }

  export type RosaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    mysterySetId?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryOpeningPrayerCreateInput = {
    orderInSet: number
    rosary: RosaryCreateNestedOneWithoutOpeningPrayersInput
    prayer: PrayerCreateNestedOneWithoutRosaryOpeningPrayersInput
  }

  export type RosaryOpeningPrayerUncheckedCreateInput = {
    id?: number
    rosaryId: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryOpeningPrayerUpdateInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    rosary?: RosaryUpdateOneRequiredWithoutOpeningPrayersNestedInput
    prayer?: PrayerUpdateOneRequiredWithoutRosaryOpeningPrayersNestedInput
  }

  export type RosaryOpeningPrayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryOpeningPrayerCreateManyInput = {
    id?: number
    rosaryId: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryOpeningPrayerUpdateManyMutationInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryOpeningPrayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryClosingPrayerCreateInput = {
    orderInSet: number
    rosary: RosaryCreateNestedOneWithoutClosingPrayersInput
    prayer: PrayerCreateNestedOneWithoutRosaryClosingPrayersInput
  }

  export type RosaryClosingPrayerUncheckedCreateInput = {
    id?: number
    rosaryId: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryClosingPrayerUpdateInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    rosary?: RosaryUpdateOneRequiredWithoutClosingPrayersNestedInput
    prayer?: PrayerUpdateOneRequiredWithoutRosaryClosingPrayersNestedInput
  }

  export type RosaryClosingPrayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryClosingPrayerCreateManyInput = {
    id?: number
    rosaryId: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryClosingPrayerUpdateManyMutationInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryClosingPrayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
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

  export type RosaryOpeningPrayerListRelationFilter = {
    every?: RosaryOpeningPrayerWhereInput
    some?: RosaryOpeningPrayerWhereInput
    none?: RosaryOpeningPrayerWhereInput
  }

  export type RosaryClosingPrayerListRelationFilter = {
    every?: RosaryClosingPrayerWhereInput
    some?: RosaryClosingPrayerWhereInput
    none?: RosaryClosingPrayerWhereInput
  }

  export type MysterySetItemPrayerListRelationFilter = {
    every?: MysterySetItemPrayerWhereInput
    some?: MysterySetItemPrayerWhereInput
    none?: MysterySetItemPrayerWhereInput
  }

  export type RosaryOpeningPrayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RosaryClosingPrayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MysterySetItemPrayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrayerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type PrayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrayerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type PrayerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type PrayerSumOrderByAggregateInput = {
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

  export type MysterySetItemListRelationFilter = {
    every?: MysterySetItemWhereInput
    some?: MysterySetItemWhereInput
    none?: MysterySetItemWhereInput
  }

  export type MysterySetItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MysteryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type MysteryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MysteryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type MysteryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type MysterySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RosaryListRelationFilter = {
    every?: RosaryWhereInput
    some?: RosaryWhereInput
    none?: RosaryWhereInput
  }

  export type RosaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MysterySetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    day?: SortOrder
  }

  export type MysterySetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MysterySetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    day?: SortOrder
  }

  export type MysterySetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    day?: SortOrder
  }

  export type MysterySetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MysteryScalarRelationFilter = {
    is?: MysteryWhereInput
    isNot?: MysteryWhereInput
  }

  export type MysterySetScalarRelationFilter = {
    is?: MysterySetWhereInput
    isNot?: MysterySetWhereInput
  }

  export type MysterySetItemCountOrderByAggregateInput = {
    id?: SortOrder
    mysteryId?: SortOrder
    mysterySetId?: SortOrder
    orderInSet?: SortOrder
  }

  export type MysterySetItemAvgOrderByAggregateInput = {
    id?: SortOrder
    mysteryId?: SortOrder
    mysterySetId?: SortOrder
    orderInSet?: SortOrder
  }

  export type MysterySetItemMaxOrderByAggregateInput = {
    id?: SortOrder
    mysteryId?: SortOrder
    mysterySetId?: SortOrder
    orderInSet?: SortOrder
  }

  export type MysterySetItemMinOrderByAggregateInput = {
    id?: SortOrder
    mysteryId?: SortOrder
    mysterySetId?: SortOrder
    orderInSet?: SortOrder
  }

  export type MysterySetItemSumOrderByAggregateInput = {
    id?: SortOrder
    mysteryId?: SortOrder
    mysterySetId?: SortOrder
    orderInSet?: SortOrder
  }

  export type PrayerScalarRelationFilter = {
    is?: PrayerWhereInput
    isNot?: PrayerWhereInput
  }

  export type MysterySetItemScalarRelationFilter = {
    is?: MysterySetItemWhereInput
    isNot?: MysterySetItemWhereInput
  }

  export type MysterySetItemPrayerCountOrderByAggregateInput = {
    id?: SortOrder
    orderInSequence?: SortOrder
    prayerId?: SortOrder
    mysterySetItemId?: SortOrder
  }

  export type MysterySetItemPrayerAvgOrderByAggregateInput = {
    id?: SortOrder
    orderInSequence?: SortOrder
    prayerId?: SortOrder
    mysterySetItemId?: SortOrder
  }

  export type MysterySetItemPrayerMaxOrderByAggregateInput = {
    id?: SortOrder
    orderInSequence?: SortOrder
    prayerId?: SortOrder
    mysterySetItemId?: SortOrder
  }

  export type MysterySetItemPrayerMinOrderByAggregateInput = {
    id?: SortOrder
    orderInSequence?: SortOrder
    prayerId?: SortOrder
    mysterySetItemId?: SortOrder
  }

  export type MysterySetItemPrayerSumOrderByAggregateInput = {
    id?: SortOrder
    orderInSequence?: SortOrder
    prayerId?: SortOrder
    mysterySetItemId?: SortOrder
  }

  export type RosaryCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    mysterySetId?: SortOrder
  }

  export type RosaryAvgOrderByAggregateInput = {
    id?: SortOrder
    mysterySetId?: SortOrder
  }

  export type RosaryMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    mysterySetId?: SortOrder
  }

  export type RosaryMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    mysterySetId?: SortOrder
  }

  export type RosarySumOrderByAggregateInput = {
    id?: SortOrder
    mysterySetId?: SortOrder
  }

  export type RosaryScalarRelationFilter = {
    is?: RosaryWhereInput
    isNot?: RosaryWhereInput
  }

  export type RosaryOpeningPrayerCountOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryOpeningPrayerAvgOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryOpeningPrayerMaxOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryOpeningPrayerMinOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryOpeningPrayerSumOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryClosingPrayerCountOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryClosingPrayerAvgOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryClosingPrayerMaxOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryClosingPrayerMinOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryClosingPrayerSumOrderByAggregateInput = {
    id?: SortOrder
    rosaryId?: SortOrder
    prayerId?: SortOrder
    orderInSet?: SortOrder
  }

  export type RosaryOpeningPrayerCreateNestedManyWithoutPrayerInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutPrayerInput, RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput> | RosaryOpeningPrayerCreateWithoutPrayerInput[] | RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput | RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput[]
    createMany?: RosaryOpeningPrayerCreateManyPrayerInputEnvelope
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
  }

  export type RosaryClosingPrayerCreateNestedManyWithoutPrayerInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutPrayerInput, RosaryClosingPrayerUncheckedCreateWithoutPrayerInput> | RosaryClosingPrayerCreateWithoutPrayerInput[] | RosaryClosingPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutPrayerInput | RosaryClosingPrayerCreateOrConnectWithoutPrayerInput[]
    createMany?: RosaryClosingPrayerCreateManyPrayerInputEnvelope
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
  }

  export type MysterySetItemPrayerCreateNestedManyWithoutPrayerInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutPrayerInput, MysterySetItemPrayerUncheckedCreateWithoutPrayerInput> | MysterySetItemPrayerCreateWithoutPrayerInput[] | MysterySetItemPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutPrayerInput | MysterySetItemPrayerCreateOrConnectWithoutPrayerInput[]
    createMany?: MysterySetItemPrayerCreateManyPrayerInputEnvelope
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
  }

  export type RosaryOpeningPrayerUncheckedCreateNestedManyWithoutPrayerInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutPrayerInput, RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput> | RosaryOpeningPrayerCreateWithoutPrayerInput[] | RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput | RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput[]
    createMany?: RosaryOpeningPrayerCreateManyPrayerInputEnvelope
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
  }

  export type RosaryClosingPrayerUncheckedCreateNestedManyWithoutPrayerInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutPrayerInput, RosaryClosingPrayerUncheckedCreateWithoutPrayerInput> | RosaryClosingPrayerCreateWithoutPrayerInput[] | RosaryClosingPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutPrayerInput | RosaryClosingPrayerCreateOrConnectWithoutPrayerInput[]
    createMany?: RosaryClosingPrayerCreateManyPrayerInputEnvelope
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
  }

  export type MysterySetItemPrayerUncheckedCreateNestedManyWithoutPrayerInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutPrayerInput, MysterySetItemPrayerUncheckedCreateWithoutPrayerInput> | MysterySetItemPrayerCreateWithoutPrayerInput[] | MysterySetItemPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutPrayerInput | MysterySetItemPrayerCreateOrConnectWithoutPrayerInput[]
    createMany?: MysterySetItemPrayerCreateManyPrayerInputEnvelope
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RosaryOpeningPrayerUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutPrayerInput, RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput> | RosaryOpeningPrayerCreateWithoutPrayerInput[] | RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput | RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput[]
    upsert?: RosaryOpeningPrayerUpsertWithWhereUniqueWithoutPrayerInput | RosaryOpeningPrayerUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: RosaryOpeningPrayerCreateManyPrayerInputEnvelope
    set?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    disconnect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    delete?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    update?: RosaryOpeningPrayerUpdateWithWhereUniqueWithoutPrayerInput | RosaryOpeningPrayerUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: RosaryOpeningPrayerUpdateManyWithWhereWithoutPrayerInput | RosaryOpeningPrayerUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: RosaryOpeningPrayerScalarWhereInput | RosaryOpeningPrayerScalarWhereInput[]
  }

  export type RosaryClosingPrayerUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutPrayerInput, RosaryClosingPrayerUncheckedCreateWithoutPrayerInput> | RosaryClosingPrayerCreateWithoutPrayerInput[] | RosaryClosingPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutPrayerInput | RosaryClosingPrayerCreateOrConnectWithoutPrayerInput[]
    upsert?: RosaryClosingPrayerUpsertWithWhereUniqueWithoutPrayerInput | RosaryClosingPrayerUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: RosaryClosingPrayerCreateManyPrayerInputEnvelope
    set?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    disconnect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    delete?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    update?: RosaryClosingPrayerUpdateWithWhereUniqueWithoutPrayerInput | RosaryClosingPrayerUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: RosaryClosingPrayerUpdateManyWithWhereWithoutPrayerInput | RosaryClosingPrayerUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: RosaryClosingPrayerScalarWhereInput | RosaryClosingPrayerScalarWhereInput[]
  }

  export type MysterySetItemPrayerUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutPrayerInput, MysterySetItemPrayerUncheckedCreateWithoutPrayerInput> | MysterySetItemPrayerCreateWithoutPrayerInput[] | MysterySetItemPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutPrayerInput | MysterySetItemPrayerCreateOrConnectWithoutPrayerInput[]
    upsert?: MysterySetItemPrayerUpsertWithWhereUniqueWithoutPrayerInput | MysterySetItemPrayerUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: MysterySetItemPrayerCreateManyPrayerInputEnvelope
    set?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    disconnect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    delete?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    update?: MysterySetItemPrayerUpdateWithWhereUniqueWithoutPrayerInput | MysterySetItemPrayerUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: MysterySetItemPrayerUpdateManyWithWhereWithoutPrayerInput | MysterySetItemPrayerUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: MysterySetItemPrayerScalarWhereInput | MysterySetItemPrayerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RosaryOpeningPrayerUncheckedUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutPrayerInput, RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput> | RosaryOpeningPrayerCreateWithoutPrayerInput[] | RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput | RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput[]
    upsert?: RosaryOpeningPrayerUpsertWithWhereUniqueWithoutPrayerInput | RosaryOpeningPrayerUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: RosaryOpeningPrayerCreateManyPrayerInputEnvelope
    set?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    disconnect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    delete?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    update?: RosaryOpeningPrayerUpdateWithWhereUniqueWithoutPrayerInput | RosaryOpeningPrayerUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: RosaryOpeningPrayerUpdateManyWithWhereWithoutPrayerInput | RosaryOpeningPrayerUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: RosaryOpeningPrayerScalarWhereInput | RosaryOpeningPrayerScalarWhereInput[]
  }

  export type RosaryClosingPrayerUncheckedUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutPrayerInput, RosaryClosingPrayerUncheckedCreateWithoutPrayerInput> | RosaryClosingPrayerCreateWithoutPrayerInput[] | RosaryClosingPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutPrayerInput | RosaryClosingPrayerCreateOrConnectWithoutPrayerInput[]
    upsert?: RosaryClosingPrayerUpsertWithWhereUniqueWithoutPrayerInput | RosaryClosingPrayerUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: RosaryClosingPrayerCreateManyPrayerInputEnvelope
    set?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    disconnect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    delete?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    update?: RosaryClosingPrayerUpdateWithWhereUniqueWithoutPrayerInput | RosaryClosingPrayerUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: RosaryClosingPrayerUpdateManyWithWhereWithoutPrayerInput | RosaryClosingPrayerUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: RosaryClosingPrayerScalarWhereInput | RosaryClosingPrayerScalarWhereInput[]
  }

  export type MysterySetItemPrayerUncheckedUpdateManyWithoutPrayerNestedInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutPrayerInput, MysterySetItemPrayerUncheckedCreateWithoutPrayerInput> | MysterySetItemPrayerCreateWithoutPrayerInput[] | MysterySetItemPrayerUncheckedCreateWithoutPrayerInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutPrayerInput | MysterySetItemPrayerCreateOrConnectWithoutPrayerInput[]
    upsert?: MysterySetItemPrayerUpsertWithWhereUniqueWithoutPrayerInput | MysterySetItemPrayerUpsertWithWhereUniqueWithoutPrayerInput[]
    createMany?: MysterySetItemPrayerCreateManyPrayerInputEnvelope
    set?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    disconnect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    delete?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    update?: MysterySetItemPrayerUpdateWithWhereUniqueWithoutPrayerInput | MysterySetItemPrayerUpdateWithWhereUniqueWithoutPrayerInput[]
    updateMany?: MysterySetItemPrayerUpdateManyWithWhereWithoutPrayerInput | MysterySetItemPrayerUpdateManyWithWhereWithoutPrayerInput[]
    deleteMany?: MysterySetItemPrayerScalarWhereInput | MysterySetItemPrayerScalarWhereInput[]
  }

  export type MysterySetItemCreateNestedManyWithoutMysteryInput = {
    create?: XOR<MysterySetItemCreateWithoutMysteryInput, MysterySetItemUncheckedCreateWithoutMysteryInput> | MysterySetItemCreateWithoutMysteryInput[] | MysterySetItemUncheckedCreateWithoutMysteryInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysteryInput | MysterySetItemCreateOrConnectWithoutMysteryInput[]
    createMany?: MysterySetItemCreateManyMysteryInputEnvelope
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
  }

  export type MysterySetItemUncheckedCreateNestedManyWithoutMysteryInput = {
    create?: XOR<MysterySetItemCreateWithoutMysteryInput, MysterySetItemUncheckedCreateWithoutMysteryInput> | MysterySetItemCreateWithoutMysteryInput[] | MysterySetItemUncheckedCreateWithoutMysteryInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysteryInput | MysterySetItemCreateOrConnectWithoutMysteryInput[]
    createMany?: MysterySetItemCreateManyMysteryInputEnvelope
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
  }

  export type MysterySetItemUpdateManyWithoutMysteryNestedInput = {
    create?: XOR<MysterySetItemCreateWithoutMysteryInput, MysterySetItemUncheckedCreateWithoutMysteryInput> | MysterySetItemCreateWithoutMysteryInput[] | MysterySetItemUncheckedCreateWithoutMysteryInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysteryInput | MysterySetItemCreateOrConnectWithoutMysteryInput[]
    upsert?: MysterySetItemUpsertWithWhereUniqueWithoutMysteryInput | MysterySetItemUpsertWithWhereUniqueWithoutMysteryInput[]
    createMany?: MysterySetItemCreateManyMysteryInputEnvelope
    set?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    disconnect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    delete?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    update?: MysterySetItemUpdateWithWhereUniqueWithoutMysteryInput | MysterySetItemUpdateWithWhereUniqueWithoutMysteryInput[]
    updateMany?: MysterySetItemUpdateManyWithWhereWithoutMysteryInput | MysterySetItemUpdateManyWithWhereWithoutMysteryInput[]
    deleteMany?: MysterySetItemScalarWhereInput | MysterySetItemScalarWhereInput[]
  }

  export type MysterySetItemUncheckedUpdateManyWithoutMysteryNestedInput = {
    create?: XOR<MysterySetItemCreateWithoutMysteryInput, MysterySetItemUncheckedCreateWithoutMysteryInput> | MysterySetItemCreateWithoutMysteryInput[] | MysterySetItemUncheckedCreateWithoutMysteryInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysteryInput | MysterySetItemCreateOrConnectWithoutMysteryInput[]
    upsert?: MysterySetItemUpsertWithWhereUniqueWithoutMysteryInput | MysterySetItemUpsertWithWhereUniqueWithoutMysteryInput[]
    createMany?: MysterySetItemCreateManyMysteryInputEnvelope
    set?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    disconnect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    delete?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    update?: MysterySetItemUpdateWithWhereUniqueWithoutMysteryInput | MysterySetItemUpdateWithWhereUniqueWithoutMysteryInput[]
    updateMany?: MysterySetItemUpdateManyWithWhereWithoutMysteryInput | MysterySetItemUpdateManyWithWhereWithoutMysteryInput[]
    deleteMany?: MysterySetItemScalarWhereInput | MysterySetItemScalarWhereInput[]
  }

  export type MysterySetItemCreateNestedManyWithoutMysterySetInput = {
    create?: XOR<MysterySetItemCreateWithoutMysterySetInput, MysterySetItemUncheckedCreateWithoutMysterySetInput> | MysterySetItemCreateWithoutMysterySetInput[] | MysterySetItemUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysterySetInput | MysterySetItemCreateOrConnectWithoutMysterySetInput[]
    createMany?: MysterySetItemCreateManyMysterySetInputEnvelope
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
  }

  export type RosaryCreateNestedManyWithoutMysterySetInput = {
    create?: XOR<RosaryCreateWithoutMysterySetInput, RosaryUncheckedCreateWithoutMysterySetInput> | RosaryCreateWithoutMysterySetInput[] | RosaryUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: RosaryCreateOrConnectWithoutMysterySetInput | RosaryCreateOrConnectWithoutMysterySetInput[]
    createMany?: RosaryCreateManyMysterySetInputEnvelope
    connect?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
  }

  export type MysterySetItemUncheckedCreateNestedManyWithoutMysterySetInput = {
    create?: XOR<MysterySetItemCreateWithoutMysterySetInput, MysterySetItemUncheckedCreateWithoutMysterySetInput> | MysterySetItemCreateWithoutMysterySetInput[] | MysterySetItemUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysterySetInput | MysterySetItemCreateOrConnectWithoutMysterySetInput[]
    createMany?: MysterySetItemCreateManyMysterySetInputEnvelope
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
  }

  export type RosaryUncheckedCreateNestedManyWithoutMysterySetInput = {
    create?: XOR<RosaryCreateWithoutMysterySetInput, RosaryUncheckedCreateWithoutMysterySetInput> | RosaryCreateWithoutMysterySetInput[] | RosaryUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: RosaryCreateOrConnectWithoutMysterySetInput | RosaryCreateOrConnectWithoutMysterySetInput[]
    createMany?: RosaryCreateManyMysterySetInputEnvelope
    connect?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
  }

  export type MysterySetItemUpdateManyWithoutMysterySetNestedInput = {
    create?: XOR<MysterySetItemCreateWithoutMysterySetInput, MysterySetItemUncheckedCreateWithoutMysterySetInput> | MysterySetItemCreateWithoutMysterySetInput[] | MysterySetItemUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysterySetInput | MysterySetItemCreateOrConnectWithoutMysterySetInput[]
    upsert?: MysterySetItemUpsertWithWhereUniqueWithoutMysterySetInput | MysterySetItemUpsertWithWhereUniqueWithoutMysterySetInput[]
    createMany?: MysterySetItemCreateManyMysterySetInputEnvelope
    set?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    disconnect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    delete?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    update?: MysterySetItemUpdateWithWhereUniqueWithoutMysterySetInput | MysterySetItemUpdateWithWhereUniqueWithoutMysterySetInput[]
    updateMany?: MysterySetItemUpdateManyWithWhereWithoutMysterySetInput | MysterySetItemUpdateManyWithWhereWithoutMysterySetInput[]
    deleteMany?: MysterySetItemScalarWhereInput | MysterySetItemScalarWhereInput[]
  }

  export type RosaryUpdateManyWithoutMysterySetNestedInput = {
    create?: XOR<RosaryCreateWithoutMysterySetInput, RosaryUncheckedCreateWithoutMysterySetInput> | RosaryCreateWithoutMysterySetInput[] | RosaryUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: RosaryCreateOrConnectWithoutMysterySetInput | RosaryCreateOrConnectWithoutMysterySetInput[]
    upsert?: RosaryUpsertWithWhereUniqueWithoutMysterySetInput | RosaryUpsertWithWhereUniqueWithoutMysterySetInput[]
    createMany?: RosaryCreateManyMysterySetInputEnvelope
    set?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    disconnect?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    delete?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    connect?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    update?: RosaryUpdateWithWhereUniqueWithoutMysterySetInput | RosaryUpdateWithWhereUniqueWithoutMysterySetInput[]
    updateMany?: RosaryUpdateManyWithWhereWithoutMysterySetInput | RosaryUpdateManyWithWhereWithoutMysterySetInput[]
    deleteMany?: RosaryScalarWhereInput | RosaryScalarWhereInput[]
  }

  export type MysterySetItemUncheckedUpdateManyWithoutMysterySetNestedInput = {
    create?: XOR<MysterySetItemCreateWithoutMysterySetInput, MysterySetItemUncheckedCreateWithoutMysterySetInput> | MysterySetItemCreateWithoutMysterySetInput[] | MysterySetItemUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutMysterySetInput | MysterySetItemCreateOrConnectWithoutMysterySetInput[]
    upsert?: MysterySetItemUpsertWithWhereUniqueWithoutMysterySetInput | MysterySetItemUpsertWithWhereUniqueWithoutMysterySetInput[]
    createMany?: MysterySetItemCreateManyMysterySetInputEnvelope
    set?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    disconnect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    delete?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    connect?: MysterySetItemWhereUniqueInput | MysterySetItemWhereUniqueInput[]
    update?: MysterySetItemUpdateWithWhereUniqueWithoutMysterySetInput | MysterySetItemUpdateWithWhereUniqueWithoutMysterySetInput[]
    updateMany?: MysterySetItemUpdateManyWithWhereWithoutMysterySetInput | MysterySetItemUpdateManyWithWhereWithoutMysterySetInput[]
    deleteMany?: MysterySetItemScalarWhereInput | MysterySetItemScalarWhereInput[]
  }

  export type RosaryUncheckedUpdateManyWithoutMysterySetNestedInput = {
    create?: XOR<RosaryCreateWithoutMysterySetInput, RosaryUncheckedCreateWithoutMysterySetInput> | RosaryCreateWithoutMysterySetInput[] | RosaryUncheckedCreateWithoutMysterySetInput[]
    connectOrCreate?: RosaryCreateOrConnectWithoutMysterySetInput | RosaryCreateOrConnectWithoutMysterySetInput[]
    upsert?: RosaryUpsertWithWhereUniqueWithoutMysterySetInput | RosaryUpsertWithWhereUniqueWithoutMysterySetInput[]
    createMany?: RosaryCreateManyMysterySetInputEnvelope
    set?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    disconnect?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    delete?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    connect?: RosaryWhereUniqueInput | RosaryWhereUniqueInput[]
    update?: RosaryUpdateWithWhereUniqueWithoutMysterySetInput | RosaryUpdateWithWhereUniqueWithoutMysterySetInput[]
    updateMany?: RosaryUpdateManyWithWhereWithoutMysterySetInput | RosaryUpdateManyWithWhereWithoutMysterySetInput[]
    deleteMany?: RosaryScalarWhereInput | RosaryScalarWhereInput[]
  }

  export type MysteryCreateNestedOneWithoutSetItemsInput = {
    create?: XOR<MysteryCreateWithoutSetItemsInput, MysteryUncheckedCreateWithoutSetItemsInput>
    connectOrCreate?: MysteryCreateOrConnectWithoutSetItemsInput
    connect?: MysteryWhereUniqueInput
  }

  export type MysterySetCreateNestedOneWithoutMysteriesInput = {
    create?: XOR<MysterySetCreateWithoutMysteriesInput, MysterySetUncheckedCreateWithoutMysteriesInput>
    connectOrCreate?: MysterySetCreateOrConnectWithoutMysteriesInput
    connect?: MysterySetWhereUniqueInput
  }

  export type MysterySetItemPrayerCreateNestedManyWithoutMysterySetItemInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput> | MysterySetItemPrayerCreateWithoutMysterySetItemInput[] | MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput | MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput[]
    createMany?: MysterySetItemPrayerCreateManyMysterySetItemInputEnvelope
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
  }

  export type MysterySetItemPrayerUncheckedCreateNestedManyWithoutMysterySetItemInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput> | MysterySetItemPrayerCreateWithoutMysterySetItemInput[] | MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput | MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput[]
    createMany?: MysterySetItemPrayerCreateManyMysterySetItemInputEnvelope
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
  }

  export type MysteryUpdateOneRequiredWithoutSetItemsNestedInput = {
    create?: XOR<MysteryCreateWithoutSetItemsInput, MysteryUncheckedCreateWithoutSetItemsInput>
    connectOrCreate?: MysteryCreateOrConnectWithoutSetItemsInput
    upsert?: MysteryUpsertWithoutSetItemsInput
    connect?: MysteryWhereUniqueInput
    update?: XOR<XOR<MysteryUpdateToOneWithWhereWithoutSetItemsInput, MysteryUpdateWithoutSetItemsInput>, MysteryUncheckedUpdateWithoutSetItemsInput>
  }

  export type MysterySetUpdateOneRequiredWithoutMysteriesNestedInput = {
    create?: XOR<MysterySetCreateWithoutMysteriesInput, MysterySetUncheckedCreateWithoutMysteriesInput>
    connectOrCreate?: MysterySetCreateOrConnectWithoutMysteriesInput
    upsert?: MysterySetUpsertWithoutMysteriesInput
    connect?: MysterySetWhereUniqueInput
    update?: XOR<XOR<MysterySetUpdateToOneWithWhereWithoutMysteriesInput, MysterySetUpdateWithoutMysteriesInput>, MysterySetUncheckedUpdateWithoutMysteriesInput>
  }

  export type MysterySetItemPrayerUpdateManyWithoutMysterySetItemNestedInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput> | MysterySetItemPrayerCreateWithoutMysterySetItemInput[] | MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput | MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput[]
    upsert?: MysterySetItemPrayerUpsertWithWhereUniqueWithoutMysterySetItemInput | MysterySetItemPrayerUpsertWithWhereUniqueWithoutMysterySetItemInput[]
    createMany?: MysterySetItemPrayerCreateManyMysterySetItemInputEnvelope
    set?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    disconnect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    delete?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    update?: MysterySetItemPrayerUpdateWithWhereUniqueWithoutMysterySetItemInput | MysterySetItemPrayerUpdateWithWhereUniqueWithoutMysterySetItemInput[]
    updateMany?: MysterySetItemPrayerUpdateManyWithWhereWithoutMysterySetItemInput | MysterySetItemPrayerUpdateManyWithWhereWithoutMysterySetItemInput[]
    deleteMany?: MysterySetItemPrayerScalarWhereInput | MysterySetItemPrayerScalarWhereInput[]
  }

  export type MysterySetItemPrayerUncheckedUpdateManyWithoutMysterySetItemNestedInput = {
    create?: XOR<MysterySetItemPrayerCreateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput> | MysterySetItemPrayerCreateWithoutMysterySetItemInput[] | MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput[]
    connectOrCreate?: MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput | MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput[]
    upsert?: MysterySetItemPrayerUpsertWithWhereUniqueWithoutMysterySetItemInput | MysterySetItemPrayerUpsertWithWhereUniqueWithoutMysterySetItemInput[]
    createMany?: MysterySetItemPrayerCreateManyMysterySetItemInputEnvelope
    set?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    disconnect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    delete?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    connect?: MysterySetItemPrayerWhereUniqueInput | MysterySetItemPrayerWhereUniqueInput[]
    update?: MysterySetItemPrayerUpdateWithWhereUniqueWithoutMysterySetItemInput | MysterySetItemPrayerUpdateWithWhereUniqueWithoutMysterySetItemInput[]
    updateMany?: MysterySetItemPrayerUpdateManyWithWhereWithoutMysterySetItemInput | MysterySetItemPrayerUpdateManyWithWhereWithoutMysterySetItemInput[]
    deleteMany?: MysterySetItemPrayerScalarWhereInput | MysterySetItemPrayerScalarWhereInput[]
  }

  export type PrayerCreateNestedOneWithoutMysterySetItemPrayersInput = {
    create?: XOR<PrayerCreateWithoutMysterySetItemPrayersInput, PrayerUncheckedCreateWithoutMysterySetItemPrayersInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutMysterySetItemPrayersInput
    connect?: PrayerWhereUniqueInput
  }

  export type MysterySetItemCreateNestedOneWithoutPrayersAfterInput = {
    create?: XOR<MysterySetItemCreateWithoutPrayersAfterInput, MysterySetItemUncheckedCreateWithoutPrayersAfterInput>
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutPrayersAfterInput
    connect?: MysterySetItemWhereUniqueInput
  }

  export type PrayerUpdateOneRequiredWithoutMysterySetItemPrayersNestedInput = {
    create?: XOR<PrayerCreateWithoutMysterySetItemPrayersInput, PrayerUncheckedCreateWithoutMysterySetItemPrayersInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutMysterySetItemPrayersInput
    upsert?: PrayerUpsertWithoutMysterySetItemPrayersInput
    connect?: PrayerWhereUniqueInput
    update?: XOR<XOR<PrayerUpdateToOneWithWhereWithoutMysterySetItemPrayersInput, PrayerUpdateWithoutMysterySetItemPrayersInput>, PrayerUncheckedUpdateWithoutMysterySetItemPrayersInput>
  }

  export type MysterySetItemUpdateOneRequiredWithoutPrayersAfterNestedInput = {
    create?: XOR<MysterySetItemCreateWithoutPrayersAfterInput, MysterySetItemUncheckedCreateWithoutPrayersAfterInput>
    connectOrCreate?: MysterySetItemCreateOrConnectWithoutPrayersAfterInput
    upsert?: MysterySetItemUpsertWithoutPrayersAfterInput
    connect?: MysterySetItemWhereUniqueInput
    update?: XOR<XOR<MysterySetItemUpdateToOneWithWhereWithoutPrayersAfterInput, MysterySetItemUpdateWithoutPrayersAfterInput>, MysterySetItemUncheckedUpdateWithoutPrayersAfterInput>
  }

  export type MysterySetCreateNestedOneWithoutRosariesInput = {
    create?: XOR<MysterySetCreateWithoutRosariesInput, MysterySetUncheckedCreateWithoutRosariesInput>
    connectOrCreate?: MysterySetCreateOrConnectWithoutRosariesInput
    connect?: MysterySetWhereUniqueInput
  }

  export type RosaryOpeningPrayerCreateNestedManyWithoutRosaryInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutRosaryInput, RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput> | RosaryOpeningPrayerCreateWithoutRosaryInput[] | RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput | RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput[]
    createMany?: RosaryOpeningPrayerCreateManyRosaryInputEnvelope
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
  }

  export type RosaryClosingPrayerCreateNestedManyWithoutRosaryInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutRosaryInput, RosaryClosingPrayerUncheckedCreateWithoutRosaryInput> | RosaryClosingPrayerCreateWithoutRosaryInput[] | RosaryClosingPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutRosaryInput | RosaryClosingPrayerCreateOrConnectWithoutRosaryInput[]
    createMany?: RosaryClosingPrayerCreateManyRosaryInputEnvelope
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
  }

  export type RosaryOpeningPrayerUncheckedCreateNestedManyWithoutRosaryInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutRosaryInput, RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput> | RosaryOpeningPrayerCreateWithoutRosaryInput[] | RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput | RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput[]
    createMany?: RosaryOpeningPrayerCreateManyRosaryInputEnvelope
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
  }

  export type RosaryClosingPrayerUncheckedCreateNestedManyWithoutRosaryInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutRosaryInput, RosaryClosingPrayerUncheckedCreateWithoutRosaryInput> | RosaryClosingPrayerCreateWithoutRosaryInput[] | RosaryClosingPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutRosaryInput | RosaryClosingPrayerCreateOrConnectWithoutRosaryInput[]
    createMany?: RosaryClosingPrayerCreateManyRosaryInputEnvelope
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
  }

  export type MysterySetUpdateOneRequiredWithoutRosariesNestedInput = {
    create?: XOR<MysterySetCreateWithoutRosariesInput, MysterySetUncheckedCreateWithoutRosariesInput>
    connectOrCreate?: MysterySetCreateOrConnectWithoutRosariesInput
    upsert?: MysterySetUpsertWithoutRosariesInput
    connect?: MysterySetWhereUniqueInput
    update?: XOR<XOR<MysterySetUpdateToOneWithWhereWithoutRosariesInput, MysterySetUpdateWithoutRosariesInput>, MysterySetUncheckedUpdateWithoutRosariesInput>
  }

  export type RosaryOpeningPrayerUpdateManyWithoutRosaryNestedInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutRosaryInput, RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput> | RosaryOpeningPrayerCreateWithoutRosaryInput[] | RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput | RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput[]
    upsert?: RosaryOpeningPrayerUpsertWithWhereUniqueWithoutRosaryInput | RosaryOpeningPrayerUpsertWithWhereUniqueWithoutRosaryInput[]
    createMany?: RosaryOpeningPrayerCreateManyRosaryInputEnvelope
    set?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    disconnect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    delete?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    update?: RosaryOpeningPrayerUpdateWithWhereUniqueWithoutRosaryInput | RosaryOpeningPrayerUpdateWithWhereUniqueWithoutRosaryInput[]
    updateMany?: RosaryOpeningPrayerUpdateManyWithWhereWithoutRosaryInput | RosaryOpeningPrayerUpdateManyWithWhereWithoutRosaryInput[]
    deleteMany?: RosaryOpeningPrayerScalarWhereInput | RosaryOpeningPrayerScalarWhereInput[]
  }

  export type RosaryClosingPrayerUpdateManyWithoutRosaryNestedInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutRosaryInput, RosaryClosingPrayerUncheckedCreateWithoutRosaryInput> | RosaryClosingPrayerCreateWithoutRosaryInput[] | RosaryClosingPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutRosaryInput | RosaryClosingPrayerCreateOrConnectWithoutRosaryInput[]
    upsert?: RosaryClosingPrayerUpsertWithWhereUniqueWithoutRosaryInput | RosaryClosingPrayerUpsertWithWhereUniqueWithoutRosaryInput[]
    createMany?: RosaryClosingPrayerCreateManyRosaryInputEnvelope
    set?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    disconnect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    delete?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    update?: RosaryClosingPrayerUpdateWithWhereUniqueWithoutRosaryInput | RosaryClosingPrayerUpdateWithWhereUniqueWithoutRosaryInput[]
    updateMany?: RosaryClosingPrayerUpdateManyWithWhereWithoutRosaryInput | RosaryClosingPrayerUpdateManyWithWhereWithoutRosaryInput[]
    deleteMany?: RosaryClosingPrayerScalarWhereInput | RosaryClosingPrayerScalarWhereInput[]
  }

  export type RosaryOpeningPrayerUncheckedUpdateManyWithoutRosaryNestedInput = {
    create?: XOR<RosaryOpeningPrayerCreateWithoutRosaryInput, RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput> | RosaryOpeningPrayerCreateWithoutRosaryInput[] | RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput | RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput[]
    upsert?: RosaryOpeningPrayerUpsertWithWhereUniqueWithoutRosaryInput | RosaryOpeningPrayerUpsertWithWhereUniqueWithoutRosaryInput[]
    createMany?: RosaryOpeningPrayerCreateManyRosaryInputEnvelope
    set?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    disconnect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    delete?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    connect?: RosaryOpeningPrayerWhereUniqueInput | RosaryOpeningPrayerWhereUniqueInput[]
    update?: RosaryOpeningPrayerUpdateWithWhereUniqueWithoutRosaryInput | RosaryOpeningPrayerUpdateWithWhereUniqueWithoutRosaryInput[]
    updateMany?: RosaryOpeningPrayerUpdateManyWithWhereWithoutRosaryInput | RosaryOpeningPrayerUpdateManyWithWhereWithoutRosaryInput[]
    deleteMany?: RosaryOpeningPrayerScalarWhereInput | RosaryOpeningPrayerScalarWhereInput[]
  }

  export type RosaryClosingPrayerUncheckedUpdateManyWithoutRosaryNestedInput = {
    create?: XOR<RosaryClosingPrayerCreateWithoutRosaryInput, RosaryClosingPrayerUncheckedCreateWithoutRosaryInput> | RosaryClosingPrayerCreateWithoutRosaryInput[] | RosaryClosingPrayerUncheckedCreateWithoutRosaryInput[]
    connectOrCreate?: RosaryClosingPrayerCreateOrConnectWithoutRosaryInput | RosaryClosingPrayerCreateOrConnectWithoutRosaryInput[]
    upsert?: RosaryClosingPrayerUpsertWithWhereUniqueWithoutRosaryInput | RosaryClosingPrayerUpsertWithWhereUniqueWithoutRosaryInput[]
    createMany?: RosaryClosingPrayerCreateManyRosaryInputEnvelope
    set?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    disconnect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    delete?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    connect?: RosaryClosingPrayerWhereUniqueInput | RosaryClosingPrayerWhereUniqueInput[]
    update?: RosaryClosingPrayerUpdateWithWhereUniqueWithoutRosaryInput | RosaryClosingPrayerUpdateWithWhereUniqueWithoutRosaryInput[]
    updateMany?: RosaryClosingPrayerUpdateManyWithWhereWithoutRosaryInput | RosaryClosingPrayerUpdateManyWithWhereWithoutRosaryInput[]
    deleteMany?: RosaryClosingPrayerScalarWhereInput | RosaryClosingPrayerScalarWhereInput[]
  }

  export type RosaryCreateNestedOneWithoutOpeningPrayersInput = {
    create?: XOR<RosaryCreateWithoutOpeningPrayersInput, RosaryUncheckedCreateWithoutOpeningPrayersInput>
    connectOrCreate?: RosaryCreateOrConnectWithoutOpeningPrayersInput
    connect?: RosaryWhereUniqueInput
  }

  export type PrayerCreateNestedOneWithoutRosaryOpeningPrayersInput = {
    create?: XOR<PrayerCreateWithoutRosaryOpeningPrayersInput, PrayerUncheckedCreateWithoutRosaryOpeningPrayersInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutRosaryOpeningPrayersInput
    connect?: PrayerWhereUniqueInput
  }

  export type RosaryUpdateOneRequiredWithoutOpeningPrayersNestedInput = {
    create?: XOR<RosaryCreateWithoutOpeningPrayersInput, RosaryUncheckedCreateWithoutOpeningPrayersInput>
    connectOrCreate?: RosaryCreateOrConnectWithoutOpeningPrayersInput
    upsert?: RosaryUpsertWithoutOpeningPrayersInput
    connect?: RosaryWhereUniqueInput
    update?: XOR<XOR<RosaryUpdateToOneWithWhereWithoutOpeningPrayersInput, RosaryUpdateWithoutOpeningPrayersInput>, RosaryUncheckedUpdateWithoutOpeningPrayersInput>
  }

  export type PrayerUpdateOneRequiredWithoutRosaryOpeningPrayersNestedInput = {
    create?: XOR<PrayerCreateWithoutRosaryOpeningPrayersInput, PrayerUncheckedCreateWithoutRosaryOpeningPrayersInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutRosaryOpeningPrayersInput
    upsert?: PrayerUpsertWithoutRosaryOpeningPrayersInput
    connect?: PrayerWhereUniqueInput
    update?: XOR<XOR<PrayerUpdateToOneWithWhereWithoutRosaryOpeningPrayersInput, PrayerUpdateWithoutRosaryOpeningPrayersInput>, PrayerUncheckedUpdateWithoutRosaryOpeningPrayersInput>
  }

  export type RosaryCreateNestedOneWithoutClosingPrayersInput = {
    create?: XOR<RosaryCreateWithoutClosingPrayersInput, RosaryUncheckedCreateWithoutClosingPrayersInput>
    connectOrCreate?: RosaryCreateOrConnectWithoutClosingPrayersInput
    connect?: RosaryWhereUniqueInput
  }

  export type PrayerCreateNestedOneWithoutRosaryClosingPrayersInput = {
    create?: XOR<PrayerCreateWithoutRosaryClosingPrayersInput, PrayerUncheckedCreateWithoutRosaryClosingPrayersInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutRosaryClosingPrayersInput
    connect?: PrayerWhereUniqueInput
  }

  export type RosaryUpdateOneRequiredWithoutClosingPrayersNestedInput = {
    create?: XOR<RosaryCreateWithoutClosingPrayersInput, RosaryUncheckedCreateWithoutClosingPrayersInput>
    connectOrCreate?: RosaryCreateOrConnectWithoutClosingPrayersInput
    upsert?: RosaryUpsertWithoutClosingPrayersInput
    connect?: RosaryWhereUniqueInput
    update?: XOR<XOR<RosaryUpdateToOneWithWhereWithoutClosingPrayersInput, RosaryUpdateWithoutClosingPrayersInput>, RosaryUncheckedUpdateWithoutClosingPrayersInput>
  }

  export type PrayerUpdateOneRequiredWithoutRosaryClosingPrayersNestedInput = {
    create?: XOR<PrayerCreateWithoutRosaryClosingPrayersInput, PrayerUncheckedCreateWithoutRosaryClosingPrayersInput>
    connectOrCreate?: PrayerCreateOrConnectWithoutRosaryClosingPrayersInput
    upsert?: PrayerUpsertWithoutRosaryClosingPrayersInput
    connect?: PrayerWhereUniqueInput
    update?: XOR<XOR<PrayerUpdateToOneWithWhereWithoutRosaryClosingPrayersInput, PrayerUpdateWithoutRosaryClosingPrayersInput>, PrayerUncheckedUpdateWithoutRosaryClosingPrayersInput>
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

  export type RosaryOpeningPrayerCreateWithoutPrayerInput = {
    orderInSet: number
    rosary: RosaryCreateNestedOneWithoutOpeningPrayersInput
  }

  export type RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput = {
    id?: number
    rosaryId: number
    orderInSet: number
  }

  export type RosaryOpeningPrayerCreateOrConnectWithoutPrayerInput = {
    where: RosaryOpeningPrayerWhereUniqueInput
    create: XOR<RosaryOpeningPrayerCreateWithoutPrayerInput, RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput>
  }

  export type RosaryOpeningPrayerCreateManyPrayerInputEnvelope = {
    data: RosaryOpeningPrayerCreateManyPrayerInput | RosaryOpeningPrayerCreateManyPrayerInput[]
    skipDuplicates?: boolean
  }

  export type RosaryClosingPrayerCreateWithoutPrayerInput = {
    orderInSet: number
    rosary: RosaryCreateNestedOneWithoutClosingPrayersInput
  }

  export type RosaryClosingPrayerUncheckedCreateWithoutPrayerInput = {
    id?: number
    rosaryId: number
    orderInSet: number
  }

  export type RosaryClosingPrayerCreateOrConnectWithoutPrayerInput = {
    where: RosaryClosingPrayerWhereUniqueInput
    create: XOR<RosaryClosingPrayerCreateWithoutPrayerInput, RosaryClosingPrayerUncheckedCreateWithoutPrayerInput>
  }

  export type RosaryClosingPrayerCreateManyPrayerInputEnvelope = {
    data: RosaryClosingPrayerCreateManyPrayerInput | RosaryClosingPrayerCreateManyPrayerInput[]
    skipDuplicates?: boolean
  }

  export type MysterySetItemPrayerCreateWithoutPrayerInput = {
    orderInSequence: number
    mysterySetItem: MysterySetItemCreateNestedOneWithoutPrayersAfterInput
  }

  export type MysterySetItemPrayerUncheckedCreateWithoutPrayerInput = {
    id?: number
    orderInSequence: number
    mysterySetItemId: number
  }

  export type MysterySetItemPrayerCreateOrConnectWithoutPrayerInput = {
    where: MysterySetItemPrayerWhereUniqueInput
    create: XOR<MysterySetItemPrayerCreateWithoutPrayerInput, MysterySetItemPrayerUncheckedCreateWithoutPrayerInput>
  }

  export type MysterySetItemPrayerCreateManyPrayerInputEnvelope = {
    data: MysterySetItemPrayerCreateManyPrayerInput | MysterySetItemPrayerCreateManyPrayerInput[]
    skipDuplicates?: boolean
  }

  export type RosaryOpeningPrayerUpsertWithWhereUniqueWithoutPrayerInput = {
    where: RosaryOpeningPrayerWhereUniqueInput
    update: XOR<RosaryOpeningPrayerUpdateWithoutPrayerInput, RosaryOpeningPrayerUncheckedUpdateWithoutPrayerInput>
    create: XOR<RosaryOpeningPrayerCreateWithoutPrayerInput, RosaryOpeningPrayerUncheckedCreateWithoutPrayerInput>
  }

  export type RosaryOpeningPrayerUpdateWithWhereUniqueWithoutPrayerInput = {
    where: RosaryOpeningPrayerWhereUniqueInput
    data: XOR<RosaryOpeningPrayerUpdateWithoutPrayerInput, RosaryOpeningPrayerUncheckedUpdateWithoutPrayerInput>
  }

  export type RosaryOpeningPrayerUpdateManyWithWhereWithoutPrayerInput = {
    where: RosaryOpeningPrayerScalarWhereInput
    data: XOR<RosaryOpeningPrayerUpdateManyMutationInput, RosaryOpeningPrayerUncheckedUpdateManyWithoutPrayerInput>
  }

  export type RosaryOpeningPrayerScalarWhereInput = {
    AND?: RosaryOpeningPrayerScalarWhereInput | RosaryOpeningPrayerScalarWhereInput[]
    OR?: RosaryOpeningPrayerScalarWhereInput[]
    NOT?: RosaryOpeningPrayerScalarWhereInput | RosaryOpeningPrayerScalarWhereInput[]
    id?: IntFilter<"RosaryOpeningPrayer"> | number
    rosaryId?: IntFilter<"RosaryOpeningPrayer"> | number
    prayerId?: IntFilter<"RosaryOpeningPrayer"> | number
    orderInSet?: IntFilter<"RosaryOpeningPrayer"> | number
  }

  export type RosaryClosingPrayerUpsertWithWhereUniqueWithoutPrayerInput = {
    where: RosaryClosingPrayerWhereUniqueInput
    update: XOR<RosaryClosingPrayerUpdateWithoutPrayerInput, RosaryClosingPrayerUncheckedUpdateWithoutPrayerInput>
    create: XOR<RosaryClosingPrayerCreateWithoutPrayerInput, RosaryClosingPrayerUncheckedCreateWithoutPrayerInput>
  }

  export type RosaryClosingPrayerUpdateWithWhereUniqueWithoutPrayerInput = {
    where: RosaryClosingPrayerWhereUniqueInput
    data: XOR<RosaryClosingPrayerUpdateWithoutPrayerInput, RosaryClosingPrayerUncheckedUpdateWithoutPrayerInput>
  }

  export type RosaryClosingPrayerUpdateManyWithWhereWithoutPrayerInput = {
    where: RosaryClosingPrayerScalarWhereInput
    data: XOR<RosaryClosingPrayerUpdateManyMutationInput, RosaryClosingPrayerUncheckedUpdateManyWithoutPrayerInput>
  }

  export type RosaryClosingPrayerScalarWhereInput = {
    AND?: RosaryClosingPrayerScalarWhereInput | RosaryClosingPrayerScalarWhereInput[]
    OR?: RosaryClosingPrayerScalarWhereInput[]
    NOT?: RosaryClosingPrayerScalarWhereInput | RosaryClosingPrayerScalarWhereInput[]
    id?: IntFilter<"RosaryClosingPrayer"> | number
    rosaryId?: IntFilter<"RosaryClosingPrayer"> | number
    prayerId?: IntFilter<"RosaryClosingPrayer"> | number
    orderInSet?: IntFilter<"RosaryClosingPrayer"> | number
  }

  export type MysterySetItemPrayerUpsertWithWhereUniqueWithoutPrayerInput = {
    where: MysterySetItemPrayerWhereUniqueInput
    update: XOR<MysterySetItemPrayerUpdateWithoutPrayerInput, MysterySetItemPrayerUncheckedUpdateWithoutPrayerInput>
    create: XOR<MysterySetItemPrayerCreateWithoutPrayerInput, MysterySetItemPrayerUncheckedCreateWithoutPrayerInput>
  }

  export type MysterySetItemPrayerUpdateWithWhereUniqueWithoutPrayerInput = {
    where: MysterySetItemPrayerWhereUniqueInput
    data: XOR<MysterySetItemPrayerUpdateWithoutPrayerInput, MysterySetItemPrayerUncheckedUpdateWithoutPrayerInput>
  }

  export type MysterySetItemPrayerUpdateManyWithWhereWithoutPrayerInput = {
    where: MysterySetItemPrayerScalarWhereInput
    data: XOR<MysterySetItemPrayerUpdateManyMutationInput, MysterySetItemPrayerUncheckedUpdateManyWithoutPrayerInput>
  }

  export type MysterySetItemPrayerScalarWhereInput = {
    AND?: MysterySetItemPrayerScalarWhereInput | MysterySetItemPrayerScalarWhereInput[]
    OR?: MysterySetItemPrayerScalarWhereInput[]
    NOT?: MysterySetItemPrayerScalarWhereInput | MysterySetItemPrayerScalarWhereInput[]
    id?: IntFilter<"MysterySetItemPrayer"> | number
    orderInSequence?: IntFilter<"MysterySetItemPrayer"> | number
    prayerId?: IntFilter<"MysterySetItemPrayer"> | number
    mysterySetItemId?: IntFilter<"MysterySetItemPrayer"> | number
  }

  export type MysterySetItemCreateWithoutMysteryInput = {
    orderInSet: number
    mysterySet: MysterySetCreateNestedOneWithoutMysteriesInput
    prayersAfter?: MysterySetItemPrayerCreateNestedManyWithoutMysterySetItemInput
  }

  export type MysterySetItemUncheckedCreateWithoutMysteryInput = {
    id?: number
    mysterySetId: number
    orderInSet: number
    prayersAfter?: MysterySetItemPrayerUncheckedCreateNestedManyWithoutMysterySetItemInput
  }

  export type MysterySetItemCreateOrConnectWithoutMysteryInput = {
    where: MysterySetItemWhereUniqueInput
    create: XOR<MysterySetItemCreateWithoutMysteryInput, MysterySetItemUncheckedCreateWithoutMysteryInput>
  }

  export type MysterySetItemCreateManyMysteryInputEnvelope = {
    data: MysterySetItemCreateManyMysteryInput | MysterySetItemCreateManyMysteryInput[]
    skipDuplicates?: boolean
  }

  export type MysterySetItemUpsertWithWhereUniqueWithoutMysteryInput = {
    where: MysterySetItemWhereUniqueInput
    update: XOR<MysterySetItemUpdateWithoutMysteryInput, MysterySetItemUncheckedUpdateWithoutMysteryInput>
    create: XOR<MysterySetItemCreateWithoutMysteryInput, MysterySetItemUncheckedCreateWithoutMysteryInput>
  }

  export type MysterySetItemUpdateWithWhereUniqueWithoutMysteryInput = {
    where: MysterySetItemWhereUniqueInput
    data: XOR<MysterySetItemUpdateWithoutMysteryInput, MysterySetItemUncheckedUpdateWithoutMysteryInput>
  }

  export type MysterySetItemUpdateManyWithWhereWithoutMysteryInput = {
    where: MysterySetItemScalarWhereInput
    data: XOR<MysterySetItemUpdateManyMutationInput, MysterySetItemUncheckedUpdateManyWithoutMysteryInput>
  }

  export type MysterySetItemScalarWhereInput = {
    AND?: MysterySetItemScalarWhereInput | MysterySetItemScalarWhereInput[]
    OR?: MysterySetItemScalarWhereInput[]
    NOT?: MysterySetItemScalarWhereInput | MysterySetItemScalarWhereInput[]
    id?: IntFilter<"MysterySetItem"> | number
    mysteryId?: IntFilter<"MysterySetItem"> | number
    mysterySetId?: IntFilter<"MysterySetItem"> | number
    orderInSet?: IntFilter<"MysterySetItem"> | number
  }

  export type MysterySetItemCreateWithoutMysterySetInput = {
    orderInSet: number
    mystery: MysteryCreateNestedOneWithoutSetItemsInput
    prayersAfter?: MysterySetItemPrayerCreateNestedManyWithoutMysterySetItemInput
  }

  export type MysterySetItemUncheckedCreateWithoutMysterySetInput = {
    id?: number
    mysteryId: number
    orderInSet: number
    prayersAfter?: MysterySetItemPrayerUncheckedCreateNestedManyWithoutMysterySetItemInput
  }

  export type MysterySetItemCreateOrConnectWithoutMysterySetInput = {
    where: MysterySetItemWhereUniqueInput
    create: XOR<MysterySetItemCreateWithoutMysterySetInput, MysterySetItemUncheckedCreateWithoutMysterySetInput>
  }

  export type MysterySetItemCreateManyMysterySetInputEnvelope = {
    data: MysterySetItemCreateManyMysterySetInput | MysterySetItemCreateManyMysterySetInput[]
    skipDuplicates?: boolean
  }

  export type RosaryCreateWithoutMysterySetInput = {
    day: string
    openingPrayers?: RosaryOpeningPrayerCreateNestedManyWithoutRosaryInput
    closingPrayers?: RosaryClosingPrayerCreateNestedManyWithoutRosaryInput
  }

  export type RosaryUncheckedCreateWithoutMysterySetInput = {
    id?: number
    day: string
    openingPrayers?: RosaryOpeningPrayerUncheckedCreateNestedManyWithoutRosaryInput
    closingPrayers?: RosaryClosingPrayerUncheckedCreateNestedManyWithoutRosaryInput
  }

  export type RosaryCreateOrConnectWithoutMysterySetInput = {
    where: RosaryWhereUniqueInput
    create: XOR<RosaryCreateWithoutMysterySetInput, RosaryUncheckedCreateWithoutMysterySetInput>
  }

  export type RosaryCreateManyMysterySetInputEnvelope = {
    data: RosaryCreateManyMysterySetInput | RosaryCreateManyMysterySetInput[]
    skipDuplicates?: boolean
  }

  export type MysterySetItemUpsertWithWhereUniqueWithoutMysterySetInput = {
    where: MysterySetItemWhereUniqueInput
    update: XOR<MysterySetItemUpdateWithoutMysterySetInput, MysterySetItemUncheckedUpdateWithoutMysterySetInput>
    create: XOR<MysterySetItemCreateWithoutMysterySetInput, MysterySetItemUncheckedCreateWithoutMysterySetInput>
  }

  export type MysterySetItemUpdateWithWhereUniqueWithoutMysterySetInput = {
    where: MysterySetItemWhereUniqueInput
    data: XOR<MysterySetItemUpdateWithoutMysterySetInput, MysterySetItemUncheckedUpdateWithoutMysterySetInput>
  }

  export type MysterySetItemUpdateManyWithWhereWithoutMysterySetInput = {
    where: MysterySetItemScalarWhereInput
    data: XOR<MysterySetItemUpdateManyMutationInput, MysterySetItemUncheckedUpdateManyWithoutMysterySetInput>
  }

  export type RosaryUpsertWithWhereUniqueWithoutMysterySetInput = {
    where: RosaryWhereUniqueInput
    update: XOR<RosaryUpdateWithoutMysterySetInput, RosaryUncheckedUpdateWithoutMysterySetInput>
    create: XOR<RosaryCreateWithoutMysterySetInput, RosaryUncheckedCreateWithoutMysterySetInput>
  }

  export type RosaryUpdateWithWhereUniqueWithoutMysterySetInput = {
    where: RosaryWhereUniqueInput
    data: XOR<RosaryUpdateWithoutMysterySetInput, RosaryUncheckedUpdateWithoutMysterySetInput>
  }

  export type RosaryUpdateManyWithWhereWithoutMysterySetInput = {
    where: RosaryScalarWhereInput
    data: XOR<RosaryUpdateManyMutationInput, RosaryUncheckedUpdateManyWithoutMysterySetInput>
  }

  export type RosaryScalarWhereInput = {
    AND?: RosaryScalarWhereInput | RosaryScalarWhereInput[]
    OR?: RosaryScalarWhereInput[]
    NOT?: RosaryScalarWhereInput | RosaryScalarWhereInput[]
    id?: IntFilter<"Rosary"> | number
    day?: StringFilter<"Rosary"> | string
    mysterySetId?: IntFilter<"Rosary"> | number
  }

  export type MysteryCreateWithoutSetItemsInput = {
    title: string
    content: string
  }

  export type MysteryUncheckedCreateWithoutSetItemsInput = {
    id?: number
    title: string
    content: string
  }

  export type MysteryCreateOrConnectWithoutSetItemsInput = {
    where: MysteryWhereUniqueInput
    create: XOR<MysteryCreateWithoutSetItemsInput, MysteryUncheckedCreateWithoutSetItemsInput>
  }

  export type MysterySetCreateWithoutMysteriesInput = {
    name: string
    day: string
    rosaries?: RosaryCreateNestedManyWithoutMysterySetInput
  }

  export type MysterySetUncheckedCreateWithoutMysteriesInput = {
    id?: number
    name: string
    day: string
    rosaries?: RosaryUncheckedCreateNestedManyWithoutMysterySetInput
  }

  export type MysterySetCreateOrConnectWithoutMysteriesInput = {
    where: MysterySetWhereUniqueInput
    create: XOR<MysterySetCreateWithoutMysteriesInput, MysterySetUncheckedCreateWithoutMysteriesInput>
  }

  export type MysterySetItemPrayerCreateWithoutMysterySetItemInput = {
    orderInSequence: number
    prayer: PrayerCreateNestedOneWithoutMysterySetItemPrayersInput
  }

  export type MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput = {
    id?: number
    orderInSequence: number
    prayerId: number
  }

  export type MysterySetItemPrayerCreateOrConnectWithoutMysterySetItemInput = {
    where: MysterySetItemPrayerWhereUniqueInput
    create: XOR<MysterySetItemPrayerCreateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput>
  }

  export type MysterySetItemPrayerCreateManyMysterySetItemInputEnvelope = {
    data: MysterySetItemPrayerCreateManyMysterySetItemInput | MysterySetItemPrayerCreateManyMysterySetItemInput[]
    skipDuplicates?: boolean
  }

  export type MysteryUpsertWithoutSetItemsInput = {
    update: XOR<MysteryUpdateWithoutSetItemsInput, MysteryUncheckedUpdateWithoutSetItemsInput>
    create: XOR<MysteryCreateWithoutSetItemsInput, MysteryUncheckedCreateWithoutSetItemsInput>
    where?: MysteryWhereInput
  }

  export type MysteryUpdateToOneWithWhereWithoutSetItemsInput = {
    where?: MysteryWhereInput
    data: XOR<MysteryUpdateWithoutSetItemsInput, MysteryUncheckedUpdateWithoutSetItemsInput>
  }

  export type MysteryUpdateWithoutSetItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MysteryUncheckedUpdateWithoutSetItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MysterySetUpsertWithoutMysteriesInput = {
    update: XOR<MysterySetUpdateWithoutMysteriesInput, MysterySetUncheckedUpdateWithoutMysteriesInput>
    create: XOR<MysterySetCreateWithoutMysteriesInput, MysterySetUncheckedCreateWithoutMysteriesInput>
    where?: MysterySetWhereInput
  }

  export type MysterySetUpdateToOneWithWhereWithoutMysteriesInput = {
    where?: MysterySetWhereInput
    data: XOR<MysterySetUpdateWithoutMysteriesInput, MysterySetUncheckedUpdateWithoutMysteriesInput>
  }

  export type MysterySetUpdateWithoutMysteriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    rosaries?: RosaryUpdateManyWithoutMysterySetNestedInput
  }

  export type MysterySetUncheckedUpdateWithoutMysteriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    rosaries?: RosaryUncheckedUpdateManyWithoutMysterySetNestedInput
  }

  export type MysterySetItemPrayerUpsertWithWhereUniqueWithoutMysterySetItemInput = {
    where: MysterySetItemPrayerWhereUniqueInput
    update: XOR<MysterySetItemPrayerUpdateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedUpdateWithoutMysterySetItemInput>
    create: XOR<MysterySetItemPrayerCreateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedCreateWithoutMysterySetItemInput>
  }

  export type MysterySetItemPrayerUpdateWithWhereUniqueWithoutMysterySetItemInput = {
    where: MysterySetItemPrayerWhereUniqueInput
    data: XOR<MysterySetItemPrayerUpdateWithoutMysterySetItemInput, MysterySetItemPrayerUncheckedUpdateWithoutMysterySetItemInput>
  }

  export type MysterySetItemPrayerUpdateManyWithWhereWithoutMysterySetItemInput = {
    where: MysterySetItemPrayerScalarWhereInput
    data: XOR<MysterySetItemPrayerUpdateManyMutationInput, MysterySetItemPrayerUncheckedUpdateManyWithoutMysterySetItemInput>
  }

  export type PrayerCreateWithoutMysterySetItemPrayersInput = {
    title: string
    content: string
    rosaryOpeningPrayers?: RosaryOpeningPrayerCreateNestedManyWithoutPrayerInput
    rosaryClosingPrayers?: RosaryClosingPrayerCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUncheckedCreateWithoutMysterySetItemPrayersInput = {
    id?: number
    title: string
    content: string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUncheckedCreateNestedManyWithoutPrayerInput
    rosaryClosingPrayers?: RosaryClosingPrayerUncheckedCreateNestedManyWithoutPrayerInput
  }

  export type PrayerCreateOrConnectWithoutMysterySetItemPrayersInput = {
    where: PrayerWhereUniqueInput
    create: XOR<PrayerCreateWithoutMysterySetItemPrayersInput, PrayerUncheckedCreateWithoutMysterySetItemPrayersInput>
  }

  export type MysterySetItemCreateWithoutPrayersAfterInput = {
    orderInSet: number
    mystery: MysteryCreateNestedOneWithoutSetItemsInput
    mysterySet: MysterySetCreateNestedOneWithoutMysteriesInput
  }

  export type MysterySetItemUncheckedCreateWithoutPrayersAfterInput = {
    id?: number
    mysteryId: number
    mysterySetId: number
    orderInSet: number
  }

  export type MysterySetItemCreateOrConnectWithoutPrayersAfterInput = {
    where: MysterySetItemWhereUniqueInput
    create: XOR<MysterySetItemCreateWithoutPrayersAfterInput, MysterySetItemUncheckedCreateWithoutPrayersAfterInput>
  }

  export type PrayerUpsertWithoutMysterySetItemPrayersInput = {
    update: XOR<PrayerUpdateWithoutMysterySetItemPrayersInput, PrayerUncheckedUpdateWithoutMysterySetItemPrayersInput>
    create: XOR<PrayerCreateWithoutMysterySetItemPrayersInput, PrayerUncheckedCreateWithoutMysterySetItemPrayersInput>
    where?: PrayerWhereInput
  }

  export type PrayerUpdateToOneWithWhereWithoutMysterySetItemPrayersInput = {
    where?: PrayerWhereInput
    data: XOR<PrayerUpdateWithoutMysterySetItemPrayersInput, PrayerUncheckedUpdateWithoutMysterySetItemPrayersInput>
  }

  export type PrayerUpdateWithoutMysterySetItemPrayersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUpdateManyWithoutPrayerNestedInput
    rosaryClosingPrayers?: RosaryClosingPrayerUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateWithoutMysterySetItemPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUncheckedUpdateManyWithoutPrayerNestedInput
    rosaryClosingPrayers?: RosaryClosingPrayerUncheckedUpdateManyWithoutPrayerNestedInput
  }

  export type MysterySetItemUpsertWithoutPrayersAfterInput = {
    update: XOR<MysterySetItemUpdateWithoutPrayersAfterInput, MysterySetItemUncheckedUpdateWithoutPrayersAfterInput>
    create: XOR<MysterySetItemCreateWithoutPrayersAfterInput, MysterySetItemUncheckedCreateWithoutPrayersAfterInput>
    where?: MysterySetItemWhereInput
  }

  export type MysterySetItemUpdateToOneWithWhereWithoutPrayersAfterInput = {
    where?: MysterySetItemWhereInput
    data: XOR<MysterySetItemUpdateWithoutPrayersAfterInput, MysterySetItemUncheckedUpdateWithoutPrayersAfterInput>
  }

  export type MysterySetItemUpdateWithoutPrayersAfterInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    mystery?: MysteryUpdateOneRequiredWithoutSetItemsNestedInput
    mysterySet?: MysterySetUpdateOneRequiredWithoutMysteriesNestedInput
  }

  export type MysterySetItemUncheckedUpdateWithoutPrayersAfterInput = {
    id?: IntFieldUpdateOperationsInput | number
    mysteryId?: IntFieldUpdateOperationsInput | number
    mysterySetId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetCreateWithoutRosariesInput = {
    name: string
    day: string
    mysteries?: MysterySetItemCreateNestedManyWithoutMysterySetInput
  }

  export type MysterySetUncheckedCreateWithoutRosariesInput = {
    id?: number
    name: string
    day: string
    mysteries?: MysterySetItemUncheckedCreateNestedManyWithoutMysterySetInput
  }

  export type MysterySetCreateOrConnectWithoutRosariesInput = {
    where: MysterySetWhereUniqueInput
    create: XOR<MysterySetCreateWithoutRosariesInput, MysterySetUncheckedCreateWithoutRosariesInput>
  }

  export type RosaryOpeningPrayerCreateWithoutRosaryInput = {
    orderInSet: number
    prayer: PrayerCreateNestedOneWithoutRosaryOpeningPrayersInput
  }

  export type RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput = {
    id?: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryOpeningPrayerCreateOrConnectWithoutRosaryInput = {
    where: RosaryOpeningPrayerWhereUniqueInput
    create: XOR<RosaryOpeningPrayerCreateWithoutRosaryInput, RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput>
  }

  export type RosaryOpeningPrayerCreateManyRosaryInputEnvelope = {
    data: RosaryOpeningPrayerCreateManyRosaryInput | RosaryOpeningPrayerCreateManyRosaryInput[]
    skipDuplicates?: boolean
  }

  export type RosaryClosingPrayerCreateWithoutRosaryInput = {
    orderInSet: number
    prayer: PrayerCreateNestedOneWithoutRosaryClosingPrayersInput
  }

  export type RosaryClosingPrayerUncheckedCreateWithoutRosaryInput = {
    id?: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryClosingPrayerCreateOrConnectWithoutRosaryInput = {
    where: RosaryClosingPrayerWhereUniqueInput
    create: XOR<RosaryClosingPrayerCreateWithoutRosaryInput, RosaryClosingPrayerUncheckedCreateWithoutRosaryInput>
  }

  export type RosaryClosingPrayerCreateManyRosaryInputEnvelope = {
    data: RosaryClosingPrayerCreateManyRosaryInput | RosaryClosingPrayerCreateManyRosaryInput[]
    skipDuplicates?: boolean
  }

  export type MysterySetUpsertWithoutRosariesInput = {
    update: XOR<MysterySetUpdateWithoutRosariesInput, MysterySetUncheckedUpdateWithoutRosariesInput>
    create: XOR<MysterySetCreateWithoutRosariesInput, MysterySetUncheckedCreateWithoutRosariesInput>
    where?: MysterySetWhereInput
  }

  export type MysterySetUpdateToOneWithWhereWithoutRosariesInput = {
    where?: MysterySetWhereInput
    data: XOR<MysterySetUpdateWithoutRosariesInput, MysterySetUncheckedUpdateWithoutRosariesInput>
  }

  export type MysterySetUpdateWithoutRosariesInput = {
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    mysteries?: MysterySetItemUpdateManyWithoutMysterySetNestedInput
  }

  export type MysterySetUncheckedUpdateWithoutRosariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    mysteries?: MysterySetItemUncheckedUpdateManyWithoutMysterySetNestedInput
  }

  export type RosaryOpeningPrayerUpsertWithWhereUniqueWithoutRosaryInput = {
    where: RosaryOpeningPrayerWhereUniqueInput
    update: XOR<RosaryOpeningPrayerUpdateWithoutRosaryInput, RosaryOpeningPrayerUncheckedUpdateWithoutRosaryInput>
    create: XOR<RosaryOpeningPrayerCreateWithoutRosaryInput, RosaryOpeningPrayerUncheckedCreateWithoutRosaryInput>
  }

  export type RosaryOpeningPrayerUpdateWithWhereUniqueWithoutRosaryInput = {
    where: RosaryOpeningPrayerWhereUniqueInput
    data: XOR<RosaryOpeningPrayerUpdateWithoutRosaryInput, RosaryOpeningPrayerUncheckedUpdateWithoutRosaryInput>
  }

  export type RosaryOpeningPrayerUpdateManyWithWhereWithoutRosaryInput = {
    where: RosaryOpeningPrayerScalarWhereInput
    data: XOR<RosaryOpeningPrayerUpdateManyMutationInput, RosaryOpeningPrayerUncheckedUpdateManyWithoutRosaryInput>
  }

  export type RosaryClosingPrayerUpsertWithWhereUniqueWithoutRosaryInput = {
    where: RosaryClosingPrayerWhereUniqueInput
    update: XOR<RosaryClosingPrayerUpdateWithoutRosaryInput, RosaryClosingPrayerUncheckedUpdateWithoutRosaryInput>
    create: XOR<RosaryClosingPrayerCreateWithoutRosaryInput, RosaryClosingPrayerUncheckedCreateWithoutRosaryInput>
  }

  export type RosaryClosingPrayerUpdateWithWhereUniqueWithoutRosaryInput = {
    where: RosaryClosingPrayerWhereUniqueInput
    data: XOR<RosaryClosingPrayerUpdateWithoutRosaryInput, RosaryClosingPrayerUncheckedUpdateWithoutRosaryInput>
  }

  export type RosaryClosingPrayerUpdateManyWithWhereWithoutRosaryInput = {
    where: RosaryClosingPrayerScalarWhereInput
    data: XOR<RosaryClosingPrayerUpdateManyMutationInput, RosaryClosingPrayerUncheckedUpdateManyWithoutRosaryInput>
  }

  export type RosaryCreateWithoutOpeningPrayersInput = {
    day: string
    mysterySet: MysterySetCreateNestedOneWithoutRosariesInput
    closingPrayers?: RosaryClosingPrayerCreateNestedManyWithoutRosaryInput
  }

  export type RosaryUncheckedCreateWithoutOpeningPrayersInput = {
    id?: number
    day: string
    mysterySetId: number
    closingPrayers?: RosaryClosingPrayerUncheckedCreateNestedManyWithoutRosaryInput
  }

  export type RosaryCreateOrConnectWithoutOpeningPrayersInput = {
    where: RosaryWhereUniqueInput
    create: XOR<RosaryCreateWithoutOpeningPrayersInput, RosaryUncheckedCreateWithoutOpeningPrayersInput>
  }

  export type PrayerCreateWithoutRosaryOpeningPrayersInput = {
    title: string
    content: string
    rosaryClosingPrayers?: RosaryClosingPrayerCreateNestedManyWithoutPrayerInput
    mysterySetItemPrayers?: MysterySetItemPrayerCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUncheckedCreateWithoutRosaryOpeningPrayersInput = {
    id?: number
    title: string
    content: string
    rosaryClosingPrayers?: RosaryClosingPrayerUncheckedCreateNestedManyWithoutPrayerInput
    mysterySetItemPrayers?: MysterySetItemPrayerUncheckedCreateNestedManyWithoutPrayerInput
  }

  export type PrayerCreateOrConnectWithoutRosaryOpeningPrayersInput = {
    where: PrayerWhereUniqueInput
    create: XOR<PrayerCreateWithoutRosaryOpeningPrayersInput, PrayerUncheckedCreateWithoutRosaryOpeningPrayersInput>
  }

  export type RosaryUpsertWithoutOpeningPrayersInput = {
    update: XOR<RosaryUpdateWithoutOpeningPrayersInput, RosaryUncheckedUpdateWithoutOpeningPrayersInput>
    create: XOR<RosaryCreateWithoutOpeningPrayersInput, RosaryUncheckedCreateWithoutOpeningPrayersInput>
    where?: RosaryWhereInput
  }

  export type RosaryUpdateToOneWithWhereWithoutOpeningPrayersInput = {
    where?: RosaryWhereInput
    data: XOR<RosaryUpdateWithoutOpeningPrayersInput, RosaryUncheckedUpdateWithoutOpeningPrayersInput>
  }

  export type RosaryUpdateWithoutOpeningPrayersInput = {
    day?: StringFieldUpdateOperationsInput | string
    mysterySet?: MysterySetUpdateOneRequiredWithoutRosariesNestedInput
    closingPrayers?: RosaryClosingPrayerUpdateManyWithoutRosaryNestedInput
  }

  export type RosaryUncheckedUpdateWithoutOpeningPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    mysterySetId?: IntFieldUpdateOperationsInput | number
    closingPrayers?: RosaryClosingPrayerUncheckedUpdateManyWithoutRosaryNestedInput
  }

  export type PrayerUpsertWithoutRosaryOpeningPrayersInput = {
    update: XOR<PrayerUpdateWithoutRosaryOpeningPrayersInput, PrayerUncheckedUpdateWithoutRosaryOpeningPrayersInput>
    create: XOR<PrayerCreateWithoutRosaryOpeningPrayersInput, PrayerUncheckedCreateWithoutRosaryOpeningPrayersInput>
    where?: PrayerWhereInput
  }

  export type PrayerUpdateToOneWithWhereWithoutRosaryOpeningPrayersInput = {
    where?: PrayerWhereInput
    data: XOR<PrayerUpdateWithoutRosaryOpeningPrayersInput, PrayerUncheckedUpdateWithoutRosaryOpeningPrayersInput>
  }

  export type PrayerUpdateWithoutRosaryOpeningPrayersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryClosingPrayers?: RosaryClosingPrayerUpdateManyWithoutPrayerNestedInput
    mysterySetItemPrayers?: MysterySetItemPrayerUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateWithoutRosaryOpeningPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryClosingPrayers?: RosaryClosingPrayerUncheckedUpdateManyWithoutPrayerNestedInput
    mysterySetItemPrayers?: MysterySetItemPrayerUncheckedUpdateManyWithoutPrayerNestedInput
  }

  export type RosaryCreateWithoutClosingPrayersInput = {
    day: string
    mysterySet: MysterySetCreateNestedOneWithoutRosariesInput
    openingPrayers?: RosaryOpeningPrayerCreateNestedManyWithoutRosaryInput
  }

  export type RosaryUncheckedCreateWithoutClosingPrayersInput = {
    id?: number
    day: string
    mysterySetId: number
    openingPrayers?: RosaryOpeningPrayerUncheckedCreateNestedManyWithoutRosaryInput
  }

  export type RosaryCreateOrConnectWithoutClosingPrayersInput = {
    where: RosaryWhereUniqueInput
    create: XOR<RosaryCreateWithoutClosingPrayersInput, RosaryUncheckedCreateWithoutClosingPrayersInput>
  }

  export type PrayerCreateWithoutRosaryClosingPrayersInput = {
    title: string
    content: string
    rosaryOpeningPrayers?: RosaryOpeningPrayerCreateNestedManyWithoutPrayerInput
    mysterySetItemPrayers?: MysterySetItemPrayerCreateNestedManyWithoutPrayerInput
  }

  export type PrayerUncheckedCreateWithoutRosaryClosingPrayersInput = {
    id?: number
    title: string
    content: string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUncheckedCreateNestedManyWithoutPrayerInput
    mysterySetItemPrayers?: MysterySetItemPrayerUncheckedCreateNestedManyWithoutPrayerInput
  }

  export type PrayerCreateOrConnectWithoutRosaryClosingPrayersInput = {
    where: PrayerWhereUniqueInput
    create: XOR<PrayerCreateWithoutRosaryClosingPrayersInput, PrayerUncheckedCreateWithoutRosaryClosingPrayersInput>
  }

  export type RosaryUpsertWithoutClosingPrayersInput = {
    update: XOR<RosaryUpdateWithoutClosingPrayersInput, RosaryUncheckedUpdateWithoutClosingPrayersInput>
    create: XOR<RosaryCreateWithoutClosingPrayersInput, RosaryUncheckedCreateWithoutClosingPrayersInput>
    where?: RosaryWhereInput
  }

  export type RosaryUpdateToOneWithWhereWithoutClosingPrayersInput = {
    where?: RosaryWhereInput
    data: XOR<RosaryUpdateWithoutClosingPrayersInput, RosaryUncheckedUpdateWithoutClosingPrayersInput>
  }

  export type RosaryUpdateWithoutClosingPrayersInput = {
    day?: StringFieldUpdateOperationsInput | string
    mysterySet?: MysterySetUpdateOneRequiredWithoutRosariesNestedInput
    openingPrayers?: RosaryOpeningPrayerUpdateManyWithoutRosaryNestedInput
  }

  export type RosaryUncheckedUpdateWithoutClosingPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    mysterySetId?: IntFieldUpdateOperationsInput | number
    openingPrayers?: RosaryOpeningPrayerUncheckedUpdateManyWithoutRosaryNestedInput
  }

  export type PrayerUpsertWithoutRosaryClosingPrayersInput = {
    update: XOR<PrayerUpdateWithoutRosaryClosingPrayersInput, PrayerUncheckedUpdateWithoutRosaryClosingPrayersInput>
    create: XOR<PrayerCreateWithoutRosaryClosingPrayersInput, PrayerUncheckedCreateWithoutRosaryClosingPrayersInput>
    where?: PrayerWhereInput
  }

  export type PrayerUpdateToOneWithWhereWithoutRosaryClosingPrayersInput = {
    where?: PrayerWhereInput
    data: XOR<PrayerUpdateWithoutRosaryClosingPrayersInput, PrayerUncheckedUpdateWithoutRosaryClosingPrayersInput>
  }

  export type PrayerUpdateWithoutRosaryClosingPrayersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUpdateManyWithoutPrayerNestedInput
    mysterySetItemPrayers?: MysterySetItemPrayerUpdateManyWithoutPrayerNestedInput
  }

  export type PrayerUncheckedUpdateWithoutRosaryClosingPrayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rosaryOpeningPrayers?: RosaryOpeningPrayerUncheckedUpdateManyWithoutPrayerNestedInput
    mysterySetItemPrayers?: MysterySetItemPrayerUncheckedUpdateManyWithoutPrayerNestedInput
  }

  export type RosaryOpeningPrayerCreateManyPrayerInput = {
    id?: number
    rosaryId: number
    orderInSet: number
  }

  export type RosaryClosingPrayerCreateManyPrayerInput = {
    id?: number
    rosaryId: number
    orderInSet: number
  }

  export type MysterySetItemPrayerCreateManyPrayerInput = {
    id?: number
    orderInSequence: number
    mysterySetItemId: number
  }

  export type RosaryOpeningPrayerUpdateWithoutPrayerInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    rosary?: RosaryUpdateOneRequiredWithoutOpeningPrayersNestedInput
  }

  export type RosaryOpeningPrayerUncheckedUpdateWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryOpeningPrayerUncheckedUpdateManyWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryClosingPrayerUpdateWithoutPrayerInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    rosary?: RosaryUpdateOneRequiredWithoutClosingPrayersNestedInput
  }

  export type RosaryClosingPrayerUncheckedUpdateWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryClosingPrayerUncheckedUpdateManyWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rosaryId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemPrayerUpdateWithoutPrayerInput = {
    orderInSequence?: IntFieldUpdateOperationsInput | number
    mysterySetItem?: MysterySetItemUpdateOneRequiredWithoutPrayersAfterNestedInput
  }

  export type MysterySetItemPrayerUncheckedUpdateWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderInSequence?: IntFieldUpdateOperationsInput | number
    mysterySetItemId?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemPrayerUncheckedUpdateManyWithoutPrayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderInSequence?: IntFieldUpdateOperationsInput | number
    mysterySetItemId?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemCreateManyMysteryInput = {
    id?: number
    mysterySetId: number
    orderInSet: number
  }

  export type MysterySetItemUpdateWithoutMysteryInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    mysterySet?: MysterySetUpdateOneRequiredWithoutMysteriesNestedInput
    prayersAfter?: MysterySetItemPrayerUpdateManyWithoutMysterySetItemNestedInput
  }

  export type MysterySetItemUncheckedUpdateWithoutMysteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    mysterySetId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
    prayersAfter?: MysterySetItemPrayerUncheckedUpdateManyWithoutMysterySetItemNestedInput
  }

  export type MysterySetItemUncheckedUpdateManyWithoutMysteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    mysterySetId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemCreateManyMysterySetInput = {
    id?: number
    mysteryId: number
    orderInSet: number
  }

  export type RosaryCreateManyMysterySetInput = {
    id?: number
    day: string
  }

  export type MysterySetItemUpdateWithoutMysterySetInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    mystery?: MysteryUpdateOneRequiredWithoutSetItemsNestedInput
    prayersAfter?: MysterySetItemPrayerUpdateManyWithoutMysterySetItemNestedInput
  }

  export type MysterySetItemUncheckedUpdateWithoutMysterySetInput = {
    id?: IntFieldUpdateOperationsInput | number
    mysteryId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
    prayersAfter?: MysterySetItemPrayerUncheckedUpdateManyWithoutMysterySetItemNestedInput
  }

  export type MysterySetItemUncheckedUpdateManyWithoutMysterySetInput = {
    id?: IntFieldUpdateOperationsInput | number
    mysteryId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryUpdateWithoutMysterySetInput = {
    day?: StringFieldUpdateOperationsInput | string
    openingPrayers?: RosaryOpeningPrayerUpdateManyWithoutRosaryNestedInput
    closingPrayers?: RosaryClosingPrayerUpdateManyWithoutRosaryNestedInput
  }

  export type RosaryUncheckedUpdateWithoutMysterySetInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    openingPrayers?: RosaryOpeningPrayerUncheckedUpdateManyWithoutRosaryNestedInput
    closingPrayers?: RosaryClosingPrayerUncheckedUpdateManyWithoutRosaryNestedInput
  }

  export type RosaryUncheckedUpdateManyWithoutMysterySetInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
  }

  export type MysterySetItemPrayerCreateManyMysterySetItemInput = {
    id?: number
    orderInSequence: number
    prayerId: number
  }

  export type MysterySetItemPrayerUpdateWithoutMysterySetItemInput = {
    orderInSequence?: IntFieldUpdateOperationsInput | number
    prayer?: PrayerUpdateOneRequiredWithoutMysterySetItemPrayersNestedInput
  }

  export type MysterySetItemPrayerUncheckedUpdateWithoutMysterySetItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderInSequence?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
  }

  export type MysterySetItemPrayerUncheckedUpdateManyWithoutMysterySetItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderInSequence?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryOpeningPrayerCreateManyRosaryInput = {
    id?: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryClosingPrayerCreateManyRosaryInput = {
    id?: number
    prayerId: number
    orderInSet: number
  }

  export type RosaryOpeningPrayerUpdateWithoutRosaryInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    prayer?: PrayerUpdateOneRequiredWithoutRosaryOpeningPrayersNestedInput
  }

  export type RosaryOpeningPrayerUncheckedUpdateWithoutRosaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryOpeningPrayerUncheckedUpdateManyWithoutRosaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryClosingPrayerUpdateWithoutRosaryInput = {
    orderInSet?: IntFieldUpdateOperationsInput | number
    prayer?: PrayerUpdateOneRequiredWithoutRosaryClosingPrayersNestedInput
  }

  export type RosaryClosingPrayerUncheckedUpdateWithoutRosaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
  }

  export type RosaryClosingPrayerUncheckedUpdateManyWithoutRosaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    prayerId?: IntFieldUpdateOperationsInput | number
    orderInSet?: IntFieldUpdateOperationsInput | number
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