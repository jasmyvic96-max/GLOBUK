// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your Firebase config
 const firebaseConfig = {
apiKey: "AIzaSyCZ1AjYBs3BWa72EuIEgROK1DCkXJTntDg",
authDomain: "globaluk-35bbc.firebaseapp.com",
projectId: "globaluk-35bbc",
storageBucket: "globaluk-35bbc.firebasestorage.app",
messagingSenderId: "25492815287",
appId: "1:25492815287:web:88cd798714d5af8ea5fc32",
measurementId: "G-EJ8LXD830D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
