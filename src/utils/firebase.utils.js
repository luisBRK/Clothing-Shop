import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const DB = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
  // if user data exists
  // create / set the document with the data from userAuth in my collection

  // if user data does not exists
};
