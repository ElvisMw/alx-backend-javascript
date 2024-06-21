/**
 * This file contains integration tests for the API.
 * The API is a simple Express application that provides endpoints for
 * getting payment methods and logging in.
 */

const request = require('request'); // Importing the request library for making HTTP requests
const { expect } = require('chai'); // Importing the Chai library for assertions

describe('API integration test', () => {
  /**
   * The base URL for the API.
   * @type {string}
   */
  const API_URL = 'http://localhost:7865';

  /**
   * Test case to verify if the '/' endpoint returns the expected response.
   * The test makes a GET request to the '/' endpoint and checks if the response
   * has a status code of 200 and the body is equal to "Welcome to the payment system".
   * @test {GET /}
   */
  it('GET / returns correct response', (done) => {
    // Making a GET request to the '/' endpoint
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Asserting that the response has a status code of 200
      expect(res.statusCode).to.be.equal(200);
      // Asserting that the response body is equal to "Welcome to the payment system"
      expect(body).to.be.equal('Welcome to the payment system');
      // Calling the 'done' callback to indicate that the test case has completed
      done();
    });
  });
});
