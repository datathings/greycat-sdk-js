# greycat-native

The native Node.js N-API bindings to Greycat's C API.

This module is a template to generate the different platform-specific `@greycat/native-{ARCH}-{LIB}`  
Where `ARCH` is the architecture supported by the built binary `.so` and `LIB` is the C library it was compiled against.

# Dev
When the C surface API changes, you **must** manually update the `greycat-native.d.ts` to reflect the changes for consumers.