import { expect } from 'chai';
import { Graph } from './greycat';

import init, { consoleMock } from './init';

before(() => init());

describe('Console', () => {

  beforeEach(() => consoleMock.reset());

  it('println', () => {
    const g = new Graph();
    g.newFunction()
      .then("Console::println('Hello World');")
      .execute((err, ctx) => {
        if (err) {
          throw new Error(err.reason);
        }
        expect(consoleMock.printLns[0]).to.equal('Hello World\n');
        ctx.unmark();
      })
      .unmark();

    g.destroy();
  });
});
