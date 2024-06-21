/**
 * This function sends a payment request to the API with the given total amount
 * and total shipping cost. It calculates the total cost by summing the total
 * amount and shipping cost using the Utils.calculateNumber method.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost of the payment.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by summing the total amount and shipping cost
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Export the sendPaymentRequestToApi function
module.exports = sendPaymentRequestToApi;
