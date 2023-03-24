import { Abi, AbiType } from './abi.js';
import { AbiReader } from './io.js';
import { GCObject } from './GCObject.js';

type ExtractValues<T> = T[keyof T];

// prettier-ignore
export const PrimitiveType = {
  null:          0,
  bool:          1,
  char:          2,
  int:           3,
  float:         4,
  node:          5,
  node_time:     6,
  node_index:    7,
  node_list:     8,
  node_geo:      9,
  geo:          10,
  time:         11,
  duration:     12,
  enum:         13,
  object:       14,
  block:        15,
  block_ref:    16,
  function_ref: 17,
  undefined:    18,
  stringlit:    19,
} as const;

export type PrimitiveType = ExtractValues<typeof PrimitiveType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IObjCtor = { new (...args: any[]): GCObject };
export type IDeserialize = (r: AbiReader, type: AbiType) => Value;
export type Value =
  | GCObject
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
  configure(loaders: Map<string, IDeserialize>, factories: Map<string, IObjCtor>): void;
  init(a: Abi): void;
}
