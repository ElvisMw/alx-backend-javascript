import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Handle profile signup with multiple promises
export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Use Promise.allSettled to concurrently execute signUpUser and uploadPhoto
    const [userResult, photoResult] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    // Map the results to the specified structure
    const results = [
      { status: userResult.status, value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason },
      { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason },
    ];

    return results;
  } catch (error) {
    // Handle any unexpected errors
    console.error('An error occurred:', error);
    return [{ status: 'rejected', value: error }];
  }
}
