// @ts-check
const { Graph, GObject, GArray } = require('@greycat/core-napi');
const { expect } = require('chai');

const g = new Graph();
const c = g.newContext();

// g.declareType('Sensor', false)
//   .declareStatic('foo', (ctx) => ctx.set('result', ctx.get('value') + 1))
//   .seal()
//   .unmark();

g.newFunction()
  .then("var res = 'Hello World';")
  .execute(c, () => {
    expect(c.get('res')).to.equal('Hello World');
    console.log('all done');
    c.unmark();
  });

g.destroy();