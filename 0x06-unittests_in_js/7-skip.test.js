/**
 * This test suite is used to test that the numbers 1 through 7 are equal to themselves.
 */
const { expect } = require('chai');

describe('Testing numbers', () => {
  /**
   * Test case to verify that the number 1 is equal to itself.
   */
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  /**
   * Test case to verify that the number 2 is equal to itself.
   */
  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  /**
   * Test case to verify that the number 3 is equal to itself.
   * This test case is currently skipped.
   */
  it.skip('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  /**
   * Test case to verify that the number 4 is equal to itself.
   */
  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  /**
   * Test case to verify that the number 5 is equal to itself.
   */
  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  /**
   * Test case to verify that the number 6 is equal to itself.
   */
  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  /**
   * Test case to verify that the number 7 is equal to itself.
   */
  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});
