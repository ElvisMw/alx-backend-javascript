/**
 * This file contains integration tests for the API.
 * It uses the 'request' library to send HTTP requests to the API and the 'chai' library for assertions.
 */

// Import the 'request' library for making HTTP requests
const request = require('request');

// Import the 'expect' assertion function from the 'chai' library
const { expect } = require('chai');

// Describe the API integration test suite
describe('API integration test', () => {
  // Define the base URL for API requests
  const API_URL = 'http://localhost:7865';

  // Test case: GET / returns correct response
  it('GET / returns correct response', (done) => {
    // Send a GET request to the root URL and expect a 200 status code and the correct response body
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  // Test case: GET /cart/:id returns correct response for valid :id
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    // Send a GET request to the /cart/:id URL with a valid :id parameter and expect a 200 status code and the correct response body
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  // Test case: GET /cart/:id returns 404 response for negative number values in :id
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    // Send a GET request to the /cart/:id URL with a negative :id parameter and expect a 404 status code
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // Test case: GET /cart/:id returns 404 response for non-numeric values in :id
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    // Send a GET request to the /cart/:id URL with a non-numeric :id parameter and expect a 404 status code
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
