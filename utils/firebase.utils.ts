import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Toy from "../models/toy";
import Section from "../models/section";
import toys from "../assets/toys";

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

//add items to firestore
// export const addCollectionsAndDocuments = async (
//   collectionKey: string,
//   objectsToAdd: Toy[]
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   //important use batches. If an  error occurs whole data will fail, if succeds all will be stored in db
//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocref = collectionRef.doc();
//     batch.set(newDocref, obj);
//   });
//   return await batch.commit();
// };

export const addSections = async (sections: Section[], objectsToAdd: Toy[]) => {
  const collectionRef = firestore.collection("sections");

  //important use batches. If an  error occurs whole data will fail, if succeeds all will be stored in db
  const batch = firestore.batch();
  sections.forEach(obj => {
    const title = obj.title.toLowerCase().replace(/ /g, "");
    const newDocref = collectionRef.doc(`${title}`);
    const items: { [key: string]: Toy } = {};
    toys
      .filter(toy => toy.sectionId === title)
      .forEach(toy => (items[`toy${toy.id}`] = toy));
    batch.set(newDocref, { title: obj.title, imgUrl: obj.imgUrl, toys: items });
  });
  return await batch.commit(); //returns void if success, else error
};

export const getSections = async () => {
  const sectionsRef = firestore.collection("sections");
  // get, set, update, delete
  const snapShot = await sectionsRef.get();
  // const documents = {};
  const documents: {
    [key: string]: firebase.firestore.DocumentData;
  } = {};
  snapShot.docs.forEach(doc => (documents[doc.id] = doc.data()));
  return documents;
};

export default firebase;
