import * as os from 'os';

const arch = os.arch();
const platform = os.platform();

let _addon;

switch (arch) {
  case 'x64':
    switch (platform) {
      case 'linux':
        try { _addon = require('@greycat/native-x64-cuda-11'); } catch {/*noop*/}
        if (!_addon) {
          try { _addon = require('@greycat/native-x64-cuda-10-2'); } catch {/*noop*/}
        }
        if (!_addon) {
          _addon = require('@greycat/native-x64-libc');
        }
        break;

      case 'darwin':
        _addon = require('@greycat/native-x64-mac');
        break;
    }
    break;

  case 'arm64':
    switch (platform) {
      case 'linux':
        _addon = require('@greycat/native-aarch64-libc');
        break;
    }
    break;

  case 'arm':
    switch (platform) {
      case 'linux':
        _addon = require('@greycat/native-armv7-eabihf-libc');
        break;
    }
    break;
}

if (_addon === undefined) {
  throw new Error(`Invalid target '${platform}-${arch}' for Greycat N-API`);
}

export const addon = _addon;
