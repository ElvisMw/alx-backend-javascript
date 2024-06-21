/**
 * Calculates the sum of two numbers after rounding
 * them to the nearest whole number.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The rounded sum of the two numbers.
 */
const calculateNumber = (a, b) => {
  // Round the numbers to the nearest whole number.
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Return the rounded sum of the two numbers.
  return roundedA + roundedB;
};

module.exports = calculateNumber;
