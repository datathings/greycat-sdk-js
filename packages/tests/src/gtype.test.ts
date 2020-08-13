import { expect } from 'chai';
import { Graph, Keys } from './greycat';
import init from './init';

before(() => init());

describe('GType', () => {
  it('attribute', () => {
    const g = new Graph();
    g.declareType('T')
      .declareAttribute('a', Keys.g_String)
      .seal()
      .unmark();

    g.newFunction()
      .then('var t = T { a: "foo" };')
      .execute((err, c) => {
        expect(err).to.be.undefined;
        const t = c.get('t');
        expect(t.a).to.equal('foo');
        c.unmark();
      })
      .unmark();
    g.destroy();
  });

  it('static attribute (string)', () => {
    const g = new Graph();
    g.declareType('T')
      .declareStaticAttribute('A', 'Hello World')
      .seal()
      .unmark();

    g.newFunction()
      .then('Assert::equals(T::A, "Hello World");')
      .execute((err, c) => {
        expect(err).to.be.undefined;
        c.unmark();
      })
      .unmark();
    g.destroy();
  });

  it('static attribute (int)', () => {
    const g = new Graph();
    g.declareType('T')
      .declareStaticAttribute('A', 42)
      .seal()
      .unmark();

    g.newFunction()
      .then('Assert::equals(T::A, 42);')
      .execute((err, c) => {
        expect(err).to.be.undefined;
        c.unmark();
      })
      .unmark();
    g.destroy();
  });

  it('static attribute (bool)', () => {
    const g = new Graph();
    g.declareType('T')
      .declareStaticAttribute('A', true)
      .seal()
      .unmark();

    g.newFunction()
      .then('Assert::equals(T::A, true);')
      .execute((err, c) => {
        expect(err).to.be.undefined;
        c.unmark();
      })
      .unmark();
    g.destroy();
  });

  it('static attribute (double)', () => {
    const g = new Graph();
    g.declareType('T')
      .declareStaticAttribute('A', 3.14)
      .seal()
      .unmark();

    g.newFunction()
      .then('Assert::equals(T::A, 3.14);')
      .execute((err, c) => {
        expect(err).to.be.undefined;
        c.unmark();
      })
      .unmark();
    g.destroy();
  });

  if (typeof document === 'undefined') {
    it('function', () => {
      const g = new Graph();
      g.declareType('T')
        .declareAttribute('name', 'String')
        .declareFunction('getName', (c) => {
          c.setResult(c.get('this').name);
        })
        .seal()
        .unmark();

      g.newFunction()
        .then('var t = T { name: "John" }; Assert::equals(t.getName(), "John");')
        .execute((err, c) => {
          expect(err).to.be.undefined;
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('static function', () => {
      const g = new Graph();
      g.declareType('T')
        .declareStaticFunction('hello', (c) => {
          c.setResult('Hello World');
        })
        .seal()
        .unmark();

      g.newFunction()
        .then('Assert::equals(T::hello(), "Hello World");')
        .execute((err, c) => {
          expect(err).to.be.undefined;
          c.unmark();
        })
        .unmark();
      g.destroy();
    });
  }

});
