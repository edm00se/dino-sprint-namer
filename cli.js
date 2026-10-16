#!/usr/bin/env node

import updateNotifier from 'update-notifier';
import packageJson from './package.json' with { type: 'json' };
import chalk from 'chalk';
import meow from 'meow';
import { random, startsWith } from './lib.js';

updateNotifier({ pkg: packageJson }).notify();

const cli = meow(
  `
  Usage
    $ node cli.js (letter)
  Example
    $ node cli.js (A)
`,
  {
    importMeta: import.meta,
    alias: {
      h: 'help',
      v: 'version'
    }
  }
);

let sprintName = '';
if (undefined === cli.input[0]) {
  sprintName = random();
  console.log(
    chalk.red.bold(
      'No starting letter specified, returning a randomly selected pairing.'
    )
  );
  console.log(chalk.yellow.bold(sprintName));
} else {
  const startingLetter = cli.input[0] || '';
  sprintName = startsWith(startingLetter);
  console.log(chalk.yellow.bold(sprintName));
}
