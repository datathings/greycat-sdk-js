import type { AbiType } from '../../abi.js';
import type { AbiReader, AbiWriter } from '../../io.js';
import type { core } from '../../index.js';
import { GCObject } from '../../GCObject.js';

export class GaussianND extends GCObject {
  static readonly _type = 'ml::GaussianND' as const;

  constructor(
    type: AbiType,
    public count: bigint,
    public min: core.Tensor | null,
    public max: core.Tensor | null,
    public sum: core.Tensor | null,
    public sumsq: core.Tensor | null,
  ) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_i64(this.count);
    w.serialize(this.min);
    w.serialize(this.max);
    w.serialize(this.sum);
    w.serialize(this.sumsq);
  }

  static load(r: AbiReader, type: AbiType): GaussianND {
    const count = r.read_i64();
    const min = r.deserialize() as core.Tensor | null;
    const max = r.deserialize() as core.Tensor | null;
    const sum = r.deserialize() as core.Tensor | null;
    const sumsq = r.deserialize() as core.Tensor | null;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, count, min, max, sum, sumsq) as GaussianND;
  }
}
