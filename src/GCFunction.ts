import { GCObject, AbiType, AbiFunction } from './index.js';
import { AbiWriter } from './io.js';
import { PrimitiveType } from './types.js';

export class GCFunction extends GCObject {
  constructor(type: AbiType, public fn: AbiFunction) {
    super(type);
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.function);
  }

  override saveContent(w: AbiWriter): void {
    w.write_vu32(this.fn.module);
    w.write_vu32(this.fn.type);
    w.write_vu32(this.fn.name);
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      fqn: this.fn.fqn,
      nb_params: this.fn.params.length, // TODO add more than that?
      return_type: this.fn.return_type.name,
      return_nullable: this.fn.return_type_nullable,
    };
  }
}
