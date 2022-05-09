import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const addUser = (uid: any, name: string | null, email: string | null) => {
    return setDoc(doc(db, "users", uid), {
        uid: uid,
        name: name,
        email: email,
    });
}

const getUser = (setUser: any, uid: any) => {
    const userRef = doc(db, 'users', uid);
    getDoc(userRef)
        .then(snapshot => {
            setUser(snapshot.data());
        })
}

export {addUser, getUser}