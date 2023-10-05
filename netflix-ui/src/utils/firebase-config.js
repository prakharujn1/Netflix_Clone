import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLqOBMQ8nBswzqLWqDaGVtrJwYGk-HEJk",
  authDomain: "react-netflix-clone-df637.firebaseapp.com",
  projectId: "react-netflix-clone-df637",
  storageBucket: "react-netflix-clone-df637.appspot.com",
  messagingSenderId: "634307128707",
  appId: "1:634307128707:web:4a6c70d46f54db9bfc1ab6",
  measurementId: "G-LTGFCFETYB"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);