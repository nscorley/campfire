// TODO: use dotenv or firebase-functions
import firebase from 'firebase';

// TODO: use firebase cloud functions to mask API key (firebase-functions)
const config = {
    apiKey: "AIzaSyCRT2qfA8NWb7K-Ok7U4pHPsk7uhTuQlo8",
    authDomain: "campfire-c8b22.firebaseapp.com",
    databaseURL: "https://campfire-c8b22.firebaseio.com",
    projectId: "campfire-c8b22",
    storageBucket: "campfire-c8b22.appspot.com",
    messagingSenderId: "372665112027"
};

firebase.initializeApp(config);
// reference to the authorization features
export const firebaseAuth = firebase.auth();