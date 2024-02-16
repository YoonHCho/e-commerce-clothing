// import firebase utility library, app - always need this to give access to other utilities when we import them in ex firestore and auth. it will be automatically attached to the firebase keyword
import { initializeApp } from "firebase/app";
// database
// import { getFirestore } from "firebase/firestore";
// authenticate
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAvXn94U7-z8ozh6mkLzV4Br-c3msJoYjg",
  authDomain: "e-com-cloth-db.firebaseapp.com",
  projectId: "e-com-cloth-db",
  storageBucket: "e-com-cloth-db.appspot.com",
  messagingSenderId: "523420371609",
  appId: "1:523420371609:web:4fc7f5210b4a017e3d4608",
  measurementId: "G-6WMZ3LCXCN",
};

const app = initializeApp(config);

const auth = getAuth(app);
// const firestore = getFirestore(firebase);
// give access to new google auth provider class from authentication library
const provider = new GoogleAuthProvider();
// always trigger google popup when ever we use google auth provider for authentication and sign-in
provider.setCustomParameters({ prompt: "select_account" });
// by passing provider, will only look at google sign-in
const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      return;
    } else {
      console.log("Error signing-in: ", error);
    }
  }
};

export { auth, signInWithGoogle };
