import React from 'react'
import { useState } from 'react'
import { addContact } from '../services/contacts';
import { v4 as uuidv4 } from 'uuid'
import { ContactObjectType, UserObjectType } from '../types';
import { PlusCircleIcon } from '@heroicons/react/solid';
import BackButton from '../buttons/BackButton';
import LogoutButton from '../buttons/LogoutButton';

type CreateNewContactProps = {
    contacts: ContactObjectType[]
    setContacts: (contacts: ContactObjectType[]) => void
    user: UserObjectType
    setAddNew: (addNew: boolean) => void
}

const CreateNewContact: React.FC<CreateNewContactProps> = ({
    contacts,
    setContacts,
    user,
    setAddNew
}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const postId = uuidv4()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const ContactObject = {
            id: postId,
            name: name,
            email: email,
            number: number,
            address: address,
            user: user.name,
        }
        addContact(ContactObject, setContacts, contacts, setAddNew)
        setName('')
        setEmail('')
        setNumber('')
        setAddress('')
    }
    return (
        <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
            <BackButton setFalse={setAddNew}/>
            <LogoutButton />
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-left text-2xl font-extrabold text-gray-900">Create New Contact</h2>
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
                                <PlusCircleIcon className="h-5 w-5 text-teal-400 group-hover:text-teal-300" aria-hidden="true" />
                            </span>
                            Create New Contact
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default CreateNewContact