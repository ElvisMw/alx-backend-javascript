// Represents a Holberton class
export default class HolbertonClass {
  // Constructor to initialize size and location
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Cast to number returns size
  valueOf() {
    return this._size;
  }

  // Cast to string returns location
  toString() {
    return this._location;
  }
}
