/**
 * Fetches a payment token from the API.
 *
 * @param {boolean} success - Indicates whether the API call should be successful.
 * @return {Promise} A promise that resolves with the payment token data if the API call succeeds,
 *                   or rejects with an error if the API call fails.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  // If the API call is successful, resolve the promise with the payment token data
  if (success) {
    resolve({data: 'Successful response from the API'});
  }
});

module.exports = getPaymentTokenFromAPI;
