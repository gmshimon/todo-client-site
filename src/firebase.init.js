// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX98WggC5Oq8BppNM4S90ZNzcpkc9Pn9Q",
  authDomain: "fir-practise-f9311.firebaseapp.com",
  projectId: "fir-practise-f9311",
  storageBucket: "fir-practise-f9311.appspot.com",
  messagingSenderId: "754300638120",
  appId: "1:754300638120:web:b47b5ea75e4026f744c39d",
  measurementId: "G-DZQ5G289K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;