const http = require('http');

/**
 * This script creates a simple HTTP server that listens on port 1245
 * and responds to all requests with the message 'Hello Holberton School!'.
 *
 * @author JamesMaxx <https://github.com/JamesMaxx>
 */

/**
 * The port number the server will listen on.
 * @type {number}
 */
const PORT = 1245;

/**
 * The hostname the server will listen on.
 * @type {string}
 */
const HOST = 'localhost';

/**
 * The HTTP server instance.
 * @type {http.Server}
 */
const app = http.createServer();

/**
 * The event handler for the 'request' event.
 * Responds to all requests with the message 'Hello Holberton School!'.
 * @param {http.IncomingMessage} _ - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the HTTP status code
  res.statusCode = 200;

  // Send the response
  res.write(Buffer.from(responseText));
});

/**
 * Start the server and listen on the specified host and port.
 * @listens http.Server#listening
 */
app.listen(PORT, HOST, () => {
  // Log the server's URL
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
