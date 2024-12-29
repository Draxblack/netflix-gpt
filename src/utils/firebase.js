// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_rTmbuAw2hWdM5Sw1V6EybJKZ4LPNzF0",
  authDomain: "netflixgpt-1baed.firebaseapp.com",
  projectId: "netflixgpt-1baed",
  storageBucket: "netflixgpt-1baed.firebasestorage.app",
  messagingSenderId: "128607433310",
  appId: "1:128607433310:web:7d43850764b83b887c7acf",
  measurementId: "G-YVQ9L7CCF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth()