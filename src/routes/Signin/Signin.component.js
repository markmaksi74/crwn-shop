import {signInWithGooglePopup, createUserDocFromAuth} from '../../utils/firebase/firebase.utils'

const Signin = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        const userDocRef = await createUserDocFromAuth(response.user)
    }

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>
          Sign in with Google Popup
      </button>
    </div>
  )
}

export default Signin
