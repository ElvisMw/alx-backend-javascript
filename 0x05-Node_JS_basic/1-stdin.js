/**
 * This script prompts the user for their name and prints it back to the user.
 * It listens for the "data" event on stdin to get the user input and the "end"
 * event to know when the user has finished inputting.
 */

process.stdout.write("Welcome to Holberton School, what is your name?\n");

/**
 * Event listener for the "data" event on stdin.
 * When data is received, it trims the string and prints it back to the user.
 * @param {Buffer} data - The data received from stdin as a buffer.
 */
process.stdin.on("data", function (data) {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

/**
 * Event listener for the "end" event on stdin.
 * When the user has finished inputting, it prints a closing message.
 */
process.stdin.on("end", function () {
  process.stdout.write("This important software is now closing\n");
});

module.exports = {};
