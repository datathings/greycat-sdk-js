import type { GCEnum, GCObject, AbiReader, Abi, AbiType } from './index.js';

type ExtractValues<T> = T[keyof T];

// prettier-ignore
export const PrimitiveType = {
  null      : 0,
  bool      : 1,
  char      : 2,
  int       : 3,
  float     : 4,
  node      : 5,
  node_time : 6,
  node_index: 7,
  node_list : 8,
  node_geo  : 9,
  geo       : 10,
  time      : 11,
  duration  : 12,
  cubic     : 13,
  enum      : 14,
  object    : 15,
  tu2d      : 16,
  tu3d      : 17,
  tu4d      : 18,
  tu5d      : 19,
  tu6d      : 20,
  tu10d     : 21,
  tuf2d     : 22,
  tuf3d     : 23,
  tuf4d     : 24,
  block_ref : 25,
  function  : 26,
  undefined : 27,
  stringlit : 28,
} as const;

export type PrimitiveType = ExtractValues<typeof PrimitiveType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IFactory = { new (type: AbiType, ...attributes: any[]): GCObject };
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
  /** URL of the GreyCat server */
  url: URL;
  /**
   * Write buffer capacity. Defaults to `2048` (2KB)
   */
  capacity?: number;
}

export interface WithoutAbiOptions extends Options {
  /** This signal is given to the request that loads the ABI. */
  signal?: AbortSignal;
  /** Libraries to use for (de-)serialization. By default, only "core" is loaded. */
  libraries?: Library[];
}

export interface WithAbiOptions extends Options {
  /** The ABI to use internally */
  abi: Abi;
}
