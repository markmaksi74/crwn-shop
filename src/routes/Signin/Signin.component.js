import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  // Get the redirect response when signing in with Google Redirect
  useEffect(() => {
    async function redirect() {
      const response = await getRedirectResult(auth)
      if (response) {
        await createUserDocFromAuth(response.user);
      }
    }
    redirect()
  }, [])

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}

    </div>
  );
};

export default Signin;
