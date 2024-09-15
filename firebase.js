import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM4FaK6YAmzH34kKTGMj4gtlTmqnQbKBw",
  authDomain: "chatbot-pk-f7c35.firebaseapp.com",
  projectId: "chatbot-pk-f7c35",
  storageBucket: "chatbot-pk-f7c35.appspot.com",
  messagingSenderId: "845679542933",
  appId: "1:845679542933:web:ac356dbd15f9fa4bb2119c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db, collection, addDoc, doc, getDoc, getDocs };

