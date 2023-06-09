// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt0y8FlOPpEfW5KqhmHns3Y0PA0Qhu4Ek",
    authDomain: "beautyapp-c8768.firebaseapp.com",
    projectId: "beautyapp-c8768",
    storageBucket: "beautyapp-c8768.appspot.com",
    messagingSenderId: "765726767404",
    appId: "1:765726767404:web:5fef8333769eaa86ca1489"
  };

// Initialize Firebase
let app;
if (firebase.getApps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.getApp()
}
const database = getFirestore()
const auth = getAuth()
const storage = getStorage()

export {auth, database, storage}