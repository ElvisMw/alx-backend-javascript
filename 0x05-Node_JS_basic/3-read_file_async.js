const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {string} dataPath - The path to the CSV data file.
 * @returns {Promise<boolean>} - A promise that resolves to true if the operation is successful.
 * @throws {Error} - Throws an error if the file cannot be loaded.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Read the file asynchronously
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      // Reject the promise if there is an error
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      // Split the file data into lines
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');

      // Create an object to store the student groups by field
      const studentGroups = {};

      // Get the field names from the first line of the file
      const dbFieldNames = fileLines[0].split(',');

      // Get the property names for the student objects
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Loop through each line and create student objects
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        // Create a new array for the student group if it doesn't exist
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Create a new student object with the property names and values
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students
      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Loop through each student group and log the number of students and their names
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      // Resolve the promise with true
      resolve(true);
    }
  });
});

module.exports = countStudents;
