## GreyCat TypeScript/JavaScript Native Bindings Tests

This module contains all the tests against:
 - `@greycat/core-wasm`
 - `@greycat/core-napi`

The tests are written using `@greycat/core-napi` for Node.js testing, and an alias in `webpack.config.js` replaces `@greycat/core-napi` to `@greycat/core-wasm` for browser testing.  
The goal is to test the same API against both implementations depending on the environment (Node.js or Browser).