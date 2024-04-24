// Create a promise that resolves with user details
export default function signUpUser(firstName, lastName) {
    return Promise.resolve({ firstName, lastName });
  }
  