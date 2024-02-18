// import firebase utility library, app - always need this to give access to other utilities when we import them in ex firestore and auth. it will be automatically attached to the firebase keyword
import { initializeApp } from "firebase/app";
// database
import { getFirestore, doc, onSnapshot, getDoc, setDoc } from "firebase/firestore";
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

// app = firebase
const app = initializeApp(config);

const auth = getAuth(app);
const db = getFirestore(app);
// give access to new google auth provider class from authentication library
const provider = new GoogleAuthProvider();
// always trigger google popup when ever we use google auth provider for authentication and sign-in
provider.setCustomParameters({ prompt: "select_account" });
// by passing provider, will only look at google sign-in
const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log("Error signing-in: ", error);
  }
};

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, `users/${userAuth.uid}`), { displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating a user", error);
    }
  }
  return userRef;
  // console.log("SNAPSHOT.exist: ", snapShot.exists());

  // doc(DocumentReference) is the object used to perform our CRUD methods, DocuRef returns documentSnapshot object
  // console.log("firebase.util DOC: ", doc(db, "users/123df"));
  // collection(CollectionReference) can add collections, CollRef returns a querySnapshot object
  // console.log("firebase.util COLLECTION: ", collection(db, "users"));
  // we get the snapshotObject from the referenceObject using the .get() method ex: documentRef.get() or collectionRef.get(), both short named.
};

export { auth, signInWithGoogle, createUserProfileDocument, onSnapshot };
