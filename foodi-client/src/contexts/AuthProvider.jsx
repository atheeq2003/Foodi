import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create an account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signup with gmail
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login using email & password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    signOut(auth);
  };

  // update profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    }).then(() => {
      setUser(auth.currentUser); // Update the user state
    }).catch((error) => {
      console.error("Error updating profile:", error);
    });
  };

  // check signedin Users
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Ensure currentUser contains photoURL
        console.log("Logged in user:", currentUser); // Check photoURL here
        setLoading(false)
      }
    });
    return () => unsubscribe();
  }, []);
  

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logout,
    updateUserProfile,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
