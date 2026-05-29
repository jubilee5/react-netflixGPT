// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKplO81xQW5UKs1uD3g02n8MiaXpa9Or8",
  authDomain: "netflixgpt-ec7d8.firebaseapp.com",
  projectId: "netflixgpt-ec7d8",
  storageBucket: "netflixgpt-ec7d8.firebasestorage.app",
  messagingSenderId: "539990693317",
  appId: "1:539990693317:web:27aeb49d2e2c7ab0e127ac",
  measurementId: "G-31KRPNBFXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();