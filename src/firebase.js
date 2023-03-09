// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_PbjnIcxg6JKYMgggkvk1LDZdGAGR8tk",
  authDomain: "cuidandoeco.firebaseapp.com",
  projectId: "cuidandoeco",
  storageBucket: "cuidandoeco.appspot.com",
  messagingSenderId: "483682099248",
  appId: "1:483682099248:web:247868e508537448470df5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);