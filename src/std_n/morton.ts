const buffer = new ArrayBuffer(8);

// const u8view = new Uint8Array(buffer);
const u32view = new Uint32Array(buffer);
const f32view = new Float32Array(buffer);
// const u64view = new BigUint64Array(buffer);

const BI_MASK32 = 0xfffffffffn;
const BI_MASK21 = 0x0001fffffn;
const BI_MASK12 = 0x0fffn;
// const MASK32 = 0xfffffffff;
const MASK21 = 0x0001fffff;

// prettier-ignore
export function interleave64_2d(x0: number, x1: number): bigint {
  let x0o = BigInt(x0);
  x0o = (x0o | (x0o << 16n)) & 0x0000ffff0000ffffn;
  x0o = (x0o | (x0o <<  8n)) & 0x00ff00ff00ff00ffn;
  x0o = (x0o | (x0o <<  4n)) & 0x0f0f0f0f0f0f0f0fn;
  x0o = (x0o | (x0o <<  2n)) & 0x3333333333333333n;
  x0o = (x0o | (x0o <<  1n)) & 0x5555555555555555n;

  let x1o = BigInt(x1);
  x1o = (x1o | (x1o << 16n)) & 0x0000ffff0000ffffn;
  x1o = (x1o | (x1o <<  8n)) & 0x00ff00ff00ff00ffn;
  x1o = (x1o | (x1o <<  4n)) & 0x0f0f0f0f0f0f0f0fn;
  x1o = (x1o | (x1o <<  2n)) & 0x3333333333333333n;
  x1o = (x1o | (x1o <<  1n)) & 0x5555555555555555n;

  return x0o | (x1o << 1n);
}

// prettier-ignore
export function deinterleave64_2d(x: bigint): [number, number] {
  let x0 = x;
  x0 = (x0 | (x0 >>  0n)) & 0x5555555555555555n;
  x0 = (x0 | (x0 >>  1n)) & 0x3333333333333333n;
  x0 = (x0 | (x0 >>  2n)) & 0x0f0f0f0f0f0f0f0fn;
  x0 = (x0 | (x0 >>  4n)) & 0x00ff00ff00ff00ffn;
  x0 = (x0 | (x0 >>  8n)) & 0x0000ffff0000ffffn;
  x0 = (x0 | (x0 >> 16n)) & BI_MASK32;

  let x1 = x >> 1n;
  x1 = (x1 | (x1 >>  0n)) & 0x5555555555555555n;
  x1 = (x1 | (x1 >>  1n)) & 0x3333333333333333n;
  x1 = (x1 | (x1 >>  2n)) & 0x0f0f0f0f0f0f0f0fn;
  x1 = (x1 | (x1 >>  4n)) & 0x00ff00ff00ff00ffn;
  x1 = (x1 | (x1 >>  8n)) & 0x0000ffff0000ffffn;
  x1 = (x1 | (x1 >> 16n)) & BI_MASK32;

  // cast to u32
  return [Number(x0), Number(x1)];
}

// prettier-ignore
export function interleave64_3d(x0: number, x1: number, x2: number): bigint {
  let x0o = BigInt(x0) & 0x0001fffffn;
  x0o = (x0o ^ (x0o << 32n)) & 0xffff00000000ffffn;
  x0o = (x0o ^ (x0o << 16n)) & 0x001f0000ff0000ffn;
  x0o = (x0o ^ (x0o <<  8n)) & 0x100f00f00f00f00fn;
  x0o = (x0o ^ (x0o <<  4n)) & 0x10c30c30c30c30c3n;
  x0o = (x0o ^ (x0o <<  2n)) & 0x1249249249249249n;

  let x1o = BigInt(x1) & 0x0001fffffn;
  x1o = (x1o ^ (x1o << 32n)) & 0xffff00000000ffffn;
  x1o = (x1o ^ (x1o << 16n)) & 0x001f0000ff0000ffn;
  x1o = (x1o ^ (x1o <<  8n)) & 0x100f00f00f00f00fn;
  x1o = (x1o ^ (x1o <<  4n)) & 0x10c30c30c30c30c3n;
  x1o = (x1o ^ (x1o <<  2n)) & 0x1249249249249249n;

  let x2o = BigInt(x2) & 0x0001fffffn;
  x2o = (x2o ^ (x2o << 32n)) & 0xffff00000000ffffn;
  x2o = (x2o ^ (x2o << 16n)) & 0x001f0000ff0000ffn;
  x2o = (x2o ^ (x2o <<  8n)) & 0x100f00f00f00f00fn;
  x2o = (x2o ^ (x2o <<  4n)) & 0x10c30c30c30c30c3n;
  x2o = (x2o ^ (x2o <<  2n)) & 0x1249249249249249n;

  return x0o | (x1o << 1n) | (x2o << 2n);
}

