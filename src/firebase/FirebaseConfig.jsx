// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKv1eUW9qUWsezK4reUbNK51M4M3ZGn8s",
    authDomain: "myecom-77515.firebaseapp.com",
    projectId: "myecom-77515",
    storageBucket: "myecom-77515.appspot.com",
    messagingSenderId: "615063850813",
    appId: "1:615063850813:web:2d47fd778070268f623f54"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }