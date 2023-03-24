import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class ProgressTracker extends GCObject {
  static readonly _type = 'util.ProgressTracker' as const;

  constructor(type: AbiType) {
    super(type);
  }

  override save(_w: AbiWriter): void {
      // TODO
  }

  static load(_r: AbiReader, type: AbiType): ProgressTracker {
    // TODO
    return new ProgressTracker(type);
  }
}
