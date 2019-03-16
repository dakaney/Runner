import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyD6G_ywMcT_s1XOHRWXWe9UK6scSMW7ZBg",
    authDomain: "running-app-2ba8d.firebaseapp.com",
    databaseURL: "https://running-app-2ba8d.firebaseio.com",
    projectId: "running-app-2ba8d",
    storageBucket: "running-app-2ba8d.appspot.com",
    messagingSenderId: "914299431444"
  };

  firebase.initializeApp(config);

  export default firebase;
  