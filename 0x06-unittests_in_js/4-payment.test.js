const Utils = require('./utils');

/**
 * Sends a payment request to the API with the given total amount and shipping cost.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost of the payment.
 * @return {void} This function does not return anything.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
