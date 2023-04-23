// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtVj3TvFegQc3yFaTW9KE56DjTWdhGup0",
  authDomain: "todolist-d3b87.firebaseapp.com",
//   databaseURL: "https://todolist-d3b87-default-rtdb.firebaseio.com",
  projectId: "todolist-d3b87",
  storageBucket: "todolist-d3b87.appspot.com",
  messagingSenderId: "900706430997",
  appId: "1:900706430997:web:a7ad5dc03c0bb36c0bde1c",
  measurementId: "G-T7JQBW1M3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);