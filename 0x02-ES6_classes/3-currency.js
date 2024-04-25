// Represents a currency
export default class Currency {
  // Constructor to initialize currency code and name
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters and setters for currency code and name
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Method to display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
