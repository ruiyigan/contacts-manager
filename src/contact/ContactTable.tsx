import { ContactObjectType } from "../types";
import React, { useState } from "react";
import Contacts from "./Contacts";
import { SearchIcon } from "@heroicons/react/solid";
import { Table, Thead, Tr, Th} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

type ContactTableProps = {
    contacts: ContactObjectType[]
    setContacts: (contacts: ContactObjectType[]) => void
    setSelectedContact: (selectedContact: ContactObjectType) => void
    setisEditing: (isEditing: boolean) => void
    setisViewing: (isViewing: boolean) => void
    setAddNew: (addNew: boolean) => void
}

const ContactTable: React.FC<ContactTableProps> = ({ setContacts, contacts, setSelectedContact, setisEditing, setisViewing, setAddNew }) => {
    const [search, setSearch] = useState('')
    const filtered = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="relative overflow-x-auto sm:rounded-lg px-8">
            <div className="sm:p-4 flex flex-col sm:flex-row">
                <div className="relative flex-1 pb-3 sm:p-0">
                    <div className="absolute inset-y-0 left-0 flex items-center pb-3 pl-3 pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        value={search}
                        onChange={({ target }) => setSearch(target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                        placeholder="Search by name"
                    />
                </div>
                <div className="pb-3 sm:p-0">
                    <button className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setAddNew(true)}>Create New Contact</button>
                </div>
            </div>
            <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <Thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <Tr>
                        <Th scope="col" className="px-6 py-3">
                            Name
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Email Address
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Number
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Address
                        </Th>
                        <Th scope="col" className="px-6 py-3">
                            Actions
                        </Th>
                    </Tr>
                </Thead>
                <Contacts contacts={filtered} setSelectedContact={setSelectedContact} setisViewing={setisViewing} setContacts={setContacts} setisEditing={setisEditing} />
            </Table>
        </div>

    )
}

export default ContactTable;