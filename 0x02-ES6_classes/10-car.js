// Represents a car
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  // Constructor to initialize brand, motor, and color
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Method to clone a car
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}
