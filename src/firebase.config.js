// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUrD3quz3qpQ2xULYa0mTSuykQkDt9elk",
  authDomain: "newnana-569c6.firebaseapp.com",
  projectId: "newnana-569c6",
  storageBucket: "newnana-569c6.appspot.com",
  messagingSenderId: "609647169077",
  appId: "1:609647169077:web:6c226b9dd337b164a1eb7c",
  measurementId: "G-S25Z0XW28W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);