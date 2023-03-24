import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { geo } from './geo.js';

export class GeoPoly extends GCObject {
  static readonly _type = 'core.GeoPoly' as const;

  constructor(type: AbiType, public points: geo[]) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    w.write_u32(this.points.length);
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].save(w);
    }
  }

  static load(r: AbiReader, type: AbiType): GeoPoly {
    const len = r.read_u32();
    const points = new Array(len);
    for (let i = 0; i < len; i++) {
      points[i] = geo.load(r);
    }
    return new GeoPoly(type, points);
  }

  static fromJSON(o: unknown): GeoPoly {
    Object.setPrototypeOf(o, GeoPoly.prototype);
    return o as GeoPoly;
  }

  override toJSON() {
    return {
      _type: this.type.name,
      points: this.points,
    };
  }
}
