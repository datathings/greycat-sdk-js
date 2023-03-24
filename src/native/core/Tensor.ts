import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Tensor extends GCObject {
  static readonly _type = 'core.Tensor' as const;

  constructor(
    type: AbiType,
    public shape: number[],
    public tensorType: number,
    public size: number,
    public data: Uint8Array,
  ) {
    super(type);
  }

  static load(r: AbiReader, type: AbiType): Tensor {
    const nb_dim = r.read_i8();
    const tensorType = r.read_u8();
    const shape = new Array(nb_dim);
    for (let i = 0; i < nb_dim; i++) {
      shape[i] = r.read_i32();
    }

    let size = r.read_i32();
    const binSize = size;
    switch (tensorType) {
      case 0:
      case 2:
        size *= 4;
        break;
      case 1:
      case 3:
      case 4:
        size *= 8;
        break;
      case 5:
        size *= 16;
        break;
      default:
        throw new Error(`invalid TensorType ${tensorType}`);
    }

    const data = r.take(binSize);

    return new Tensor(type, shape, tensorType, size, data);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    w.write_i8(this.shape.length);
    w.write_u8(this.tensorType);
    for (let i = 0; i < this.shape.length; i++) {
      w.write_i32(this.shape[i]);
    }
    w.write_i32(this.size);
    w.write_all(this.data);
  }
}
