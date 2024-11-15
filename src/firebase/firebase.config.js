// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD7uOCZ1cSUXh9RjsmBzj3f6v5frCbSyA",
  authDomain: "dragon-news-react-projec-82bae.firebaseapp.com",
  projectId: "dragon-news-react-projec-82bae",
  storageBucket: "dragon-news-react-projec-82bae.firebasestorage.app",
  messagingSenderId: "53172946652",
  appId: "1:53172946652:web:bfacc580ebb7e43fffd619",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;