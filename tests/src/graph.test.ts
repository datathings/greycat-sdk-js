import { expect } from 'chai';
import { Graph, hash } from './greycat';
import init from './init';

before(() => init());

describe('Graph', () => {
  let g: Graph;

  beforeEach(() => {
    g = new Graph();
  });

  afterEach(() => {
    g.destroy();
  });

  it('create', () => {
    expect(g).to.be.ok;
  });

  it('newFunction', () => {
    const f = g.newFunction();
    expect(f).to.be.ok;
    f.unmark();
  });

  it('exportTypes', () => {
    expect(g.exportTypes()).to.be.ok;
  });

  it('meta', () => {
    expect(g.isMeta('Ref')).to.be.true;
    expect(g.isMeta('Sensor')).to.be.false;
    const sensorKey = g.declareMeta('Sensor');
    expect(sensorKey).to.equals(hash('Sensor'));
    expect(g.isMeta('Sensor')).to.be.true;
  });
});
