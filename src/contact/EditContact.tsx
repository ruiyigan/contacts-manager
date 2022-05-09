import { SaveIcon } from '@heroicons/react/solid';
import React from 'react'
import { useState } from 'react'
import BackButton from '../buttons/BackButton';
import LogoutButton from '../buttons/LogoutButton';
import { updateContact } from '../services/contacts';
import { ContactObjectType, UserObjectType } from '../types';

type EditContactProps = {
    contacts: ContactObjectType[]
    contact: ContactObjectType
    setContacts: (contacts: ContactObjectType[]) => void
    user: UserObjectType
    setSelectedContact: (contact: ContactObjectType) => void
    setisEditing: (isEditing: boolean) => void
}

const EditContact: React.FC<EditContactProps> = ({
    contacts,
    contact,
    setContacts,
    user,
    setSelectedContact,
    setisEditing
}) => {

    const [name, setName] = useState(contact.name)
    const [email, setEmail] = useState(contact.email)
    const [number, setNumber] = useState(contact.number)
    const [address, setAddress] = useState(contact.address)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const ContactObject = {
            id: contact.id,
            name: name,
            email: email,
            number: number,
            address: address,
            user: user.name,
        }
        updateContact(contacts, setContacts, ContactObject)
        setSelectedContact({id: '', name: '', email: '', number: '', address: '', user: ''})
        setisEditing(false)
    }
    return (
        <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
            <BackButton setFalse={setisEditing}/>
            <LogoutButton />
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-left text-2xl font-extrabold text-gray-900">Update Contact</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                                value={name}
                                onChange={({ target }) => setName(target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="number"
                                name="number"
                                type="number"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                placeholder="Number"
                                value={number}
                                onChange={({ target }) => setNumber(target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="address"
                                name="address"
                                type="address"
                                autoComplete="address"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                placeholder="Address"
                                value={address}
                                onChange={({ target }) => setAddress(target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <SaveIcon className="h-5 w-5 text-teal-400 group-hover:text-teal-300" aria-hidden="true" />
                            </span>
                            Update Contact
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditContact