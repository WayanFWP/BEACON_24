// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApgBKsYZqbIcNuGiRr8Dna0-wYAeRg4Ys",
    authDomain: "beacon-dab48.firebaseapp.com",
    projectId: "beacon-dab48",
    storageBucket: "beacon-dab48.firebasestorage.app",
    messagingSenderId: "39235673142",
    appId: "1:39235673142:web:762433f0c568ccd729cc97",
    measurementId: "G-Q1QRF5G558" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);