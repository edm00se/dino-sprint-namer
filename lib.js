import { toTitleCase } from './util.js';
import { ADJECTIVE_LIST } from './adjectives.js';
import { DINO_NAMES } from './dinos.js';

export function random() {
  const adj = getRandomAdjective();
  const dino = getRandomDinosaurName();
  return toTitleCase(`${adj} ${dino.name}`);
}

export function startsWith(startingLetter) {
  const startsWith = ensureSingleStartingLetter(startingLetter);
  const adj = getRandomAdjectiveStartingWith(startsWith);
  const dino = getRandomDinosaurNameStartingWith(startsWith);
  return toTitleCase(`${adj} ${dino.name}`);
}

function getRandomFromSet(set) {
  return set[Math.floor(Math.random() * set.length)];
}

function getRandomAdjective() {
  return getRandomFromSet(ADJECTIVE_LIST);
}

function getRandomDinosaurName() {
  return getRandomFromSet(DINO_NAMES);
}

function ensureSingleStartingLetter(letter) {
  return letter.charAt(0).toLowerCase();
}

function getRandomAdjectiveStartingWith(startingLetter) {
  const startsWith = ensureSingleStartingLetter(startingLetter);
  return getRandomFromSet(
    ADJECTIVE_LIST.filter((adj) => adj.toLowerCase().charAt(0) === startsWith)
  );
}

function getRandomDinosaurNameStartingWith(startingLetter) {
  const startsWith = ensureSingleStartingLetter(startingLetter);
  const nwSet = DINO_NAMES.filter(
    (dino) => dino.name.toLowerCase().charAt(0) === startsWith
  );
  const res = getRandomFromSet(nwSet);
  return res;
}
