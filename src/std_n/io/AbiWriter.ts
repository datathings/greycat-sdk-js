import * as sdk from '../../index.js';

export class AbiWriter extends sdk.GCObject {
  static readonly _type = 'io::AbiWriter' as const;

  constructor(type: sdk.AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${AbiWriter._type}' is not supported`);
  }

  override saveContent(_w: sdk.AbiWriter): void {
    throw new Error(`'${AbiWriter._type}' is not supported`);
  }

  static load(_r: sdk.AbiReader, _type: sdk.AbiType): AbiWriter {
    throw new Error(`'${AbiWriter._type}' is not supported`);
  }
}
