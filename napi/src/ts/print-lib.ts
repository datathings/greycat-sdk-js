#!/usr/bin/env node
import { Graph } from '.';

const graph = new Graph();
// tslint:disable-next-line:no-console
console.log(JSON.stringify(graph.exportTypes()));
graph.destroy();
