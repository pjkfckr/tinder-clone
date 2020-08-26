import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCs0GarknMVgd6yk2cTcouxccx324lIG1g",
    authDomain: "tinder-clone-9c7d0.firebaseapp.com",
    databaseURL: "https://tinder-clone-9c7d0.firebaseio.com",
    projectId: "tinder-clone-9c7d0",
    storageBucket: "tinder-clone-9c7d0.appspot.com",
    messagingSenderId: "589988464475",
    appId: "1:589988464475:web:9d654654805b375a10fc7e",
    measurementId: "G-90935B1F03"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore()
export default database;