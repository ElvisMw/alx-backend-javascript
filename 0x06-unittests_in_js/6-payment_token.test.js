/**
 * @fileoverview This file contains unit tests for the getPaymentTokenFromAPI function.
 * The getPaymentTokenFromAPI function is responsible for fetching a payment token from
 * the API. The function takes a boolean parameter 'success' which indicates whether
 * the API call should be successful or not.
 *
 * @require {function} getPaymentTokenFromAPI
 * @require {object} chai
 * @require {object} chai.expect
 */

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/**
 * This describe block contains a single test case for the getPaymentTokenFromAPI function.
 * The test case verifies that the getPaymentTokenFromAPI function returns the expected
 * response when the API call is successful (i.e., when the 'success' parameter is true).
 */
describe('getPaymentTokenFromAPI', () => {
  /**
   * This test case verifies that the getPaymentTokenFromAPI function returns the expected
   * response when the API call is successful (i.e., when the 'success' parameter is true).
   *
   * @test {getPaymentTokenFromAPI}
   */
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    // Call the getPaymentTokenFromAPI function with 'success' set to true
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // Assert that the response is equal to the expected response
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        // Call the 'done' callback to indicate that the test case has completed
        done();
      });
  });
});
