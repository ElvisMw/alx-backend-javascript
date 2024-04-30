// Function getListStudentIds returns an array of student ids
const getListStudentIds = (students) => {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    // Return an empty array if argument is not an array
    return [];
  }

  // Use map function to extract ids from student objects
  const ids = students.map((student) => student.id);

  // Return the array of ids
  return ids;
};

// Exporting getListStudentIds function to be used in other modules
export default getListStudentIds;
