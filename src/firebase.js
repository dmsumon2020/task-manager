// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import necessary auth methods

const firebaseConfig = {
  apiKey: "AIzaSyD8WOFhNwrES2g07yc_peHD5PyQKMMd8Bk",
  authDomain: "sportszone-1db2b.firebaseapp.com",
  projectId: "sportszone-1db2b",
  storageBucket: "sportszone-1db2b.firebasestorage.app",
  messagingSenderId: "455290984041",
  appId: "1:455290984041:web:1ff884095579ba285734f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication and provider to use in SignInButton
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Set up the GoogleAuthProvider

export { auth, provider }; // Correctly export the auth and provider for use
