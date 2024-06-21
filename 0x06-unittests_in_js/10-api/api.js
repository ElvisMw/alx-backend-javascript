/**
 * This file sets up an Express application and defines the routes for the
 * payment API.
 *
 * @module api
 */

const express = require('express');

const app = express();
const PORT = 7865;

// Parse incoming request bodies in JSON format
app.use(express.json());

/**
 * Route to handle GET requests to the root URL ("/").
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

/**
 * Route to handle GET requests to the "/cart/:id" URL.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

/**
 * Route to handle GET requests to the "/available_payments" URL.
 * Returns a JSON object with the available payment methods.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

/**
 * Route to handle POST requests to the "/login" URL.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.post('/login', (req, res) => {
  let username = '';

  // Check if request body exists and get the username
  if (req.body) {
    username = req.body.userName;
  }

  // Send a welcome message with the username
  res.send(`Welcome ${username}`);
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing
module.exports = app;
