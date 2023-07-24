// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5WGr9C4Q03PEUks-4VJnZjiY_nHKF6cw",
  authDomain: "zoom-clone-eb7a0.firebaseapp.com",
  projectId: "zoom-clone-eb7a0",
  storageBucket: "zoom-clone-eb7a0.appspot.com",
  messagingSenderId: "733794112899",
  appId: "1:733794112899:web:c10dba965cb31e304292b6",
  measurementId: "G-CK498VY793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");