// prettier-ignore
export function deinterleave64_3d(x: bigint): [number, number, number] {
  let x0 = x & 0x1249249249249249n;
  x0 = (x0 ^ (x0 >>  2n)) & 0x10c30c30c30c30c3n;
  x0 = (x0 ^ (x0 >>  4n)) & 0x100f00f00f00f00fn;
  x0 = (x0 ^ (x0 >>  8n)) & 0x001f0000ff0000ffn;
  x0 = (x0 ^ (x0 >> 16n)) & 0xffff00000000ffffn;
  x0 = (x0 ^ (x0 >> 32n)) & BI_MASK21;

  let x1 = (x >> 1n) & 0x1249249249249249n;
  x1 = (x1 ^ (x1 >>  2n)) & 0x10c30c30c30c30c3n;
  x1 = (x1 ^ (x1 >>  4n)) & 0x100f00f00f00f00fn;
  x1 = (x1 ^ (x1 >>  8n)) & 0x001f0000ff0000ffn;
  x1 = (x1 ^ (x1 >> 16n)) & 0xffff00000000ffffn;
  x1 = (x1 ^ (x1 >> 32n)) & BI_MASK21;

  let x2 = (x >> 2n) & 0x1249249249249249n;
  x2 = (x2 ^ (x2 >>  2n)) & 0x10c30c30c30c30c3n;
  x2 = (x2 ^ (x2 >>  4n)) & 0x100f00f00f00f00fn;
  x2 = (x2 ^ (x2 >>  8n)) & 0x001f0000ff0000ffn;
  x2 = (x2 ^ (x2 >> 16n)) & 0xffff00000000ffffn;
  x2 = (x2 ^ (x2 >> 32n)) & BI_MASK21;

  // cast to u32
  return [
    Number(x0),
    Number(x1),
    Number(x2),
  ];
}

export function interleave64_4d(x0: number, x1: number, x2: number, x3: number): bigint {
  const x02 = interleave64_2d(x0, x2 & 0xffff);
  const x13 = interleave64_2d(x1, x3 & 0xffff);
  return interleave64_2d(Number(x02 & 0xffffffffn), Number(x13 & 0xffffffffn));
}

export function deinterleave64_4d(x: bigint): [number, number, number, number] {
  const [hi, lo] = deinterleave64_2d(x);
  const [x31hi, x31lo] = deinterleave64_2d(BigInt(hi));
  const [x20hi, x20lo] = deinterleave64_2d(BigInt(lo));
  return [x31hi, x20hi, x31lo, x20lo];
}

// prettier-ignore
export function interleave64_5d(x0: number, x1: number, x2: number, x3: number, x4: number): bigint {
  let x0o = BigInt(x0 & 0x0fff);
  x0o = (x0o ^ (x0o << 32n)) & 0x0ff00000000ffn;
  x0o = (x0o ^ (x0o << 16n)) & 0x00f0000f0000fn;
  x0o = (x0o ^ (x0o <<  8n)) & 0x0c0300c0300c03n;
  x0o = (x0o ^ (x0o <<  4n)) & 0x084210842108421n;

  let x1o = BigInt(x1 & 0x0fff);
  x1o = (x1o ^ (x1o << 32n)) & 0x0ff00000000ffn;
  x1o = (x1o ^ (x1o << 16n)) & 0x00f0000f0000fn;
  x1o = (x1o ^ (x1o <<  8n)) & 0x0c0300c0300c03n;
  x1o = (x1o ^ (x1o <<  4n)) & 0x084210842108421n;

  let x2o = BigInt(x2 & 0x0fff);
  x2o = (x2o ^ (x2o << 32n)) & 0x0ff00000000ffn;
  x2o = (x2o ^ (x2o << 16n)) & 0x00f0000f0000fn;
  x2o = (x2o ^ (x2o <<  8n)) & 0x0c0300c0300c03n;
  x2o = (x2o ^ (x2o <<  4n)) & 0x084210842108421n;

  let x3o = BigInt(x3 & 0x0fff);
  x3o = (x3o ^ (x3o << 32n)) & 0x0ff00000000ffn;
  x3o = (x3o ^ (x3o << 16n)) & 0x00f0000f0000fn;
  x3o = (x3o ^ (x3o <<  8n)) & 0x0c0300c0300c03n;
  x3o = (x3o ^ (x3o <<  4n)) & 0x084210842108421n;

  let x4o = BigInt(x4 & 0x0fff);
  x4o = (x4o ^ (x4o << 32n)) & 0x0ff00000000ffn;
  x4o = (x4o ^ (x4o << 16n)) & 0x00f0000f0000fn;
  x4o = (x4o ^ (x4o <<  8n)) & 0x0c0300c0300c03n;
  x4o = (x4o ^ (x4o <<  4n)) & 0x084210842108421n;

  return x0o | (x1o << 1n) | (x2o << 2n) | (x3o << 3n) | (x4o << 4n);
}

