// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzQBVrrdY5WXpCDYG6hRdpG1kFknUNfQA",
  authDomain: "forward-app-4a53e.firebaseapp.com",
  projectId: "forward-app-4a53e",
  storageBucket: "forward-app-4a53e.appspot.com",
  messagingSenderId: "953798015899",
  appId: "1:953798015899:web:d3aef415cd06bbb99b3f3e",
  measurementId: "G-CZG3S9DTD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);
