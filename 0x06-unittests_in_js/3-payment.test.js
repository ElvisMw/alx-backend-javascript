const sinon = require('sinon'); // Importing the Sinon library for stubbing and spying
const Utils = require('./utils'); // Importing the Utils module
const { expect } = require('chai'); // Importing the Chai library for assertions
const sendPaymentRequestToApi = require('./3-payment'); // Importing the sendPaymentRequestToApi module

/**
 * Test suite for the sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', () => {
  /**
   * Test case to verify if the sendPaymentRequestToApi function
   * uses the calculateNumber method of Utils module.
   */
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    // Spying on the calculateNumber method of Utils module
    const bigBrother = sinon.spy(Utils, 'calculateNumber');

    // Calling the sendPaymentRequestToApi function with some test data
    sendPaymentRequestToApi(150, 30);

    // Asserting that the calculateNumber method of Utils module was called with the right arguments
    expect(bigBrother.calledWith('SUM', 150, 30)).to.be.true;

    // Asserting that the calculateNumber method of Utils module was called only once
    expect(bigBrother.callCount).to.be.equal(1);

    // Restoring the original calculateNumber method of Utils module
    bigBrother.restore();
  });
});
