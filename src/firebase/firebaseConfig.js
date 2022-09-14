import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9J2FIjRa6aV_dLNz908xOcXQJ51AP4l0",
  authDomain: "reactcodercurso.firebaseapp.com",
  projectId: "reactcodercurso",
  storageBucket: "reactcodercurso.appspot.com",
  messagingSenderId: "187062914257",
  appId: "1:187062914257:web:325ae4162d5dc8d23589f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
