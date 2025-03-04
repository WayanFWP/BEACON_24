// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOZSiMbdp164JxhEBOT0cp78lCYD6hlvo",
  authDomain: "test-web-dbe21.firebaseapp.com",
  projectId: "test-web-dbe21",
  storageBucket: "test-web-dbe21.firebasestorage.app",
  messagingSenderId: "34105707761",
  appId: "1:34105707761:web:d75d7a198f5c41ed9f2d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
