/**
 * @fileoverview This file contains test suites for the sendPaymentRequestToApi function.
 * The function is responsible for sending a payment request to the API with the given
 * total amount and shipping cost. It calculates the total cost by summing the total
 * amount and shipping cost, and then logs the total cost to the console.
 */

// Importing necessary libraries and modules
const sinon = require('sinon'); // Importing the Sinon library for stubbing and spying
const { expect } = require('chai'); // Importing the Chai library for assertions
const sendPaymentRequestToApi = require('./5-payment'); // Importing the sendPaymentRequestToApi module

// Describing the test suite for the sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', () => {
  let bigBrother; // Declaring the bigBrother variable

  // Hook to be executed before each test case
  beforeEach(() => {
    // If bigBrother is not defined, spy on the console.log method
    if (!bigBrother) {
      bigBrother = sinon.spy(console, 'log');
    }
  });

  // Hook to be executed after each test case
  afterEach(() => {
    // Reset the history of the console.log method
    bigBrother.resetHistory();
  });

  /**
   * Test case to verify if the sendPaymentRequestToApi function logs the correct total
   * cost to the console when called with the arguments (100, 20).
   */
  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    // Calling the sendPaymentRequestToApi function with the arguments (100, 20)
    sendPaymentRequestToApi(100, 20);
    // Asserting that the console.log method was called with the right arguments
    expect(bigBrother.calledWith('The total is: 120')).to.be.true;
    // Asserting that the console.log method was called only once
    expect(bigBrother.calledOnce).to.be.true;
  });

  /**
   * Test case to verify if the sendPaymentRequestToApi function logs the correct total
   * cost to the console when called with the arguments (10, 10).
   */
  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    // Calling the sendPaymentRequestToApi function with the arguments (10, 10)
    sendPaymentRequestToApi(10, 10);
    // Asserting that the console.log method was called with the right arguments
    expect(bigBrother.calledWith('The total is: 20')).to.be.true;
    // Asserting that the console.log method was called only once
    expect(bigBrother.calledOnce).to.be.true;
  });
});
