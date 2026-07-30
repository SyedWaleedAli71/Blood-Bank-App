import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXuWHZeq1Nul1RBcz_-NaVhCnJPN7mUMg",
  authDomain: "blood-bank-app-8a7e0.firebaseapp.com",
  projectId: "blood-bank-app-8a7e0",
  storageBucket: "blood-bank-app-8a7e0.firebasestorage.app",
  messagingSenderId: "674772009476",
  appId: "1:674772009476:web:f758546c2429e32ce16b51",
  measurementId: "G-HX4T3RNLJ1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);