if (!global.gc) {
  console.error('You should start this script with --expose-gc');
  process.exit(1);
}

// @ts-check
const os = require('os');
const { Graph, GFunction, Context } = require('@greycat/core-napi');;
const { expect } = require('chai');

async function executeScript() {
  const g = new Graph();
  const c = await g.execute([
    'var obj = { foo: 42 };',
    'var arr = [ 1, 2, 3 ];',
    'var fn = () { return 42; };',
  ].join('\n'));
  let obj = c.get('obj');
  expect(obj.foo).to.equal(42);
  let arr = c.get('arr');
  expect(arr[1]).to.equal(2);
  let fn = c.get('fn');
  expect(fn).to.be.instanceOf(GFunction);
  c.unmark();
  g.destroy();
}

async function graphTest() {
  let g = new Graph();
  let c = new Context(g);
  c.unmark();
  g.destroy();
  g = null;
  c = null;
}

async function main() {
  for (let i = 0; i < Infinity; i++) {
    if (i % 5000 === 0) {
      const mem = process.memoryUsage();
      const used = Math.round(mem.heapUsed / 1024 / 1024 * 100) / 100;
      const total = Math.round(mem.heapTotal / 1024 / 1024 * 100) / 100;
      const free = Math.round(os.freemem() / 1024 / 1024 * 100) / 100;
      console.log(i, 'runs, using', `${used}/${total}mb (left ${free}mb)`);
      if (free < 4000) {
        console.warn('Memory left <4Gb. Request GC!');
        global.gc();
        // process.exit(1);
      }
    }
    await executeScript();
  }
}

main();