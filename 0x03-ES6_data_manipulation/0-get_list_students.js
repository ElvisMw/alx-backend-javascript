// Function getListStudents returns an array of objects
const getListStudents = () => {
  // Array containing student objects
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  // Return the array of student objects
  return students;
};

// Exporting getListStudents function to be used in other modules
export default getListStudents;
