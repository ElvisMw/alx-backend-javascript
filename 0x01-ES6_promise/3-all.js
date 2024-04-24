import { uploadPhoto, createUser } from './utils';

// Handle profile signup using multiple promises
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`); // Log successful signup
    })
    .catch(() => console.log('Signup system offline')); // Log error if signup fails
}
