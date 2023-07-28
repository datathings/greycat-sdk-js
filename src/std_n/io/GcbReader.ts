import { GCObject, AbiType, AbiReader, AbiWriter } from '../../index.js';

export class GcbReader extends GCObject {
  static readonly _type = 'io::GcbReader' as const;

  constructor(type: AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${GcbReader._type}' is not supported`);
  }

  override saveContent(_w: AbiWriter): void {
    throw new Error(`'${GcbReader._type}' is not supported`);
  }

  static load(_r: AbiReader, _type: AbiType): GcbReader {
    throw new Error(`'${GcbReader._type}' is not supported`);
  }
}
