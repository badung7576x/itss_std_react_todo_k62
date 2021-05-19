import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrJk-oyw-egDrb_LINhwyz370rb5wWDSk",
    authDomain: "serverless-app-dce27.firebaseapp.com",
    projectId: "serverless-app-dce27",
    storageBucket: "serverless-app-dce27.appspot.com",
    messagingSenderId: "583032911419",
    appId: "1:583032911419:web:b8ae939e3e3dd376e58e1e"
}

export default firebase.initializeApp(firebaseConfig);