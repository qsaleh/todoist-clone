import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB6anmDEDcSio5__N_pvNbPkJxw36FmWos",
  authDomain: "todoist-tut-eac44.firebaseapp.com",
  databaseURL: "https://todoist-tut-eac44.firebaseio.com",
  projectId: "todoist-tut-eac44",
  storageBucket: "todoist-tut-eac44.appspot.com",
  messagingSenderId: "227102303592",
  appId: "1:227102303592:web:e0ca38b4e09dcd9aec22dd",
});

export {firebaseConfig as firebase};