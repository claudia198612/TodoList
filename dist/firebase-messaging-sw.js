importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDtVj3TvFegQc3yFaTW9KE56DjTWdhGup0",
  authDomain: "todolist-d3b87.firebaseapp.com",
  projectId: "todolist-d3b87",
  storageBucket: "todolist-d3b87.appspot.com",
  messagingSenderId: "900706430997",
  appId: "1:900706430997:web:a7ad5dc03c0bb36c0bde1c",
  measurementId: "G-T7JQBW1M3N"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
