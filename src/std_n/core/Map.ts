import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { GCEnum } from '../../index.js';

export class Map extends GCObject {
  static readonly _type = 'core::Map' as const;

  constructor(type: AbiType, readonly map: globalThis.Map<Value, Value>) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(w.abi.core_map_offset);
    w.write_u32(this.map.size);
    this.map.forEach((value, key) => {
      w.serialize(key);
      w.serialize(value);
    });
  }

  static load(r: AbiReader, ty: AbiType) {
    const len = r.read_u32();
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
        json[`${key.type.name}::${key.key}`] = value;
      } else {
        json[key.toString()] = value;
      }
    });

    return json;
  }
}
