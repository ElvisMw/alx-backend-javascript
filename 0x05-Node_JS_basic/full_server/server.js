// Importing the Express module
const express = require('express');

// Importing the mapRoutes function from the routes folder
import mapRoutes from './routes';

// Creating an instance of the Express application
const app = express();

/**
 * The port number the server will listen on.
 * @type {number}
 */
const PORT = 1245;

/**
 * Map the routes defined in the routes folder to the Express application.
 * @param {Object} app - The Express application.
 */
mapRoutes(app);

/**
 * Start the server and listen on the specified port.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

/**
 * The Express application.
 * @type {Express}
 */
export default app;

/**
 * The Express application.
 * @type {Express}
 */
module.exports = app;
