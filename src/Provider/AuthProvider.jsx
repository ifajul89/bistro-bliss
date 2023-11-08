/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        user,
        loading,
        createUser
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
