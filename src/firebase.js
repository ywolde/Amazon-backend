import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATmnz5Yn7meEHfn_rX2BvJqa4mabDAg3M",
  authDomain: "fir-51fd4.firebaseapp.com",
  projectId: "fir-51fd4",
  storageBucket: "fir-51fd4.appspot.com",
  messagingSenderId: "155582878371",
  appId: "1:155582878371:web:17996d43dcc45ea29a6516",
  measurementId: "G-JL84J915CB"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };