import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { GCEnum } from '../../index.js';
import type { core, GreyCat } from '../../index.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Map<K extends Value = any, V extends Value = any> extends GCObject {
  static readonly _type = 'core::Map' as const;

  constructor(type: AbiType, readonly map: globalThis.Map<K, V>) {
    super(type);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static create<K extends Value = any, V extends Value = any>(map: globalThis.Map<K, V>, g: GreyCat = globalThis.greycat.default): core.Map<K, V> {
    const ty = g.abi.types[g.abi.core_map_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, map) as core.Map<K, V>;
  }

  get size(): number {
    return this.map.size;
  }

  get(key: K): V | undefined {
    return this.map.get(key);
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  set(key: K, value: V): this {
    this.map.set(key, value);
    return this;
  }

  clear(): void {
    this.map.clear();
  }

  delete(key: K): boolean {
    return this.map.delete(key);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forEach(callback: (value: V, key: K, map: globalThis.Map<K, V>) => void, thisArg?: any): void {
    this.map.forEach(callback, thisArg);
  }

  override saveContent(w: AbiWriter): void {
    w.write_vu32(this.map.size);
    this.map.forEach((value, key) => {
      w.serialize(key);
      w.serialize(value);
    });
  }

  static load(r: AbiReader, ty: AbiType) {
    const len = r.read_vu32();
    const map = new globalThis.Map<Value, Value>();

    for (let i = 0; i < len; i++) {
      const key = r.deserialize();
      const value = r.deserialize();
      map.set(key, value);
    }

    return new Map(ty, map);
  }

  override toJSON() {
    const json: Record<string, Value> = {};

    this.map.forEach((value, key) => {
      if (key === null) {
        json['null'] = value;
      } else if (key === undefined) {
        json['undefined'] = value;
      } else if (key instanceof GCEnum) {
        json[`${key.$type.name}::${key.key}`] = value;
      } else {
        json[key.toString()] = value;
      }
    });

    return json;
  }
}
