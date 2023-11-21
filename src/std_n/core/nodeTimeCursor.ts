import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class nodeTimeCursor extends GCObject {
  static readonly _type = 'core::nodeTimeCursor' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
    throw new Error(`${nodeTimeCursor._type}: is not implemented yet`);
  }

  static load(_r: AbiReader): nodeTimeCursor {
    throw new Error(`${nodeTimeCursor._type}: is not implemented yet`);
  }

  override saveContent(_w: AbiWriter) {
    throw new Error(`${nodeTimeCursor._type}: is not implemented yet`);
  }

  override toJSON() {
    return {
      _type: this.$type.name,
    };
  }
}
