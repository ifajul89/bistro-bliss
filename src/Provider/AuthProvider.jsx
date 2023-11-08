// import { createContext, useState } from "react";
// import PropTypes from "prop-types";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from "../Firebase/firebase.config";

// const auth = getAuth(app);

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//     );
// };

// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default AuthProvider;
