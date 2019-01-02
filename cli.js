#!/usr/bin/env node

const chalk = require('chalk');
const meow = require('meow');
const { generateRandomFromStartingLetter } = require('./lib');

const cli = meow(`
  Usage
    $ node cli.js <letter>
  Example
    $ node cli.js A
`, {
    alias: {
        h: 'help',
        v: 'version'
    }
});

const startingLetter = cli.input[0] || '';
// if( "" !== startingLetter.trim() && startingLetter.length === 1 ){
  console.log(chalk.yellow.bold(generateRandomFromStartingLetter(startingLetter)));
// } else {
//   console.log(chalk.red.bold('A valid starting letter must be specified!'));
// }