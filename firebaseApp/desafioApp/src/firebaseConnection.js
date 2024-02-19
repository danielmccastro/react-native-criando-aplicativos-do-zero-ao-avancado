import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-qn3bbTNCoYUEbFes9uT-c9V63m9rk7w",
  authDomain: "meuapp-58e8c.firebaseapp.com",
  projectId: "meuapp-58e8c",
  storageBucket: "meuapp-58e8c.appspot.com",
  messagingSenderId: "828090575487",
  appId: "1:828090575487:web:49ea3cb2c63e6978f46d4a",
  measurementId: "G-JNSCJCHSGR",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
