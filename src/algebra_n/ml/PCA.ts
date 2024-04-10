// import type { AbiReader, AbiWriter, AbiType, ml, core } from '../../index.js';
// import { GCObject } from '../../index.js';

// export class PCA extends GCObject {
//   static readonly _type = 'ml::PCA' as const;

//   constructor(
//     type: AbiType,
//     public best_dim: number,
//     public selected_dim: number,
//     public threshold: number,
//     public eigen_vectors: core.Tensor | null,
//     public eigen_values: core.Tensor | null,
//     public avg: core.Tensor | null,
//     public std: core.Tensor | null,
//     public correlation: core.Tensor | null,
//     public explained_variance: core.Tensor | null,
//     public space_origin: core.Tensor | null,
//     public space_cropped: core.Tensor | null,
//     public dim_info: core.Tensor | null,
//   ) {
//     super(type);
//   }

//   override saveContent(w: AbiWriter): void {
//     w.write_i32(this.best_dim);
//     w.write_i32(this.selected_dim);
//     w.write_f64(this.threshold);
//     w.serialize(this.eigen_vectors);
//     w.serialize(this.eigen_values);
//     w.serialize(this.avg);
//     w.serialize(this.std);
//     w.serialize(this.correlation);
//     w.serialize(this.explained_variance);
//     w.serialize(this.space_origin);
//     w.serialize(this.space_cropped);
//     w.serialize(this.dim_info);
//   }

//   static load(r: AbiReader, type: AbiType): ml.PCA {
//     const best_dim = r.read_i32();
//     const selected_dim = r.read_i32();
//     const threshold = r.read_f64();
//     const eigen_vectors = r.deserialize() as core.Tensor | null;
//     const eigen_values = r.deserialize() as core.Tensor | null;
//     const avg = r.deserialize() as core.Tensor | null;
//     const std = r.deserialize() as core.Tensor | null;
//     const correlation = r.deserialize() as core.Tensor | null;
//     const explained_variance = r.deserialize() as core.Tensor | null;
//     const space_origin = r.deserialize() as core.Tensor | null;
//     const space_cropped = r.deserialize() as core.Tensor | null;
//     const dim_info = r.deserialize() as core.Tensor | null;

//     return new type.factory(
//       type,
//       best_dim,
//       selected_dim,
//       threshold,
//       eigen_vectors,
//       eigen_values,
//       avg,
//       std,
//       correlation,
//       explained_variance,
//       space_origin,
//       space_cropped,
//       dim_info,
//     ) as ml.PCA;
//   }
// }
