export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }
  // Remove the trailing ' | ' at the end
  return result.slice(0, -3);
}