// prettier-ignore
export function deinterleave64_5d(x: bigint): [number, number, number, number, number] {
  // keep one every 5 bit:
  let x0 = x & 0x1084210842108421n;
  x0 = (x0 ^ (x0 >>  4n)) & 0x0c0300c0300c03n;
  x0 = (x0 ^ (x0 >>  8n)) & 0x0f0000f0000fn;
  x0 = (x0 ^ (x0 >> 16n)) & 0x00f00000000ffn;
  x0 = (x0 ^ (x0 >> 32n)) & BI_MASK12;

  let x1 = (x >> 1n) & 0x1084210842108421n;
  x1 = (x1 ^ (x1 >>  4n)) & 0x0c0300c0300c03n;
  x1 = (x1 ^ (x1 >>  8n)) & 0x0f0000f0000fn;
  x1 = (x1 ^ (x1 >> 16n)) & 0x00f00000000ffn;
  x1 = (x1 ^ (x1 >> 32n)) & BI_MASK12;

  let x2 = (x >> 2n) & 0x1084210842108421n;
  x2 = (x2 ^ (x2 >>  4n)) & 0x0c0300c0300c03n;
  x2 = (x2 ^ (x2 >>  8n)) & 0x0f0000f0000fn;
  x2 = (x2 ^ (x2 >> 16n)) & 0x00f00000000ffn;
  x2 = (x2 ^ (x2 >> 32n)) & BI_MASK12;

  let x3 = (x >> 3n) & 0x1084210842108421n;
  x3 = (x3 ^ (x3 >>  4n)) & 0x0c0300c0300c03n;
  x3 = (x3 ^ (x3 >>  8n)) & 0x0f0000f0000fn;
  x3 = (x3 ^ (x3 >> 16n)) & 0x00f00000000ffn;
  x3 = (x3 ^ (x3 >> 32n)) & BI_MASK12;

  let x4 = (x >> 4n) & 0x1084210842108421n;
  x4 = (x4 ^ (x4 >>  4n)) & 0x0c0300c0300c03n;
  x4 = (x4 ^ (x4 >>  8n)) & 0x0f0000f0000fn;
  x4 = (x4 ^ (x4 >> 16n)) & 0x00f00000000ffn;
  x4 = (x4 ^ (x4 >> 32n)) & BI_MASK12;

  return [
    Number(x0),
    Number(x1),
    Number(x2),
    Number(x3),
    Number(x4),
  ];
}

export function interleave64_6d(x0: number, x1: number, x2: number, x3: number, x4: number, x5: number): bigint {
  // keep only 10 bits per dimension
  const x0o = x0 & 0x03ff;
  const x3o = x3 & 0x03ff;
  const x30 = interleave64_2d(x0o, x3o);
  const x1o = x1 & 0x03ff;
  const x4o = x4 & 0x03ff;
  const x41 = interleave64_2d(x1o, x4o);
  const x2o = x2 & 0x03ff;
  const x5o = x5 & 0x03ff;
  const x52 = interleave64_2d(x2o, x5o);
  return interleave64_3d(Number(x30 & 0xffffffffn), Number(x41 & 0xffffffffn), Number(x52 & 0xffffffffn));
}

