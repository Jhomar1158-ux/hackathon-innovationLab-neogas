import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDv5H66sXIPTksKpIlokfULEfeAlzlmckM",
  authDomain: "neogas-test.firebaseapp.com",
  projectId: "neogas-test",
  storageBucket: "neogas-test.appspot.com",
  messagingSenderId: "738131408571",
  appId: "1:738131408571:web:4ea99d2ed1606cc6ecdb9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
