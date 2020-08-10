import { Options, GreyCatError } from './common';
import { addon } from './addon';
import { GObject } from './GObject';
import { GArray } from './GArray';
import { GFunction } from './GFunction';
import { Context } from './Context';
import { GMap } from './GMap';
import { GType } from './GType';
import { GString } from './GString';

addon.register_gobject_constructor(GObject);
addon.register_garray_constructor(GArray);
addon.register_gfunction_constructor(GFunction);
addon.register_gcontext_constructor(Context);
addon.register_gmap_constructor(GMap);
addon.register_gerror_constructor(GreyCatError);
addon.register_gtype_constructor(GType);
addon.register_gstring_constructor(GString);

export * from './common';
export * from './Graph';
export * from './Context';
export * from './GFunction';
export * from './GArray';
export * from './GMap';
export * from './GObject';
export * from './GType';
export * from './GString';

export async function init(options: Options = {}) {
  addon.register_glogger(options.logger ?? console);
  addon.register_gconsole(options.console ?? {
    print: process.stdout.write.bind(process.stdout),
    println: process.stdout.write.bind(process.stdout),
  });
  if (options.resolver) {
    addon.register_gresolver(options.resolver);
  }
}
