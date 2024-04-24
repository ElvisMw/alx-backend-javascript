import { uploadPhoto, createUser } from './utils.js';

// Async function to handle upload and user creation
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto(); // Await photo upload
    const user = await createUser(); // Await user creation
    return { photo, user }; // Return photo and user objects
  } catch (error) {
    return { photo: null, user: null }; // Return null objects if any async function fails
  }
}
