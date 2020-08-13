import { expect } from 'chai';
import { Graph, IGraph, IContext, IArray, GArray } from './greycat';
import init from './init';

before(() => init());

describe('GArray', () => {
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

    it('size', (done) => {
      g.newFunction()
        .then("var a = ['hello', 'world'];")
        .execute(c, () => {
          expect(c.get('a').size()).to.equal(2);
          done();
        })
        .unmark();
    });

    it('access by offset', (done) => {
      g.newFunction()
        .then("var a = ['hello', 'world'];")
        .execute(c, () => {
          const a = c.get('a');
          expect(a).instanceOf(GArray);
          expect(a[0]).to.equal('hello');
          expect(a[1]).to.equal('world');
          done();
        })
        .unmark();
    });

    it('add', (done) => {
      g.newFunction()
        .then('var a = [];')
        .execute(c, () => {
          const a = c.get('a') as IArray;
          expect(a.size()).to.equal(0);
          a.add(42);
          expect(a.size()).to.equal(1);
          expect(a[0]).to.equal(42);
          done();
        })
        .unmark();
    });

    it('resize', (done) => {
      g.newFunction()
        .then('var a = [];')
        .execute(c, () => {
          const a = c.get('a') as IArray;
          expect(a.size()).to.equal(0);
          a.resize(42);
          expect(a.size()).to.equal(42);
          a[41] = 1337;
          expect(a[41]).to.equal(1337);
          done();
        })
        .unmark();
    });
  });
});
