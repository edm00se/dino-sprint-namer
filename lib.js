const ADJECTIVE_DICTIONARY = require('./adjectives');
const DINOSAUR_NAMES = require('./dinos');
const { toTitleCase } = require('./util');

function generateRandomFromStartingLetter(){
  // TODO: logic
  return toTitleCase('studious stegosaurus');
}

module.exports = {
  generateRandomFromStartingLetter
};