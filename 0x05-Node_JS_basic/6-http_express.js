/**
 * This script creates a simple HTTP server using Express framework
 * that listens on port 1245 and responds to all requests with the
 * message 'Hello Holberton School!'.
 *
 * @author JamesMaxx <https://github.com/JamesMaxx>
 */

// Importing the Express module
const express = require('express');

// Creating an instance of the Express application
const app = express();

/**
 * The port number the server will listen on.
 * @type {number}
 */
const PORT = 1245;

/**
 * The route handler for the root route.
 * Responds to all requests with the message 'Hello Holberton School!'.
 *
 * @param {Object} _ - The request object.
 * @param {Object} res - The response object.
 */
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Start the server and listen on the specified host and port.
 * @listens http.Server#listening
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

/**
 * The Express application.
 * @type {Express}
 */
module.exports = app;
