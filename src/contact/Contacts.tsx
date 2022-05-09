import Contact from "./Contact"
import { ContactObjectType } from "../types"
import { Tbody } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

type ContactsProp = {
    contacts: ContactObjectType[]
    setContacts: (contacts: ContactObjectType[]) => void
    setSelectedContact: (contact: ContactObjectType) => void
    setisEditing: (isEditing: boolean) => void
    setisViewing: (isViewing: boolean) => void
}

const Contacts: React.FC<ContactsProp> = ({ setContacts, contacts, setSelectedContact, setisEditing, setisViewing }) => {
    return (
        <Tbody>
            {contacts.map((contact: ContactObjectType) => <Contact key={contact.id} setisEditing={setisEditing} contact={contact} setSelectedContact={setSelectedContact} setContacts={setContacts} contacts={contacts} setisViewing={setisViewing}/>)}
        </Tbody>
    )
}

export default Contacts