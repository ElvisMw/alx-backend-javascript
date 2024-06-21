/**
 * Calculates the result of a mathematical operation based on the
 * given type, a, and b.
 *
 * @param {string} type - The type of mathematical operation to perform.
 *                        Must be one of 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number|string} The result of the mathematical operation.
 * If the type is 'DIVIDE' and b is 0, returns 'Error'. Otherwise,
 * returns a rounded number.
 */
const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    return roundedB === 0 ? 'Error' : roundedA / roundedB;
  }
  return 0;
};

module.exports = calculateNumber;
