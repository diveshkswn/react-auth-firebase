/* eslint-disable react/jsx-filename-extension */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

function logout() {
  return auth.signOut();
}

function resetPassword(email) {
  return auth.sendPasswordResetEmail(email);
}

// Not working
function updateUser(user) {
  return auth.currentUser.updateProfile(user);
}

// function updatePassword(password) {
//   return currentUser.updatePassword(password);
// }

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };
  return (
    <AuthContext.Provider value={value}>
      { !loading && children}
    </AuthContext.Provider>
  );
}

export {
  useAuth, signup, login, logout, resetPassword, updateUser,
};
export default AuthProvider;
