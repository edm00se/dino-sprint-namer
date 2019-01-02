const dinos = require('./dinos');

describe('dinosaur dictionary structure', () => {
  it('provides an array', () => {
    expect(Array.isArray(dinos)).toBe(true);
  });
  it('provides an array of objects', () => {
    expect(dinos.every(el => isObject(el))).toBe(true);
  });
  it('provides an array of objects with names', () => {
    expect(dinos.every(el => Object.keys(el).includes('name'))).toBe(true);
  });
});

function isObject(value) {
  // https://jsperf.com/isobject4
  return value !== null && typeof value === 'object';
}
