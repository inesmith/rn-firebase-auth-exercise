// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // authentication functionality

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSagjovERZbUHo8N41hH_3P3ia_fAzWM0",
  authDomain: "dv300-class-activities.firebaseapp.com",
  projectId: "dv300-class-activities",
  storageBucket: "dv300-class-activities.firebasestorage.app",
  messagingSenderId: "788431326606",
  appId: "1:788431326606:web:c98125033b288ed7d428df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// app variable represents the Firebase app instance



// initialise all our services for our firebase app
export const auth = getAuth(app); // variable that links to the authentication of my firebase app


