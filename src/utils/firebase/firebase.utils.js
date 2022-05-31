import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuB4EPRr8HVUwyFIzKfnAGpXrv8TxKOBQ",
  authDomain: "crwn-db-26707.firebaseapp.com",
  projectId: "crwn-db-26707",
  storageBucket: "crwn-db-26707.appspot.com",
  messagingSenderId: "1066520549852",
  appId: "1:1066520549852:web:dfaf2fe655e37d5ab09719",
  measurementId: "G-M797473KSN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
})
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);