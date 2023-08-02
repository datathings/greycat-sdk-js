import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class nodeIndexBucket extends GCObject {
  static readonly _type = 'core::nodeIndexBucket' as const;

  override saveContent(w: AbiWriter): void {
    if (this.attributes) {
      w.write_u32(this.attributes.length);
      for (let i = 0; i < this.attributes.length; i++) {
        w.serialize(this.attributes[i]);
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
