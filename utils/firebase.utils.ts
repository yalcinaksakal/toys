import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB737jFl3vyj15KkwOMQUvxZfmLcBy1LGk",
  authDomain: "toys-db.firebaseapp.com",
  projectId: "toys-db",
  storageBucket: "toys-db.appspot.com",
  messagingSenderId: "529833171300",
  appId: "1:529833171300:web:570208f8edefbcc51fc271",
  measurementId: "G-TQX69WECCY",
};

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
): Promise<firebase.firestore.DocumentReference | null> => {
  if (!userAuth) return null;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  // get, set, update, delete
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user: ", err.message);
    }
  }
  return userRef;
};

if (!firebase.apps.length) firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const authProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
