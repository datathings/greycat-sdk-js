// entry point for Browser testing
import * as g from './greycat';
import { expect } from 'chai';

mocha.setup('bdd');

import './index.test';
import './graph.test';
import './context.test';
import './gfunction.test';
import './gobject.test';
import './garray.test';
// uncomment this when greycat-wasm implements support for GMap
// import './gmap.test';
import './gtype.test';
import './logger.test';
import './console.test';
import './resolver.test';

describe('tear down', () => {
  it('should not leak in addon', () => {
    expect(Object.keys((g as any).addon.__pointers)).to.have.lengthOf(0);
  });
});

mocha.run(() => {
  // tslint:disable-next-line:no-console
  console.log('All tests done.', (g as any).addon.__pointers);
});
