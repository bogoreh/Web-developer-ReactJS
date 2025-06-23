// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0Y0pZvvR52u8BKQ9haJnHkSZ0zU6F_M",
  authDomain: "whatsappclone-126e8.firebaseapp.com",
  projectId: "whatsappclone-126e8",
  storageBucket: "whatsappclone-126e8.firebasestorage.app",
  messagingSenderId: "1073537081351",
  appId: "1:1073537081351:web:a90ee646fbbf242e4c8aa2",
  measurementId: "G-RPZ0K0WHBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);