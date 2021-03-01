import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvoUT9x0Cvx7iaT1B-R0wYUYkBKJtnHRQ",
    authDomain: "crown-db-11cfb.firebaseapp.com",
    projectId: "crown-db-11cfb",
    storageBucket: "crown-db-11cfb.appspot.com",
    messagingSenderId: "22167156091",
    appId: "1:22167156091:web:f84fb43ad7a94d892579de",
    measurementId: "G-81NVWNS6X9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;