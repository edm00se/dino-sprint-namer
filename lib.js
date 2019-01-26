const { toTitleCase } = require('./util');
const ADJECTIVE_DICTIONARY = require('./adjectives');
const DINOSAUR_NAMES = require('./dinos');

function random() {
  const adj = getRandomAdjective();
  const dino = getRandomDinosaurName();
  return toTitleCase(`${adj} ${dino.name}`);
}

function startsWith(startingLetter) {
  const startsWith = ensureSingleStartingLetter(startingLetter);
  const adj = getRandomAdjectiveStartingWith(startsWith);
  const dino = getRandomDinosaurNameStartingWith(startsWith);
  return toTitleCase(`${adj} ${dino.name}`);
}

function getRandomFromSet(set) {
  return set[Math.floor(Math.random() * set.length)];
}

function getRandomAdjective() {
  return getRandomFromSet(ADJECTIVE_DICTIONARY);
}

function getRandomDinosaurName() {
  return getRandomFromSet(DINOSAUR_NAMES);
}

function ensureSingleStartingLetter(letter) {
  return letter.charAt(0).toLowerCase();
}

function getRandomAdjectiveStartingWith(startingLetter) {
  const startsWith = ensureSingleStartingLetter(startingLetter);
  return getRandomFromSet(
    ADJECTIVE_DICTIONARY.filter(
      adj => adj.toLowerCase().charAt(0) === startsWith
    )
  );
}

function getRandomDinosaurNameStartingWith(startingLetter) {
  const startsWith = ensureSingleStartingLetter(startingLetter);
  const nwSet = DINOSAUR_NAMES.filter(
    dino => dino.name.toLowerCase().charAt(0) === startsWith
  );
  const res = getRandomFromSet(nwSet);
  return res;
}

module.exports = {
  random,
  startsWith
};
