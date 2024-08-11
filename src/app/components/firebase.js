// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe-J-3gxgz704QeYLN6l2aN0IoKw_SYfM",
  authDomain: "project-capstone-f5155.firebaseapp.com",
  projectId: "project-capstone-f5155",
  storageBucket: "project-capstone-f5155.appspot.com",
  messagingSenderId: "169922682427",
  appId: "1:169922682427:web:afb8c35a41e7c44d33c61e",
  measurementId: "G-XLHQHQ0RPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);