import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Privateroute from "./Privateroute";
import "./App.css";
import { GLOBAL_ROUTES } from "./routes/GlobalRoutes";
// import { PROTECTED_ROUTE } from "./routes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      {GLOBAL_ROUTES.map((route) => {
        return <Route path={route.path} exact component={route.component} />;
      })}
      {/* {PROTECTED_ROUTE.map((route) => {
        return (
          <Privateroute path={route.path} exact component={route.component} />
        );
      })} */}
    </BrowserRouter>
  );
}

export default App;
