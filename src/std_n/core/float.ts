import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import type { GreyCat, core, AbiType, AbiReader, AbiWriter } from '../../index.js';

export class float extends GCObject {
  static readonly _type = 'core::float' as const;

  constructor(type: AbiType, public value: number) {
    super(type);
  }

  static create(value: number, g: GreyCat = globalThis.greycat.default): core.float {
    const ty = g.abi.types[g.abi.core_float_offset];
    return new ty.factory(ty, value) as core.float;
  }

  static load(r: AbiReader, ty: AbiType): core.float {
    const value = r.read_f64();
    return new ty.factory(ty, value) as core.float;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.float);
  }

  override saveContent(w: AbiWriter) {
    w.write_f64(this.value);
  }

  equals(other: core.float): boolean {
    return this.value === other.value;
  }

  // ord(other: core.int): number {
  //   if (this.value === other.value) {
  //     return 0;
  //   }
  //   if (this.value < other.value) {
  //     return -1;
  //   }
  //   return 1;
  // }

  override toString() {
    return `${this.value}`;
  }

  override toJSON() {
    return this.value;
  }
}
