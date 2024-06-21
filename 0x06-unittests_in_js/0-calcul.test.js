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

  it('Test case for rounding up both a and b to whole numbers', () => {
    assert.strictEqual(calculateNumber(4.5, 5.5), 11);
  });

  it('Test case for rounding down a and up b', () => {
    assert.strictEqual(calculateNumber(4.4, 5.6), 10);
  });

  it('Test case for rounding up a and down b', () => {
    assert.strictEqual(calculateNumber(4.6, 5.4), 10);
  });

  it('Test case for rounding down a and b to zero', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('Test case for rounding up a and b to zero', () => {
    assert.strictEqual(calculateNumber(-0.4, -0.4), -1);
  });

  it('Test case for rounding a and b to different sides', () => {
    assert.strictEqual(calculateNumber(-0.5, 0.5), 0);
  });
});
