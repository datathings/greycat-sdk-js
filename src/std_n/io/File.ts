import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class File extends GCObject {
  static readonly _type = 'io::File' as const;

  constructor(type: AbiType, public data: Uint8Array = new Uint8Array()) {
    super(type);
    throw new Error(`'${File._type}' is not supported`);
  }

  override save(_w: AbiWriter): void {
    throw new Error(`'${File._type}' is not supported`);
  }

  static load(_r: AbiReader, _type: AbiType): File {
    throw new Error(`'${File._type}' is not supported`);
  }
}
