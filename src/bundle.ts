import * as sdk from './index.js';

// Here we volontary forget about setting 'default' as
// we want the applications to actually define it, therefore we
// force cast to 'GreyCatGlobal' even though it is not complete
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).greycat.sdk = sdk;

declare global {
  interface GreyCatGlobal {
    sdk: typeof sdk;
  }
}
