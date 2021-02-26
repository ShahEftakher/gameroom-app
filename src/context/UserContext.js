import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
