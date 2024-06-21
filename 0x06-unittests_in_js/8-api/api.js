/**
 * This file exports an Express application that provides an API for payment.
 * It has a single route for the root path that sends a welcome message.
 *
 * @file
 * @module api.js
 * @author Your Name
 */

const express = require('express');

/**
 * The Express application.
 * @type {express.Application}
 */
const app = express();
/**
 * The port number on which the API is available.
 * @type {number}
 */
const PORT = 7865;

/**
 * The GET handler for the root path.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

/**
 * Starts the server on the specified port.
 */
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
