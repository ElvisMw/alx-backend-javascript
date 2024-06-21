const express = require('express');

// Create an instance of the Express application
const app = express();

// Set the port number on which the API will be available
const PORT = 7865;

// Parse incoming JSON requests
app.use(express.json());

/**
 * The root endpoint ("/") returns a welcome message.
 * @name GET /
 * @function
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

/**
 * The "/cart/:id" endpoint returns payment methods for a specific cart.
 * @name GET /cart/:id
 * @function
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

/**
 * The "/available_payments" endpoint returns available payment methods.
 * @name GET /available_payments
 * @function
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

/**
 * The "/login" endpoint accepts a POST request with a JSON body containing a username.
 * @name POST /login
 * @function
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

// Start the server and log a message when it is available
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app instance
module.exports = app;
