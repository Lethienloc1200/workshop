import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmwRq2zD8veDkIlgm4VUVOeekA61rhzKY",
    authDomain: "workshop-d60b4.firebaseapp.com",
    projectId: "workshop-d60b4",
    storageBucket: "workshop-d60b4.appspot.com",
    messagingSenderId: "904148702022",
    appId: "1:904148702022:web:1d86c4f3e4e9406b98cb47",
    measurementId: "G-NDBF0P1PGP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  
  export { db, auth };