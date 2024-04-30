// Function cleanSet returns a string of all the set values that start with a specific string
const cleanSet = (set, startString) => {
  // Initialize an empty array to store the cleaned values
  const cleanedValues = [];

  // Loop through each element in the set
  for (const value of set) {
    // Check if the current value starts with the startString
    if (value.startsWith(startString)) {
      // If it does, push the rest of the string after startString to the cleanedValues array
      cleanedValues.push(value.slice(startString.length));
    }
  }

  // Return the cleaned values joined by '-'
  return cleanedValues.join('-');
};

// Exporting cleanSet function to be used in other modules
export default cleanSet;
