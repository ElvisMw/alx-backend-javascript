// Function hasValuesFromArray returns a boolean if all elements in the array exist within the set
const hasValuesFromArray = (set, array) => array.every((element) => set.has(element));

// Exporting hasValuesFromArray function to be used in other modules
export default hasValuesFromArray;
