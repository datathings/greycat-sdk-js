import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class SlidingWindow extends GCObject {
  static readonly _type = 'util.SlidingWindow' as const;

  constructor(
    type: AbiType,
    public width: bigint,
    public sum_type: number,
    public sum: number,
    public sumsq: number,
    public size: number,
    public capacity: number,
    public head: bigint,
    public tail: bigint,
    public values: Value[],
  ) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);

    w.write_i64(this.width);
    w.write_u8(this.sum_type);
    w.write_f64(this.sum);
    w.write_f64(this.sumsq);
    w.write_u32(this.size);
    w.write_u32(this.capacity);
    w.write_i64(this.head);
    w.write_i64(this.tail);

    for (let i = 0; i < this.values.length; i++) {
      w.serialize(this.values[i]);
    }
  }

  static load(r: AbiReader, type: AbiType): SlidingWindow {
    const width = r.read_i64();
    const sum_type = r.read_u8();
    const sum = r.read_f64();
    const sumsq = r.read_f64();
    const size = r.read_u32();
    const capacity = r.read_u32();
    const head = r.read_i64();
    const tail = r.read_i64();

    const values = new Array(capacity);
    for (let i = 0; i < capacity; i++) {
      values[i] = r.deserialize();
    }

    return new SlidingWindow(type, width, sum_type, sum, sumsq, size, capacity, head, tail, values);
  }
}
