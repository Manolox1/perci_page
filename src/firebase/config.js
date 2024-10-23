import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWDnL8CAvLjPI31M4_noGp8RU8vrdzsys",
    authDomain: "perci-5962b.firebaseapp.com",
    projectId: "perci-5962b",
    storageBucket: "perci-5962b.appspot.com",
    messagingSenderId: "480592651242",
    appId: "1:480592651242:web:e3f41a05715b3bb7e00893",
    measurementId: "G-T9JDZ9HGYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)