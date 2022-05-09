import { collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore"
import { ContactObjectType } from "../types";
import { db } from "./firebaseConfig"

const addContact = (ContactObject: ContactObjectType, setContacts: any, contacts: ContactObjectType[], setAddNew: any) => {
    setDoc(doc(db, 'contacts', ContactObject.id), ContactObject)
        .then(
            setContacts([...contacts, ContactObject]),
            setAddNew(false)
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
}

const getContacts = (setContacts: any) => {
    const contactsRef = collection(db, 'contacts');
    const q = query(contactsRef);
    getDocs(q)
        .then(snapshot => {
            setContacts(snapshot.docs.map(doc => doc.data()));
        })
}

const updateContact = (contacts: any, setContacts: any, ContactObject: ContactObjectType) => {
    setDoc(doc(db, 'contacts', ContactObject.id), ContactObject, { merge: true })
        .then(
            setContacts(contacts.map((mappedcontact: ContactObjectType) => mappedcontact.id === ContactObject.id ? ContactObject : mappedcontact))
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
}

const deleteContact = (contacts: any, setContacts: any, uid: any) => {
    deleteDoc(doc(db, 'contacts', uid))
        .then(
            setContacts(contacts.filter((contact: ContactObjectType) => contact.id !== uid))
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
}

export { addContact, getContacts, updateContact, deleteContact }