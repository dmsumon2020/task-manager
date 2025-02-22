// src/components/SignInButton.jsx
import React from "react";
import { auth, provider } from "../firebase"; // Import the provider and auth
import { signInWithPopup } from "firebase/auth";

const SignInButton = ({ onSignIn }) => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onSignIn(user); // Pass the signed-in user details to the parent
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default SignInButton;
