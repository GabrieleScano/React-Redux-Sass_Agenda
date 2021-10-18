import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCdQFJFYe9rPSTM1izpZA9UNwjN_VLlVFk",
    authDomain: "react-redux-15baa.firebaseapp.com",
    projectId: "react-redux-15baa",
    storageBucket: "react-redux-15baa.appspot.com",
    messagingSenderId: "408274835962",
    appId: "1:408274835962:web:23b709aa2d19707efeac43"
  }
  
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}