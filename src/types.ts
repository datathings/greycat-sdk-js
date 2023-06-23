import { Abi, AbiType } from './abi.js';
import { AbiReader } from './io.js';
import { GCObject } from './GCObject.js';
import { GCEnum } from './GCEnum.js';

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
  cubic:        13,
  enum:         14,
  object:       15,
  // tu2:          16,
  // tu3:          17,
  // tu4:          18,
  // tu8:          19,
  // tu10:         20,
  // tf2:          21,
  // tf3:          22,
  // tf4:          23,
  block:        24,
  block_ref:    25,
  function:     26,
  undefined:    27,
  stringlit:    28,
} as const;

export type PrimitiveType = ExtractValues<typeof PrimitiveType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IFactory = { new (type: AbiType, ...attributes: any[]): GCObject };
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
