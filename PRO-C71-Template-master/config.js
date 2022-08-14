import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBpbTqCbyD-fhaIf1jk3Qk7L9jWR7msN8I",
    authDomain: "ridestageproject.firebaseapp.com",
    projectId: "ridestageproject",
    storageBucket: "ridestageproject.appspot.com",
    messagingSenderId: "147929993014",
    appId: "1:147929993014:web:5e5b00b154f3c7e9f6ad97"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
