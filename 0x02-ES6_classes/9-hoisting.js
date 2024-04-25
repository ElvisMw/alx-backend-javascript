import HolbertonClass from "./8-hbtn_class.js";

// Represents a Holberton student
export class StudentHolberton {
  // Constructor to initialize student's first name, last name, and class
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Getter for full name
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for Holberton class
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter for full student description
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances of Holberton classes
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// List of students
export const listOfStudents = [
  new StudentHolberton('Guillaume', 'Salva', class2020),
  new StudentHolberton('John', 'Doe', class2020),
  new StudentHolberton('Albert', 'Clinton', class2019),
  new StudentHolberton('Donald', 'Bush', class2019),
  new StudentHolberton('Jason', 'Sandler', class2019)
];
