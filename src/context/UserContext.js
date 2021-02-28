import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const UserContext = React.createContext();

const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        signup,
        login,
        logout,
        updateEmail,
        updatePassword,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
