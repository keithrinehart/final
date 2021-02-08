import firebase from 'firebase/app';
import 'firebase/storage'; // to store images
import 'firebase/firestore'; // for database
import 'firebase/auth'; // for authentification


// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyDAwHmMETVcTORBqam5ULQG-pOAfCjMwlk",
    authDomain: "art-gallery-finalproject.firebaseapp.com",
    projectId: "art-gallery-finalproject",
    storageBucket: "art-gallery-finalproject.appspot.com",
    messagingSenderId: "54254015624",
    appId: "1:54254015624:web:cd539561889eb3b945bb3d"
  });

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage(); // interaction with storage service at the backend
const projectFirestore = firebase.firestore(); // interaction with firestore database
//const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
//export const auth = firebaseConfig;
export const auth = app.auth();
//export default firebase;