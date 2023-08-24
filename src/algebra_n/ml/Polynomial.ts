import type { AbiType } from '../../abi.js';
import type { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class Polynomial extends GCObject {
  static readonly _type = 'ml::Polynomial' as const;

  constructor(
    type: AbiType,
    public degree: number,
    public x_start: number,
    public x_step: number,
    public tensor_type: number,
    public data: Uint8Array,
  ) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_u8(this.degree);
    w.write_u64(BigInt(this.data.byteLength));
    w.write_f64(this.x_start);
    w.write_f64(this.x_step);
    w.write_u8(this.tensor_type);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): Polynomial {
    const degree = r.read_u8();
    const coefficient_size = r.read_u64();
    const x_start = r.read_f64();
    const x_step = r.read_f64();
    const tensor_type = r.read_u8();
    const data = r.take(Number(coefficient_size)); // meh boxing

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, degree, x_start, x_step, tensor_type, data) as Polynomial;
  }
}
