// Function getStudentIdsSum returns the sum of all student ids
const getStudentIdsSum = (students) => {
  // Use reduce function to calculate the sum of all student ids
  const sum = students.reduce((accumulator, student) => accumulator + student.id, 0);

  // Return the sum of all student ids
  return sum;
};

// Exporting getStudentIdsSum function to be used in other modules
export default getStudentIdsSum;
