import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';

const UserContext = React.createContext();

const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const signup = (email, password, name, role) => {
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

  const getUserInfo = (uid) => {
    let userInfo;
    db.collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        userInfo = doc.data();
        setUserInfo(userInfo);
        localStorage.setItem('userid', JSON.stringify(userInfo.role));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      getUserInfo(user.uid);
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
        userInfo,
        setUserInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
