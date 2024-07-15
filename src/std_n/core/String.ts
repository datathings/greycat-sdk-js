import type { AbiType, AbiReader, AbiWriter } from '../../internal.js';
import { GCObject } from '../../internal.js';

export class String extends GCObject {
  static readonly _type = 'core::String' as const;

  constructor(type: AbiType, public value: string) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_string(this.value);
  }

  static load(r: AbiReader): string {
    const len = r.read_vu32();
    if (len & 1) {
      return r.abi.symbols[len >> 1];
    }
    return r.read_string(len >> 1);
  }
}
