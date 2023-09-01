import type { AbiReader, AbiWriter, AbiType, core } from '../../index.js';
import { GCObject } from '../../index.js';

export class nodeIndexBucket extends GCObject {
  static readonly _type = 'core::nodeIndexBucket' as const;

  override saveContent(w: AbiWriter): void {
    if (this.$attrs) {
      w.write_u32(this.$attrs.length);
      for (let i = 0; i < this.$attrs.length; i++) {
        w.serialize(this.$attrs[i]);
      }
    } else {
      w.write_u32(0);
    }
  }

  static load(r: AbiReader, type: AbiType): core.nodeIndexBucket {
    const len = r.read_u32();
    const attrs = new Array(len);
    for (let i = 0; i < len; i++) {
      attrs[i] = r.deserialize();
    }
    return new type.factory(type, attrs) as core.nodeIndexBucket;
  }
}
