// Represents an airport
export default class Airport {
  // Constructor to initialize name and code
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for airport name
  get name() {
    return this._name;
  }

  // Getter for airport code
  get code() {
    return this._code;
  }

  // Override toString method to return airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
