// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDrFCotC0ZAQllnY6JWJIvzkzEwuDVmZNU",
  authDomain: "alumna-d1205.firebaseapp.com",
  databaseURL: "https://alumna-d1205-default-rtdb.firebaseio.com",
  projectId: "alumna-d1205",
  storageBucket: "alumna-d1205.appspot.com",
  messagingSenderId: "454008853034",
  appId: "1:454008853034:web:dc37799b84aa72f9506953",
  measurementId: "G-266J5YDPMR"
=======
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId:messagingSenderId ,
  appId: appId ,
  measurementId:appId 
>>>>>>> 47fe98a2b2c9d16e2abd662a05047c1bbe7e10a9
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export function signIn () {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore();
