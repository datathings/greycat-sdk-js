import type { GreyCat } from './greycat.js';

declare global {
  interface GreyCatGlobal {
    default: GreyCat;
  }

  // eslint-disable-next-line no-var
  var greycat: GreyCatGlobal;
}

export * from './greycat.js';
export * from './GCEnum.js';
export * from './GCObject.js';
export * from './GCFunction.js';
export * from './abi.js';
export * from './types.js';
export * from './io.js';
export * from './crypto/index.js';

export * as std_n from './std_n/index.js';
export * as std from './std/index.js';
// exports std's modules directly (shortcut)
export * from './std/index.js';

export * as algebra_n from './algebra_n/index.js';
export * as algebra from './algebra/index.js';
// // exports algebra's modules directly (shortcut)
export * from './algebra/index.js';

export * as utils from './utils/index.js';
export * from './utils/index.js';

// Here we volontary forget about setting 'default' as
// we want the applications to actually define it, therefore we
// force cast to 'GreyCat' even though it is not set
globalThis.greycat = { default: null as unknown as GreyCat };