import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userId = currentUser?.uid || user?.uid;
            const loggedUser = { uid: userId };
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios.post("https://b8a11-server-side-bluebird089.vercel.app/jwt", loggedUser, {
                    withCredentials: true,
                });
            } else {
                axios.post("https://b8a11-server-side-bluebird089.vercel.app/logout", loggedUser, {
                    withCredentials: true,
                });
            }
        });
        return () => {
            return unsubscribe();
        };
    }, [user?.uid]);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
