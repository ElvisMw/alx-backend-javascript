const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test cases for the calculateNumber function', () => {

  describe('Test cases for the "SUM" type', () => {
    it('Test case for equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 5.0, 5.0), 10);
    });

    // Test case for equal positive numbers (alternate)
    it('Test case for equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', 5.3, 4.8), 10);
    });

    // Test case for equal negative numbers
    it('Test case for equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -5.0, -5.0), -10);
    });

    // Test case for equal negative numbers (alternate)
    it('Test case for equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', -5.3, -4.8), -10);
    });

    // Test case for negative and positive numbers
    it('Test case for negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -5.0, 5.0), 0);
    });

    // Test case for positive and negative numbers
    it('Test case for positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 5.0, -5.0), 0);
    });

    // Test case for 0 and 0
    it('Test case for 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('Test cases for the "SUBTRACT" type', () => {
    // Test cases for equal positive numbers
    it('Test cases for equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 5.0), 0);
    });

    // Test cases for equal positive numbers (alternate)
    it('Test cases for equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.3, 4.8), 0);
    });

    // Test cases for equal negative numbers
    it('Test cases for equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, -5.0), 0);
    });

    // Test cases for equal negative numbers (alternate)
    it('Test cases for equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.3, -4.8), 0);
    });

    // Test cases for negative and positive numbers
    it('Test cases for negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, 5.0), -10.0);
    });

    // Test cases for positive and negative numbers
    it('Test cases for positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, -5.0), 10.0);
    });

    // Test cases for 0 and 0
    it('Test cases for 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('Test cases for the "DIVIDE" type', () => {
    // Test case for positive numbers
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.0, 2.0), 5.0);
    });

    // Test case for numbers with different signs
    it('Test case for numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -14.0, 2.0), -7.0);
    });

    // Test case for numbers with different signs (alternate)
    it('Test case for numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 14.0, -2.0), -7.0);
    });

    // Test case for negative numbers
    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -14.0, -2.0), 7.0);
    });

    // Test case for equal positive numbers
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 3.0), 1);
    });

    // Test case for equal negative numbers
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, -3.0), 1);
    });

    // Test case for equal rounded up numbers
    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 3.0), 1);
    });

    // Test case for equal rounded down numbers
    it('Test case for equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 3.0), 1);
    });

    // Test case for 0 and positive number
    it('Test case for 0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    // Test case for 0 and negative number
    it('Test case for 0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), 0);
    });

    // Test case for positive number and 0
    it('Test case for positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    // Test case for positive number and number rounded down to 0
    it('Test case for positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    // Test case for positive number and number rounded up to 0
    it('Test case for positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    // Test case for negative number and 0
    it('Test case for negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    // Test case for negative number and number rounded down to zero
    it('Test case for negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    // Test case for negative number and number rounded up to zero
    it('Test case for negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    // Test case for 0 and 0
    it('Test case for 0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
