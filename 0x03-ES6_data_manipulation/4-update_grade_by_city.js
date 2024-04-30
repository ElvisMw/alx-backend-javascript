// Function updateStudentGradeByCity returns an array of...
// students for a specific city with their new grades
const updateStudentGradeByCity = (students, city, newGrades) => {
  // Use filter to get students in the specified city
  const filteredStudents = students.filter((student) => student.location === city);

  // Use map to update grades for students in the specified city
  const updatedStudents = filteredStudents.map((student) => {
    // Find the grade object for the student
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    // If grade exists, assign the grade to the student, otherwise assign 'N/A'
    const grade = studentGrade ? studentGrade.grade : 'N/A';

    // Return the student object with updated grade
    return { ...student, grade };
  });

  // Return the array of students with updated grades
  return updatedStudents;
};

// Exporting updateStudentGradeByCity function to be used in other modules
export default updateStudentGradeByCity;
