
// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHv3_jzfzfJmhbSj2wQmDnh1CCY9uTmNw",
  authDomain: "newkanya-c3744.firebaseapp.com",
  projectId: "newkanya-c3744",
  storageBucket: "newkanya-c3744.firebasestorage.app",
  messagingSenderId: "324783549513",
  appId: "1:324783549513:web:f06664e83e930b422e2398",
  measurementId: "G-SD9C9YTRSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }