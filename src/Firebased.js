import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAL3xFjKyVOcC1bqUc-CTRAniXpU56gTG4",
    authDomain: "fir-database-f513a.firebaseapp.com",
    databaseURL: "https://fir-database-f513a.firebaseio.com",
    projectId: "fir-database-f513a",
    storageBucket: "fir-database-f513a.appspot.com",
    messagingSenderId: "142101794460",
    appId: "1:142101794460:web:6df884e80cb10206826759",
    measurementId: "G-867W7CDJ54"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};