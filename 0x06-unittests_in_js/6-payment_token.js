/**
 * Retrieves a payment token from the API.
 *
 * @param {boolean} success - Indicates whether the API request was successful.
 * @return {Promise<Object>} A promise that resolves to an object containing the payment token.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
    }
  });
  
  module.exports = getPaymentTokenFromAPI;
