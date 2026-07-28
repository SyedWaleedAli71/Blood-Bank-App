// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXuWHZeq1Nul1RBcz_-NaVhCnJPN7mUMg",
  authDomain: "blood-bank-app-8a7e0.firebaseapp.com",
  projectId: "blood-bank-app-8a7e0",
  storageBucket: "blood-bank-app-8a7e0.firebasestorage.app",
  messagingSenderId: "674772009476",
  appId: "1:674772009476:web:f758546c2429e32ce16b51",
  measurementId: "G-HX4T3RNLJ1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);