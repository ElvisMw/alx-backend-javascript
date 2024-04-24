// Handle response from API promise
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API'); // Log success message
      return { status: 200, body: 'success' }; // Return success object
    })
    .catch(() => new Error()); // Catch any errors
}
