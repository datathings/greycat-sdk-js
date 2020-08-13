import { expect } from 'chai';
import { Graph } from './greycat';

import init, { resolverMock, ResolveEntry } from './init';

before(() => init());

describe('Resolver', () => {
  beforeEach(() => resolverMock.reset());

  it('custom resolve', () => {
    resolverMock.set('model.gcl', 'main.gcl', 'type Sensor {}');
    const g = new Graph();
    g.newFunction()
      .then('type Sensor {}', 'model.gcl')
      .then("include 'model.gcl';", 'main.gcl')
      .execute((err, ctx) => {
        if (err) {
          throw new Error(err.reason);
        }
        expect(resolverMock.resolves[0]).to.eql({
          current: 'main.gcl',
          target: 'model.gcl',
          content: 'type Sensor {}',
        } as ResolveEntry);
        ctx.unmark();
      })
      .unmark();

    g.destroy();
  });
});
