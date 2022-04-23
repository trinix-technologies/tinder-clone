import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2tsR8vCNnZ7AIPVcZaChYnwYkBf0n78U",
  authDomain: "tinder-2-clone-e69c9.firebaseapp.com",
  projectId: "tinder-2-clone-e69c9",
  storageBucket: "tinder-2-clone-e69c9.appspot.com",
  messagingSenderId: "555234207880",
  appId: "1:555234207880:web:33bafebad337f5bb78d73d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
