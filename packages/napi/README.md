# greycat-napi

An higher abstraction above `@greycat/native-{ARCH}-{LIB}`.

This module will try to `require()` the Greycat native module based on the current arch it runs on.  
This means that you have to add the dependency to the Greycat native module that matches the platform you want to run your code on.

Most of the time it means you need:
```sh
yarn add @greycat/napi @greycat/native-x64-libc
```

But one might need this for Docker `alpine`:
```sh
yarn add @greycat/napi @greycat/native-x64-musl
```

> Not every arch/lib are available yet for this module while they might be available for Greycat core.
> If you are interested in getting the Greycat native module for Node.js for a platform that is not yet available, do not hesitate to create an issue for it.