import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/login"} exact component={Login}></Route>
      <Route path={"/signup"} exact component={Signup}></Route>
    </BrowserRouter>
  );
}

export default App;
