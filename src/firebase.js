// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_CeqnTjIORuuHi5Q8j80UfM2DRprwEiQ",
  authDomain: "flashapplication-61774.firebaseapp.com",
  databaseURL: "https://flashapplication-61774-default-rtdb.firebaseio.com",
  projectId: "flashapplication-61774",
  storageBucket: "flashapplication-61774.appspot.com",
  messagingSenderId: "168585097117",
  appId: "1:168585097117:web:85042cc49ac23065268974"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)