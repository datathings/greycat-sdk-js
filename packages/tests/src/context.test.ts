import { expect } from 'chai';
import { Graph } from './greycat';
import init from './init';

before(() => init());

describe('Context', () => {
  it('create', () => {
    const g = new Graph();
    const c = g.newContext();
    expect(c).to.be.ok;
    c.unmark();
    g.destroy();
  });

  it('graph', () => {
    const g = new Graph();
    const c = g.newContext();
    expect(c).to.be.ok;
    expect(c.graph()).to.equal(g);
    c.unmark();
    g.destroy();
  });

  describe('execute', () => {
    it('string', () => {
      const g = new Graph();
      g.newFunction()
        .then("var res = 'Hello World';")
        .execute((_, c) => {
          expect(c.get('res')).to.equal('Hello World');
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('number (i32)', () => {
      const g = new Graph();
      g.newFunction()
        .then('var res = 42;')
        .execute((_, c) => {
          expect(c.get('res')).to.equal(42);
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('number (more than i32 but less than i53)', () => {
      const g = new Graph();
      g.newFunction()
        .then('var res = 2147483647 + 42;')
        .execute((_, c) => {
          expect(c.get('res')).to.equal(2147483647 + 42);
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('number (i53)', () => {
      const g = new Graph();
      g.newFunction()
      .then('var res = 9007199254740991;')
      .execute((_, c) => {
        expect(c.get('res')).to.equal(Number.MAX_SAFE_INTEGER);
        c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('number (more than i53)', () => {
      const g = new Graph();
      g.newFunction()
        .then('var res = 9007199254740991 + 1;')
        .execute((_, c) => {
          expect(c.get('res')).to.equal(BigInt(Number.MAX_SAFE_INTEGER + 1));
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('double', () => {
      const g = new Graph();
      g.newFunction()
        .then('var res = 3.14;')
        .execute((_, c) => {
          expect(c.get('res')).to.equal(3.14);
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('bool', () => {
      const g = new Graph();
      g.newFunction()
        .then('var res = false;')
        .execute((_, c) => {
          expect(c.get('res')).to.equal(false);
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('empty object', () => {
      const g = new Graph();
      g.newFunction()
        .then('var res = {};')
        .execute((_, c) => {
          expect(Object.keys(c.get('res'))).to.eql([]);
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('non-empty object', () => {
      const g = new Graph();
      g.newFunction()
        .then("var res = { hello: 'world' };")
        .execute((_, c) => {
          expect(c.get('res').toJSON()).to.eql({ hello: 'world' });
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('array', () => {
      const g = new Graph();
      g.newFunction()
        .then("var res = ['foo', 42, { name: 'John'}, false, 3.14];")
        .execute((_, c) => {
          const result = c.get('res');
          expect(result.size()).to.equal(5);
          expect(result[0]).to.equal('foo');
          expect(result[1]).to.equal(42);
          expect(result[2].toJSON()).to.eql({ name: 'John' });
          expect(result[3]).to.equal(false);
          expect(result[4]).to.equal(3.14);
          expect(result.none).to.be.undefined;
          expect(result.toJSON()).to.eql(['foo', 42, { name: 'John' }, false, 3.14]);
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('function set value', () => {
      const g = new Graph();
      g.newFunction()
        .then((ctx) => {
          // called by GreyCat
          ctx.set('foo', 42);
        })
        .execute((_, c) => {
          expect(c.get('foo')).to.equal(42);
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('get/set GObject', () => {
      const g = new Graph();
      g.newFunction()
        .then('var o = { foo: "bar" };')
        .then((c) => c.get('o').baz = 'beep')
        .execute((_, c) => {
          expect(c.get('o').toJSON()).to.eql({ foo: 'bar', baz: 'beep' });
          c.unmark();
        })
        .unmark();
      g.destroy();
    });
  });

  describe('failed execute', () => {
    it('bad function return', () => {
      const g = new Graph();
      const c = g.newContext();
      g.newFunction()
        .then('function sayHello() : String | null { return 42; }; sayHello();', 'my_custom_script.gcl')
        .execute(c.onError(null), (err) => {
          expect(err).to.be.ok;
          if (err) {
            expect(err.reason).to.equal('function \'sayHello\': bad result type after execution \'i64\' found, \'String | null\' expected');
          }
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('bad function return with implicit ctx creation', () => {
      const g = new Graph();
      g.newFunction()
        .then('function sayHello() : String | null { return 42; }; sayHello();', 'my_custom_script.gcl')
        .execute((err, c) => {
          expect(err).to.be.ok;
          if (err) {
            expect(err.reason).to.equal('function \'sayHello\': bad result type after execution \'i64\' found, \'String | null\' expected');
          }
          c.unmark();
        })
        .unmark();
      g.destroy();
    });
  });

  it('multiple exec of cached func', () => {
    const g = new Graph();
    g.newFunction()
      .then([
          'var root = Graph::getRoot();',
          'if (root == null) {',
          '  root = Graph::newNode({});',
          '  Graph::setRoot(root);',
          '}',
          'root->users = Graph::newNode(Map {});',
      ].join('\n'))
      .execute()
      .unmark();

    // func to execute multiple time
    const fn = g.newFunction().then('Graph::getRoot()->users->set(id, value);');

    fn.execute(g.newContext().set('id', 'one').set('value', 40), (err, c) => {
      expect(err).to.be.undefined;
      c.unmark();
    });

    fn.execute(g.newContext().set('id', 'two').set('value', 2), (err, c) => {
      expect(err).to.be.undefined;
      c.unmark();
    });

    fn.unmark();

    g.newFunction()
      .then([
        'var users = [];',
        'Graph::getRoot()->users->foreach((k: Any, v: Any) {',
        '  users.add(v);',
        '});',
      ].join('\n'))
      .execute((_, c) => {
        const users = c.get('users');
        expect(users).to.be.ok;
        expect(users.size()).to.equal(2);
        expect(users[0] + users[1]).to.equal(42);
        c.unmark();
      })
      .unmark();
    g.destroy();
  });

  describe('set', () => {
    it('string', () => {
      const g = new Graph();
      const c = g.newContext();
      c.set('input', 'Hello World');
      expect(c.get('input')).to.equal('Hello World');
      c.unmark();
      g.destroy();
    });

    it('number (i32)', () => {
      const g = new Graph();
      const c = g.newContext();
      c.set('input', 42);
      expect(c.get('input')).to.equal(42);
      c.unmark();
      g.destroy();
    });

    it('number (more than i32 but less than i53)', () => {
      const g = new Graph();
      const c = g.newContext();
      c.set('input', 2147483647 + 42);
      expect(c.get('input')).to.equal(2147483647 + 42);
      c.unmark();
      g.destroy();
    });

    it('number (i53)', () => {
      const g = new Graph();
      const c = g.newContext();
      c.set('input', Number.MAX_SAFE_INTEGER);
      expect(c.get('input')).to.equal(Number.MAX_SAFE_INTEGER);
      c.unmark();
      g.destroy();
    });

    it('number (more than i53)', () => {
      const g = new Graph();
      const c = g.newContext();
      c.set('input', Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER);
      expect(c.get('input')).to.eql(BigInt(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER));
      c.unmark();
      g.destroy();
    });

    it('double', () => {
      const g = new Graph();
      const c = g.newContext();
      c.set('input', 3.14);
      expect(c.get('input')).to.equal(3.14);
      c.unmark();
      g.destroy();
    });

    it('bool', () => {
      const g = new Graph();
      const c = g.newContext();
      c.set('input', false);
      expect(c.get('input')).to.equal(false);
      c.unmark();
      g.destroy();
    });

    it('empty js object', () => {
      const g = new Graph();
      const c = g.newContext();
      const obj = {};
      c.set('input', obj);
      expect(c.get('input').toJSON()).to.eql(obj);
      c.unmark();
      g.destroy();
    });

    it('non-empty js object', () => {
      const g = new Graph();
      const c = g.newContext();
      const obj = {
        string: 'hello world',
        int: 42,
        double: 3.14,
        boolean: true,
        long: Number.MAX_SAFE_INTEGER,
        bigint: Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER,
        child: { name: 'John' },
      };
      c.set('input', obj);
      const g_obj = c.get('input');
      expect(g_obj.toJSON()).to.eql(obj);
      c.unmark();
      g.destroy();
    });

    it('js object in script', () => {
      const g = new Graph();
      const c = g.newContext();
      const obj = { child: { name: 'John' } };
      c.set('input', obj);
      g.newFunction()
        .then('var res = input.child.name;')
        .execute(c, () => {
          expect(c.get('res')).to.equal('John');
          c.unmark();
        })
        .unmark();
      g.destroy();
    });

    it('array', () => {
      const g = new Graph();
      const c = g.newContext();
      const arr = ['foo', 42, { name: 'John'}, false, 3.14];
      c.set('input', arr);
      const g_arr = c.get('input');
      expect(g_arr.toJSON()).to.eql(arr);
      c.unmark();
      g.destroy();
    });
  });
});
