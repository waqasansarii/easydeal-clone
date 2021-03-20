import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCa6oljWP7DCRA8HkUgl5UYUwN3djCh-Aw",
    authDomain: "chat-app-f6944.firebaseapp.com",
    projectId: "chat-app-f6944",
    storageBucket: "chat-app-f6944.appspot.com",
    messagingSenderId: "410044047108",
    appId: "1:410044047108:web:e9bab5a30b90aa579cba51",
    measurementId: "G-CGDYW2G4YY"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase