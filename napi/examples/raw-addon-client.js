// @ts-check

/**
 * This file is just an example of "how" to use the C n-API in pure JS
 * without the wrapper API classes of @greycat/core-napi
 */
const { addon } = require('../lib/addon');

addon.register_glogger(console);
addon.register_gconsole({
  print: process.stdout.write.bind(process.stdout),
  println: process.stdout.write.bind(process.stdout),
});
addon.register_gobject_constructor(function GObject() {});
addon.register_garray_constructor(function GArray() {});
addon.register_gfunction_constructor(function GFunction() {});
addon.register_gcontext_constructor(function GContext() {});
addon.register_gerror_constructor(function GError() {});
addon.register_gtype_constructor(function GType() {});
addon.register_gmap_constructor(function GMap() {});

const graph = {}; // this is our ref to the graph, could be anything referenceable (no primitive)
addon.graph__wrap(graph, 100000, 1000);

const func = addon.graph__create_function(graph); // returns an instance of `register_gfunction_constructor`
const script = [
  'Console::println("Hello World");',
  'Log::configure("my_logs.txt");',
  'Log::info("Hello World");',
  'Log::warn("Hello World");',
  'Log::configure("my_logs2.txt");',
  'Log::error("Hello World");',
  'Log::debug("Hello World");',
].join('\n');
// fills `func` with opcodes generated from parsing the given GCL script
addon.function__parse(func, script, 'main.gcl');

const ctx = addon.function__create_context(func); // returns an instance of `register_gcontext_constructor`

// executes `func` on context `ctx`
addon.function__execute(ctx, func, () => {
  console.log('Last op-code of the func is this lambda call');
});

// release everything
addon.object__un_mark(func);
addon.object__un_mark(ctx);
addon.graph__destroy(graph);
