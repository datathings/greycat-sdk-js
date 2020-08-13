const { spawn } = require('child_process');
const path = require('path');
const stream = require('stream');
const fs = require('fs');


const g = spawn('build/greycat', ['-b', '-d', '-p', 'test/language/debugger/loop.gcl'], {
  cwd: path.join('../../../..'),
  stdio: ['ignore', 'pipe', 'inherit'],
});
console.log(`greycat started (pid:${g.pid})`);

g.on('close', (code, signal) => {
  console.log(`greycat exited (code=${code}, signal=${signal})`);
});

g.stdout.setEncoding('utf8');
g.stdout.on('data', (data) => {
  data.trim().split('\n').forEach((line) => {
    console.log(`greycat:${g.pid}> ${line}`);
  });
});

process.on('exit', () => {
  g.kill();
});
