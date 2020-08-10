// tslint:disable: no-unused-expression

import path from 'path';
import { spawn } from 'child_process';
import { expect } from 'chai';
import { IDebuggerClient, DebuggerClient } from '.';

const GREYCAT_ROOT = path.normalize(path.join(process.cwd(), '../../../'));
const GREYCAT_BIN = path.normalize(path.join(GREYCAT_ROOT, 'build/greycat'));

const spawnGreycat = (greycatFile: string, pauseOnStart: boolean = false) => {
  const args = ['-b', '-d'];
  if (pauseOnStart) {
    args.push('-p');
  }
  args.push(path.normalize(greycatFile));
  const greycat = spawn(GREYCAT_BIN, args, {
    cwd: GREYCAT_ROOT,
    stdio: ['ignore', 'inherit', 'inherit'],
  });

  return greycat;
};

describe('Greycat Debugger Client', function suite() {
  this.timeout(5000);
  this.slow(3000);

  it('run & exit no errors', async () => {
    const greycat = spawnGreycat('bindings/ts/debugger/fixtures/simple.gcl', true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const client: IDebuggerClient = new DebuggerClient();
    await client.start();
    await client.continue();

    await new Promise((resolve) => {
      greycat.on('exit', resolve);
    });
  });

  it('break', async () => {
    const greycat = spawnGreycat('bindings/ts/debugger/fixtures/vars.gcl', true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const client: IDebuggerClient = new DebuggerClient();

    client.on('b', (event) => {
      expect(event.info.data).to.be.ok;
      if (event.info.data) {
        expect(event.info.data.a).to.eql({ type: 'i32', value: 42 });
      }
      client.continue();
    });

    await client.start();
    await client.setBreakpoints('bindings/ts/debugger/fixtures/vars.gcl', [{ line: 3 }]);
    await client.continue();

    await new Promise((resolve) => {
      greycat.on('exit', resolve);
    });
  });
});
