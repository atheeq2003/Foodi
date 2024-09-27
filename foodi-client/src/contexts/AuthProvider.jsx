import React, {createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create an account
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
      
    }

    // signup with gmail
    const signupwithGmail = () => {
      return signInWithPopup(auth, googleProvider)
    }

    // login using email & password
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = () => {
      signOut(auth)
    }

    // update profile
    const updateuserProfile = (name, photo) => {
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
    }

    // check signedin Users
    useEffect(() => , [])

    const authInfo = {
        user, 
        createUser,
        signupwithGmail,
        login,
        logout,
        updateuserProfile
    }
  return (
    <AuthContext.Provider value = {authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider