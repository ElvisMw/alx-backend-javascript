import { uploadPhoto, createUser } from './utils.js'; // Importing uploadPhoto and createUser from utils.js

// Handle profile signup using multiple promises
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]) // Resolving all promises collectively
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`); // Logging body, firstName, and lastName
    })
    .catch(() => console.log('Signup system offline')); // Logging error if signup fails
}
