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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const authProvider = new firebase.auth.GoogleAuthProvider();


export default firebase;
