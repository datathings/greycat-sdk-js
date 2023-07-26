import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class Gaussian extends GCObject {
  static readonly _type = 'util::Gaussian' as const;

  constructor(
    type: AbiType,
    public sum: number,
    public sumSq: number,
    public size: bigint | number,
    public nbAccepted: bigint | number,
    public nbRejected: bigint | number,
    public nbNull: bigint | number,
    public min: number,
    public max: number,
    public minBound: number,
    public maxBound: number,
  ) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_f64(this.sum);
    w.write_f64(this.sumSq);
    w.write_vi64(BigInt(this.size));
    w.write_vi64(BigInt(this.nbAccepted));
    w.write_vi64(BigInt(this.nbRejected));
    w.write_vi64(BigInt(this.nbNull));
    w.write_f64(this.min);
    w.write_f64(this.max);
    w.write_f64(this.minBound);
    w.write_f64(this.maxBound);
  }

  static load(r: AbiReader, type: AbiType): Gaussian {
    const sum = r.read_f64();
    const sumSq = r.read_f64();
    const size = r.read_vi64();
    const nbAccepted = r.read_vi64();
    const nbRejected = r.read_vi64();
    const nbNull = r.read_vi64();
    const min = r.read_f64();
    const max = r.read_f64();
    const minBound = r.read_f64();
    const maxBound = r.read_f64();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(
      type,
      sum,
      sumSq,
      size,
      nbAccepted,
      nbRejected,
      nbNull,
      min,
      max,
      minBound,
      maxBound,
    ) as Gaussian;
  }
}
