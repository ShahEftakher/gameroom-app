import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Editprofile from "./pages/Editprofile";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import Profilepage from "./pages/Profilepage";
import Signup from "./pages/Signup";
import Privateroute from "./Privateroute";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/login"} exact component={Login} />
      <Route path={"/signup"} exact component={Signup} />
      <Route path={"/"} exact component={Homepage} />
      <Privateroute path={"/profile"} exact component={Profilepage} />
      <Privateroute path={"/editprofile"} exact component={Editprofile} />
    </BrowserRouter>
  );
}

export default App;
