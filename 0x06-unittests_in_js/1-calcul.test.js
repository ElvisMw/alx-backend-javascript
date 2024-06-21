const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test cases for the calculateNumber function', () => {

  describe('Test cases for the "SUM" type', () => {
    it('should return 10 for SUM of 5.0 and 5.0', () => {
      assert.strictEqual(calculateNumber('SUM', 5.0, 5.0), 10);
    });

    it('should return 10 for SUM of 5.3 and 4.8', () => {
      assert.strictEqual(calculateNumber('SUM', 5.3, 4.8), 10);
    });

    it('should return -10 for SUM of -5.0 and -5.0', () => {
      assert.strictEqual(calculateNumber('SUM', -5.0, -5.0), -10);
    });

    it('should return -10 for SUM of -5.3 and -4.8', () => {
      assert.strictEqual(calculateNumber('SUM', -5.3, -4.8), -10);
    });

    it('should return 0 for SUM of -5.0 and 5.0', () => {
      assert.strictEqual(calculateNumber('SUM', -5.0, 5.0), 0);
    });

    it('should return 0 for SUM of 5.0 and -5.0', () => {
      assert.strictEqual(calculateNumber('SUM', 5.0, -5.0), 0);
    });

    it('should return 0 for SUM of 0.0 and 0.0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('Test cases for the "SUBTRACT" type', () => {
    it('should return 0 for SUBTRACT of 5.0 and 5.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 5.0), 0);
    });

    it('should return 0 for SUBTRACT of 5.3 and 4.8', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.3, 4.8), 0);
    });

    it('should return 0 for SUBTRACT of -5.0 and -5.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, -5.0), 0);
    });

    it('should return 0 for SUBTRACT of -5.3 and -4.8', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.3, -4.8), 0);
    });

    it('should return -10 for SUBTRACT of -5.0 and 5.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, 5.0), -10);
    });

    it('should return 10 for SUBTRACT of 5.0 and -5.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, -5.0), 10);
    });

    it('should return 0 for SUBTRACT of 0.0 and 0.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('Test cases for the "DIVIDE" type', () => {
    it('should return 5 for DIVIDE of 10.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.0, 2.0), 5.0);
    });

    it('should return -7 for DIVIDE of -14.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -14.0, 2.0), -7.0);
    });

    it('should return -7 for DIVIDE of 14.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 14.0, -2.0), -7.0);
    });

    it('should return 7 for DIVIDE of -14.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -14.0, -2.0), 7.0);
    });

    it('should return 1 for DIVIDE of 3.0 and 3.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 3.0), 1);
    });

    it('should return 1 for DIVIDE of -3.0 and -3.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, -3.0), 1);
    });

    it('should return 1 for DIVIDE of 3.6 and 3.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 3.0), 1);
    });

    it('should return 1 for DIVIDE of 3.4 and 3.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 3.0), 1);
    });

    it('should return 0 for DIVIDE of 0.0 and 5.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('should return 0 for DIVIDE of 0.0 and -5.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), 0);
    });

    it('should return "Error" for DIVIDE of 5.0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('should return "Error" for DIVIDE of 5.0 and 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('should return "Error" for DIVIDE of 5.0 and -0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('should return "Error" for DIVIDE of -5.0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('should return "Error" for DIVIDE of -5.0 and 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('should return "Error" for DIVIDE of -5.0 and -0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('should return "Error" for DIVIDE of 0.0 and 0.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
