/**
 * This file exports an Express application that provides an API for payment.
 * It has two routes: one for the root path that sends a welcome message,
 * and another for the "/cart/:id" path that sends a message with the cart ID.
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
 * The GET handler for the "/cart/:id" path.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

/**
 * Starts the server on the specified port.
 */
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
