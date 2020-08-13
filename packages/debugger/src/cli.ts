#!/usr/bin/env node
import readline from 'readline';
import { DebuggerClient } from './DebuggerClient';
import { IBreakpoint, IDebuggerClient, ICurrentInfo } from './model';

let port = 9494;
if (process.argv.length > 2) {
  try {
    port = parseInt(process.argv[2], 10);
  } catch (err) {
    console.error(`Unable to parse the first command-line argument as an integer (port must be a number)`);
    console.error(err.message);
    process.exit(1);
  }
}

function printHelp() {
  console.log(`
  - ?   shows the current breakpoints
  - b   set breakpoints: "<uri>" (<number>(:<number>)?)*
  - c   continue
  - h   shows this help
  - n   next
  - p   pause
  - s   stop the debugger
  - t   current stack frames
  - v   shows the current variables info
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
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'gdb> ',
  });

  const client: IDebuggerClient = new DebuggerClient();
  client.on('exit', async () => {
    rl.close();
  });
  client.on('b', (event) => {
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    printInfo(event.info);
    rl.prompt();
  });
  client.on('e', (event) => {
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    console.dir(event, { depth: Infinity });
    rl.prompt();
  });
  client.on('error', (msg) => {
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    console.log(msg);
    rl.prompt();
  });

  await client.start(port);
  console.log(`Debugger attached to :${port}`);
  printHelp();

  rl.on('line', async (input) => {
    try {
      const result = input.trim().split(' ');
      const cmd = result.slice(1);
      switch (result[0]) {
        case 'h':
          printHelp();
          break;

        case 'b': {
          if (cmd.length >= 1) {
            const uriRes = cmd[0].match(/"([^"]+)"/);
            if (uriRes && uriRes[1]) {
              const uri = uriRes[1];
              const bps: IBreakpoint[] = [];
              for (let i = 1; i < cmd.length; i++) {
                const bptRes = cmd[i].match(/(\d+)(:(\d+))?/);
                if (bptRes && bptRes.length >= 2) {
                  const bp: IBreakpoint = { line: parseInt(bptRes[1], 10) };
                  if (bptRes[3] !== undefined) {
                    bp.column = parseInt(bptRes[3], 10);
                  }
                  bps.push(bp);
                }
              }
              await client.setBreakpoints(uri, bps);
            }
          } else {
            await client.removeBreakpoints();
          }
          break;
        }

        case 'c':
          await client.continue();
          break;

        case 'n':
          await client.next();
          break;

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

        case 'v': {
          const info = await client.getCurrentInfo();
          printInfo(info);
          break;
        }

        case '?': {
          const bps = await client.getBreakpoints();
          bps.forEach((b) => {
            console.log(` - ${b.uri}:${b.location.line}:${b.location.column ? b.location.column : 0}`);
          });
          break;
        }

        case 's':
          await client.stop();
          break;

        default:
          console.log(`unknown command '${cmd}'`);
          printHelp();
          break;
      }
    } catch (err) {
      process.stdout.cursorTo(0);
      process.stdout.clearLine(1);
      console.log(err.message);
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Bye');
    process.exit(0);
  });

  rl.prompt();
}

main().catch((err) => {
  console.error(`Oops!\n\n${err.message}`);
  process.exit(1);
});
