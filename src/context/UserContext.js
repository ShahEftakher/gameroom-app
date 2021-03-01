import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

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
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((userCreds) => {
        setCurrentUser(userCreds);
        (async function () {
          let userInfo;
          db.collection("users")
            .doc(userCreds.user.uid)
            .get()
            .then((doc) => {
              userInfo = doc.data();
              console.log(userInfo);
              setUserInfo(userInfo);
            })
            .catch((error) => {
              alert(error);
            });
        })();
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    return auth
      .signOut()
      .then(() => {
        setUserInfo({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  const getUserInfo = () => {
    let userInfo;
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        userInfo = doc.data();
        console.log(userInfo);
        setUserInfo(userInfo);
      })
      .catch((error) => {
        alert(error);
      });
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
        userInfo,
        setUserInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
