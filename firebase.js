import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7sNLTgc7VT_ZTdxA-WG_I-e0RtfG69aE",
  authDomain: "slack-clone-6a295.firebaseapp.com",
  projectId: "slack-clone-6a295",
  storageBucket: "slack-clone-6a295.appspot.com",
  messagingSenderId: "833546610510",
  appId: "1:833546610510:web:fce190aa588438ef4ca01f",
  measurementId: "G-PVZXYPW1C8",
};

// #initalize database
const firebaseApp = firebase.initializeApp(firebaseConfig);

// #access database
const db = firebaseApp.firestore();

export default db;
