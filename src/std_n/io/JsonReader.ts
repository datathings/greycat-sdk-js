import * as sdk from '../../index.js';

export class JsonReader extends sdk.GCObject {
  static readonly _type = 'io::JsonReader' as const;

  constructor(type: sdk.AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${JsonReader._type}' is not supported`);
  }

  override save(_w: sdk.AbiWriter): void {
    throw new Error(`'${JsonReader._type}' is not supported`);
  }

  static load(_r: sdk.AbiReader, _type: sdk.AbiType): JsonReader {
    throw new Error(`'${JsonReader._type}' is not supported`);
  }
}
