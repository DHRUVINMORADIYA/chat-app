import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyB8Aa_Ir-QdXQwasFk6KF05E6ylgSIa8s8",
  authDomain: "justchat-39850.firebaseapp.com",
  databaseURL: "https://justchat-39850-default-rtdb.firebaseio.com",
  projectId: "justchat-39850",
  storageBucket: "justchat-39850.appspot.com",
  messagingSenderId: "433193633301",
  appId: "1:433193633301:web:bd9994f8292957616c701c",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
