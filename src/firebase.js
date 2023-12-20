// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLdBT-sPaHaASUpTI4VpVC1ARqgssG218",
  authDomain: "free-watt-app.firebaseapp.com",
  projectId: "free-watt-app",
  storageBucket: "free-watt-app.appspot.com",
  messagingSenderId: "645199646390",
  appId: "1:645199646390:web:8701feb562283c0c136017",
  measurementId: "G-R7NQQXH45Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);