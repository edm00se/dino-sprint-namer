const { generateRandom, generateRandomStartsWith } = require('./lib');

describe('lib structure', () => {
  it('provides expected generateRandom', () => {
    expect(typeof generateRandom).toBe('function');
  });
  it('provides expected generateRandom', () => {
    expect(typeof generateRandomStartsWith).toBe('function');
  });
});

describe('generateRandom behavior', () => {
  it('provides string response', () => {
    expect(typeof generateRandom() === 'string').toBe(true);
  });
  it('provides a two word response', () => {
    expect(generateRandom().includes(' ')).toBe(true);
    expect(generateRandom().match(/ /g).length).toBe(1);
  });
});

describe('generateRandomStartsWith behavior', () => {
  const sampleLetter = 'z';
  it('provides string response', () => {
    expect(typeof generateRandomStartsWith(sampleLetter) === 'string').toBe(
      true
    );
  });
  it('provides a two word response', () => {
    expect(generateRandomStartsWith(sampleLetter).includes(' ')).toBe(true);
    expect(generateRandomStartsWith(sampleLetter).match(/ /g).length).toBe(1);
  });
  it('provides response starting both words with passed letter', () => {
    const respWordAr = generateRandomStartsWith(sampleLetter).split(' ');
    expect(respWordAr[0].charAt(0).toLowerCase() === sampleLetter).toBe(true);
    expect(respWordAr[1].charAt(0).toLowerCase() === sampleLetter).toBe(true);
  });
});
