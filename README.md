# GreyCat JavaScript bindings

This repository contains the JavaScript bindings of GreyCat C for Node.js (N-API) and Web browsers (WebAssembly)  

## Install
After you have build the core project (using CMake) do the following steps in `bindings/ts`:
```
yarn
yarn build
```

## Tests
After [Install](##Install) you can run the tests:
```
yarn test
```

> Note that to test the bindings in a browser you will need to start the WASM tests manually.  
> To do so, go to `bindings/ts/tests` and run `yarn test:wasm` after you build the bindings.