import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class nodeIndexBucket extends GCObject {
  static readonly _type = 'core::nodeIndexBucket' as const;

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    if (this.$values) {
      w.write_u32(this.$values.length);
      for (let i = 0; i < this.$values.length; i++) {
        w.serialize(this.$values[i]);
      }
    } else {
      w.write_u32(0);
    }
  }

  static load(r: AbiReader, type: AbiType): nodeIndexBucket {
    const len = r.read_u32();
    const attrs = new Array(len);
    for (let i = 0; i < len; i++) {
      attrs[i] = r.deserialize();
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, attrs) as nodeIndexBucket;
  }
}
