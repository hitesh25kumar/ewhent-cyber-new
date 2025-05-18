import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  RecaptchaVerifier,
  ConfirmationResult
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp71ZZs0lw0YCHNHrs3K88b-JeB5lSQEQ",
  authDomain: "cyber-ewhents.firebaseapp.com",
  projectId: "cyber-ewhents",
  storageBucket: "cyber-ewhents.firebasestorage.app",
  messagingSenderId: "324905503054",
  appId: "1:324905503054:web:e4ae19d20e3c88866bb61f",
  measurementId: "G-Q0242GK3M9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Type for the recaptcha verifier
export type RecaptchaVerifierType = RecaptchaVerifier;
export type ConfirmationResultType = ConfirmationResult;