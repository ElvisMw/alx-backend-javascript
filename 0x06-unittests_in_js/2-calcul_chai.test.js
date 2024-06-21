const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

/**
 * Test suite for the calculateNumber function.
 */
describe('calculateNumber', () => {
  /**
   * Test cases for the "SUM" type.
   */
  describe('type == "SUM"', () => {
    it('Test case for equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

  });

  describe('Test cases for the "SUBTRACT" type', () => {
    it(' Test case for equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

  });

  describe('Test cases for the "DIVIDE" type', () => {
    it('Test case for positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });
  });
});
