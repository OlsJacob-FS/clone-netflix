import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDXUt0fqRvsTOKfkbEWSxGNhhE4RAldfmA",
  authDomain: "netflix-clone-20c77.firebaseapp.com",
  projectId: "netflix-clone-20c77",
  storageBucket: "netflix-clone-20c77.appspot.com",
  messagingSenderId: "952624162802",
  appId: "1:952624162802:web:9e0081f68841529d6f6d6b",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
export default db;
