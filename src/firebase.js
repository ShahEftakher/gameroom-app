import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAC0h8ifyJwsB1SSJV5rJbrq0l0Dm8xJoQ",
  authDomain: "gameroom-93fa3.firebaseapp.com",
  projectId: "gameroom-93fa3",
  storageBucket: "gameroom-93fa3.appspot.com",
  messagingSenderId: "587409533398",
  appId: "1:587409533398:web:19e9fe329c197b7fec5c77",
});

const auth = app.auth();
const db = app.firestore();
export {auth, db};
