/**
 * @fileoverview This file contains unit tests for the getPaymentTokenFromAPI function.
 */

// Importing required modules
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/**
 * Describe the getPaymentTokenFromAPI function.
 */
describe('getPaymentTokenFromAPI', () => {
  /**
   * Test case for the getPaymentTokenFromAPI function when success is true.
   * It checks if the function resolves with the expected response.
   *
   * @param {function} done - The done function to call when the test is complete.
   */
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    // Call the getPaymentTokenFromAPI function with success as true
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // Assert that the response is equal to the expected response
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        // Call the done function to indicate that the test is complete
        done();
      });
  });
});
