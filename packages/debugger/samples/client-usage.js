// @ts-check
const readline = require('readline');
const { DebuggerClient } = require('../lib/DebuggerClient');

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'gdb> ',
  });

  const client = new DebuggerClient();
  client.on('exit', async () => {
    await client.stop();
    rl.close();
  });
  client.on('b', (event) => {
    console.dir(event, { depth: Infinity });
  });
  client.on('e', (event) => {
    console.dir(event, { depth: Infinity });
  });

  await client.start();

  rl.on('line', async (input) => {
    const result = input.trim().split(' ');
    const cmd = result.slice(1);
    switch (result[0]) {
      case 'h':
        console.log(`
  - ?   shows the current breakpoints
  - b   set breakpoints: "<uri>" (<number>(:<number>)? )*
  - c   continue
  - h   shows this help
  - n   next
  - s   stop the debugger
`);
        break;

      case 'b':
        if (cmd.length >= 1) {
          const uriRes = cmd[0].match(/"([^"]+)"/);
          if (uriRes && uriRes[1]) {
            const uri = uriRes[1];
            const bps = [];
            for (let i = 1; i < cmd.length; i++) {
              const bptRes = cmd[i].match(/(\d+)(:(\d+))?/);
              if (bptRes && bptRes.length >= 2) {
                const bp = { line: parseInt(bptRes[1], 10) };
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

      case 'c':
        await client.continue();
        break;
      
      case 'n':
        await client.next();
        break;

      case '?':
        const bps = await client.getBreakpoints();
        bps.foreach((b) => {
          console.log(` - ${b.uri}`);
        });
        break;

      case 's':
        await client.stop();
        break;

      default:
        console.log(`unknown command '${cmd}'`);
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Bye');
    process.exit(0);
  });

  rl.prompt();
}

main().catch((err) => {
  console.error(`Oops!\n\n${err}`);
});
