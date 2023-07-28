import { GCObject, AbiType, AbiReader, AbiWriter } from '../../index.js';

export class GcbWriter extends GCObject {
  static readonly _type = 'io::GcbWriter' as const;

  constructor(type: AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${GcbWriter._type}' is not supported`);
  }

  override saveContent(_w: AbiWriter): void {
    throw new Error(`'${GcbWriter._type}' is not supported`);
  }

  static load(_r: AbiReader, _type: AbiType): GcbWriter {
    throw new Error(`'${GcbWriter._type}' is not supported`);
  }
}
