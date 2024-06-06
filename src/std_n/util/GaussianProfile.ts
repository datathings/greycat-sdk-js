import type { AbiType, util } from '../../index.js';
import { AbiReader, AbiWriter } from '../../index.js';
import { GCObject } from '../../GCObject.js';

// XXX Update this accordingly to sizeof(gc_gaussian_profile_slot_t)
// for now this is 40 bytes wide
const GC_GAUSSIAN_PROFILE_SLOT_SIZE = 40;

export class GaussianProfile extends GCObject {
  static readonly _type = 'util::GaussianProfile' as const;

  constructor(type: AbiType, public bin_len: number, public slots: GaussianProfileSlot[]) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_u32(this.slots.length);
    w.write_u32(this.bin_len);
    if (this.bin_len > 0) {
      throw new Error(`${this.$type.name} serialization is not implemented`);
    }
  }

  static load(r: AbiReader, type: AbiType): util.GaussianProfile {
    const size = r.read_u32();
    const bin_len_expected = r.read_u32();
    const data = r.decompress(size * GC_GAUSSIAN_PROFILE_SLOT_SIZE);

    const reader = new AbiReader(r.abi, data);
    const slots = new Array(size);
    for (let i = 0; i < slots.length; i++) {
      slots[i] = GaussianProfileSlot.load(reader);
    }
    return new type.factory(type, bin_len_expected, slots) as util.GaussianProfile;
  }

  override toJSON() {
    return Object.assign(
      {
        _type: this.$type.name,
      },
      this,
    );
  }
}

export class GaussianProfileSlot {
  constructor(
    readonly sum: number,
    readonly sumsq: number,
    readonly size: bigint,
    readonly min: number,
    readonly max: number,
    readonly std: number,
    readonly avg: number,
  ) { }

  save(w: AbiWriter) {
    w.write_f64(this.sum);
    w.write_f64(this.sumsq);
    w.write_u64(this.size);
    w.write_f64(this.min);
    w.write_f64(this.max);
  }

  static load(r: AbiReader): GaussianProfileSlot {
    const sum = r.read_f64();
    const sumsq = r.read_f64();
    const size = r.read_u64();
    const min = r.read_f64();
    const max = r.read_f64();

    const nb = Number(size);
    const s = (sum * sum) / nb;
    let std: number;
    if (nb > 1 && sumsq > s) {
        std = Math.sqrt((sumsq - s) / (nb - 1));
    } else {
        std = 0.0;
    }

    return new GaussianProfileSlot(sum, sumsq, size, min, max, std, sum / nb);
  }
}
