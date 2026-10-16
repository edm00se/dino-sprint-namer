import { ADJECTIVE_LIST } from './adjectives.js';

describe('Name of the group', () => {
  it('provides an array of strings', () => {
    expect(ADJECTIVE_LIST.every((el) => typeof el === 'string')).toBe(true);
  });
  it('provides single words', () => {
    expect(ADJECTIVE_LIST.every((el) => !el.includes(' '))).toBe(true);
  });
});
