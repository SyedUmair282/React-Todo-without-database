import * as firebase from 'firebase/app';
import 'firebase/database';



var firebaseConfig = {
    apiKey: "AIzaSyBYZVyKFWZlG-37PgwrYewnaUz7eYv60_0",
    authDomain: "react-todo-app-157a9.firebaseapp.com",
    databaseURL: "https://react-todo-app-157a9.firebaseio.com",
    projectId: "react-todo-app-157a9",
    storageBucket: "react-todo-app-157a9.appspot.com",
    messagingSenderId: "916430000163",
    appId: "1:916430000163:web:459788d114dcf1dcd3e196",
    measurementId: "G-NLEWNX7FST"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);