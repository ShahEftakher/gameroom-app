import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

const UserContext = React.createContext();

const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signup = (email, password, name, role) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCreds) => {
        userCreds.user.updateProfile({ displayName: name });
        db.collection("users")
          .doc(userCreds.user.id)
          .set({
            name: name,
            email: email,
            role: role,
          })
          .then(() => {
            setIsLoggedIn(true);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const login = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((userCreds) => {
        setCurrentUser(userCreds);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
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
