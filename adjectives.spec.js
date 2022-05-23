const adj = require('./adjectives');

describe('Name of the group', () => {
  it('provides an array of strings', () => {
    expect(adj.every((el) => typeof el === 'string')).toBe(true);
  });
  it('provides single words', () => {
    expect(adj.every((el) => !el.includes(' '))).toBe(true);
  });
});
