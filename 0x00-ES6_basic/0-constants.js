// Function to return a string indicating preference for const
export function taskFirst () {
  // Variable declaration using const
  const task = 'I prefer const when I can.'
  return task
}

// Function to return a string indicating okay status
export function getLast () {
  return ' is okay'
}

// Function to concatenate strings indicating preference for let
export function taskNext () {
  // Variable declaration using let
  let combination = 'But sometimes let'
  // Concatenating the result of getLast() function
  combination += getLast()

  return combination
}
