import type { GCEnum, GCObject, AbiReader, Abi, AbiType } from './index.js';

type ExtractValues<T> = T[keyof T];

// prettier-ignore
export const PrimitiveType = {
  null: 0,
  bool: 1,
  char: 2,
  int: 3,
  float: 4,
  node: 5,
  node_time: 6,
  node_index: 7,
  node_list: 8,
  node_geo: 9,
  geo: 10,
  time: 11,
  duration: 12,
  cubic: 13,
  enum: 14,
  object: 15,
  tu2d: 16,
  tu3d: 17,
  tu4d: 18,
  tu5d: 19,
  tu6d: 20,
  tu10d: 21,
  tuf2d: 22,
  tuf3d: 23,
  tuf4d: 24,
  block_ref: 25,
  function: 26,
  undefined: 27,
  stringlit: 28,
} as const;

export const PrimitiveTypeName = {
  0: 'null',
  1: 'bool',
  2: 'char',
  3: 'int',
  4: 'float',
  5: 'node',
  6: 'node_time',
  7: 'node_index',
  8: 'node_list',
  9: 'node_geo',
  10: 'geo',
  11: 'time',
  12: 'duration',
  13: 'cubic',
  14: 'enum',
  15: 'object',
  16: 'tu2d',
  17: 'tu3d',
  18: 'tu4d',
  19: 'tu5d',
  20: 'tu6d',
  21: 'tu10d',
  22: 'tuf2d',
  23: 'tuf3d',
  24: 'tuf4d',
  25: 'block_ref',
  26: 'function',
  27: 'undefined',
  28: 'stringlit',
} as const;

export type PrimitiveType = ExtractValues<typeof PrimitiveType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IFactory = { new(type: AbiType, ...attributes: any[]): GCObject };
export type IPrimitiveLoader = (r: AbiReader) => Value;
export type ILoader = (r: AbiReader, type: AbiType) => Value;
export type Value =
  | GCObject
  | GCEnum
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined
  | Array<Value>
  | Map<Value, Value>;

export interface Library {
  name: string;
  mapped: AbiType[];
  configure(loaders: Map<string, ILoader>, factories: Map<string, IFactory>): void;
  init(a: Abi): void;
}

export interface Options {
  /**
   * URL of the GreyCat server
   * 
   * Defaults to:
   *  - `window.location.origin` in browser contexts
   *  - `'http://localhost:8080'` in other contexts (eg. Node.js)
   */
  url?: URL;
  /**
   * Write buffer capacity. Defaults to `2048` (2KB)
   */
  capacity?: number;
  /**
   * Called when a request (from `greycat.call(...)`) returns a status code 401.
   * 
   * *You can also set this handler directly on the `GreyCat` instance after creating it*
   * 
   */
  unauthorizedHandler?: () => void;
}

export interface Auth {
  username: string;
  password: string;
  use_cookie?: boolean;
}

export interface WithoutAbiOptions extends Options {
  /** If defined, will call `runtime::User::login` prior to initialization */
  auth?: Auth;
  /** This signal is given to the request that loads the ABI. */
  signal?: AbortSignal;
  /** Libraries to use for (de-)serialization. By default, only "core" is loaded. */
  libraries?: Library[];
}

export interface WithAbiOptions extends Options {
  /** The ABI to use internally */
  abi: Abi;
  /** Optional auth token */
  token?: string;
}
