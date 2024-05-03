// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
  };

  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    location: "Los Angeles"
  };

  // Array containing the two student objects
  const studentsList: Student[] = [student1, student2];

  // Render students in a table
  function renderStudentsTable() {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    studentsList.forEach((student) => {
      const row = tbody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);

      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
  }

  // Call the function to render the table
  renderStudentsTable();
