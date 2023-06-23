import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class Directory extends GCObject {
  static readonly _type = 'io::Directory' as const;

  constructor(type: AbiType, public data: Uint8Array) {
    super(type);
    throw new Error(`'${Directory._type}' is not supported`);
  }

  override save(_w: AbiWriter): void {
    throw new Error(`'${Directory._type}' is not supported`);
  }

  static load(_r: AbiReader, _type: AbiType): Directory {
    throw new Error(`'${Directory._type}' is not supported`);
  }
}
