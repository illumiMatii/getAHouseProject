// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbtOouvNDOF-kEvfX1GNOK4LC_MEFEdMQ",
  authDomain: "fir-2ab58.firebaseapp.com",
  projectId: "fir-2ab58",
  storageBucket: "fir-2ab58.appspot.com",
  messagingSenderId: "231466959560",
  appId: "1:231466959560:web:d1187856a8b18e3efc9bfd",
  measurementId: "G-3E6DDYZF9M",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
