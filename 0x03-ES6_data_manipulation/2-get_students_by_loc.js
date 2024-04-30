// Function getStudentsByLocation returns an array of students located in a specific city
const getStudentsByLocation = (students, city) => {
  // Use filter function to select students located in the specified city
  const filteredStudents = students.filter((student) => student.location === city);

  // Return the array of students in the specified city
  return filteredStudents;
};

// Exporting getStudentsByLocation function to be used in other modules
export default getStudentsByLocation;
