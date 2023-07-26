import * as sdk from '../../index.js';

export class TextReader extends sdk.GCObject {
  static readonly _type = 'io::TextReader' as const;

  constructor(type: sdk.AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${TextReader._type}' is not supported`);
  }

  override saveContent(_w: sdk.AbiWriter): void {
    throw new Error(`'${TextReader._type}' is not supported`);
  }

  static load(_r: sdk.AbiReader, _type: sdk.AbiType): TextReader {
    throw new Error(`'${TextReader._type}' is not supported`);
  }
}
