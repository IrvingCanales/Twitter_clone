import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEp48RCht0mOjrGaWDYuqp27XVx5Fcfus",
    authDomain: "twitter-clone-a9dd9.firebaseapp.com",
    databaseURL: "https://twitter-clone-a9dd9.firebaseio.com",
    projectId: "twitter-clone-a9dd9",
    storageBucket: "twitter-clone-a9dd9.appspot.com",
    messagingSenderId: "868237803574",
    appId: "1:868237803574:web:f69671a602245d8dd71897",
    measurementId: "G-07R8SFX3XS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()



  export default db;