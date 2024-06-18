/**
 * Maps the routes for the application.
 * @param {Object} app - The Express application.
 */
const mapRoutes = (app) => {
  /**
   * Handles the root route '/' and sends a simple greeting message.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  app.get('/', AppController.getHomepage);

  /**
   * Retrieves all students and their information from the database.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  app.get('/students', StudentsController.getAllStudents);

  /**
   * Retrieves all students in a specific major from the database.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
