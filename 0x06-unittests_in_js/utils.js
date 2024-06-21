/**
 * A utility class for performing basic arithmetic operations.
 */
const Utils = {
  /**
   * Calculates the result of a given arithmetic operation.
   *
   * @param {string} type - The type of operation to perform.
   *                        Must be one of 'SUM', 'SUBTRACT', or 'DIVIDE'.
   * @param {number} a - The first operand.
   * @param {number} b - The second operand.
   * @return {number|string} The result of the operation. If 'DIVIDE' is used
   *                         and the second operand is 0, returns 'Error'.
   */
  calculateNumber(type, a, b) {
    // Perform the specified operation
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    // Return 0 if an unknown operation type is provided
    return 0;
  },
};

module.exports = Utils;
