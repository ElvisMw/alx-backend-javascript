import fs from 'fs';

/**
 * Reads a database file and returns a Promise that resolves to an object
 * containing student groups by field.
 *
 * @param {string} dataPath - The path to the database file.
 * @returns {Promise<Object>} - A Promise that resolves to an object with
 * student groups by field.
 * @throws {Error} - If the database cannot be loaded.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // Check if the dataPath is valid
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  // Read the database file
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      // Split the file into lines and remove leading/trailing whitespace
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');

      // Create an object to store the student groups by field
      const studentGroups = {};

      // Get the field names from the first line of the file
      const dbFieldNames = fileLines[0].split(',');

      // Get the property names for the student objects
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      // Loop through each line and create student objects
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
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

      // Resolve the Promise with the student groups by field
      resolve(studentGroups);
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
