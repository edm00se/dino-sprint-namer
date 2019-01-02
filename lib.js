const ADJECTIVE_DICTIONARY = require('./adjectives');
const DINOSAUR_NAMES = require('./dinos');

function generateRandomFromStartingLetter(){
  // TODO: logic
  return 'studious stegosaurus';
}

function generateRandom(){
  const adj = getRandomAdjective();
  const dino = getRandomDinosaurName();
  return `${adj} ${dino.name}`;
}

function getRandomFromSet(set){
  return set[Math.floor(Math.random() * set.length)];
}

function getRandomAdjective(){
  return getRandomFromSet(ADJECTIVE_DICTIONARY);
}

function getRandomDinosaurName(){
  return getRandomFromSet(DINOSAUR_NAMES);
}

module.exports = {
  getRandomAdjective,
  getRandomDinosaurName,
  generateRandom,
  generateRandomFromStartingLetter
};