import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAmeWA-Hf14EH0SI-lO4WwohWU_jcsey5c",
  authDomain: "crwn-db-dd61c.firebaseapp.com",
  databaseURL: "https://crwn-db-dd61c.firebaseio.com",
  projectId: "crwn-db-dd61c",
  storageBucket: "crwn-db-dd61c.appspot.com",
  messagingSenderId: "494141464339",
  appId: "1:494141464339:web:a2baa274035e901be6c4e6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;