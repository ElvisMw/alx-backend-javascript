// Function to guardrail and capture any errors
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction()); // Push result of mathFunction to queue
  } catch (error) {
    queue.push(error.message); // Push error message to queue
  } finally {
    queue.push('Guardrail was processed'); // Push processed message to queue
  }
  return queue; // Return the queue
}
