
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Dispute
 * 
 */
export type Dispute = $Result.DefaultSelection<Prisma.$DisputePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const ProposalStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus]


export const ContractStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  DISPUTED: 'DISPUTED'
};

export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus]


export const MilestoneStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
};

export type MilestoneStatus = (typeof MilestoneStatus)[keyof typeof MilestoneStatus]


export const DisputeStatus: {
  OPEN: 'OPEN',
  RESOLVED: 'RESOLVED',
  CANCELLED: 'CANCELLED'
};

export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus]

}

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type ProposalStatus = $Enums.ProposalStatus

export const ProposalStatus: typeof $Enums.ProposalStatus

export type ContractStatus = $Enums.ContractStatus

export const ContractStatus: typeof $Enums.ContractStatus

export type MilestoneStatus = $Enums.MilestoneStatus

export const MilestoneStatus: typeof $Enums.MilestoneStatus

export type DisputeStatus = $Enums.DisputeStatus

export const DisputeStatus: typeof $Enums.DisputeStatus

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
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.dispute`: Exposes CRUD operations for the **Dispute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disputes
    * const disputes = await prisma.dispute.findMany()
    * ```
    */
  get dispute(): Prisma.DisputeDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Job: 'Job',
    Proposal: 'Proposal',
    Contract: 'Contract',
    Milestone: 'Milestone',
    Review: 'Review',
    Dispute: 'Dispute'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "job" | "proposal" | "contract" | "milestone" | "review" | "dispute"
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
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Dispute: {
        payload: Prisma.$DisputePayload<ExtArgs>
        fields: Prisma.DisputeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisputeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisputeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findFirst: {
            args: Prisma.DisputeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisputeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findMany: {
            args: Prisma.DisputeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          create: {
            args: Prisma.DisputeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          createMany: {
            args: Prisma.DisputeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisputeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          delete: {
            args: Prisma.DisputeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          update: {
            args: Prisma.DisputeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          deleteMany: {
            args: Prisma.DisputeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisputeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DisputeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          aggregate: {
            args: Prisma.DisputeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispute>
          }
          groupBy: {
            args: Prisma.DisputeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisputeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisputeCountArgs<ExtArgs>
            result: $Utils.Optional<DisputeCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobs: number
    proposals: number
    reviewsGiven: number
    reviewsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | UserCountOutputTypeCountJobsArgs
    proposals?: boolean | UserCountOutputTypeCountProposalsArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    proposals: number
    reviews: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | JobCountOutputTypeCountProposalsArgs
    reviews?: boolean | JobCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    milestones: number
    disputes: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | ContractCountOutputTypeCountMilestonesArgs
    disputes?: boolean | ContractCountOutputTypeCountDisputesArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    name: string | null
    email: string | null
    bio: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    name: string | null
    email: string | null
    bio: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    walletAddress: number
    name: number
    email: number
    bio: number
    skills: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    email?: true
    bio?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    email?: true
    bio?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    email?: true
    bio?: true
    skills?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    walletAddress: string
    name: string
    email: string
    bio: string | null
    skills: string[]
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    email?: boolean
    bio?: boolean
    skills?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobs?: boolean | User$jobsArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    email?: boolean
    bio?: boolean
    skills?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    email?: boolean
    bio?: boolean
    skills?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | User$jobsArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      name: string
      email: string
      bio: string | null
      skills: string[]
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends User$jobsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany"> | Null>
    proposals<T extends User$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, User$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany"> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly skills: FieldRef<"User", 'String[]'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.jobs
   */
  export type User$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * User.proposals
   */
  export type User$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    budget: number | null
  }

  export type JobSumAggregateOutputType = {
    budget: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    budget: number | null
    deadline: Date | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    budget: number | null
    deadline: Date | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    budget: number
    deadline: number
    status: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    budget?: true
  }

  export type JobSumAggregateInputType = {
    budget?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    budget?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    budget?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    budget?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string
    description: string
    budget: number
    deadline: Date
    status: $Enums.JobStatus
    createdAt: Date
    updatedAt: Date
    clientId: string
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposals?: boolean | Job$proposalsArgs<ExtArgs>
    contract?: boolean | Job$contractArgs<ExtArgs>
    reviews?: boolean | Job$reviewsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposals?: boolean | Job$proposalsArgs<ExtArgs>
    contract?: boolean | Job$contractArgs<ExtArgs>
    reviews?: boolean | Job$reviewsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      contract: Prisma.$ContractPayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      budget: number
      deadline: Date
      status: $Enums.JobStatus
      createdAt: Date
      updatedAt: Date
      clientId: string
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    proposals<T extends Job$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, Job$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany"> | Null>
    contract<T extends Job$contractArgs<ExtArgs> = {}>(args?: Subset<T, Job$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    reviews<T extends Job$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Job$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly budget: FieldRef<"Job", 'Float'>
    readonly deadline: FieldRef<"Job", 'DateTime'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
    readonly clientId: FieldRef<"Job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }

  /**
   * Job.proposals
   */
  export type Job$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Job.contract
   */
  export type Job$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * Job.reviews
   */
  export type Job$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    budget: number | null
  }

  export type ProposalSumAggregateOutputType = {
    budget: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    description: string | null
    budget: number | null
    deadline: Date | null
    status: $Enums.ProposalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    freelancerId: string | null
    jobId: string | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    description: string | null
    budget: number | null
    deadline: Date | null
    status: $Enums.ProposalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    freelancerId: string | null
    jobId: string | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    description: number
    budget: number
    deadline: number
    status: number
    createdAt: number
    updatedAt: number
    freelancerId: number
    jobId: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    budget?: true
  }

  export type ProposalSumAggregateInputType = {
    budget?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    description?: true
    budget?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    freelancerId?: true
    jobId?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    description?: true
    budget?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    freelancerId?: true
    jobId?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    description?: true
    budget?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    freelancerId?: true
    jobId?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    description: string
    budget: number
    deadline: Date
    status: $Enums.ProposalStatus
    createdAt: Date
    updatedAt: Date
    freelancerId: string
    jobId: string
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    budget?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    freelancerId?: boolean
    jobId?: boolean
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    contract?: boolean | Proposal$contractArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    budget?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    freelancerId?: boolean
    jobId?: boolean
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    description?: boolean
    budget?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    freelancerId?: boolean
    jobId?: boolean
  }

  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
    contract?: boolean | Proposal$contractArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      freelancer: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      budget: number
      deadline: Date
      status: $Enums.ProposalStatus
      createdAt: Date
      updatedAt: Date
      freelancerId: string
      jobId: string
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
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
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    freelancer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contract<T extends Proposal$contractArgs<ExtArgs> = {}>(args?: Subset<T, Proposal$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Proposal model
   */ 
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly description: FieldRef<"Proposal", 'String'>
    readonly budget: FieldRef<"Proposal", 'Float'>
    readonly deadline: FieldRef<"Proposal", 'DateTime'>
    readonly status: FieldRef<"Proposal", 'ProposalStatus'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
    readonly updatedAt: FieldRef<"Proposal", 'DateTime'>
    readonly freelancerId: FieldRef<"Proposal", 'String'>
    readonly jobId: FieldRef<"Proposal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
  }

  /**
   * Proposal.contract
   */
  export type Proposal$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    amount: number | null
  }

  export type ContractSumAggregateOutputType = {
    amount: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.ContractStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    jobId: string | null
    proposalId: string | null
    smartContract: string | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.ContractStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    jobId: string | null
    proposalId: string | null
    smartContract: string | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    jobId: number
    proposalId: number
    smartContract: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    amount?: true
  }

  export type ContractSumAggregateInputType = {
    amount?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    jobId?: true
    proposalId?: true
    smartContract?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    jobId?: true
    proposalId?: true
    smartContract?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    jobId?: true
    proposalId?: true
    smartContract?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    amount: number
    status: $Enums.ContractStatus
    createdAt: Date
    updatedAt: Date
    jobId: string
    proposalId: string
    smartContract: string
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobId?: boolean
    proposalId?: boolean
    smartContract?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    milestones?: boolean | Contract$milestonesArgs<ExtArgs>
    disputes?: boolean | Contract$disputesArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobId?: boolean
    proposalId?: boolean
    smartContract?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobId?: boolean
    proposalId?: boolean
    smartContract?: boolean
  }

  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    milestones?: boolean | Contract$milestonesArgs<ExtArgs>
    disputes?: boolean | Contract$disputesArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      proposal: Prisma.$ProposalPayload<ExtArgs>
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
      disputes: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      status: $Enums.ContractStatus
      createdAt: Date
      updatedAt: Date
      jobId: string
      proposalId: string
      smartContract: string
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    proposal<T extends ProposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProposalDefaultArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    milestones<T extends Contract$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Contract$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany"> | Null>
    disputes<T extends Contract$disputesArgs<ExtArgs> = {}>(args?: Subset<T, Contract$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly amount: FieldRef<"Contract", 'Float'>
    readonly status: FieldRef<"Contract", 'ContractStatus'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
    readonly jobId: FieldRef<"Contract", 'String'>
    readonly proposalId: FieldRef<"Contract", 'String'>
    readonly smartContract: FieldRef<"Contract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }

  /**
   * Contract.milestones
   */
  export type Contract$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Contract.disputes
   */
  export type Contract$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    amount: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    amount: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    amount: number | null
    status: $Enums.MilestoneStatus | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: string | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    amount: number | null
    status: $Enums.MilestoneStatus | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: string | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    title: number
    description: number
    amount: number
    status: number
    dueDate: number
    createdAt: number
    updatedAt: number
    contractId: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    amount?: true
  }

  export type MilestoneSumAggregateInputType = {
    amount?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    title: string
    description: string
    amount: number
    status: $Enums.MilestoneStatus
    dueDate: Date
    createdAt: Date
    updatedAt: Date
    contractId: string
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
  }

  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      amount: number
      status: $Enums.MilestoneStatus
      dueDate: Date
      createdAt: Date
      updatedAt: Date
      contractId: string
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
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
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Milestone model
   */ 
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly amount: FieldRef<"Milestone", 'Float'>
    readonly status: FieldRef<"Milestone", 'MilestoneStatus'>
    readonly dueDate: FieldRef<"Milestone", 'DateTime'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly updatedAt: FieldRef<"Milestone", 'DateTime'>
    readonly contractId: FieldRef<"Milestone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    reviewerId: string | null
    reviewedId: string | null
    jobId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    reviewerId: string | null
    reviewedId: string | null
    jobId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    createdAt: number
    reviewerId: number
    reviewedId: number
    jobId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    reviewerId?: true
    reviewedId?: true
    jobId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    reviewerId?: true
    reviewedId?: true
    jobId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    reviewerId?: true
    reviewedId?: true
    jobId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string
    createdAt: Date
    reviewerId: string
    reviewedId: string
    jobId: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewerId?: boolean
    reviewedId?: boolean
    jobId?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewed?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewerId?: boolean
    reviewedId?: boolean
    jobId?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewed?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewerId?: boolean
    reviewedId?: boolean
    jobId?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewed?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewed?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewer: Prisma.$UserPayload<ExtArgs>
      reviewed: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string
      createdAt: Date
      reviewerId: string
      reviewedId: string
      jobId: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reviewed<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly reviewedId: FieldRef<"Review", 'String'>
    readonly jobId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Dispute
   */

  export type AggregateDispute = {
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  export type DisputeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.DisputeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: string | null
  }

  export type DisputeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.DisputeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    contractId: string | null
  }

  export type DisputeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    contractId: number
    _all: number
  }


  export type DisputeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type DisputeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
  }

  export type DisputeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    contractId?: true
    _all?: true
  }

  export type DisputeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispute to aggregate.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disputes
    **/
    _count?: true | DisputeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputeMaxAggregateInputType
  }

  export type GetDisputeAggregateType<T extends DisputeAggregateArgs> = {
        [P in keyof T & keyof AggregateDispute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispute[P]>
      : GetScalarType<T[P], AggregateDispute[P]>
  }




  export type DisputeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithAggregationInput | DisputeOrderByWithAggregationInput[]
    by: DisputeScalarFieldEnum[] | DisputeScalarFieldEnum
    having?: DisputeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputeCountAggregateInputType | true
    _min?: DisputeMinAggregateInputType
    _max?: DisputeMaxAggregateInputType
  }

  export type DisputeGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.DisputeStatus
    createdAt: Date
    updatedAt: Date
    contractId: string
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  type GetDisputeGroupByPayload<T extends DisputeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputeGroupByOutputType[P]>
            : GetScalarType<T[P], DisputeGroupByOutputType[P]>
        }
      >
    >


  export type DisputeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contractId?: boolean
  }

  export type DisputeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type DisputeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $DisputePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispute"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.DisputeStatus
      createdAt: Date
      updatedAt: Date
      contractId: string
    }, ExtArgs["result"]["dispute"]>
    composites: {}
  }

  type DisputeGetPayload<S extends boolean | null | undefined | DisputeDefaultArgs> = $Result.GetResult<Prisma.$DisputePayload, S>

  type DisputeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DisputeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DisputeCountAggregateInputType | true
    }

  export interface DisputeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispute'], meta: { name: 'Dispute' } }
    /**
     * Find zero or one Dispute that matches the filter.
     * @param {DisputeFindUniqueArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisputeFindUniqueArgs>(args: SelectSubset<T, DisputeFindUniqueArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dispute that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DisputeFindUniqueOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisputeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisputeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dispute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisputeFindFirstArgs>(args?: SelectSubset<T, DisputeFindFirstArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dispute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisputeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisputeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Disputes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disputes
     * const disputes = await prisma.dispute.findMany()
     * 
     * // Get first 10 Disputes
     * const disputes = await prisma.dispute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputeWithIdOnly = await prisma.dispute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisputeFindManyArgs>(args?: SelectSubset<T, DisputeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dispute.
     * @param {DisputeCreateArgs} args - Arguments to create a Dispute.
     * @example
     * // Create one Dispute
     * const Dispute = await prisma.dispute.create({
     *   data: {
     *     // ... data to create a Dispute
     *   }
     * })
     * 
     */
    create<T extends DisputeCreateArgs>(args: SelectSubset<T, DisputeCreateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Disputes.
     * @param {DisputeCreateManyArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisputeCreateManyArgs>(args?: SelectSubset<T, DisputeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disputes and returns the data saved in the database.
     * @param {DisputeCreateManyAndReturnArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disputes and only return the `id`
     * const disputeWithIdOnly = await prisma.dispute.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisputeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisputeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dispute.
     * @param {DisputeDeleteArgs} args - Arguments to delete one Dispute.
     * @example
     * // Delete one Dispute
     * const Dispute = await prisma.dispute.delete({
     *   where: {
     *     // ... filter to delete one Dispute
     *   }
     * })
     * 
     */
    delete<T extends DisputeDeleteArgs>(args: SelectSubset<T, DisputeDeleteArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dispute.
     * @param {DisputeUpdateArgs} args - Arguments to update one Dispute.
     * @example
     * // Update one Dispute
     * const dispute = await prisma.dispute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisputeUpdateArgs>(args: SelectSubset<T, DisputeUpdateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Disputes.
     * @param {DisputeDeleteManyArgs} args - Arguments to filter Disputes to delete.
     * @example
     * // Delete a few Disputes
     * const { count } = await prisma.dispute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisputeDeleteManyArgs>(args?: SelectSubset<T, DisputeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisputeUpdateManyArgs>(args: SelectSubset<T, DisputeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispute.
     * @param {DisputeUpsertArgs} args - Arguments to update or create a Dispute.
     * @example
     * // Update or create a Dispute
     * const dispute = await prisma.dispute.upsert({
     *   create: {
     *     // ... data to create a Dispute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispute we want to update
     *   }
     * })
     */
    upsert<T extends DisputeUpsertArgs>(args: SelectSubset<T, DisputeUpsertArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeCountArgs} args - Arguments to filter Disputes to count.
     * @example
     * // Count the number of Disputes
     * const count = await prisma.dispute.count({
     *   where: {
     *     // ... the filter for the Disputes we want to count
     *   }
     * })
    **/
    count<T extends DisputeCountArgs>(
      args?: Subset<T, DisputeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisputeAggregateArgs>(args: Subset<T, DisputeAggregateArgs>): Prisma.PrismaPromise<GetDisputeAggregateType<T>>

    /**
     * Group by Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeGroupByArgs} args - Group by arguments.
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
      T extends DisputeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisputeGroupByArgs['orderBy'] }
        : { orderBy?: DisputeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisputeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispute model
   */
  readonly fields: DisputeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisputeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Dispute model
   */ 
  interface DisputeFieldRefs {
    readonly id: FieldRef<"Dispute", 'String'>
    readonly title: FieldRef<"Dispute", 'String'>
    readonly description: FieldRef<"Dispute", 'String'>
    readonly status: FieldRef<"Dispute", 'DisputeStatus'>
    readonly createdAt: FieldRef<"Dispute", 'DateTime'>
    readonly updatedAt: FieldRef<"Dispute", 'DateTime'>
    readonly contractId: FieldRef<"Dispute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dispute findUnique
   */
  export type DisputeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findUniqueOrThrow
   */
  export type DisputeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findFirst
   */
  export type DisputeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findFirstOrThrow
   */
  export type DisputeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findMany
   */
  export type DisputeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Disputes to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute create
   */
  export type DisputeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispute.
     */
    data: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
  }

  /**
   * Dispute createMany
   */
  export type DisputeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispute createManyAndReturn
   */
  export type DisputeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispute update
   */
  export type DisputeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispute.
     */
    data: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
    /**
     * Choose, which Dispute to update.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute updateMany
   */
  export type DisputeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
  }

  /**
   * Dispute upsert
   */
  export type DisputeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispute to update in case it exists.
     */
    where: DisputeWhereUniqueInput
    /**
     * In case the Dispute found by the `where` argument doesn't exist, create a new Dispute with this data.
     */
    create: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
    /**
     * In case the Dispute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
  }

  /**
   * Dispute delete
   */
  export type DisputeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter which Dispute to delete.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute deleteMany
   */
  export type DisputeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disputes to delete
     */
    where?: DisputeWhereInput
  }

  /**
   * Dispute without action
   */
  export type DisputeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    name: 'name',
    email: 'email',
    bio: 'bio',
    skills: 'skills',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    budget: 'budget',
    deadline: 'deadline',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    description: 'description',
    budget: 'budget',
    deadline: 'deadline',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    freelancerId: 'freelancerId',
    jobId: 'jobId'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    jobId: 'jobId',
    proposalId: 'proposalId',
    smartContract: 'smartContract'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    amount: 'amount',
    status: 'status',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contractId: 'contractId'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    reviewerId: 'reviewerId',
    reviewedId: 'reviewedId',
    jobId: 'jobId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const DisputeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contractId: 'contractId'
  };

  export type DisputeScalarFieldEnum = (typeof DisputeScalarFieldEnum)[keyof typeof DisputeScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'ProposalStatus'
   */
  export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>
    


  /**
   * Reference to a field of type 'ProposalStatus[]'
   */
  export type ListEnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus[]'>
    


  /**
   * Reference to a field of type 'ContractStatus'
   */
  export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>
    


  /**
   * Reference to a field of type 'ContractStatus[]'
   */
  export type ListEnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus[]'>
    


  /**
   * Reference to a field of type 'MilestoneStatus'
   */
  export type EnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus'>
    


  /**
   * Reference to a field of type 'MilestoneStatus[]'
   */
  export type ListEnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DisputeStatus'
   */
  export type EnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus'>
    


  /**
   * Reference to a field of type 'DisputeStatus[]'
   */
  export type ListEnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    walletAddress?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    rating?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobs?: JobListRelationFilter
    proposals?: ProposalListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobs?: JobOrderByRelationAggregateInput
    proposals?: ProposalOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    rating?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobs?: JobListRelationFilter
    proposals?: ProposalListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }, "id" | "walletAddress" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    rating?: FloatWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    budget?: FloatFilter<"Job"> | number
    deadline?: DateTimeFilter<"Job"> | Date | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    clientId?: StringFilter<"Job"> | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    proposals?: ProposalListRelationFilter
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
    reviews?: ReviewListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: UserOrderByWithRelationInput
    proposals?: ProposalOrderByRelationAggregateInput
    contract?: ContractOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    budget?: FloatFilter<"Job"> | number
    deadline?: DateTimeFilter<"Job"> | Date | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    clientId?: StringFilter<"Job"> | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    proposals?: ProposalListRelationFilter
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
    reviews?: ReviewListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringWithAggregatesFilter<"Job"> | string
    budget?: FloatWithAggregatesFilter<"Job"> | number
    deadline?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    clientId?: StringWithAggregatesFilter<"Job"> | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    budget?: FloatFilter<"Proposal"> | number
    deadline?: DateTimeFilter<"Proposal"> | Date | string
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    freelancerId?: StringFilter<"Proposal"> | string
    jobId?: StringFilter<"Proposal"> | string
    freelancer?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    freelancerId?: SortOrder
    jobId?: SortOrder
    freelancer?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
    contract?: ContractOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    description?: StringFilter<"Proposal"> | string
    budget?: FloatFilter<"Proposal"> | number
    deadline?: DateTimeFilter<"Proposal"> | Date | string
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    freelancerId?: StringFilter<"Proposal"> | string
    jobId?: StringFilter<"Proposal"> | string
    freelancer?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
    contract?: XOR<ContractNullableRelationFilter, ContractWhereInput> | null
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    freelancerId?: SortOrder
    jobId?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    description?: StringWithAggregatesFilter<"Proposal"> | string
    budget?: FloatWithAggregatesFilter<"Proposal"> | number
    deadline?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    status?: EnumProposalStatusWithAggregatesFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    freelancerId?: StringWithAggregatesFilter<"Proposal"> | string
    jobId?: StringWithAggregatesFilter<"Proposal"> | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    amount?: FloatFilter<"Contract"> | number
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    jobId?: StringFilter<"Contract"> | string
    proposalId?: StringFilter<"Contract"> | string
    smartContract?: StringFilter<"Contract"> | string
    job?: XOR<JobRelationFilter, JobWhereInput>
    proposal?: XOR<ProposalRelationFilter, ProposalWhereInput>
    milestones?: MilestoneListRelationFilter
    disputes?: DisputeListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobId?: SortOrder
    proposalId?: SortOrder
    smartContract?: SortOrder
    job?: JobOrderByWithRelationInput
    proposal?: ProposalOrderByWithRelationInput
    milestones?: MilestoneOrderByRelationAggregateInput
    disputes?: DisputeOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId?: string
    proposalId?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    amount?: FloatFilter<"Contract"> | number
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    smartContract?: StringFilter<"Contract"> | string
    job?: XOR<JobRelationFilter, JobWhereInput>
    proposal?: XOR<ProposalRelationFilter, ProposalWhereInput>
    milestones?: MilestoneListRelationFilter
    disputes?: DisputeListRelationFilter
  }, "id" | "jobId" | "proposalId">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobId?: SortOrder
    proposalId?: SortOrder
    smartContract?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    amount?: FloatWithAggregatesFilter<"Contract"> | number
    status?: EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    jobId?: StringWithAggregatesFilter<"Contract"> | string
    proposalId?: StringWithAggregatesFilter<"Contract"> | string
    smartContract?: StringWithAggregatesFilter<"Contract"> | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringFilter<"Milestone"> | string
    amount?: FloatFilter<"Milestone"> | number
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    dueDate?: DateTimeFilter<"Milestone"> | Date | string
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    contractId?: StringFilter<"Milestone"> | string
    contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    title?: StringFilter<"Milestone"> | string
    description?: StringFilter<"Milestone"> | string
    amount?: FloatFilter<"Milestone"> | number
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    dueDate?: DateTimeFilter<"Milestone"> | Date | string
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    contractId?: StringFilter<"Milestone"> | string
    contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    title?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringWithAggregatesFilter<"Milestone"> | string
    amount?: FloatWithAggregatesFilter<"Milestone"> | number
    status?: EnumMilestoneStatusWithAggregatesFilter<"Milestone"> | $Enums.MilestoneStatus
    dueDate?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    contractId?: StringWithAggregatesFilter<"Milestone"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewerId?: StringFilter<"Review"> | string
    reviewedId?: StringFilter<"Review"> | string
    jobId?: StringFilter<"Review"> | string
    reviewer?: XOR<UserRelationFilter, UserWhereInput>
    reviewed?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    reviewedId?: SortOrder
    jobId?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    reviewed?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewerId?: StringFilter<"Review"> | string
    reviewedId?: StringFilter<"Review"> | string
    jobId?: StringFilter<"Review"> | string
    reviewer?: XOR<UserRelationFilter, UserWhereInput>
    reviewed?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    reviewedId?: SortOrder
    jobId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    reviewedId?: StringWithAggregatesFilter<"Review"> | string
    jobId?: StringWithAggregatesFilter<"Review"> | string
  }

  export type DisputeWhereInput = {
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    id?: StringFilter<"Dispute"> | string
    title?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    contractId?: StringFilter<"Dispute"> | string
    contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }

  export type DisputeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type DisputeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    title?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    contractId?: StringFilter<"Dispute"> | string
    contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }, "id">

  export type DisputeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
    _count?: DisputeCountOrderByAggregateInput
    _max?: DisputeMaxOrderByAggregateInput
    _min?: DisputeMinOrderByAggregateInput
  }

  export type DisputeScalarWhereWithAggregatesInput = {
    AND?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    OR?: DisputeScalarWhereWithAggregatesInput[]
    NOT?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispute"> | string
    title?: StringWithAggregatesFilter<"Dispute"> | string
    description?: StringWithAggregatesFilter<"Dispute"> | string
    status?: EnumDisputeStatusWithAggregatesFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
    contractId?: StringWithAggregatesFilter<"Dispute"> | string
  }

  export type UserCreateInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutFreelancerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReviewedInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutFreelancerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReviewedInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutFreelancerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReviewedNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutFreelancerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReviewedNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutJobsInput
    proposals?: ProposalCreateNestedManyWithoutJobInput
    contract?: ContractCreateNestedOneWithoutJobInput
    reviews?: ReviewCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    proposals?: ProposalUncheckedCreateNestedManyWithoutJobInput
    contract?: ContractUncheckedCreateNestedOneWithoutJobInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutJobsNestedInput
    proposals?: ProposalUpdateManyWithoutJobNestedInput
    contract?: ContractUpdateOneWithoutJobNestedInput
    reviews?: ReviewUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposals?: ProposalUncheckedUpdateManyWithoutJobNestedInput
    contract?: ContractUncheckedUpdateOneWithoutJobNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalCreateInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancer: UserCreateNestedOneWithoutProposalsInput
    job: JobCreateNestedOneWithoutProposalsInput
    contract?: ContractCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancerId: string
    jobId: string
    contract?: ContractUncheckedCreateNestedOneWithoutProposalInput
  }

  export type ProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancer?: UserUpdateOneRequiredWithoutProposalsNestedInput
    job?: JobUpdateOneRequiredWithoutProposalsNestedInput
    contract?: ContractUpdateOneWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    contract?: ContractUncheckedUpdateOneWithoutProposalNestedInput
  }

  export type ProposalCreateManyInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancerId: string
    jobId: string
  }

  export type ProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    smartContract: string
    job: JobCreateNestedOneWithoutContractInput
    proposal: ProposalCreateNestedOneWithoutContractInput
    milestones?: MilestoneCreateNestedManyWithoutContractInput
    disputes?: DisputeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobId: string
    proposalId: string
    smartContract: string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutContractInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartContract?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutContractNestedInput
    proposal?: ProposalUpdateOneRequiredWithoutContractNestedInput
    milestones?: MilestoneUpdateManyWithoutContractNestedInput
    disputes?: DisputeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    smartContract?: StringFieldUpdateOperationsInput | string
    milestones?: MilestoneUncheckedUpdateManyWithoutContractNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobId: string
    proposalId: string
    smartContract: string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartContract?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    smartContract?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneCreateInput = {
    id?: string
    title: string
    description: string
    amount: number
    status?: $Enums.MilestoneStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    amount: number
    status?: $Enums.MilestoneStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: string
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneCreateManyInput = {
    id?: string
    title: string
    description: string
    amount: number
    status?: $Enums.MilestoneStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: string
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewed: UserCreateNestedOneWithoutReviewsReceivedInput
    job: JobCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewerId: string
    reviewedId: string
    jobId: string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewed?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    job?: JobUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    reviewedId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewerId: string
    reviewedId: string
    jobId: string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    reviewedId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type DisputeCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutDisputesInput
  }

  export type DisputeUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: string
  }

  export type DisputeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutDisputesNestedInput
  }

  export type DisputeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
  }

  export type DisputeCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contractId: string
  }

  export type DisputeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContractNullableRelationFilter = {
    is?: ContractWhereInput | null
    isNot?: ContractWhereInput | null
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type EnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type JobRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    freelancerId?: SortOrder
    jobId?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    freelancerId?: SortOrder
    jobId?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    freelancerId?: SortOrder
    jobId?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type EnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type EnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type ProposalRelationFilter = {
    is?: ProposalWhereInput
    isNot?: ProposalWhereInput
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type DisputeListRelationFilter = {
    every?: DisputeWhereInput
    some?: DisputeWhereInput
    none?: DisputeWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisputeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobId?: SortOrder
    proposalId?: SortOrder
    smartContract?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobId?: SortOrder
    proposalId?: SortOrder
    smartContract?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobId?: SortOrder
    proposalId?: SortOrder
    smartContract?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type EnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type ContractRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
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

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    reviewedId?: SortOrder
    jobId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    reviewedId?: SortOrder
    jobId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    reviewedId?: SortOrder
    jobId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type EnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }

  export type DisputeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type DisputeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type DisputeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contractId?: SortOrder
  }

  export type EnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type JobCreateNestedManyWithoutClientInput = {
    create?: XOR<JobCreateWithoutClientInput, JobUncheckedCreateWithoutClientInput> | JobCreateWithoutClientInput[] | JobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientInput | JobCreateOrConnectWithoutClientInput[]
    createMany?: JobCreateManyClientInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<ProposalCreateWithoutFreelancerInput, ProposalUncheckedCreateWithoutFreelancerInput> | ProposalCreateWithoutFreelancerInput[] | ProposalUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutFreelancerInput | ProposalCreateOrConnectWithoutFreelancerInput[]
    createMany?: ProposalCreateManyFreelancerInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewedInput = {
    create?: XOR<ReviewCreateWithoutReviewedInput, ReviewUncheckedCreateWithoutReviewedInput> | ReviewCreateWithoutReviewedInput[] | ReviewUncheckedCreateWithoutReviewedInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewedInput | ReviewCreateOrConnectWithoutReviewedInput[]
    createMany?: ReviewCreateManyReviewedInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<JobCreateWithoutClientInput, JobUncheckedCreateWithoutClientInput> | JobCreateWithoutClientInput[] | JobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientInput | JobCreateOrConnectWithoutClientInput[]
    createMany?: JobCreateManyClientInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<ProposalCreateWithoutFreelancerInput, ProposalUncheckedCreateWithoutFreelancerInput> | ProposalCreateWithoutFreelancerInput[] | ProposalUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutFreelancerInput | ProposalCreateOrConnectWithoutFreelancerInput[]
    createMany?: ProposalCreateManyFreelancerInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewedInput = {
    create?: XOR<ReviewCreateWithoutReviewedInput, ReviewUncheckedCreateWithoutReviewedInput> | ReviewCreateWithoutReviewedInput[] | ReviewUncheckedCreateWithoutReviewedInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewedInput | ReviewCreateOrConnectWithoutReviewedInput[]
    createMany?: ReviewCreateManyReviewedInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobCreateWithoutClientInput, JobUncheckedCreateWithoutClientInput> | JobCreateWithoutClientInput[] | JobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientInput | JobCreateOrConnectWithoutClientInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutClientInput | JobUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobCreateManyClientInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutClientInput | JobUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobUpdateManyWithWhereWithoutClientInput | JobUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<ProposalCreateWithoutFreelancerInput, ProposalUncheckedCreateWithoutFreelancerInput> | ProposalCreateWithoutFreelancerInput[] | ProposalUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutFreelancerInput | ProposalCreateOrConnectWithoutFreelancerInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutFreelancerInput | ProposalUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: ProposalCreateManyFreelancerInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutFreelancerInput | ProposalUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutFreelancerInput | ProposalUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewedNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewedInput, ReviewUncheckedCreateWithoutReviewedInput> | ReviewCreateWithoutReviewedInput[] | ReviewUncheckedCreateWithoutReviewedInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewedInput | ReviewCreateOrConnectWithoutReviewedInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewedInput | ReviewUpsertWithWhereUniqueWithoutReviewedInput[]
    createMany?: ReviewCreateManyReviewedInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewedInput | ReviewUpdateWithWhereUniqueWithoutReviewedInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewedInput | ReviewUpdateManyWithWhereWithoutReviewedInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobCreateWithoutClientInput, JobUncheckedCreateWithoutClientInput> | JobCreateWithoutClientInput[] | JobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobCreateOrConnectWithoutClientInput | JobCreateOrConnectWithoutClientInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutClientInput | JobUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobCreateManyClientInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutClientInput | JobUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobUpdateManyWithWhereWithoutClientInput | JobUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<ProposalCreateWithoutFreelancerInput, ProposalUncheckedCreateWithoutFreelancerInput> | ProposalCreateWithoutFreelancerInput[] | ProposalUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutFreelancerInput | ProposalCreateOrConnectWithoutFreelancerInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutFreelancerInput | ProposalUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: ProposalCreateManyFreelancerInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutFreelancerInput | ProposalUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutFreelancerInput | ProposalUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewedNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewedInput, ReviewUncheckedCreateWithoutReviewedInput> | ReviewCreateWithoutReviewedInput[] | ReviewUncheckedCreateWithoutReviewedInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewedInput | ReviewCreateOrConnectWithoutReviewedInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewedInput | ReviewUpsertWithWhereUniqueWithoutReviewedInput[]
    createMany?: ReviewCreateManyReviewedInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewedInput | ReviewUpdateWithWhereUniqueWithoutReviewedInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewedInput | ReviewUpdateManyWithWhereWithoutReviewedInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJobsInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutJobInput = {
    create?: XOR<ProposalCreateWithoutJobInput, ProposalUncheckedCreateWithoutJobInput> | ProposalCreateWithoutJobInput[] | ProposalUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutJobInput | ProposalCreateOrConnectWithoutJobInput[]
    createMany?: ProposalCreateManyJobInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ContractCreateNestedOneWithoutJobInput = {
    create?: XOR<ContractCreateWithoutJobInput, ContractUncheckedCreateWithoutJobInput>
    connectOrCreate?: ContractCreateOrConnectWithoutJobInput
    connect?: ContractWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutJobInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput> | ReviewCreateWithoutJobInput[] | ReviewUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput | ReviewCreateOrConnectWithoutJobInput[]
    createMany?: ReviewCreateManyJobInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ProposalCreateWithoutJobInput, ProposalUncheckedCreateWithoutJobInput> | ProposalCreateWithoutJobInput[] | ProposalUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutJobInput | ProposalCreateOrConnectWithoutJobInput[]
    createMany?: ProposalCreateManyJobInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<ContractCreateWithoutJobInput, ContractUncheckedCreateWithoutJobInput>
    connectOrCreate?: ContractCreateOrConnectWithoutJobInput
    connect?: ContractWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput> | ReviewCreateWithoutJobInput[] | ReviewUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput | ReviewCreateOrConnectWithoutJobInput[]
    createMany?: ReviewCreateManyJobInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type UserUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    upsert?: UserUpsertWithoutJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobsInput, UserUpdateWithoutJobsInput>, UserUncheckedUpdateWithoutJobsInput>
  }

  export type ProposalUpdateManyWithoutJobNestedInput = {
    create?: XOR<ProposalCreateWithoutJobInput, ProposalUncheckedCreateWithoutJobInput> | ProposalCreateWithoutJobInput[] | ProposalUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutJobInput | ProposalCreateOrConnectWithoutJobInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutJobInput | ProposalUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ProposalCreateManyJobInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutJobInput | ProposalUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutJobInput | ProposalUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ContractUpdateOneWithoutJobNestedInput = {
    create?: XOR<ContractCreateWithoutJobInput, ContractUncheckedCreateWithoutJobInput>
    connectOrCreate?: ContractCreateOrConnectWithoutJobInput
    upsert?: ContractUpsertWithoutJobInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutJobInput, ContractUpdateWithoutJobInput>, ContractUncheckedUpdateWithoutJobInput>
  }

  export type ReviewUpdateManyWithoutJobNestedInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput> | ReviewCreateWithoutJobInput[] | ReviewUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput | ReviewCreateOrConnectWithoutJobInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutJobInput | ReviewUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ReviewCreateManyJobInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutJobInput | ReviewUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutJobInput | ReviewUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ProposalCreateWithoutJobInput, ProposalUncheckedCreateWithoutJobInput> | ProposalCreateWithoutJobInput[] | ProposalUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutJobInput | ProposalCreateOrConnectWithoutJobInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutJobInput | ProposalUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ProposalCreateManyJobInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutJobInput | ProposalUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutJobInput | ProposalUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ContractUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<ContractCreateWithoutJobInput, ContractUncheckedCreateWithoutJobInput>
    connectOrCreate?: ContractCreateOrConnectWithoutJobInput
    upsert?: ContractUpsertWithoutJobInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutJobInput, ContractUpdateWithoutJobInput>, ContractUncheckedUpdateWithoutJobInput>
  }

  export type ReviewUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput> | ReviewCreateWithoutJobInput[] | ReviewUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutJobInput | ReviewCreateOrConnectWithoutJobInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutJobInput | ReviewUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ReviewCreateManyJobInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutJobInput | ReviewUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutJobInput | ReviewUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProposalsInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutProposalsInput = {
    create?: XOR<JobCreateWithoutProposalsInput, JobUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: JobCreateOrConnectWithoutProposalsInput
    connect?: JobWhereUniqueInput
  }

  export type ContractCreateNestedOneWithoutProposalInput = {
    create?: XOR<ContractCreateWithoutProposalInput, ContractUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ContractCreateOrConnectWithoutProposalInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUncheckedCreateNestedOneWithoutProposalInput = {
    create?: XOR<ContractCreateWithoutProposalInput, ContractUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ContractCreateOrConnectWithoutProposalInput
    connect?: ContractWhereUniqueInput
  }

  export type EnumProposalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProposalStatus
  }

  export type UserUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    upsert?: UserUpsertWithoutProposalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProposalsInput, UserUpdateWithoutProposalsInput>, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type JobUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<JobCreateWithoutProposalsInput, JobUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: JobCreateOrConnectWithoutProposalsInput
    upsert?: JobUpsertWithoutProposalsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutProposalsInput, JobUpdateWithoutProposalsInput>, JobUncheckedUpdateWithoutProposalsInput>
  }

  export type ContractUpdateOneWithoutProposalNestedInput = {
    create?: XOR<ContractCreateWithoutProposalInput, ContractUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ContractCreateOrConnectWithoutProposalInput
    upsert?: ContractUpsertWithoutProposalInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutProposalInput, ContractUpdateWithoutProposalInput>, ContractUncheckedUpdateWithoutProposalInput>
  }

  export type ContractUncheckedUpdateOneWithoutProposalNestedInput = {
    create?: XOR<ContractCreateWithoutProposalInput, ContractUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ContractCreateOrConnectWithoutProposalInput
    upsert?: ContractUpsertWithoutProposalInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutProposalInput, ContractUpdateWithoutProposalInput>, ContractUncheckedUpdateWithoutProposalInput>
  }

  export type JobCreateNestedOneWithoutContractInput = {
    create?: XOR<JobCreateWithoutContractInput, JobUncheckedCreateWithoutContractInput>
    connectOrCreate?: JobCreateOrConnectWithoutContractInput
    connect?: JobWhereUniqueInput
  }

  export type ProposalCreateNestedOneWithoutContractInput = {
    create?: XOR<ProposalCreateWithoutContractInput, ProposalUncheckedCreateWithoutContractInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutContractInput
    connect?: ProposalWhereUniqueInput
  }

  export type MilestoneCreateNestedManyWithoutContractInput = {
    create?: XOR<MilestoneCreateWithoutContractInput, MilestoneUncheckedCreateWithoutContractInput> | MilestoneCreateWithoutContractInput[] | MilestoneUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutContractInput | MilestoneCreateOrConnectWithoutContractInput[]
    createMany?: MilestoneCreateManyContractInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutContractInput = {
    create?: XOR<DisputeCreateWithoutContractInput, DisputeUncheckedCreateWithoutContractInput> | DisputeCreateWithoutContractInput[] | DisputeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutContractInput | DisputeCreateOrConnectWithoutContractInput[]
    createMany?: DisputeCreateManyContractInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<MilestoneCreateWithoutContractInput, MilestoneUncheckedCreateWithoutContractInput> | MilestoneCreateWithoutContractInput[] | MilestoneUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutContractInput | MilestoneCreateOrConnectWithoutContractInput[]
    createMany?: MilestoneCreateManyContractInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<DisputeCreateWithoutContractInput, DisputeUncheckedCreateWithoutContractInput> | DisputeCreateWithoutContractInput[] | DisputeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutContractInput | DisputeCreateOrConnectWithoutContractInput[]
    createMany?: DisputeCreateManyContractInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus
  }

  export type JobUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<JobCreateWithoutContractInput, JobUncheckedCreateWithoutContractInput>
    connectOrCreate?: JobCreateOrConnectWithoutContractInput
    upsert?: JobUpsertWithoutContractInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutContractInput, JobUpdateWithoutContractInput>, JobUncheckedUpdateWithoutContractInput>
  }

  export type ProposalUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<ProposalCreateWithoutContractInput, ProposalUncheckedCreateWithoutContractInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutContractInput
    upsert?: ProposalUpsertWithoutContractInput
    connect?: ProposalWhereUniqueInput
    update?: XOR<XOR<ProposalUpdateToOneWithWhereWithoutContractInput, ProposalUpdateWithoutContractInput>, ProposalUncheckedUpdateWithoutContractInput>
  }

  export type MilestoneUpdateManyWithoutContractNestedInput = {
    create?: XOR<MilestoneCreateWithoutContractInput, MilestoneUncheckedCreateWithoutContractInput> | MilestoneCreateWithoutContractInput[] | MilestoneUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutContractInput | MilestoneCreateOrConnectWithoutContractInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutContractInput | MilestoneUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MilestoneCreateManyContractInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutContractInput | MilestoneUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutContractInput | MilestoneUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutContractNestedInput = {
    create?: XOR<DisputeCreateWithoutContractInput, DisputeUncheckedCreateWithoutContractInput> | DisputeCreateWithoutContractInput[] | DisputeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutContractInput | DisputeCreateOrConnectWithoutContractInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutContractInput | DisputeUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: DisputeCreateManyContractInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutContractInput | DisputeUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutContractInput | DisputeUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<MilestoneCreateWithoutContractInput, MilestoneUncheckedCreateWithoutContractInput> | MilestoneCreateWithoutContractInput[] | MilestoneUncheckedCreateWithoutContractInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutContractInput | MilestoneCreateOrConnectWithoutContractInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutContractInput | MilestoneUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: MilestoneCreateManyContractInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutContractInput | MilestoneUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutContractInput | MilestoneUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<DisputeCreateWithoutContractInput, DisputeUncheckedCreateWithoutContractInput> | DisputeCreateWithoutContractInput[] | DisputeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutContractInput | DisputeCreateOrConnectWithoutContractInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutContractInput | DisputeUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: DisputeCreateManyContractInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutContractInput | DisputeUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutContractInput | DisputeUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<ContractCreateWithoutMilestonesInput, ContractUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMilestonesInput
    connect?: ContractWhereUniqueInput
  }

  export type EnumMilestoneStatusFieldUpdateOperationsInput = {
    set?: $Enums.MilestoneStatus
  }

  export type ContractUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<ContractCreateWithoutMilestonesInput, ContractUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutMilestonesInput
    upsert?: ContractUpsertWithoutMilestonesInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutMilestonesInput, ContractUpdateWithoutMilestonesInput>, ContractUncheckedUpdateWithoutMilestonesInput>
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutReviewsInput = {
    create?: XOR<JobCreateWithoutReviewsInput, JobUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: JobCreateOrConnectWithoutReviewsInput
    connect?: JobWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type JobUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<JobCreateWithoutReviewsInput, JobUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: JobCreateOrConnectWithoutReviewsInput
    upsert?: JobUpsertWithoutReviewsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutReviewsInput, JobUpdateWithoutReviewsInput>, JobUncheckedUpdateWithoutReviewsInput>
  }

  export type ContractCreateNestedOneWithoutDisputesInput = {
    create?: XOR<ContractCreateWithoutDisputesInput, ContractUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDisputesInput
    connect?: ContractWhereUniqueInput
  }

  export type EnumDisputeStatusFieldUpdateOperationsInput = {
    set?: $Enums.DisputeStatus
  }

  export type ContractUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<ContractCreateWithoutDisputesInput, ContractUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDisputesInput
    upsert?: ContractUpsertWithoutDisputesInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutDisputesInput, ContractUpdateWithoutDisputesInput>, ContractUncheckedUpdateWithoutDisputesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type NestedEnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type NestedEnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractStatus[] | ListEnumContractStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type NestedEnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
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

  export type NestedEnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }

  export type NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type JobCreateWithoutClientInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalCreateNestedManyWithoutJobInput
    contract?: ContractCreateNestedOneWithoutJobInput
    reviews?: ReviewCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutClientInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutJobInput
    contract?: ContractUncheckedCreateNestedOneWithoutJobInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutClientInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutClientInput, JobUncheckedCreateWithoutClientInput>
  }

  export type JobCreateManyClientInputEnvelope = {
    data: JobCreateManyClientInput | JobCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutFreelancerInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutProposalsInput
    contract?: ContractCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutFreelancerInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobId: string
    contract?: ContractUncheckedCreateNestedOneWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutFreelancerInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutFreelancerInput, ProposalUncheckedCreateWithoutFreelancerInput>
  }

  export type ProposalCreateManyFreelancerInputEnvelope = {
    data: ProposalCreateManyFreelancerInput | ProposalCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewed: UserCreateNestedOneWithoutReviewsReceivedInput
    job: JobCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewedId: string
    jobId: string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewedInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    job: JobCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewedInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewerId: string
    jobId: string
  }

  export type ReviewCreateOrConnectWithoutReviewedInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewedInput, ReviewUncheckedCreateWithoutReviewedInput>
  }

  export type ReviewCreateManyReviewedInputEnvelope = {
    data: ReviewCreateManyReviewedInput | ReviewCreateManyReviewedInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutClientInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutClientInput, JobUncheckedUpdateWithoutClientInput>
    create: XOR<JobCreateWithoutClientInput, JobUncheckedCreateWithoutClientInput>
  }

  export type JobUpdateWithWhereUniqueWithoutClientInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutClientInput, JobUncheckedUpdateWithoutClientInput>
  }

  export type JobUpdateManyWithWhereWithoutClientInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutClientInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    budget?: FloatFilter<"Job"> | number
    deadline?: DateTimeFilter<"Job"> | Date | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    clientId?: StringFilter<"Job"> | string
  }

  export type ProposalUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutFreelancerInput, ProposalUncheckedUpdateWithoutFreelancerInput>
    create: XOR<ProposalCreateWithoutFreelancerInput, ProposalUncheckedCreateWithoutFreelancerInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutFreelancerInput, ProposalUncheckedUpdateWithoutFreelancerInput>
  }

  export type ProposalUpdateManyWithWhereWithoutFreelancerInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    budget?: FloatFilter<"Proposal"> | number
    deadline?: DateTimeFilter<"Proposal"> | Date | string
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    freelancerId?: StringFilter<"Proposal"> | string
    jobId?: StringFilter<"Proposal"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewerId?: StringFilter<"Review"> | string
    reviewedId?: StringFilter<"Review"> | string
    jobId?: StringFilter<"Review"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewedInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewedInput, ReviewUncheckedUpdateWithoutReviewedInput>
    create: XOR<ReviewCreateWithoutReviewedInput, ReviewUncheckedCreateWithoutReviewedInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewedInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewedInput, ReviewUncheckedUpdateWithoutReviewedInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewedInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewedInput>
  }

  export type UserCreateWithoutJobsInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalCreateNestedManyWithoutFreelancerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReviewedInput
  }

  export type UserUncheckedCreateWithoutJobsInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutFreelancerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReviewedInput
  }

  export type UserCreateOrConnectWithoutJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
  }

  export type ProposalCreateWithoutJobInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancer: UserCreateNestedOneWithoutProposalsInput
    contract?: ContractCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutJobInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancerId: string
    contract?: ContractUncheckedCreateNestedOneWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutJobInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutJobInput, ProposalUncheckedCreateWithoutJobInput>
  }

  export type ProposalCreateManyJobInputEnvelope = {
    data: ProposalCreateManyJobInput | ProposalCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutJobInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    smartContract: string
    proposal: ProposalCreateNestedOneWithoutContractInput
    milestones?: MilestoneCreateNestedManyWithoutContractInput
    disputes?: DisputeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutJobInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    proposalId: string
    smartContract: string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutContractInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutJobInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutJobInput, ContractUncheckedCreateWithoutJobInput>
  }

  export type ReviewCreateWithoutJobInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewed: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutJobInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewerId: string
    reviewedId: string
  }

  export type ReviewCreateOrConnectWithoutJobInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
  }

  export type ReviewCreateManyJobInputEnvelope = {
    data: ReviewCreateManyJobInput | ReviewCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJobsInput = {
    update: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
  }

  export type UserUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUpdateManyWithoutFreelancerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReviewedNestedInput
  }

  export type UserUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutFreelancerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReviewedNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutJobInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutJobInput, ProposalUncheckedUpdateWithoutJobInput>
    create: XOR<ProposalCreateWithoutJobInput, ProposalUncheckedCreateWithoutJobInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutJobInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutJobInput, ProposalUncheckedUpdateWithoutJobInput>
  }

  export type ProposalUpdateManyWithWhereWithoutJobInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutJobInput>
  }

  export type ContractUpsertWithoutJobInput = {
    update: XOR<ContractUpdateWithoutJobInput, ContractUncheckedUpdateWithoutJobInput>
    create: XOR<ContractCreateWithoutJobInput, ContractUncheckedCreateWithoutJobInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutJobInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutJobInput, ContractUncheckedUpdateWithoutJobInput>
  }

  export type ContractUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartContract?: StringFieldUpdateOperationsInput | string
    proposal?: ProposalUpdateOneRequiredWithoutContractNestedInput
    milestones?: MilestoneUpdateManyWithoutContractNestedInput
    disputes?: DisputeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposalId?: StringFieldUpdateOperationsInput | string
    smartContract?: StringFieldUpdateOperationsInput | string
    milestones?: MilestoneUncheckedUpdateManyWithoutContractNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutJobInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutJobInput, ReviewUncheckedUpdateWithoutJobInput>
    create: XOR<ReviewCreateWithoutJobInput, ReviewUncheckedCreateWithoutJobInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutJobInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutJobInput, ReviewUncheckedUpdateWithoutJobInput>
  }

  export type ReviewUpdateManyWithWhereWithoutJobInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutJobInput>
  }

  export type UserCreateWithoutProposalsInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutClientInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReviewedInput
  }

  export type UserUncheckedCreateWithoutProposalsInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutClientInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReviewedInput
  }

  export type UserCreateOrConnectWithoutProposalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
  }

  export type JobCreateWithoutProposalsInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutJobsInput
    contract?: ContractCreateNestedOneWithoutJobInput
    reviews?: ReviewCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutProposalsInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    contract?: ContractUncheckedCreateNestedOneWithoutJobInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutProposalsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutProposalsInput, JobUncheckedCreateWithoutProposalsInput>
  }

  export type ContractCreateWithoutProposalInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    smartContract: string
    job: JobCreateNestedOneWithoutContractInput
    milestones?: MilestoneCreateNestedManyWithoutContractInput
    disputes?: DisputeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutProposalInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobId: string
    smartContract: string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutContractInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutProposalInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutProposalInput, ContractUncheckedCreateWithoutProposalInput>
  }

  export type UserUpsertWithoutProposalsInput = {
    update: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProposalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutClientNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReviewedNestedInput
  }

  export type UserUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutClientNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReviewedNestedInput
  }

  export type JobUpsertWithoutProposalsInput = {
    update: XOR<JobUpdateWithoutProposalsInput, JobUncheckedUpdateWithoutProposalsInput>
    create: XOR<JobCreateWithoutProposalsInput, JobUncheckedCreateWithoutProposalsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutProposalsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutProposalsInput, JobUncheckedUpdateWithoutProposalsInput>
  }

  export type JobUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutJobsNestedInput
    contract?: ContractUpdateOneWithoutJobNestedInput
    reviews?: ReviewUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    contract?: ContractUncheckedUpdateOneWithoutJobNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ContractUpsertWithoutProposalInput = {
    update: XOR<ContractUpdateWithoutProposalInput, ContractUncheckedUpdateWithoutProposalInput>
    create: XOR<ContractCreateWithoutProposalInput, ContractUncheckedCreateWithoutProposalInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutProposalInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutProposalInput, ContractUncheckedUpdateWithoutProposalInput>
  }

  export type ContractUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartContract?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutContractNestedInput
    milestones?: MilestoneUpdateManyWithoutContractNestedInput
    disputes?: DisputeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    smartContract?: StringFieldUpdateOperationsInput | string
    milestones?: MilestoneUncheckedUpdateManyWithoutContractNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type JobCreateWithoutContractInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutJobsInput
    proposals?: ProposalCreateNestedManyWithoutJobInput
    reviews?: ReviewCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutContractInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    proposals?: ProposalUncheckedCreateNestedManyWithoutJobInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutContractInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutContractInput, JobUncheckedCreateWithoutContractInput>
  }

  export type ProposalCreateWithoutContractInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancer: UserCreateNestedOneWithoutProposalsInput
    job: JobCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateWithoutContractInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancerId: string
    jobId: string
  }

  export type ProposalCreateOrConnectWithoutContractInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutContractInput, ProposalUncheckedCreateWithoutContractInput>
  }

  export type MilestoneCreateWithoutContractInput = {
    id?: string
    title: string
    description: string
    amount: number
    status?: $Enums.MilestoneStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUncheckedCreateWithoutContractInput = {
    id?: string
    title: string
    description: string
    amount: number
    status?: $Enums.MilestoneStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneCreateOrConnectWithoutContractInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutContractInput, MilestoneUncheckedCreateWithoutContractInput>
  }

  export type MilestoneCreateManyContractInputEnvelope = {
    data: MilestoneCreateManyContractInput | MilestoneCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type DisputeCreateWithoutContractInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeUncheckedCreateWithoutContractInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateOrConnectWithoutContractInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutContractInput, DisputeUncheckedCreateWithoutContractInput>
  }

  export type DisputeCreateManyContractInputEnvelope = {
    data: DisputeCreateManyContractInput | DisputeCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithoutContractInput = {
    update: XOR<JobUpdateWithoutContractInput, JobUncheckedUpdateWithoutContractInput>
    create: XOR<JobCreateWithoutContractInput, JobUncheckedCreateWithoutContractInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutContractInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutContractInput, JobUncheckedUpdateWithoutContractInput>
  }

  export type JobUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutJobsNestedInput
    proposals?: ProposalUpdateManyWithoutJobNestedInput
    reviews?: ReviewUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposals?: ProposalUncheckedUpdateManyWithoutJobNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ProposalUpsertWithoutContractInput = {
    update: XOR<ProposalUpdateWithoutContractInput, ProposalUncheckedUpdateWithoutContractInput>
    create: XOR<ProposalCreateWithoutContractInput, ProposalUncheckedCreateWithoutContractInput>
    where?: ProposalWhereInput
  }

  export type ProposalUpdateToOneWithWhereWithoutContractInput = {
    where?: ProposalWhereInput
    data: XOR<ProposalUpdateWithoutContractInput, ProposalUncheckedUpdateWithoutContractInput>
  }

  export type ProposalUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancer?: UserUpdateOneRequiredWithoutProposalsNestedInput
    job?: JobUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneUpsertWithWhereUniqueWithoutContractInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutContractInput, MilestoneUncheckedUpdateWithoutContractInput>
    create: XOR<MilestoneCreateWithoutContractInput, MilestoneUncheckedCreateWithoutContractInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutContractInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutContractInput, MilestoneUncheckedUpdateWithoutContractInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutContractInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutContractInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringFilter<"Milestone"> | string
    amount?: FloatFilter<"Milestone"> | number
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    dueDate?: DateTimeFilter<"Milestone"> | Date | string
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    contractId?: StringFilter<"Milestone"> | string
  }

  export type DisputeUpsertWithWhereUniqueWithoutContractInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutContractInput, DisputeUncheckedUpdateWithoutContractInput>
    create: XOR<DisputeCreateWithoutContractInput, DisputeUncheckedCreateWithoutContractInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutContractInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutContractInput, DisputeUncheckedUpdateWithoutContractInput>
  }

  export type DisputeUpdateManyWithWhereWithoutContractInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutContractInput>
  }

  export type DisputeScalarWhereInput = {
    AND?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    OR?: DisputeScalarWhereInput[]
    NOT?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    id?: StringFilter<"Dispute"> | string
    title?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    contractId?: StringFilter<"Dispute"> | string
  }

  export type ContractCreateWithoutMilestonesInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    smartContract: string
    job: JobCreateNestedOneWithoutContractInput
    proposal: ProposalCreateNestedOneWithoutContractInput
    disputes?: DisputeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutMilestonesInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobId: string
    proposalId: string
    smartContract: string
    disputes?: DisputeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutMilestonesInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutMilestonesInput, ContractUncheckedCreateWithoutMilestonesInput>
  }

  export type ContractUpsertWithoutMilestonesInput = {
    update: XOR<ContractUpdateWithoutMilestonesInput, ContractUncheckedUpdateWithoutMilestonesInput>
    create: XOR<ContractCreateWithoutMilestonesInput, ContractUncheckedCreateWithoutMilestonesInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutMilestonesInput, ContractUncheckedUpdateWithoutMilestonesInput>
  }

  export type ContractUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartContract?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutContractNestedInput
    proposal?: ProposalUpdateOneRequiredWithoutContractNestedInput
    disputes?: DisputeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    smartContract?: StringFieldUpdateOperationsInput | string
    disputes?: DisputeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type UserCreateWithoutReviewsGivenInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutFreelancerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReviewedInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutFreelancerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReviewedInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutFreelancerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    walletAddress: string
    name: string
    email: string
    bio?: string | null
    skills?: UserCreateskillsInput | string[]
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutFreelancerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type JobCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutJobsInput
    proposals?: ProposalCreateNestedManyWithoutJobInput
    contract?: ContractCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    proposals?: ProposalUncheckedCreateNestedManyWithoutJobInput
    contract?: ContractUncheckedCreateNestedOneWithoutJobInput
  }

  export type JobCreateOrConnectWithoutReviewsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutReviewsInput, JobUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutFreelancerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReviewedNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutFreelancerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReviewedNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutFreelancerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutFreelancerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type JobUpsertWithoutReviewsInput = {
    update: XOR<JobUpdateWithoutReviewsInput, JobUncheckedUpdateWithoutReviewsInput>
    create: XOR<JobCreateWithoutReviewsInput, JobUncheckedCreateWithoutReviewsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutReviewsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutReviewsInput, JobUncheckedUpdateWithoutReviewsInput>
  }

  export type JobUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutJobsNestedInput
    proposals?: ProposalUpdateManyWithoutJobNestedInput
    contract?: ContractUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    proposals?: ProposalUncheckedUpdateManyWithoutJobNestedInput
    contract?: ContractUncheckedUpdateOneWithoutJobNestedInput
  }

  export type ContractCreateWithoutDisputesInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    smartContract: string
    job: JobCreateNestedOneWithoutContractInput
    proposal: ProposalCreateNestedOneWithoutContractInput
    milestones?: MilestoneCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutDisputesInput = {
    id?: string
    amount: number
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobId: string
    proposalId: string
    smartContract: string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutDisputesInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutDisputesInput, ContractUncheckedCreateWithoutDisputesInput>
  }

  export type ContractUpsertWithoutDisputesInput = {
    update: XOR<ContractUpdateWithoutDisputesInput, ContractUncheckedUpdateWithoutDisputesInput>
    create: XOR<ContractCreateWithoutDisputesInput, ContractUncheckedCreateWithoutDisputesInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutDisputesInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutDisputesInput, ContractUncheckedUpdateWithoutDisputesInput>
  }

  export type ContractUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smartContract?: StringFieldUpdateOperationsInput | string
    job?: JobUpdateOneRequiredWithoutContractNestedInput
    proposal?: ProposalUpdateOneRequiredWithoutContractNestedInput
    milestones?: MilestoneUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    smartContract?: StringFieldUpdateOperationsInput | string
    milestones?: MilestoneUncheckedUpdateManyWithoutContractNestedInput
  }

  export type JobCreateManyClientInput = {
    id?: string
    title: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposalCreateManyFreelancerInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobId: string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewedId: string
    jobId: string
  }

  export type ReviewCreateManyReviewedInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewerId: string
    jobId: string
  }

  export type JobUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUpdateManyWithoutJobNestedInput
    contract?: ContractUpdateOneWithoutJobNestedInput
    reviews?: ReviewUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutJobNestedInput
    contract?: ContractUncheckedUpdateOneWithoutJobNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutProposalsNestedInput
    contract?: ContractUpdateOneWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    contract?: ContractUncheckedUpdateOneWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewed?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    job?: JobUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutReviewedInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    job?: JobUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewedInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewedInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalCreateManyJobInput = {
    id?: string
    description: string
    budget: number
    deadline: Date | string
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancerId: string
  }

  export type ReviewCreateManyJobInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    reviewerId: string
    reviewedId: string
  }

  export type ProposalUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancer?: UserUpdateOneRequiredWithoutProposalsNestedInput
    contract?: ContractUpdateOneWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: StringFieldUpdateOperationsInput | string
    contract?: ContractUncheckedUpdateOneWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewed?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    reviewedId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    reviewedId?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneCreateManyContractInput = {
    id?: string
    title: string
    description: string
    amount: number
    status?: $Enums.MilestoneStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateManyContractInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobCountOutputTypeDefaultArgs instead
     */
    export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractCountOutputTypeDefaultArgs instead
     */
    export type ContractCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProposalDefaultArgs instead
     */
    export type ProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProposalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MilestoneDefaultArgs instead
     */
    export type MilestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MilestoneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisputeDefaultArgs instead
     */
    export type DisputeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisputeDefaultArgs<ExtArgs>

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