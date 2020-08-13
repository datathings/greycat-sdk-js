import { expect } from 'chai';
import { Graph } from './greycat';

import init, { loggerMock } from './init';

before(() => init());

describe('Logger', () => {

  beforeEach(() => loggerMock.reset());

  it('info', () => {
    const g = new Graph();
    g.newFunction()
      .then("Log::info('Hello World');")
      .execute((err, ctx) => {
        if (err) {
          throw new Error(err.reason);
        }
        expect(loggerMock.infos[0]).to.equal('Hello World');
        ctx.unmark();
      })
      .unmark();

    g.destroy();
  });
});
