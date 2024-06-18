const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @throws {Error} If the file cannot be loaded.
 * @author JamesMaxx <https://github.com/JamesMaxx>
 */
const countStudents = (dataPath) => {
  // Check if the file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  // Check if the file is a regular file
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  // Read the file and split it into lines
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
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
  console.log(`Number of students: ${totalStudents}`);
  // Loop through each student group and print the number of students
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
