const request = require('request');
const { expect } = require('chai');

/**
 * This file contains integration tests for the API.
 * The API is a simple Express application that provides endpoints for
 * getting payment methods and logging in.
 */
describe('API integration test', () => {
  // Base URL for the API
  const API_URL = 'http://localhost:7865';

  /**
   * Test case to verify if the '/' endpoint returns the expected response.
   * The test makes a GET request to the '/' endpoint and checks if the response
   * has a status code of 200 and the body is equal to "Welcome to the payment system".
   * @test {GET /}
   */
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  /**
   * Test case to verify if the '/cart/:id' endpoint returns the expected response
   * for a valid cart ID. The test makes a GET request to the '/cart/:id' endpoint
   * with a valid cart ID and checks if the response has a status code of 200
   * and the body is equal to "Payment methods for cart <cart ID>".
   * @test {GET /cart/:id}
   */
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  /**
   * Test case to verify if the '/cart/:id' endpoint returns a 404 response
   * for negative number values in :id. The test makes a GET request to the
   * '/cart/:id' endpoint with a negative number value and checks if the response
   * has a status code of 404.
   * @test {GET /cart/:id}
   */
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test case to verify if the '/cart/:id' endpoint returns a 404 response
   * for non-numeric values in :id. The test makes a GET request to the
   * '/cart/:id' endpoint with a non-numeric value and checks if the response
   * has a status code of 404.
   * @test {GET /cart/:id}
   */
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test case to verify if the '/login' endpoint returns a valid response
   * for a valid user name. The test makes a POST request to the '/login'
   * endpoint with a valid user name and checks if the response has a status code
   * of 200 and the body is equal to "Welcome <user name>".
   * @test {POST /login}
   */
  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  /**
   * Test case to verify if the '/available_payments' endpoint returns a valid response.
   * The test makes a GET request to the '/available_payments' endpoint and checks if the
   * response has a status code of 200 and the body is equal to
   * {payment_methods: {credit_cards: true, paypal: false}}.
   * @test {GET /available_payments}
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
