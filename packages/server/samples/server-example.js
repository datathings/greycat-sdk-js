// @ts-check
const { GreycatClient } = require('../lib/server/client');

async function main() {
  const client = new GreycatClient(250);
  console.log('starting...');
  await client.start();
  console.log('started!');

  await client.execute('Console::println("Hello World");');
  await client.execute('Console::println("Hello World");', 'with_uri.gcl');
  await client.execute('Console::println("Hello World");', 'uri.gcl', 2);

  return async () => {
    console.log('stopping...');
    await client.stop();
    console.log('stopped!');
  };
}

main()
  .then((dispose) => {
    process.once('SIGINT', async () => {
      console.log('dispose...');
      await dispose();
      console.log('disposed!');
      process.exit(0);
    });
  })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  });