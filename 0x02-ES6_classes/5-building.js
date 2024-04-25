// Represents a building
export default class Building {
  // Constructor to initialize square footage
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for square footage
  get sqft() {
    return this._sqft;
  }

  // Abstract method for evacuation warning message
  evacuationWarningMessage() {
    // Ensure 'this' keyword is used
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
