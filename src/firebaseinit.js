// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhK64S4NwqCx44IZeepNMDMCvMwTYjwRM",
    authDomain: "cineflix-52e04.firebaseapp.com",
    projectId: "cineflix-52e04",
    storageBucket: "cineflix-52e04.appspot.com",
    messagingSenderId: "37157945419",
    appId: "1:37157945419:web:b4b971b7c29c4d24420dce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;

