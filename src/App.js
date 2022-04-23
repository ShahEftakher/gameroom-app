import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Fuego, FuegoProvider } from 'swr-firestore-v9';
// import Privateroute from "./Privateroute";
import './App.css';
import { GLOBAL_ROUTES } from './routes/GlobalRoutes';
// import { PROTECTED_ROUTE } from "./routes/ProtectedRoutes";

const firebaseConfig = {
  apiKey: 'AIzaSyAC0h8ifyJwsB1SSJV5rJbrq0l0Dm8xJoQ',
  authDomain: 'gameroom-93fa3.firebaseapp.com',
  projectId: 'gameroom-93fa3',
  storageBucket: 'gameroom-93fa3.appspot.com',
  messagingSenderId: '587409533398',
  appId: '1:587409533398:web:19e9fe329c197b7fec5c77',
};

const fuego = new Fuego(firebaseConfig);

function App() {
  return (
    <FuegoProvider fuego={fuego}>
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
    </FuegoProvider>
  );
}

export default App;
