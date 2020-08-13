#!/usr/bin/env node
import * as commander from 'commander';
import { readFileSync } from 'fs-extra';
import { default as chalk } from 'chalk';
import { Graph, IFunction } from '../greycat-core';

const program = new commander.Command();
program
  .arguments('[filepath...]')
  .description('Executes the given Greycat Language scripts (.gcl)')
  .action((files: string[]) => {
    if (files.length === 0) {
      program.outputHelp();
      return;
    }

    const graph = new Graph();
    const ctx = graph.newContext();
    ctx.onError(null);
    const task = graph.newFunction();
    files.forEach((filepath) => readFile(task, filepath));
    task.execute(ctx, (err) => {
      if (err) {
        console.log(`${chalk.red('GreycatError')}`);
        console.log(` reason: ${err.reason}`);
        console.log(` stack:`);
        console.log(`    ${err.stack}`);
        console.log();
      }
    });
    task.unmark();
    ctx.unmark();
    graph.destroy();
  })
  .parse(process.argv);

function readFile(func: IFunction, filepath: string) {
  let script: string | undefined;
  try {
    script = readFileSync(filepath, { encoding: 'utf8' });
    func.then(script, filepath);
  } catch (err) {
    console.log(`${chalk.red('Error')}: ${err.message}`);
    console.log();
  }
}
