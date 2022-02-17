import firebase from "firebase";

console.log(process.env)
const {
REACT_APP_FIREBASE_API_KEY,
REACT_APP_FIREBASE_AUTH_DOMAIN,
REACT_APP_FIREBASE_PROJECTID,
REACT_APP_FIREBASE_STORAGEBUCKET,
REACT_APP_FIREBASE_MESSAGINGSENDERID,
REACT_APP_FIREBASE_APPID,
REACT_APP_FIREBASE_DATABASEURL,
} =process.env;
  
  const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECTID,
    storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: REACT_APP_FIREBASE_APPID,
    databaseURL: REACT_APP_FIREBASE_DATABASEURL,
  };
 
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export const messagesRef = database.ref('messages');

  export const pushMessage = ({ name, text }) => {
      messagesRef.push({ name, text });
  };