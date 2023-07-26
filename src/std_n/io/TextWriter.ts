import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class TextWriter extends GCObject {
  static readonly _type = 'io::TextWriter' as const;

  constructor(type: AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${TextWriter._type}' is not supported`);
  }

  override saveContent(_w: AbiWriter): void {
    throw new Error(`'${TextWriter._type}' is not supported`);
  }

  static load(_r: AbiReader, _type: AbiType): TextWriter {
    throw new Error(`'${TextWriter._type}' is not supported`);
  }
}
