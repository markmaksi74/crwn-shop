// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignupForm from "../../components/SignUpForm/SignupForm.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  // Get the redirect response when signing in with Google Redirect
  // useEffect(() => {
  //   async function redirect() {
  //     const response = await getRedirectResult(auth)
  //     if (response) {
  //       await createUserDocFromAuth(response.user);
  //     }
  //   }
  //   redirect()
  // }, [])

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignupForm />

    </div>
  );
};

export default Signin;
