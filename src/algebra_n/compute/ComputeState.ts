// import type { AbiType } from '../../abi.js';
// import type { AbiReader, AbiWriter } from '../../io.js';
// import { GCObject } from '../../GCObject.js';

// export class ComputeState extends GCObject {
//   static readonly _type = 'compute::ComputeState' as const;

//   constructor(type: AbiType) {
//     super(type);
//   }

//   override saveContent(_w: AbiWriter): void {
//     throw new Error('not unsupported');
//   }

//   static load(_r: AbiReader, _type: AbiType): ComputeState{
//     throw new Error('not unsupported');
//   }
// }
