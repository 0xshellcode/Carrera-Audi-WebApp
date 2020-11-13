import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyAaMcMsgL7UJgI9bHkKk_u-H32wMsNQkBU",
     authDomain: "audi-carreras.firebaseapp.com",
     databaseURL: "https://audi-carreras.firebaseio.com/",
     projectId: "audi-carreras",
     storageBucket: "audi-carreras.appspot.com",
     messagingSenderId: "1072337200479",
     appId: "1:1072337200479:web:9b13da4b284886f1a942ea",
     measurementId: "G-QMKJLQR9BL"
});

var db = firebaseApp.firestore();

export { db };
