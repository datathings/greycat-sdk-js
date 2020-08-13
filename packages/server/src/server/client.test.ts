/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import * as path from 'path';
import * as fs from 'fs';
import { GreycatClient, IGreycatClient } from './client';

const FIXTURES_DIR = path.join(process.cwd(), 'fixtures');
const TIMEOUT = 5000;
let client: IGreycatClient = new GreycatClient(TIMEOUT);

before(async function beforeHook() {
  this.timeout(TIMEOUT + 1000);
  await client.start(1000, 100, FIXTURES_DIR);
});

after(async function afterHook() {
  this.timeout(TIMEOUT + 1000);
  await client.stop();
});

describe('Greycat Server Wrapper', function suite() {
  this.timeout(TIMEOUT + 1000);

  beforeEach(async () => {
    // recreate a new graph for each test
    await client.newGraph();
  });

  it('execute(script)', async () => {
    const result = await client.execute('var hello = "world";');
    expect(result.data).to.eql({ hello: 'world' });
    await client.unmark(result);
  });

  it('execute(script, uri)', async () => {
    const result = await client.execute('var hello = "world";', 'hello.gcl');
    expect(result.data).to.eql({ hello: 'world' });
    await client.unmark(result);
  });

  it('execute(script, uri, timeout)', async () => {
    const result = await client.execute('var hello = "world";', 'hello.gcl', 1000);
    expect(result.data).to.eql({ hello: 'world' });
    await client.unmark(result);
  });

  it('execute(script, timeout)', async () => {
    const result = await client.execute('var hello = "world";', 1000);
    expect(result.data).to.eql({ hello: 'world' });
    await client.unmark(result);
  });

  it('execute(context, script)', async () => {
    const r0 = await client.execute('var o = { value: [42, Graph::newNode("Hello World")] };');
    const r1 = await client.execute(r0, 'var res = *o.value[1];');
    expect(r1.data.res).to.eql('Hello World');
    await client.unmark(r0);
  });

  it('execute(context, script, uri)', async () => {
    const r0 = await client.execute('var o = { value: [42, Graph::newNode("Hello World")] };');
    const r1 = await client.execute(r0, 'var res = *o.value[1];', 'hello.gcl');
    expect(r1.data.res).to.eql('Hello World');
    await client.unmark(r0);
  });

  it('execute(context, script, uri, timeout)', async () => {
    const r0 = await client.execute('var o = { value: [42, Graph::newNode("Hello World")] };');
    const r1 = await client.execute(r0, 'var res = *o.value[1];', 'hello.gcl', 1000);
    expect(r1.data.res).to.eql('Hello World');
    await client.unmark(r0);
  });

  it('execute(context, script, timeout)', async () => {
    const r0 = await client.execute('var o = { value: [42, Graph::newNode("Hello World")] };');
    const r1 = await client.execute(r0, 'var res = *o.value[1];', 1000);
    expect(r1.data.res).to.eql('Hello World');
    await client.unmark(r0);
  });

  it('multiple execution on previous context', async () => {
    const r0 = await client.execute('var o = { value: [42, Graph::newNode("Hello World"), false] };');
    const results = await Promise.all([
      client.execute(r0, 'var res0 = o.value[0];'),
      client.execute(r0, 'var res1 = *o.value[1];'),
      client.execute(r0, 'var res2 = o.value[2];'),
    ]);
    expect(results[0].data.res0).to.eql(42);
    expect(results[1].data.res1).to.eql('Hello World');
    expect(results[2].data.res2).to.eql(false);
    await client.unmark(r0);
  });

  it('execute timeout', async function executeTimeout() {
    this.slow(TIMEOUT * 2 + 1000 - 500);
    this.timeout(TIMEOUT * 2 + 1000);
    // do something incredibly stupid but long in order to timeout
    try {
      await client.execute('for (var i = 0; i < 10e150; i++) { i++; }');
    } catch (err) {
      expect(err.startsWith('Task') && err.endsWith(`(execute) timed out (${TIMEOUT}ms)`), err).to.be.true;
    } finally {
      // this will kill the server because it hangs on the loop
      await client.stop();
      // create a new process for the server
      client = new GreycatClient(TIMEOUT);
      await client.start(1000, 100, FIXTURES_DIR);
    }
  });

  it('unmark', async () => {
    const result = await client.execute('var hello = "world";');
    expect(result.data).to.eql({ hello: 'world' });
    await client.unmark(result);
  });

  it('unparseable script', async () => {
    try {
      await client.execute('!');
      throw new Error('Script "!" should throw');
    } catch (err) {
      expect(err).to.contain('Error: Unable to parse script');
    }
  });

  it('invalid script', async () => {
    try {
      await client.execute('Studio::render();');
      throw new Error('Script "Studio::render();" should throw');
    } catch (err) {
      expect(err).to.eql({
        reason: 'unresolved function: render',
        stack: 'at repl:1:16\n    at repl:0:0',
      });
    }
  });

  it('include', async () => {
    this.slow(150);
    await client.execute(`include 'model.gcl'; var s = Sensor {};`, 'index.gcl');
  });

  it('define static function on type', async () => {
    let data: any = null;
    await client.defineType({
      name: 'Studio',
      functions: {
        render: {
          static: true,
          params: [{ name: 'value' }],
          handle: (d) => {
            data = d.value;
          },
        },
      },
    });
    const result = await client.execute('Studio::render({ hello: "world" });');
    expect(data).to.eql({ hello: 'world' });
    await client.unmark(result);
  });

  it('release task when new graph', async () => {
    const result = await client.execute('var hello = "world";');
    let success = false;
    result.on('released', () => {
      success = true;
    });
    await client.newGraph();
    expect(success, '"released" should have been called').to.be.true;
  });

  it.skip('store usage', async function storeUsage() {
    this.slow(1000);
    await client.execute([
      "Graph::configureStore(0, 'store_usage_0.db');",
      "Graph::configureStore(1, 'store_usage_1.db');",
      'Graph::root().watermark = Graph::newNode(Date::new(1583244066000));',
    ].join('\n'));
    await client.stop();
    // create a new process for the server
    client = new GreycatClient(TIMEOUT);
    await client.start(1000, 100, FIXTURES_DIR);
    await client.execute([
      "Graph::configureStore(0, 'store_usage_0.db');",
      "Graph::configureStore(1, 'store_usage_1.db');",
      'Assert::equals(Graph::root().watermark->toTimestamp(), 1583244066000);',
    ].join('\n'));

    fs.unlinkSync(path.join(FIXTURES_DIR, 'store_usage_0.db'));
    fs.unlinkSync(path.join(FIXTURES_DIR, 'store_usage_1.db'));
  });

  it('prepare ctx', async () => {
    const ctx = await client.prepare({ hello: 'world' });
    await client.execute(ctx, 'Assert::equals(hello, "world");');
  });
});
