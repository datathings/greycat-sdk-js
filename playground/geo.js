// @ts-check
import { GreyCat, core } from '@greycat/sdk';
import fs from 'node:fs';

const g = await GreyCat.init();

console.log({
  sdk: new Uint8Array(
    g.serializeWithHeaders([
      core.geo.fromLatLng(1, 2),
      core.geo.fromLatLng(1.5, 2.01),
      core.geo.fromLatLng(1, 2),
    ]),
  ),
  core: new Uint8Array(readBytes('project::geos.bin')),
});

// console.log(
//   'geos',
//   JSON.parse(JSON.stringify(g.deserializeWithHeader(readBytes('project::geos.bin')))),
// );

/**
 * @param {string} filepath
 * @returns {ArrayBuffer}
 */
function readBytes(filepath) {
  // Read the file into a Buffer
  const buffer = fs.readFileSync(filepath);
  // Convert Buffer to ArrayBuffer
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
