import React, { useEffect, useState } from 'react';
import CreateNewContact from './CreateNewContact';
import { ContactObjectType, UserObjectType } from '../types';
import { getContacts } from '../services/contacts';
import ContactTable from './ContactTable';
import EditContact from './EditContact';
import ViewContact from './ViewContact';
import LogoutButton from '../buttons/LogoutButton';

type ContactPageProps = {
    user: UserObjectType
}
const ContactPage: React.FC<ContactPageProps> = ({
    user
}) => {
    const [contacts, setContacts] = useState<Array<ContactObjectType>>([])
    const [addNew, setAddNew] = useState(false)
    const [isEditing, setisEditing] = useState(false)
    const [isViewing, setisViewing] = useState(false)
    const [selectedContact, setSelectedContact] = useState<ContactObjectType>({id: '', name: '', email: '', number: '', address: '', user: ''});

    useEffect(() => {
        getContacts(setContacts);
    }, []);

    if (addNew) {
        return (
            <CreateNewContact contacts={contacts} setContacts={setContacts} user={user} setAddNew={setAddNew}/>
        )
    }

    if (isEditing) {
        return (
            <EditContact contacts={contacts} contact={selectedContact} user={user} setContacts={setContacts} setSelectedContact={setSelectedContact} setisEditing={setisEditing}/>
        )
    }

    if (isViewing) {
        return (
            <ViewContact contact={selectedContact} setisViewing={setisViewing}/>
        )
    }

    return (
        <div className='flex-col flex'>
            <LogoutButton />
            <h1 className='invisible sm:visible py-2 mt-6 text-center text-2xl font-extrabold leading-10 '>Welcome {user.name}</h1>
            <ContactTable contacts={contacts} setContacts={setContacts} setSelectedContact={setSelectedContact} setisEditing={setisEditing} setisViewing={setisViewing} setAddNew={setAddNew}/>
        </div>
    );
}

export default ContactPage;
