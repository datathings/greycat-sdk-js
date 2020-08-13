import Module from './greycat.js'; // ".js" here is important in order for Webpack to differentiate with ".wasm"
import gWasm from './greycat.wasm';
import { Options, GreyCatError } from './common';
import { AddonAPI } from './addon-api';

import { GString } from './GString';

export * from './common';
export * from './Graph';
export * from './GObject';
export * from './GArray';
export * from './GFunction';
export * from './GRef';
export * from './GString';

export const addon: AddonAPI = Module({
  /**
   * Since webpack will change the name and potentially the path of the
   * `.wasm` file, we have to provide a `locateFile()` hook to redirect
   * to the appropriate URL => greycatModule must be transform to the proper url with
   * a Webpack file-loader
   * More details: https://kripken.github.io/emscripten-site/docs/api_reference/module.html
   * @param {string} path
   */
  locateFile(path: string) {
    if (path.substr(path.length - '.wasm'.length, path.length) === '.wasm') {
      return gWasm;
    }
    return path;
  },
  Logger: console,
  Console: {
    print: console.log.bind(console), // tslint:disable-line:no-console
    println: console.log.bind(console), // tslint:disable-line:no-console
  },
  GreyCatError,
  GString,
  print: console.log.bind(console), // tslint:disable-line:no-console
  printErr: console.error.bind(console),
});

const addon_ready = new Promise<void>((resolve) => addon.then(() => resolve()));

export function init(options: Options = {}) {
  if (options.logger) {
    addon.Logger = options.logger;
  }
  if (options.console) {
    addon.Console = options.console;
  }
  if (options.resolver) {
    addon.Resolver = options.resolver;
  }
  return addon_ready;
}
