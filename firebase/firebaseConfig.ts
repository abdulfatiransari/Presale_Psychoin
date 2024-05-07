// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH-tMtrLmuQxQN0S0jaQCafTfg8stWlCw",
  authDomain: "psychoin.firebaseapp.com",
  projectId: "psychoin",
  storageBucket: "psychoin.appspot.com",
  messagingSenderId: "1017679366576",
  appId: "1:1017679366576:web:5fded85aeb5a4f59b86e75",
  measurementId: "G-RX6CSQBSPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export {fireDB}