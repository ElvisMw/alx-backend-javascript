import readDatabase from '../utils';

/**
 * This class represents a controller for handling requests related to students.
 */
class StudentsController {
  /**
   * Retrieves all students and their information from the database.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  static async getAllStudents(request, response) {
    // Get the path to the database file
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    try {
      // Read the database file and get the student groups
      const studentGroups = await readDatabase(dataPath);

      // Sort the student groups alphabetically by major
      const sortedStudentGroups = Object.entries(studentGroups).sort((a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
          return -1;
        }
        if (a[0].toLowerCase() > b[0].toLowerCase()) {
          return 1;
        }
        return 0;
      });

      // Create a response text with the student information
      const responseText = sortedStudentGroups.reduce((acc, [major, group]) => {
        acc += `Number of students in ${major}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}\n`;
        return acc;
      }, 'This is the list of our students\n');

      // Send the response with the student information
      response.status(200).send(responseText);
    } catch (err) {
      // Send an error response if there was an error reading the database
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }

  /**
   * Retrieves all students in a specific major from the database.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  static async getAllStudentsByMajor(request, response) {
    // Get the path to the database file
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    // Get the major from the request parameters
    const { major } = request.params;

    // Check if the major is valid
    if (!VALID_MAJORS.includes(major)) {
      // Send an error response if the major is not valid
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      // Read the database file and get the student groups
      const studentGroups = await readDatabase(dataPath);

      // Create a response text with the students in the specified major
      let responseText = '';
      if (Object.keys(studentGroups).includes(major)) {
        const group = studentGroups[major];
        responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
      }

      // Send the response with the students in the specified major
      response.status(200).send(responseText);
    } catch (err) {
      // Send an error response if there was an error reading the database
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
