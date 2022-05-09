import { deleteContact } from "../services/contacts";
import { ContactObjectType } from "../types";
import { Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

type ContactProp = {
    contacts: ContactObjectType[]
    contact: ContactObjectType
    setContacts: (contacts: ContactObjectType[]) => void
    setSelectedContact: (contact: ContactObjectType) => void
    setisEditing: (isEditing: boolean) => void
    setisViewing: (isViewing: boolean) => void
}

const Contact: React.FC<ContactProp> = ({ contacts, contact, setContacts, setSelectedContact, setisEditing, setisViewing }) => {

    const handleDelete = () => {
        deleteContact(contacts, setContacts, contact.id)
    }

    return (
        <Tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <Th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {contact.name}
            </Th>
            <Td className="px-6 py-4">
                {contact.email}
            </Td>
            <Td className="px-6 py-4">
                {contact.number}
            </Td>
            <Td className="px-6 py-4">
                {contact.address}
            </Td>
            <Td className="pr-6 py-4 text-right">
                <button className="px-2 text-teal-600 dark:text-teal-500 hover:underline" onClick={() => {setSelectedContact(contact); setisViewing(true)}} >View</button>
                <button className="px-2 text-teal-600 dark:text-teal-500 hover:underline" onClick={() => {setSelectedContact(contact); setisEditing(true)}} >Edit</button>
                <button className="px-2 text-teal-600 dark:text-teal-500 hover:underline" onClick={handleDelete} >Delete</button>
            </Td>
        </Tr>
    )
}

export default Contact;