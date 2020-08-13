import { init, Graph } from './greycat';

before(() => init());

describe('Logger (napi-specific)', () => {

  it('info', () => {
    const g = new Graph();
    g.newFunction()
      .then("Log::info('Hello World');")
      .execute((err, ctx) => {
        if (err) {
          throw new Error(err.reason);
        }
        ctx.unmark();
      })
      .unmark();

    g.destroy();
  });
});
