// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQoLxBLswaSD1I9hNsbRevvMUUW2ORRmI',
  authDomain: 'mcpizzeria-aa023.firebaseapp.com',
  projectId: 'mcpizzeria-aa023',
  storageBucket: 'mcpizzeria-aa023.appspot.com',
  messagingSenderId: '1067108852586',
  appId: '1:1067108852586:web:cfa00c5d9b06e8aef97b13',
};

// Initialize Firebase
export const fireConfig = firebase.initializeApp(firebaseConfig);
