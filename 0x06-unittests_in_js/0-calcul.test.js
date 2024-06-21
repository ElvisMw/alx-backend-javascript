const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test suite for the calculateNumber function', () => {
  it('Test case for calculating floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(5.0, 6.0), 11);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(5.0, 4.4), 9);
  });

  it('Test case for rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.3, 7.3), 9);
  });

  it('Test case for rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(3.4, 5.0), 8);
  });

  it('Test case for rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('Test case for rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(3.7, 2.6), 7);
  });

  it('Test case for rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(4.7, 2.0), 7);
  });

  it('Test case for rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(4.499999, 3.499999), 7);
  });
});
