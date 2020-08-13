import * as fs from 'fs';
import * as path from 'path';
import { Graph } from './greycat';
import init from './init';

before(() => init());

const LANG_DIR = path.resolve(__dirname, '../../../../test/language');

function readdir(
  dirpath: string,
  fileIterator: (filename: string, filepath: string, data: string) => void,
  filter: (value: any) => boolean,
) {
  fs.readdirSync(dirpath, { encoding: 'utf8' })
    .filter(filter)
    .forEach((fileName) => {
      const filepath = path.join(dirpath, fileName);
      fileIterator(fileName, filepath, fs.readFileSync(filepath, { encoding: 'utf8' }));
    });
}

describe.skip('Exec test/language', () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  afterEach(() => {
    graph.destroy();
  });

  describe('success', () => {
    const dirpath = path.join(LANG_DIR);
    readdir(dirpath, (filename, filepath, data) => {
      it(filename, (done) => {
        graph
          .newFunction()
          .then(data, filepath)
          .execute((err, ctx) => {
            ctx.unmark();
            done(err);
          })
          .unmark();
      });
    }, (name) => name.endsWith('.test.gcl'));
  });

  describe('failure', () => {
    const dirpath = path.join(LANG_DIR, 'failure');
    readdir(dirpath, (filename, filepath, data) => {
      it(filename, (done) => {
        graph
          .newFunction()
          .then(data, filepath)
          .execute(graph.newContext().onError(null), (err, ctx) => {
            if (err) {
              ctx.unmark();
              done();
            } else {
              ctx.unmark();
              done(new Error(`File '${filename}' was supposed to fail and it did not`));
            }
          })
          .unmark();
      });
    }, (name) => name.endsWith('.test.fail.gcl'));
  });
});
