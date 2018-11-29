#!/usr/bin/env node

const meow = require('meow');

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
if( "" !== odpPath.trim() && startingLetter.length === 1 ){
  bringTheMagic(odpPath);
} else {
  chalk.red.bold('A valid ODP path must be specified!');
}