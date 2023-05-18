// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM80W7ZB0398ZRzpht3uY66Ap5LqxwYKc",
  authDomain: "educational-toy.firebaseapp.com",
  projectId: "educational-toy",
  storageBucket: "educational-toy.appspot.com",
  messagingSenderId: "77296900589",
  appId: "1:77296900589:web:1e9806a41b4cf9b896afe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;