import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmi-IufVwLe7WaAhb45wGYLO6aRVeMb3E",
  authDomain: "clothing-shop-5977e.firebaseapp.com",
  projectId: "clothing-shop-5977e",
  storageBucket: "clothing-shop-5977e.appspot.com",
  messagingSenderId: "591592967726",
  appId: "1:591592967726:web:f0215deb8b0a274c4399bf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// set auth
export const auth = getAuth();
export const DB = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Add a json to firebase
//   addCollectionAndDocuments("categories", SHOP_DATA);
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = "title") => {
  const collectionReference = collection(DB, collectionKey);
  const batch = writeBatch(DB);

  objectsToAdd.forEach((object) => {
    const documentReference = doc(collectionReference, object[field].toLowerCase());

    batch.set(documentReference, object);
  });

  await batch.commit();
  console.log("DONE!");
};

// create user model in firebase when sign first time
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(DB, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};

// create user by signup with his data
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//  sign with password & email
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// sign out
export const signOutUser = async () => signOut(auth);

// auth state change
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

// get categories

export const getCategoriesAndDocuments = async () => {
  const collectionReference = collection(DB, "categories");
  const queryFb = query(collectionReference);

  const querySnapshot = await getDocs(queryFb);
  // console.log("querySnapshot =>", querySnapshot);

  // HASHTABLE
  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    // console.log("docsnaphost =>", docSnapshot);
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;

    return accumulator;
  }, {});

  return categoryMap;
};