// prettier-ignore
export function deinterleave64_6d(x: bigint): [number, number, number, number, number, number] {
  let x30 = x & 0x1249249249249249n;
  x30 = (x30 ^ (x30 >>  2n)) & 0x10c30c30c30c30c3n;
  x30 = (x30 ^ (x30 >>  4n)) & 0x100f00f00f00f00fn;
  x30 = (x30 ^ (x30 >>  8n)) & 0x001f0000ff0000ffn;
  x30 = (x30 ^ (x30 >> 16n)) & 0xffff00000000ffffn;
  x30 = (x30 ^ (x30 >> 32n)) & BI_MASK21;
  const [hi30, lo30] = deinterleave64_2d(x30);

  let x41 = (x >> 1n) & 0x1249249249249249n;
  x41 = (x41 ^ (x41 >>  2n)) & 0x10c30c30c30c30c3n;
  x41 = (x41 ^ (x41 >>  4n)) & 0x100f00f00f00f00fn;
  x41 = (x41 ^ (x41 >>  8n)) & 0x001f0000ff0000ffn;
  x41 = (x41 ^ (x41 >> 16n)) & 0xffff00000000ffffn;
  x41 = (x41 ^ (x41 >> 32n)) & BI_MASK21;
  const [hi41, lo41] = deinterleave64_2d(x41);

  let x52 = (x >> 2n) & 0x1249249249249249n;
  x52 = (x52 ^ (x52 >>  2n)) & 0x10c30c30c30c30c3n;
  x52 = (x52 ^ (x52 >>  4n)) & 0x100f00f00f00f00fn;
  x52 = (x52 ^ (x52 >>  8n)) & 0x001f0000ff0000ffn;
  x52 = (x52 ^ (x52 >> 16n)) & 0xffff00000000ffffn;
  x52 = (x52 ^ (x52 >> 32n)) & BI_MASK21;
  const [hi52, lo52] = deinterleave64_2d(x52);

  // cast to u10
  return [
    hi30,
    hi41,
    hi52,
    lo30,
    lo41,
    lo52,
  ]
}

export function interleave64_10d(
  x0: number,
  x1: number,
  x2: number,
  x3: number,
  x4: number,
  x5: number,
  x6: number,
  x7: number,
  x8: number,
  x9: number,
): bigint {
  // keep only 6 bits per dimension
  let x = x0 & 0x03f;
  let y = x5 & 0x03f;
  const x50 = interleave64_2d(x, y);
  x = x1 & 0x03f;
  y = x6 & 0x03f;
  const x61 = interleave64_2d(x, y);
  x = x2 & 0x03f;
  y = x7 & 0x03f;
  const x72 = interleave64_2d(x, y);
  x = x3 & 0x03f;
  y = x8 & 0x03f;
  const x83 = interleave64_2d(x, y);
  x = x4 & 0x03f;
  y = x9 & 0x03f;
  const x94 = interleave64_2d(x, y);
  return interleave64_5d(
    Number(x50 & 0xffffn),
    Number(x61 & 0xffffn),
    Number(x72 & 0xffffn),
    Number(x83 & 0xffffn),
    Number(x94 & 0xffffn),
  );
}

// prettier-ignore
export function deinterleave64_10d(x: bigint): [number, number, number, number, number, number, number, number, number, number] {
  const [x0, x1, x2, x3, x4] = deinterleave64_5d(x);
  const [x0hi, x0lo] = deinterleave64_2d(BigInt(x0));
  const [x1hi, x1lo] = deinterleave64_2d(BigInt(x1));
  const [x2hi, x2lo] = deinterleave64_2d(BigInt(x2));
  const [x3hi, x3lo] = deinterleave64_2d(BigInt(x3));
  const [x4hi, x4lo] = deinterleave64_2d(BigInt(x4));
  // return casted to u6
  return [
    Number(x0hi),
    Number(x1hi),
    Number(x2hi),
    Number(x3hi),
    Number(x4hi),
    Number(x0lo),
    Number(x1lo),
    Number(x2lo),
    Number(x3lo),
    Number(x4lo),
  ]
}

const INT32_MIN = -2147483648;
const INT21_MIN = -1048576;
const INT16_MIN = -32768;
const INT12_MIN = -2048;
const INT10_MIN = -512;
const INT6_MIN = -32;

export function interleave64_2di(x0: number, x1: number): bigint {
  return interleave64_2d(x0 + INT32_MIN, x1 + INT32_MIN);
}

export function deinterleave64_2di(x: bigint): [number, number] {
  const res = deinterleave64_2d(x);
  res[0] += INT32_MIN;
  res[1] += INT32_MIN;
  return res;
}

export function interleave64_3di(x0: number, x1: number, x2: number): bigint {
  return interleave64_3d(x0 + INT21_MIN, x1 + INT21_MIN, x2 + INT21_MIN);
}

export function deinterleave64_3di(x: bigint): [number, number, number] {
  const res = deinterleave64_3d(x);
  res[0] += INT21_MIN;
  res[1] += INT21_MIN;
  res[2] += INT21_MIN;
  return res;
}

