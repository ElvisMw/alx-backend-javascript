/**
 * This module exports a function that sends a payment request to an API.
 * The payment request includes the total amount and total shipping cost.
 * The function uses the calculateNumber method from the Utils module to calculate the total cost.
 * The total cost is then logged to the console.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost of the payment.
 */

const Utils = require('./utils');

/**
 * Sends a payment request to an API.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost of the payment.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost of the payment
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
