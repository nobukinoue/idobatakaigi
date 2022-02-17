import firebase from "firebase";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyBQV6tXcjSnsrG_0TevkoApx-hZPRiSHzw",
    authDomain: "idobatakaigi-with-ham-5da73.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-5da73",
    storageBucket: "idobatakaigi-with-ham-5da73.appspot.com",
    messagingSenderId: "624910757331",
    appId: "1:624910757331:web:a2105d0f535851165e9326",
    databaseURL: "https://idobatakaigi-with-ham-5da73-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };
 
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({ name, text }) => {
      messageRef.push({ name, text });
  };