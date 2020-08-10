import { expect } from 'chai';
import { Graph, IGraph, IContext, IMap } from './greycat';
import init from './init';

before(() => init());

describe('GMap', () => {
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
        .then("var m = Map {}; m.set('foo', 'bar');")
        .execute(c, () => {
          const m = c.get<IMap>('m');
          expect(m.size()).to.equal(1);
          done();
        })
        .unmark();
    });

    it('set string key', (done) => {
      g.newFunction()
        .then('var m = Map {};')
        .execute(c, () => {
          const m = c.get<IMap>('m');
          m.set('foo', 'bar');
          expect(m.get('foo')).to.equal('bar');
          done();
        })
        .unmark();
    });

    it('set string key (override)', (done) => {
      g.newFunction()
        .then('var m = Map {};')
        .execute(c, () => {
          const m = c.get<IMap>('m');
          m.set('foo', 'bar');
          m.set('foo', 'baz');
          expect(m.get('foo')).to.equal('baz');
          done();
        })
        .unmark();
    });

    it('set number key', (done) => {
      g.newFunction()
        .then('var m = Map {};')
        .execute(c, () => {
          const m = c.get<IMap>('m');
          m.set(42, 'bar');
          expect(m.get(42)).to.equal('bar');
          done();
        })
        .unmark();
    });

    it('put string key', (done) => {
      g.newFunction()
        .then('var m = Map {};')
        .execute(c, () => {
          const m = c.get<IMap>('m');
          m.put('foo', 'bar');
          m.put('foo', 'beep');
          expect(m.get('foo')).to.equal('bar');
          done();
        })
        .unmark();
    });

    it('remove', (done) => {
      g.newFunction()
        .then("var m = Map {}; m.set('foo', 'bar'); m.set('bleep', 'bloop');")
        .execute(c, () => {
          const m = c.get<IMap>('m');
          expect(m.size()).to.equal(2);
          m.remove('foo');
          expect(m.size()).to.equal(1);
          expect(m.get('foo')).to.be.undefined;
          expect(m.get('bleep')).to.equal('bloop');
          done();
        })
        .unmark();
    });

    it('foreach', (done) => {
      g.newFunction()
        .then("var m = Map {}; m.set('foo', 'bar'); m.set(42, 'answer'); m.set('another', 1337);")
        .execute(c, () => {
          const m = c.get<IMap>('m');
          const values: Array<{ key: string | number, value: any }> = [];
          m.foreach((key, value) => values.push({ key, value }));
          expect(values).to.have.deep.members([
            { key: 'foo', value: 'bar' },
            { key: 42, value: 'answer' },
            { key: 'another', value: 1337 },
          ]);
          done();
        })
        .unmark();
    });
  });
});
