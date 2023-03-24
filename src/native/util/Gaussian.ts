import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Gaussian extends GCObject {
  static readonly _type = 'util.Gaussian' as const;

  constructor(
    type: AbiType,
    public sum: number,
    public sumSq: number,
    public size: bigint,
    public nbAccepted: bigint,
    public nbRejected: bigint,
    public nbNull: bigint,
    public min: number,
    public max: number,
    public minBound: number,
    public maxBound: number,
  ) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    w.write_f64(this.sum);
    w.write_f64(this.sumSq);
    w.write_u64(this.size);
    w.write_u64(this.nbAccepted);
    w.write_u64(this.nbRejected);
    w.write_u64(this.nbNull);
    w.write_f64(this.min);
    w.write_f64(this.max);
    w.write_f64(this.minBound);
    w.write_f64(this.maxBound);
  }

  static load(r: AbiReader, type: AbiType): Gaussian {
    return new Gaussian(
      type,
      r.read_f64(),
      r.read_f64(),
      r.read_u64(),
      r.read_u64(),
      r.read_u64(),
      r.read_u64(),
      r.read_f64(),
      r.read_f64(),
      r.read_f64(),
      r.read_f64(),
    );
  }
}
