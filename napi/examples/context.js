// @ts-check
const { init, Graph } = require('..');
const fs = require('fs');
const path = require('path');
// const { expect } = require('chai');

(async () => {
  await init();

  const g = new Graph();
  g.newFunction()
    .then("Console::println('Hello World');")
    .execute()
    .unmark();

    console.log('Done');
  g.destroy();

  console.log('Bye');
})();
