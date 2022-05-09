import { useState } from 'react';
import { createNewUser } from "../../services/authentication";
import { LockClosedIcon } from '@heroicons/react/solid'

type SignUpProps = {
}

const SignUp: React.FC<SignUpProps> = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    return (

        <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-20 w-auto"
                        src="https://robohash.org/CQO.png?set=set1"
                        alt='profilepic'
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create New Account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={event => { event.preventDefault(); createNewUser(name, email, password) }}>
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
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-teal-400 group-hover:text-teal-300" aria-hidden="true" />
                            </span>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
