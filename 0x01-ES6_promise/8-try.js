// Function to divide two numbers with error handling
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
      throw new Error('cannot divide by 0'); // Throw error if denominator is zero
    }
    return numerator / denominator; // Return result of division
  }
  