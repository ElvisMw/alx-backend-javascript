// Function updateUniqueItems updates the quantity of items with
// initial quantity at 1 to 100 in the provided map
const updateUniqueItems = (groceriesMap) => {
  // Check if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the map
  for (const [item, quantity] of groceriesMap.entries()) {
    // If quantity is 1, update it to 100
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  }
};

// Exporting updateUniqueItems function to be used in other modules
export default updateUniqueItems;
