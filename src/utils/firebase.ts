import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBlz3vlP2tqGv_4KryEkJi3taWnF8T-yGM",
  authDomain: "to-do-list-app-177.firebaseapp.com",
  projectId: "to-do-list-app-177",
  storageBucket: "to-do-list-app-177.appspot.com",
  messagingSenderId: "347384024912",
  appId: "1:347384024912:web:2d1136e545b9d49850a655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)