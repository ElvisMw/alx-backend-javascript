// Create a promise that resolves or rejects based on the success parameter
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' }); // Resolve with success object
    } else {
      reject(new Error('The fake API is not working currently')); // Reject with error object
    }
  });
}
