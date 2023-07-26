import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class Quantizer extends GCObject {
  static readonly _type = 'util::Quantizer' as const;

  constructor(type: AbiType) {
    super(type);
    throw new Error(`${Quantizer._type}: is not implemented yet`);
  }

  override saveContent(_w: AbiWriter): void {
    throw new Error(`${Quantizer._type}: is not implemented yet`);
  }

  static load(_r: AbiReader, _type: AbiType): Quantizer {
    throw new Error(`${Quantizer._type}: is not implemented yet`);
  }
}
