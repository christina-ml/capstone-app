// Import the functions you need from the SDKs you need (adding browser module paths)
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// import { getFirestore, collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBILkhxoz3hRSQWM2z9Np3ng-O0ijd-3kw",
  authDomain: "cryptotalk-cl-5c7b8.firebaseapp.com",
  projectId: "cryptotalk-cl-5c7b8",
  storageBucket: "cryptotalk-cl-5c7b8.appspot.com",
  messagingSenderId: "415374200325",
  appId: "1:415374200325:web:5af59e1b4e827cdf95d66c",
  measurementId: "G-YHVQ1LGWE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const db = getFirestore(app);
// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

// Detect auth state
// auth.onAuthStateChanged(user => {
// })

onAuthStateChanged(auth, user => {
    if (user != null){
        console.log('logged in!');
    } else {
        console.log('No user')
    }
})