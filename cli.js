#!/usr/bin/env node

const chalk = require('chalk');
const meow = require('meow');
const { generateRandom, generateRandomStartsWith } = require('./lib');

const cli = meow(
  `
  Usage
    $ node cli.js (letter)
  Example
    $ node cli.js (A)
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
);

let sprintName = '';
if( undefined === cli.input[0]){
  sprintName = generateRandom();
  console.log(chalk.red.bold('No starting letter specified, returning a randomly selected pairing.'));
  console.log(chalk.yellow.bold(sprintName));
} else {
  const startingLetter = cli.input[0] || '';
  sprintName = generateRandomStartsWith(startingLetter);
  console.log(chalk.yellow.bold(sprintName));
}
