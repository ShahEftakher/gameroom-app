import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import Profilepage from "./pages/Profilepage";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/login"} exact component={Login}></Route>
      <Route path={"/signup"} exact component={Signup}></Route>
      <Route path={"/"} exact component={Homepage}></Route>
      <Route path={"/profile"} exact component={Profilepage}></Route>
    </BrowserRouter>
  );
}

export default App;
