// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1WGZsnFLZh6oPhdKilw-aeoZZlQxrMb8",
  authDomain: "test-again-again-336b5.firebaseapp.com",
  projectId: "test-again-again-336b5",
  storageBucket: "test-again-again-336b5.appspot.com",
  messagingSenderId: "634982496556",
  appId: "1:634982496556:web:a9c6ab1760f92ebcf65489"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()