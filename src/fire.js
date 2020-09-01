import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB6RERzkFrPdRN5h-P2RS0rsDykPx3HzEI",
  authDomain: "login-fd736.firebaseapp.com",
  databaseURL: "https://login-fd736.firebaseio.com",
  projectId: "login-fd736",
  storageBucket: "login-fd736.appspot.com",
  messagingSenderId: "769888497605",
  appId: "1:769888497605:web:00f4af71c0bd672337e5ac",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
