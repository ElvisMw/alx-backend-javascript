/**
 * This module sets up an Express application and defines the routes for the
 * payment API.
 *
 * @module api
 */

const express = require('express');

// Create an Express app
const app = express();

// Set the port number for the API
const PORT = 7865;

/**
 * Route to handle GET requests to the root URL ("/").
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.get('/', (_, res) => {
  // Send a welcome message to the client
  res.send('Welcome to the payment system');
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing
module.exports = app;
