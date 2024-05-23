import { createUserDoc, signInWithGooglePopUp } from "../../utils/firebase";

function Signin() {
  const handleSignInWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopUp(); // Trigger the Google Sign-In pop-up
      await createUserDoc(response.user);
      // After successful sign-in, you can perform further actions such as navigating to a different page or updating the UI
    } catch (error) {
      console.log(error.message); // Handle errors, such as authentication failures
    }
  };
  return <button onClick={handleSignInWithGoogle}> GoogleSignIn </button>;
}

export default Signin;
