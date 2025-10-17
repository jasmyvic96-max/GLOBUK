// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your Firebase config
 const firebaseConfig = {
    apiKey: "AIzaSyAT3UxT2JUdSfdRmCuhTjm0DyC4pYAEOFw",
    authDomain: "globuk.firebaseapp.com",
    projectId: "globuk",
    storageBucket: "globuk.firebasestorage.app",
    messagingSenderId: "991996808937",
    appId: "1:991996808937:web:e509e490fa01a9e644ea78",
    measurementId: "G-5SPDK2HLV3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);