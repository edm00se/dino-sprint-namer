const { toTitleCase } = require('./util');

describe('utility functions: toTitleCase', () => {
  it('should correct case passed strings', () => {
    expect(toTitleCase('the quick brown fox jumps over the lazy dog')).toBe(
      'The Quick Brown Fox Jumps Over The Lazy Dog'
    );
  });
});
