// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Hx-GDzFfx50-YK_VkvN2BZB3Z5UDJeg",
  authDomain: "sena-project.firebaseapp.com",
  projectId: "sena-project",
  storageBucket: "sena-project.appspot.com",
  messagingSenderId: "279545674501",
  appId: "1:279545674501:web:73830dfe38486150a4956c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)