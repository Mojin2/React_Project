// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCaQHx7vf0LqYWEmxnnDpcfLIEAFwif-Wg",

  authDomain: "clone-f035e.firebaseapp.com",

  projectId: "clone-f035e",

  storageBucket: "clone-f035e.appspot.com",

  messagingSenderId: "526066997596",

  appId: "1:526066997596:web:275e3a588b7eeca1fac999",

  measurementId: "G-19MGDJP8TH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //데이터 베이스 구축
const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth };
