// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/file"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSLlWotke9WWrI_TogIL136rxKqPPsgSs",
  authDomain: "fir-8e8db.firebaseapp.com",
  projectId: "fir-8e8db",
  storageBucket: "fir-8e8db.appspot.com",
  messagingSenderId: "1084226739315",
  appId: "1:1084226739315:web:ed7d5aef33aeac25aa5e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;