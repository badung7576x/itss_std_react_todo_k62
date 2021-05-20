import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbTLseYMfRTWdJcyti22hEKkmeCIMOVOQ",
    authDomain: "todo-app-5d272.firebaseapp.com",
    projectId: "todo-app-5d272",
    storageBucket: "todo-app-5d272.appspot.com",
    messagingSenderId: "112734535920",
    appId: "1:112734535920:web:818b6442e7ed24d30d8235"
}

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

export default firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()