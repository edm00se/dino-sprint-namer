import { DINO_NAMES } from './dinos.js';

describe('dinosaur dictionary structure', () => {
  it('provides an array', () => {
    expect(Array.isArray(DINO_NAMES)).toBe(true);
  });
  it('provides an array of objects', () => {
    expect(DINO_NAMES.every((el) => isObject(el))).toBe(true);
  });
  it('provides an array of objects with names', () => {
    expect(DINO_NAMES.every((el) => Object.keys(el).includes('name'))).toBe(
      true
    );
  });
});

function isObject(value) {
  // https://jsperf.com/isobject4
  return value !== null && typeof value === 'object';
}
