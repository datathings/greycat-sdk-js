export * from './greycat.js';
export * from './GCEnum.js';
export * from './GCObject.js';
export * from './GCFunction.js';
export * from './abi.js';
export * from './types.js';
export * from './io.js';

export * as std_n from './std_n/index.js';
export * as std from './std/index.js';
// exports std's modules directly (shortcut)
export * from './std/index.js';

export * as algebra_n from './algebra_n/index.js';
// export * as algebra from './algebra/index.js';
// // exports algebra's modules directly (shortcut)
export * from './algebra/index.js';

export * as utils from './utils/index.js';

// Here we volontary forget about setting 'default' as
// we want the applications to actually define it, therefore we
// force cast to 'GreyCatGlobal' even though it is not complete
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).greycat = {} as GreyCatGlobal;