import dts from 'rollup-plugin-dts';

export default {
  input: './dist/esm/internal.d.ts',
  output: {
    file: './dist/greycat.d.ts',
    format: 'iife',
    footer: 'export as namespace greycat;',
  },
  plugins: [dts({ respectExternal: true })],
};
