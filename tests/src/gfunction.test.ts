import { expect } from 'chai';
import { Graph, IObject } from './greycat';
import init from './init';

before(() => init());

describe('GFunction', () => {
  it('create', () => {
    const g = new Graph();
    const f = g.newFunction();
    expect(f).to.be.ok;
    f.unmark();
    g.destroy();
  });

  it('parse', () => {
    const g = new Graph();
    const f = g.newFunction();
    expect(() => f.then('// empty')).not.to.throw;
    f.unmark();
    g.destroy();
  });

  it('execute', () => {
    const g = new Graph();
    const f = g.newFunction().then('var p = 42;').execute((err, ctx) => {
      if (err) {
        throw err;
      }
      expect(ctx.get('p')).to.eql(42);
      ctx.unmark();
    });
    f.unmark();
    g.destroy();
  });

  it('invalid parse', () => {
    const g = new Graph();
    const f = g.newFunction();
    expect(() => f.then('%')).to.throw('Unable to parse script');
    f.unmark();
    g.destroy();
  });

  it('pipe GFunction', () => {
    const g = new Graph();
    const c = g.newContext();
    const next = g.newFunction().then('a = 100;');
    g.newFunction()
      .then('var a = 40;')
      .then(next)
      .execute(c, () => {
        next.unmark();
        expect(c.get('a')).to.equal(100);
        c.unmark();
      })
      .unmark();

    g.destroy();
  });

  it('pipe native function', () => {
    const g = new Graph();
    const c = g.newContext();
    const next = g.newFunction().then((ctx) => ctx.set('a', 42));
    g.newFunction()
      .then('var a = 40;')
      .then(next)
      .execute(c, () => {
        next.unmark();
        expect(c.get('a')).to.equal(42);
        c.unmark();
      })
      .unmark();

    g.destroy();
  });

  if (typeof document === 'undefined') {
    it('with params', () => {
      const g = new Graph();
      const c = g.newContext();

      const identity = g
        .newFunction()
        .defineParam({ name: 'value' })
        .then((ctx) => {
          ctx.setResult(ctx.get('value'));
        });
      c.set('identity', identity);

      g.newFunction()
        .then('var res = identity({ foo: "bar" });')
        .execute(c, (_) => {
          expect(c.get<IObject>('res').toJSON()).to.eql({ foo: 'bar' });
          c.unmark();
        })
        .unmark();

      g.destroy();
    });
  }
});
