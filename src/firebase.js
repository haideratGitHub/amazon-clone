import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzp3L25es1pYnep3dOJIBsDpONP64F4K8",
  authDomain: "clone-cceda.firebaseapp.com",
  databaseURL: "https://clone-cceda.firebaseio.com",
  projectId: "clone-cceda",
  storageBucket: "clone-cceda.appspot.com",
  messagingSenderId: "378062369511",
  appId: "1:378062369511:web:9a0c71b7d0b7c0a27ca842",
  measurementId: "G-2HF2FMMTZ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
