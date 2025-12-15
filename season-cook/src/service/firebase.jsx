
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDNhhSRgympCjfI_HovlFnFzxMi9kCids",
  authDomain: "season-recipies-1153c.firebaseapp.com",
  projectId: "season-recipies-1153c",
  storageBucket: "season-recipies-1153c.firebasestorage.app",
  messagingSenderId: "511647942718",
  appId: "1:511647942718:web:c43c9f17033c0f45d4a96f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);