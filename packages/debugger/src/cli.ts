#!/usr/bin/env node
import readline from 'readline';
import { DebuggerClient } from './DebuggerClient';
import { IBreakpoint, IDebuggerClient, ICurrentInfo } from './types';
import { Code } from './protocol';

function printHelp() {
  console.log(`
  - b   set breakpoints: "<uri>" (<number>(:<number>)?)*
  - c   continue
  - f   current stack frames
  - g   shows the current breakpoints
  - h   shows this help
  - i   shows the current variables info
  - n   next
  - p   pause
  - q   quit
  - r   remove breakpoints: "<uri>"? (if not uri specified, removes all)
  - s   stop the debugger
`);
}

function printInfo(info: ICurrentInfo) {
  if (info.location) {
    console.log(`Paused at: "${info.source}:${info.location[0]}:${info.location[1]}"`);
    console.dir(info, { depth: 5, maxArrayLength: 20 });
  } else {
    console.log(`Paused on <anonymous>:0:0`);
  }
}

async function main() {
  const [, , portArg] = process.argv;
  const port = parseInt(portArg || '9494', 10);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'gdb> ',
  });

  const client: IDebuggerClient = new DebuggerClient();

  client.on('close', () => {
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);

    console.log(`Connection closed.`);

    rl.close();
  });

  client.on('error', (err) => {
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    console.log(`Connection error: ${err.message}`);
    rl.prompt();
  });

  client.on(Code.BREAK, (info) => {
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    printInfo(info);
    rl.prompt();
  });

  client.on(Code.EXCEPTION, (ex) => {
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    console.dir(ex, { depth: Infinity });
    rl.prompt();
  });

  await client.connect(port);

  console.log(`Debugger attached to :${port}`);
  printHelp();

  rl.on('line', async (input) => {
    try {
      const [cmd, ...args] = input.trim().split(' ');
      switch (cmd) {
        case 'h':
          printHelp();
          break;

        case 'b': {
          const uriRes = args[0].match(/"([^"]+)"/);
          if (uriRes && uriRes[1]) {
            const uri = uriRes[1];
            const bps: IBreakpoint[] = [];
            for (let i = 1; i < args.length; i++) {
              const bptRes = args[i].match(/(\d+)(:(\d+))?/);
              if (bptRes && bptRes.length >= 2) {
                const bp: IBreakpoint = { line: parseInt(bptRes[1], 10) };
                if (bptRes[3] !== undefined) {
                  bp.column = parseInt(bptRes[3], 10);
                }
                bps.push(bp);
              }
            }
            await client.setBreakpoints(uri, bps);
          } else {
            console.log('[BAD_FORMAT] use: b "<uri>" (<number>(:<number>)?)+');
            console.log('  eg. b "path/to/file.gcl" 6:42\n');
          }
          break;
        }

        case 'c':
          await client.continue();
          break;

        case 'n':
          await client.next();
          break;

        case 'r': {
          if (args.length === 0) {
            await client.removeBreakpoints();
          } else {
            const uriRes = args[0].match(/"([^"]+)"/);
            if (uriRes && uriRes[1]) {
              const uri = uriRes[1];
              await client.removeBreakpoints(uri);
            } else {
              console.log('[BAD_FORMAT] use: r "<uri>"');
              console.log('  eg. r "path/to/file.gcl"\n');
            }
          }
          break;
        }

        case 'p':
          await client.pause();
          break;

        case 't': {
          let startFrame = 0;
          let levels = 0;
          if (cmd.length === 1) {
            startFrame = parseInt(cmd[0], 10);
          } else if (cmd.length === 2) {
            levels = parseInt(cmd[1], 10);
          }
          const frames = await client.getStackFrames(startFrame, levels);
          frames.forEach((f) => {
            if (f.source) {
              console.log(` - ${f.name} (${f.source}:${f.location[0]}:${f.location[1]})`);
            } else {
              console.log(` - ${f.name} (${f.location[0]}:${f.location[1]})`);
            }
          });
          break;
        }

        case 'i': {
          const info = await client.getCurrentInfo();
          printInfo(info);
          break;
        }

        case 'g': {
          const bps = await client.getBreakpoints();
          bps.forEach((b) => {
            console.log(` - ${b.source}:${b.location[0]}:${b.location[1] ? b.location[1] : 0}`);
          });
          break;
        }

        case 'q':
          await client.quit();
          break;

        case 's':
          await client.stop();
          break;

        default:
          console.log(`Unknown command '${cmd}'`);
          printHelp();
          break;
      }
    } catch (err) {
      process.stdout.cursorTo(0);
      process.stdout.clearLine(1);
      console.log(err.message);
    }
    rl.prompt();
  }).on('close', async () => {
    console.log('Bye');
    if (client.connected) {
      await client.quit();
    }
    process.exit(0);
  });

  rl.prompt();
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
