import React from "react";
import { Redirect, Route } from "react-router";
import { useUserContext } from "./context/UserContext";

const Privateroute = ({ component: Component, ...rest }) => {
  const { currentUser } = useUserContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};

export default Privateroute;
