import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuB4EPRr8HVUwyFIzKfnAGpXrv8TxKOBQ",
  authDomain: "crwn-db-26707.firebaseapp.com",
  projectId: "crwn-db-26707",
  storageBucket: "crwn-db-26707.appspot.com",
  messagingSenderId: "1066520549852",
  appId: "1:1066520549852:web:dfaf2fe655e37d5ab09719",
  measurementId: "G-M797473KSN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


/* Setting up Firestore */
/***********************/

const db = getFirestore()
export const createUserDocFromAuth = async (userAuth) => {
  // an instance of a document model
  const userDocRef = doc (db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef) // object

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } catch (error) {
      console.error('Error creating the user', error.message)
    }
  } else {
    return userDocRef;
  }
}