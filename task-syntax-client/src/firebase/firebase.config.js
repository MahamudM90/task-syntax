// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCgMWvVt9G_C0NNo0KdkHZNbnJ_s9S97k",
  authDomain: "task-syntax.firebaseapp.com",
  projectId: "task-syntax",
  storageBucket: "task-syntax.appspot.com",
  messagingSenderId: "353253415132",
  appId: "1:353253415132:web:e47ca820abbf419edd3c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;