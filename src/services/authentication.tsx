import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import {addUser, getUser} from "./users";

const createNewUser = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            addUser(user.uid, name, email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
}

const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
}

const loginStatus = (setIsSignedIn: any, setUser: any) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsSignedIn(true);
            getUser(setUser, user.uid);
        } else {
            setIsSignedIn(false);
        }
    })
}

const logout = () => {
    signOut(auth)
        .then(() => {
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage); 
    })
}

export { login, createNewUser, loginStatus, logout };
