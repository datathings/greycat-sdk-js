/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-namespace */
import { Abi } from './abi.js';
import { Library } from './types.js';
import * as std_n from './native/index.js';

export const stdlib: Library = {
  name: 'std',
  mapped: new Array(42),
  configure(loaders, factories) {
    // core
    loaders.set(core.time._type, std_n.core.time.load);
    factories.set(core.time._type, core.time);
    loaders.set(std_n.core.geo._type, std_n.core.geo.load);
    factories.set(std_n.core.geo._type, std_n.core.geo);
    loaders.set(std_n.core.String._type, std_n.core.String.load);
    factories.set(std_n.core.String._type, std_n.core.String);
    loaders.set(std_n.core.duration._type, std_n.core.duration.load);
    factories.set(std_n.core.duration._type, std_n.core.duration);
    loaders.set(std_n.core.nodeTime._type, std_n.core.nodeTime.load);
    factories.set(std_n.core.nodeTime._type, std_n.core.nodeTime);
    loaders.set(std_n.core.nodeIndex._type, std_n.core.nodeIndex.load);
    factories.set(std_n.core.nodeIndex._type, std_n.core.nodeIndex);
    loaders.set(std_n.core.nodeList._type, std_n.core.nodeList.load);
    factories.set(std_n.core.nodeList._type, std_n.core.nodeList);
    loaders.set(std_n.core.nodeGeo._type, std_n.core.nodeGeo.load);
    factories.set(std_n.core.nodeGeo._type, std_n.core.nodeGeo);
    loaders.set(std_n.core.Error._type, std_n.core.Error.load);
    factories.set(std_n.core.Error._type, std_n.core.Error);
    loaders.set(std_n.core.Table._type, std_n.core.Table.load);
    factories.set(std_n.core.Table._type, std_n.core.Table);
    loaders.set(std_n.core.GeoPoly._type, std_n.core.GeoPoly.load);
    factories.set(std_n.core.GeoPoly._type, std_n.core.GeoPoly);
    loaders.set(std_n.core.Array._type, std_n.core.Array.load);
    factories.set(std_n.core.Array._type, std_n.core.Array);
    loaders.set(std_n.core.Map._type, std_n.core.Map.load);
    factories.set(std_n.core.Map._type, std_n.core.Map);
    loaders.set(std_n.core.Date._type, std_n.core.Date.load);
    factories.set(std_n.core.Date._type, std_n.core.Date);
    loaders.set(std_n.core.GeoPoly._type, std_n.core.GeoPoly.load);
    factories.set(std_n.core.GeoPoly._type, std_n.core.GeoPoly);
    loaders.set(std_n.core.Table._type, std_n.core.Table.load);
    factories.set(std_n.core.Table._type, std_n.core.Table);
    loaders.set(std_n.core.nodeIndexBucket._type, std_n.core.nodeIndexBucket.load);
    factories.set(std_n.core.nodeIndexBucket._type, std_n.core.nodeIndexBucket);
    loaders.set(std_n.core.Tensor._type, std_n.core.Tensor.load);
    factories.set(std_n.core.Tensor._type, std_n.core.Tensor);

    // util
    loaders.set(std_n.util.Buffer._type, std_n.util.Buffer.load);
    loaders.set(std_n.util.Gaussian._type, std_n.util.Gaussian.load);
    loaders.set(std_n.util.GaussianProfile._type, std_n.util.GaussianProfile.load);
    loaders.set(std_n.util.HistogramF64._type, std_n.util.HistogramF64.load);
    loaders.set(std_n.util.HistogramI64._type, std_n.util.HistogramI64.load);
    loaders.set(std_n.util.Iban._type, std_n.util.Iban.load);
    loaders.set(std_n.util.ProgressTracker._type, std_n.util.ProgressTracker.load);
    loaders.set(std_n.util.Queue._type, std_n.util.Queue.load);
    loaders.set(std_n.util.SlidingWindow._type, std_n.util.SlidingWindow.load);
    loaders.set(std_n.util.TimeWindow._type, std_n.util.TimeWindow.load);
  },

  init(a) {
    this.mapped = new Array(102);
    this.mapped[0] = a.fqn_to_type.get(core.time._type)!;
    // this.mapped[1] = a.fqn_to_type.get(core.Table._type)!;
  },
};

export namespace core {
  export class time extends std_n.core.time {
    static override readonly _type = 'core.time';

    static create(abi: Abi, value: bigint) {
      return new time(abi.libs_by_name.get(stdlib.name)!.mapped[0], value);
    }
  }
}