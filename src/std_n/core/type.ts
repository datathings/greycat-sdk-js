import type { AbiType, AbiReader, AbiWriter, GreyCat, std } from '../../exports.js';
import { GCObject, PrimitiveType, $ } from '../../exports.js';

export class type extends GCObject {
  static readonly _type = 'core::type' as const;

  constructor(type: AbiType) {
    super(type);
  }

  static create(g: GreyCat = $.default): std.core.type {
    const ty = g.abi.types[g.abi.core_type_offset];
    return new ty.factory(ty) as std.core.type;
  }

  static load(_r: AbiReader, ty: AbiType): std.core.type {
    // TODO
    return new ty.factory(ty) as std.core.type;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.type);
  }

  override saveContent() {
    // TODO
  }

  override toString() {
    return `null`;
  }

  override toJSON() {
    return null;
  }
}
