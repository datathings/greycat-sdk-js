import type { GreyCat } from './internal.js';
import * as sdk from './internal.js';

// do not 'declare global { ... }' here, as it will mess-up the bundled declaration

// volontary forget about 'default: sdk.GreyCat'
globalThis.greycat = Object.assign(
  globalThis.greycat ?? { default: null as unknown as GreyCat },
  sdk,
);

export * from './internal.js';
