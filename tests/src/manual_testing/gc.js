// @ts-check
if (!global.gc) {
  console.error('You should start this script with --expose-gc');
  process.exit(1);
}

const os = require('os');
const { expect } = require('chai');
const { Graph } = require('@greycat/core-napi');

function task() {
  const g = new Graph();
  const c = g.newContext();
  g.newFunction()
    .then('var obj = { foo: 42 }; var a = [1,2,3]; var f = () {};')
    .execute(c, () => {
      expect(c.get('obj').foo).to.eql(42);
    })
    .unmark();
  c.unmark();
  g.destroy();
}

function main() {
  for (let i = 0; i < Infinity; i++) {
    if (i % 5000 === 0) {
      mem(i);
      const free = (os.totalmem() - os.freemem()) / 1024 / 1024;
      if (free < 4000) {
        console.warn('Memory left <4Gb. Request GC!');
        global.gc();
      }
    }
    task();
  }
}

function mem(id, afterGc) {
  const mem = process.memoryUsage();
  const used = Math.round(mem.heapUsed / 1024 / 1024 * 100) / 100;
  const total = Math.round(mem.heapTotal / 1024 / 1024 * 100) / 100;
  if (afterGc) {
    console.log(id, 'runs, using', `${used}/${total}mb after GC`);
  } else {
    console.log(id, 'runs, using', `${used}/${total}mb`);
  }
}

main();