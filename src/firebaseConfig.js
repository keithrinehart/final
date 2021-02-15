import firebase from 'firebase/app';
import 'firebase/storage'; // to store images
import 'firebase/firestore'; // for database
import 'firebase/auth'; // for authentification


// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_ATH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
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
export default firebase;