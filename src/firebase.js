import firebase from "firebase/app";
import "firebase/auth";

export const auth  = firebase.initializeApp({
    apiKey: "AIzaSyAuRzuMmFtIv72uOY4Du_XaxayYFBkrdIE",
    authDomain: "unichat-ce9f0.firebaseapp.com",
    projectId: "unichat-ce9f0",
    storageBucket: "unichat-ce9f0.appspot.com",
    messagingSenderId: "19113197593",
    appId: "1:19113197593:web:c55cc0bb518e6405ca6a88"
  }).auth();