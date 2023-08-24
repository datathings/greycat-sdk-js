import type { AbiType } from '../../abi.js';
import type { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class ComputeEngine extends GCObject {
  static readonly _type = 'compute::ComputeEngine' as const;

  constructor(type: AbiType) {
    super(type);
  }

  override saveContent(_w: AbiWriter): void {
    throw new Error('not unsupported');
  }

  static load(_r: AbiReader, _type: AbiType): ComputeEngine {
    throw new Error('not unsupported');
  }
}
