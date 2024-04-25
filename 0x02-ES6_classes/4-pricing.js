import Currency from './3-currency.js';

// Represents a pricing with amount and currency
export default class Pricing {
  // Constructor to initialize amount and currency
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getters and setters for amount and currency
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  // Method to display full price information
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
