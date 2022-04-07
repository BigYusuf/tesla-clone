// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBf4zp0jGsDyn6wlzNdvO_j1ckleY9Tek",
  authDomain: "tesla-clone-49069.firebaseapp.com",
  projectId: "tesla-clone-49069",
  storageBucket: "tesla-clone-49069.appspot.com",
  messagingSenderId: "806797013257",
  appId: "1:806797013257:web:d94695b4dcbf538d0b23d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth= getAuth(app);