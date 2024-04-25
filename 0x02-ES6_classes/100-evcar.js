import Car from './10-car';

// Represents an electric vehicle
const _range = Symbol('range');

export default class EVCar extends Car {
  // Constructor to initialize brand, motor, color, and range
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  // Getter for range
  get range() {
    return this[_range];
  }

  // Method to clone a car (returns instance of Car)
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
