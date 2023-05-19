// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvD7TMYtF3xNNvAqGaFRfWXoDsOdO4tT0",
  authDomain: "blog-site-4730c.firebaseapp.com",
  projectId: "blog-site-4730c",
  storageBucket: "blog-site-4730c.appspot.com",
  messagingSenderId: "102455937346",
  appId: "1:102455937346:web:f5d93d5b30fd56d456e0db",
  measurementId: "G-896KCPEZ44",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = async () => {
  signInWithPopup(auth, googleProvider)
      .then((result) => {
      const name = result.user.displayName;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('profilePic', profilePic);
      }).catch((error) => {
      const errorCode = error.code;
      });
  }

  export const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
        .then((result) => {
        const name = result.user.displayName;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem('name', name);
        localStorage.setItem('profilePic', profilePic);
        }).catch((error) => {
        const errorCode = error.code;
        });
    }
