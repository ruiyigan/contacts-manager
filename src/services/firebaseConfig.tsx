import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDj6qHVt0Rbv9m6n5alSgh3y8JyHStGbnQ",
    authDomain: "contacts-manager-135fd.firebaseapp.com",
    projectId: "contacts-manager-135fd",
    storageBucket: "contacts-manager-135fd.appspot.com",
    messagingSenderId: "952495731191",
    appId: "1:952495731191:web:f1638afe56f8ed3a547ef2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { db, app, auth }