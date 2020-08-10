import { expect } from 'chai';
import { init, Graph } from './greycat';

describe('index', () => {
  it('export init', () => {
    expect(init).to.be.instanceOf(Function);
  });

  it('export Graph', () => {
    expect(Graph).to.be.ok;
  });
});