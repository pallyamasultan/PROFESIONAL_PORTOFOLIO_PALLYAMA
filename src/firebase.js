// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY_zONnZOL8yspYP8_aJDv2Yu7yNwKDgk",
  authDomain: "pallyamasultan-da67d.firebaseapp.com",
  projectId: "pallyamasultan-da67d",
  storageBucket: "pallyamasultan-da67d.firebasestorage.app",
  messagingSenderId: "934179242537",
  appId: "1:934179242537:web:3ccd3eb4c8e306a82c5238",
  measurementId: "G-W1KYV6WFME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics };
