import type { AbiType, AbiReader, AbiWriter, GreyCat, core } from '../../internal.js';
import { GCObject, PrimitiveType } from '../../internal.js';

export class null_ extends GCObject {
  static readonly _type = 'core::null' as const;

  constructor(type: AbiType) {
    super(type);
  }

  static create(g: GreyCat = globalThis.greycat.default): core.null_ {
    const ty = g.abi.types[g.abi.core_float_offset];
    return new ty.factory(ty) as core.null_;
  }

  static load(_r: AbiReader, ty: AbiType): core.null_ {
    return new ty.factory(ty) as core.null_;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.null);
  }

  override saveContent() {
    // noop
  }

  override toString() {
    return `null`;
  }

  override toJSON() {
    return null;
  }
}
