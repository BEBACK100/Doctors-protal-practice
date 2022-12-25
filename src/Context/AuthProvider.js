import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const Authcontext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userinfo) => {
        return updateProfile(auth.currentuser, userinfo)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleSignin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curruntuser => {
            setLoading(false)
            console.log('observer is observed');
            setUser(curruntuser)
        })
        return () => unsubscribe()
    }, [user])
    const authinfo = {
        createuser,
        signIn,
        updateUser,
        logout,
        user,
        loading,
        googleSignin

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}

        </Authcontext.Provider>
    );
};

export default AuthProvider;