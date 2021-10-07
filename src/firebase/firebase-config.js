import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
const firebaseConfig = {
    apiKey: "AIzaSyCdQFJFYe9rPSTM1izpZA9UNwjN_VLlVFk",
    authDomain: "react-redux-15baa.firebaseapp.com",
    projectId: "react-redux-15baa",
    storageBucket: "react-redux-15baa.appspot.com",
    messagingSenderId: "408274835962",
    appId: "1:408274835962:web:23b709aa2d19707efeac43"
  };
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}