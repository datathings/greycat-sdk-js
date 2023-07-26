import * as sdk from '../../index.js';

export class AbiReader extends sdk.GCObject {
  static readonly _type = 'io::AbiReader' as const;

  constructor(type: sdk.AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${AbiReader._type}' is not supported`);
  }

  override saveContent(_w: sdk.AbiWriter): void {
    throw new Error(`'${AbiReader._type}' is not supported`);
  }

  static load(_r: sdk.AbiReader, _type: sdk.AbiType): AbiReader {
    throw new Error(`'${AbiReader._type}' is not supported`);
  }
}