export function interleave64_4di(x0: number, x1: number, x2: number, x3: number): bigint {
  return interleave64_4d(x0 + INT16_MIN, x1 + INT16_MIN, x2 + INT16_MIN, x3 + INT16_MIN);
}

export function deinterleave64_4di(x: bigint): [number, number, number, number] {
  const res = deinterleave64_4d(x);
  res[0] += INT16_MIN;
  res[1] += INT16_MIN;
  res[2] += INT16_MIN;
  res[3] += INT16_MIN;
  return res;
}

export function interleave64_5di(x0: number, x1: number, x2: number, x3: number, x4: number): bigint {
  return interleave64_5d(x0 + INT12_MIN, x1 + INT12_MIN, x2 + INT12_MIN, x3 + INT12_MIN, x4 + INT12_MIN);
}

export function deinterleave64_5di(x: bigint): [number, number, number, number, number] {
  const res = deinterleave64_5d(x);
  res[0] += INT12_MIN;
  res[1] += INT12_MIN;
  res[2] += INT12_MIN;
  res[3] += INT12_MIN;
  res[4] += INT12_MIN;
  return res;
}

export function interleave64_6di(x0: number, x1: number, x2: number, x3: number, x4: number, x5: number): bigint {
  return interleave64_6d(
    x0 + INT10_MIN,
    x1 + INT10_MIN,
    x2 + INT10_MIN,
    x3 + INT10_MIN,
    x4 + INT10_MIN,
    x5 + INT10_MIN,
  );
}

export function deinterleave64_6di(x: bigint): [number, number, number, number, number, number] {
  const res = deinterleave64_6d(x);
  res[0] += INT10_MIN;
  res[1] += INT10_MIN;
  res[2] += INT10_MIN;
  res[3] += INT10_MIN;
  res[4] += INT10_MIN;
  res[5] += INT10_MIN;
  return res;
}

export function interleave64_10di(
  x0: number,
  x1: number,
  x2: number,
  x3: number,
  x4: number,
  x5: number,
  x6: number,
  x7: number,
  x8: number,
  x9: number,
): bigint {
  return interleave64_10d(
    x0 + INT6_MIN,
    x1 + INT6_MIN,
    x2 + INT6_MIN,
    x3 + INT6_MIN,
    x4 + INT6_MIN,
    x5 + INT6_MIN,
    x6 + INT6_MIN,
    x7 + INT6_MIN,
    x8 + INT6_MIN,
    x9 + INT6_MIN,
  );
}

export function deinterleave64_10di(
  x: bigint,
): [number, number, number, number, number, number, number, number, number, number] {
  const res = deinterleave64_10d(x);
  res[0] += INT6_MIN;
  res[1] += INT6_MIN;
  res[2] += INT6_MIN;
  res[3] += INT6_MIN;
  res[4] += INT6_MIN;
  res[5] += INT6_MIN;
  res[6] += INT6_MIN;
  res[7] += INT6_MIN;
  res[8] += INT6_MIN;
  res[9] += INT6_MIN;
  return res;
}

export function interleave64_2df(x0: number, x1: number): bigint {
  return interleave64_2d(x0 - INT32_MIN, x1 - INT32_MIN);
}

export function deinterleave64_2df(x: bigint): [number, number] {
  const res = deinterleave64_2d(x);
  res[0] = u32tof32(res[0] + INT32_MIN);
  res[1] = u32tof32(res[1] + INT32_MIN);
  return res;
}

function u32tof32(x: number) {
  u32view[0] = x;
  return f32view[0];
}

export function interleave64_3df(x0: number, x1: number, x2: number): bigint {
  return interleave64_3d(x0 - INT21_MIN, x1 - INT21_MIN, x2 - INT21_MIN);
}

export function deinterleave64_3df(x: bigint): [number, number, number] {
  const res = deinterleave64_3d(x);
  MASK21;
  res[0] = res[0] + INT21_MIN;
  res[0] <<= 21;
  res[1] = res[1] + INT21_MIN;
  res[1] <<= 21;
  res[2] = res[2] + INT21_MIN;
  res[2] <<= 21;
  return res;
}

export function deinterleave64_4df(x: bigint): [number, number, number, number] {
  const res = deinterleave64_4d(x);
  res[0] = res[0] + INT16_MIN;
  res[0] <<= 16; // x = x * 2^16
  res[1] = res[1] + INT16_MIN;
  res[1] <<= 16;
  res[2] = res[2] + INT16_MIN;
  res[2] <<= 16;
  res[3] = res[3] + INT16_MIN;
  res[3] <<= 16;
  return res;
}
