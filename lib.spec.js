const { random, startsWith } = require('./lib');

describe('lib structure', () => {
  it('provides expected random', () => {
    expect(typeof random).toBe('function');
  });
  it('provides expected random', () => {
    expect(typeof startsWith).toBe('function');
  });
});

describe('random behavior', () => {
  it('provides string response', () => {
    expect(typeof random() === 'string').toBe(true);
  });
  it('provides a two word response', () => {
    expect(random().includes(' ')).toBe(true);
    expect(random().match(/ /g).length).toBe(1);
  });
});

describe('startsWith behavior', () => {
  const sampleLetter = 'z';
  it('provides string response', () => {
    expect(typeof startsWith(sampleLetter) === 'string').toBe(true);
  });
  it('provides a two word response', () => {
    expect(startsWith(sampleLetter).includes(' ')).toBe(true);
    expect(startsWith(sampleLetter).match(/ /g).length).toBe(1);
  });
  it('provides response starting both words with passed letter', () => {
    const respWordAr = startsWith(sampleLetter).split(' ');
    expect(respWordAr[0].charAt(0).toLowerCase() === sampleLetter).toBe(true);
    expect(respWordAr[1].charAt(0).toLowerCase() === sampleLetter).toBe(true);
  });
});
