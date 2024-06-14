import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB0y7vZHotSwEy4WNvFIWrG0DqvZEktqes',
  authDomain: 'my-portfolio-119ac.firebaseapp.com',
  projectId: 'my-portfolio-119ac',
  storageBucket: 'my-portfolio-119ac.appspot.com',
  messagingSenderId: '110190729904',
  appId: '1:110190729904:web:506bb325fd35d81889f975',
  measurementId: 'G-XLHSTB6Q2R',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { provider, storage };
export default db;
