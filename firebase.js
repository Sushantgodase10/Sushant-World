// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfE2yqjL5WtC-7wKYAuPBORQMnmu6V6aI",
  authDomain: "foodapp-9bfdc.firebaseapp.com",
  projectId: "foodapp-9bfdc",
  storageBucket: "foodapp-9bfdc.appspot.com",
  messagingSenderId: "1053127851322",
  appId: "1:1053127851322:web:ca7048d5f52b2a96552403",
  measurementId: "G-ZT0K5JXJ2L"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);