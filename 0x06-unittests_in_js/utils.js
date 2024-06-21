/**
 * A utility module that provides a function to calculate the result of a
 * mathematical operation based on the given type, a, and b.
 * @module utils
 */

/**
 * A utility module that provides a function to calculate the result of a
 * mathematical operation based on the given type, a, and b.
 * @type {Object}
 */
const Utils = {
  /**
   * Calculates the result of a mathematical operation based on the given type, a, and b.
   *
   * @param {string} type - The type of mathematical operation to perform.
   *                        Must be one of 'SUM', 'SUBTRACT', or 'DIVIDE'.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number|string} The result of the mathematical operation.
   * If the type is 'DIVIDE' and b is 0, returns 'Error'. Otherwise,
   * returns a rounded number.
   */
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      // Round the numbers to the nearest whole number and add them
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      // Round the numbers to the nearest whole number and subtract b from a
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      // Check if b is 0; if so, return 'Error'
      // Otherwise, round both numbers and divide them
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    // Default to returning 0 if the type is not recognized
    return 0;
  },
};

module.exports = Utils;
