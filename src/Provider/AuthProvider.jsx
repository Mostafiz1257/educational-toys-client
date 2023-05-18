import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const { user, setUser } = useState(null)
    const { loading, setLoading } = useState(true)

    const createUser = (email,password)=>{
        // setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        // setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn =()=>{
        // setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const ProfileUpdate =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            // setLoading(false)
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { user , createUser,signIn,googleSignIn,ProfileUpdate,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;