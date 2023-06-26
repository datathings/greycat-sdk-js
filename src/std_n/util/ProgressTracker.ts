import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';
import { PrimitiveType } from '../../types.js';

export class ProgressTracker extends GCObject {
  static readonly _type = 'util::ProgressTracker' as const;

  constructor(
    type: AbiType,
    public initial_time: bigint,
    public last_time: bigint,
    public previous_time: bigint,
    public previous_steps: bigint,
    public max_step: bigint,
    public nb_step: bigint,
    public duration: bigint,
    public lap_duration: bigint,
    public total_speed: number,
    public step_speed: number,
    public progress: number,
    public remaining_time: bigint,
  ) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);

    w.write_i64(this.initial_time);
    w.write_i64(this.last_time);
    w.write_i64(this.previous_time);
    w.write_i64(this.previous_steps);
    w.write_i64(this.max_step);
    w.write_i64(this.nb_step);
    w.write_i64(this.duration);
    w.write_i64(this.lap_duration);
    w.write_f64(this.total_speed);
    w.write_f64(this.step_speed);
    w.write_f64(this.progress);
    w.write_i64(this.remaining_time);
  }

  static load(r: AbiReader, type: AbiType): ProgressTracker {
    const initial_time = r.read_i64();
    const last_time = r.read_i64();
    const previous_time = r.read_i64();
    const previous_steps = r.read_i64();
    const max_step = r.read_i64();
    const nb_step = r.read_i64();
    const duration = r.read_i64();
    const lap_duration = r.read_i64();
    const total_speed = r.read_f64();
    const step_speed = r.read_f64();
    const progress = r.read_f64();
    const remaining_time = r.read_i64();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(
      type,
      initial_time,
      last_time,
      previous_time,
      previous_steps,
      max_step,
      nb_step,
      duration,
      lap_duration,
      total_speed,
      step_speed,
      progress,
      remaining_time,
    ) as ProgressTracker;
  }
}
