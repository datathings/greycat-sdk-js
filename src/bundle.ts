import * as sdk from './index.js';

// Here we volontary forget about setting 'default' as
// we want the applications to actually define it, therefore we
// force cast to 'GreyCatGlobal' even though it is not complete
window.greycat = { sdk } as GreyCatGlobal;

declare global {
  interface GreyCatGlobal {
    sdk: typeof sdk;
  }
}
