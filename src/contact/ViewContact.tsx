import React from 'react'
import BackButton from '../buttons/BackButton';
import LogoutButton from '../buttons/LogoutButton';
import { ContactObjectType } from '../types';

type ViewContactProps = {
    contact: ContactObjectType
    setisViewing: (isViewing: boolean) => void
}

const ViewContact: React.FC<ViewContactProps> = ({
    contact,
    setisViewing
}) => {

    return (
        <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 h-screen dark:bg-gray-600">
            <BackButton setFalse={setisViewing}/>
            <LogoutButton />
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-left text-2xl font-extrabold text-gray-900 dark:text-white">Contact Information</h2>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <input
                            disabled
                            className="dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                            value={contact.name}
                        />
                    </div>
                    <div>
                        <input
                            disabled
                            className="dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                            value={contact.email}
                        />
                    </div>
                    <div>
                        <input
                            disabled
                            className="dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                            value={contact.number}
                        />
                    </div>
                    <div>
                        <input
                            disabled
                            className="dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                            value={contact.address}
                        />
                    </div>
                    {contact.user != null && <div>
                        <input
                            disabled
                            className="dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                            value={contact.user}
                        />
                    </div>}
                </div>
            </div>
        </div>
    )

}

export default ViewContact