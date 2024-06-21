/**
 * Class representing the AppController.
 * This controller handles the root route '/' and sends a simple greeting message.
 */
class AppController {
  /**
   * Handles the root route '/' and sends a simple greeting message.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  static getHomepage(request, response) {
    // Set the HTTP status code to 200 (OK)
    response.status(200).send('Hello Holberton School!');
  }
}

// Export the AppController class as the default export
export default AppController;

// Export the AppController class as a commonjs module
module.exports = AppController;
