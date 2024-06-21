// API integration tests

const request = require('request'); // HTTP request library
const { expect } = require('chai'); // Assertion library

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865'; // Base URL for API requests

  /**
   * Test for GET / endpoint
   * Ensures that the API returns the correct welcome message.
   */
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  /**
   * Test for GET /cart/:id endpoint
   * Ensures that the API returns the correct payment methods for a valid cart ID.
   */
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  /**
   * Test for GET /cart/:id endpoint
   * Ensures that the API returns a 404 error for negative number values in :id.
   */
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test for GET /cart/:id endpoint
   * Ensures that the API returns a 404 error for non-numeric values in :id.
   */
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test for POST /login endpoint
   * Ensures that the API returns a valid response for a valid user login request.
   */
  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  /**
   * Test for GET /available_payments endpoint
   * Ensures that the API returns the correct available payment methods.
   */
  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
