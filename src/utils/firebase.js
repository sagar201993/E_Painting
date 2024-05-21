import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAT83dlaIFzZFLH3ASYwweP3Qh1FSpvJAQ",
  authDomain: "netflixgpt-cf320.firebaseapp.com",
  projectId: "netflixgpt-cf320",
  storageBucket: "netflixgpt-cf320.appspot.com",
  messagingSenderId: "1044713107150",
  appId: "1:1044713107150:web:c07abcd82205059f4cea9f",
  measurementId: "G-2PR8X3KZES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
