# GreyCat SDK for Javascript

## Prerequisites
- Node.js `>=18`

## Install
```sh
npm install https://get.greycat.io/files/sdk/js/dev/6.4/6.4.3-dev.tgz
```

> You can see what the latest version is at [get.greycat.io](https://get.greycat.io/)

## Usage
```js
import { GreyCat, runtime } from '@greycat/sdk';

// initialize GreyCat
const greycat = await GreyCat.init();
// make it the default instance in the current context
globalThis.greycat.default = greycat;

// call GreyCat
const info = await runtime.Runtime.info();
console.log(info.toJSON());
```


