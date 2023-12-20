import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLdBT-sPaHaASUpTI4VpVC1ARqgssG218",
  authDomain: "free-watt-app.firebaseapp.com",
  projectId: "free-watt-app",
  storageBucket: "free-watt-app.appspot.com",
  messagingSenderId: "645199646390",
  appId: "1:645199646390:web:8701feb562283c0c136017",
  measurementId: "G-R7NQQXH45Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);