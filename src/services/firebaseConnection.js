import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBeGlekKtPAnXkGgiWwcgc0vD7N-mskdCc",
  authDomain: "financasapp-99973.firebaseapp.com",
  databaseURL: "https://financasapp-99973-default-rtdb.firebaseio.com",
  projectId: "financasapp-99973",
  storageBucket: "financasapp-99973.appspot.com",
  messagingSenderId: "330964681391",
  appId: "1:330964681391:web:644a2f090b79a555e68a5a"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase