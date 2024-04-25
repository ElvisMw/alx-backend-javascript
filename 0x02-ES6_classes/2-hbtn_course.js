// Represents a course at Holberton
export default class HolbertonCourse {
  // Constructor to initialize course name, length, and students
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number') {
      throw new TypeError('Invalid input types');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters and setters for course name, length, and students
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
