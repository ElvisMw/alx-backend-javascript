// Define a WeakMap instance to track the number of times queryAPI is called for each endpoint
const weakMap = new WeakMap();

// Export the weakMap instance
export { weakMap };

// Define a function queryAPI to handle API queries
const queryAPI = (endpoint) => {
  // Check if the endpoint is already tracked in the weakMap
  if (weakMap.has(endpoint)) {
    // Increment the count of queries for this endpoint
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    // If the count exceeds or equals 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not tracked, set the count to 1
    weakMap.set(endpoint, 1);
  }
};

// Export the queryAPI function
export { queryAPI };
