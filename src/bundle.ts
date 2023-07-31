import * as sdk from './index.js';

window.greycat = { sdk };

declare global {
  interface GreyCat {
    sdk: typeof sdk;
  }

  interface Window {
    greycat: GreyCat;
  }
}
