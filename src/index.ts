import type { GreyCat } from './internal.js';
import * as sdk from './internal.js';

declare global {
  type GreyCatSdk = typeof sdk;

  interface GreyCatGlobal extends GreyCatSdk {
    default: GreyCat;
  }

  // eslint-disable-next-line no-var
  var greycat: GreyCatGlobal;
}

// volontary forget about 'default: sdk.GreyCat'
globalThis.greycat = Object.assign(
  globalThis.greycat ?? { default: null as unknown as GreyCat },
  sdk,
);

export * from './internal.js';
