import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class TimeWindow extends GCObject {
  static readonly _type = 'util::TimeWindow' as const;

  constructor(
    type: AbiType,
    public timeWidth: bigint | number,
    public sum_type: number,
    public sum: number,
    public sumsq: number,
    public size: number,
    public capacity: number,
    public head: bigint | number,
    public tail: bigint | number,
    public values: TimedValue[],
  ) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_vu32(this.type.offset);

    w.write_i64(BigInt(this.timeWidth));
    w.write_u8(this.sum_type);
    w.write_f64(this.sum);
    w.write_f64(this.sumsq);
    w.write_vu32(this.size);
    w.write_vu32(this.capacity);
    w.write_vi64(BigInt(this.head));
    w.write_vi64(BigInt(this.tail));
    for (let i = 0; i < this.values.length; i++) {
      w.serialize(this.values[i].time);
      w.serialize(this.values[i].value);
    }
  }

  static load(r: AbiReader, type: AbiType): TimeWindow {
    const timeWidth = r.read_vi64();
    const sum_type = r.read_u8();
    const sum = r.read_f64();
    const sumsq = r.read_f64();
    const size = r.read_vu32();
    const capacity = r.read_vu32();
    const head = r.read_vi64();
    const tail = r.read_vi64();
    const values = new Array(capacity);
    for (let i = 0; i < capacity; i++) {
      const value = r.deserialize();
      const time = r.read_i64();
      values[i] = new TimedValue(time, value);
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, timeWidth, sum_type, sum, sumsq, size, capacity, head, tail, values) as TimeWindow;
  }
}

export class TimedValue {
  constructor(public time: bigint, public value: Value) {}
}
