import * as sdk from './exports.js';

declare global {
  type GreyCatSdk = typeof sdk;

  interface GreyCatGlobal extends GreyCatSdk {
    default: sdk.GreyCat;
  }

  // eslint-disable-next-line no-var
  var greycat: GreyCatGlobal;
}

// volontary forget about 'default: sdk.GreyCat'
globalThis.greycat = globalThis.greycat ?? { default: null as unknown as sdk.GreyCat };
Object.assign(globalThis.greycat, sdk);

export * from './exports.js';
