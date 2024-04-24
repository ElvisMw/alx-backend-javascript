// 0-promise.js
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call
        resolve('Response from API');
    });
}
