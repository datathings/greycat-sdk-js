#!/usr/bin/env node
import * as path from 'path';
import * as commander from 'commander';
import { VERSION } from './greycat-core';

const program = new commander.Command();
program
  .version(VERSION, '-v, --version')
  .command('print-lib', 'outputs the standard library types', {
    executableFile: path.join('commands', 'print-lib'),
  })
  .command('execute', 'executes a GreyCat Language file (.gcl)', {
    executableFile: path.join('commands', 'execute'),
  })
  .parse(process.argv);
