
import * as sdk from '@greycat/sdk';
var g = await sdk.GreyCat.init({url:new URL("http://localhost:8080")});
const newRole = sdk.std.runtime.UserRole.create(
    g,
    "role_1",
    ["p1", "p2"],
  );
console.log(newRole.permissions);
