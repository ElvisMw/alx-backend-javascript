// Function groceriesList returns a map of groceries with the specified items (name, quantity)
const groceriesList = () => {
  // Create a new Map object
  const groceries = new Map();

  // Add the groceries items with their quantities to the map
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  // Return the groceries map
  return groceries;
};

// Exporting groceriesList function to be used in other modules
export default groceriesList;
