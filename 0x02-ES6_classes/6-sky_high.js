import Building from './5-building.js';

// Represents a sky-high building, extending from Building
export default class SkyHighBuilding extends Building {
  // Constructor to initialize square footage and number of floors
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for number of floors
  get floors() {
    return this._floors;
  }

  // Method to override evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
