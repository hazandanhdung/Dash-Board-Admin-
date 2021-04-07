import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTRraEidnc4YMU0_MLymmfX8mfNjGE_Ik",
  authDomain: "center-beat.firebaseapp.com",
  projectId: "center-beat",
  storageBucket: "center-beat.appspot.com",
  messagingSenderId: "1035574816170",
  appId: "1:1035574816170:web:7ce6bd5add65f42fe28fd3",
  measurementId: "G-K7DSJMMEX3",
};

let db = firebase.initializeApp(firebaseConfig);

export default db.database();
