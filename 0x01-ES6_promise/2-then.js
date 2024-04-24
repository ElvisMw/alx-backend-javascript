// Handle response from API promise
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.log('Got an error from the API');
      return new Error('Error from the API');
    });
}
