import { expect } from 'chai';
import { IGraph, IContext, Graph, GObject } from './greycat';
import init from './init';

before(() => init());

describe('GObject', () => {
  describe('from GCL', () => {
    let g: IGraph;
    let c: IContext;
    beforeEach(() => {
      g = new Graph();
      c = g.newContext();
    });

    afterEach(() => {
      c.unmark();
      g.destroy();
    });

    it('string', (done) => {
      g.newFunction()
        .then("var o = { hello: 'world' };")
        .execute(c, () => {
          expect(c.get('o').hello).to.equal('world');
          done();
        })
        .unmark();
    });

    it('nested object', (done) => {
      g.newFunction()
        .then("var o = { child: { name: 'John' } };")
        .execute(c, () => {
          expect(c.get('o').child.name).to.equal('John');
          done();
        })
        .unmark();
    });

    it('complex object', (done) => {
      g.newFunction()
        .then("var o = { foo: 42, child: { name: 'John' } };")
        .execute(c, () => {
          const o = c.get('o');
          expect(o).to.be.instanceOf(GObject);
          expect(o.foo).to.equal(42);
          expect(o.child.name).to.equal('John');
          expect(o.child.toJSON()).to.eql({ name: 'John' });
          done();
        })
        .unmark();
    });

    it.skip('function', (done) => {
      g.newFunction()
        .then("var o = { name: 'John', getName: () { return this.name } };")
        .execute(c, () => {
          const o = c.get('o');
          expect(o.name).to.equal('John');
          expect(o.getName()).to.equal('John');
          done();
        })
        .unmark();
    });

    it.skip('function with params', (done) => {
      g.newFunction()
        .then('var o = { add: (a: int, b: int) { return a + b; } };')
        .execute(c, () => {
          expect(c.get('o').add(40, 2)).to.equal(42);
          done();
        })
        .unmark();
    });
  });
});
