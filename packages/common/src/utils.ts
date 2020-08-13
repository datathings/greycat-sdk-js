export function hash(str: string): number {
  let h = 0;
  let i = 0;
  const len = str.length;
  while (i < len) {
    h = ((h << 5) - h + str.charCodeAt(i++)) << 0;
  }
  return h;
}
