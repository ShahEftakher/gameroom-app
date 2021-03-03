import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import Editprofile from "./pages/Editprofile";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import Profilepage from "./pages/Profilepage";
import Signup from "./pages/Signup";
import Uploadvideo from "./pages/Uploadvideo";
import Privateroute from "./Privateroute";

function App() {
  const { userInfo } = useUserContext();
  return (
    <BrowserRouter>
      <Route path={"/login"} exact component={Login} />
      <Route path={"/signup"} exact component={Signup} />
      <Route path={"/"} exact component={Homepage} />
      <Privateroute path={"/profile"} exact component={Profilepage} />
      <Privateroute path={"/editprofile"} exact component={Editprofile} />
      <Privateroute path={"/upload"} exact component={Uploadvideo} />
    </BrowserRouter>
  );
}

export default App;
