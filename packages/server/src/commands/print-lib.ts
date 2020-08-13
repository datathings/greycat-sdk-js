#!/usr/bin/env node
import * as commander from 'commander';
import { writeFileSync } from 'fs-extra';
import { Graph } from '../greycat-core';

const program = new commander.Command();
program
  .description('Outputs the Greycat standard libraries types to the stdout by default')
  .option('-o, --output <filepath>', 'write JSON output at filepath')
  .action(() => {
    const g = new Graph();
    const types = g.exportTypes();
    g.destroy();
    const jsonTypes = JSON.stringify(types, null, 2);

    if (program.output) {
      writeFileSync(program.output, jsonTypes, { encoding: 'utf8' });
    } else {
      console.log(jsonTypes);
    }
  })
  .parse(process.argv);
