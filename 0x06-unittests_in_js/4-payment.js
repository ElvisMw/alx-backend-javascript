/**
 * Sends a payment request to the API with the given total amount and shipping cost.
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by calling the calculateNumber function from the Utils module
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
