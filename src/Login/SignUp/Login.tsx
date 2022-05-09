import { useState } from 'react';
import { login } from "../../services/authentication";
import { LockClosedIcon } from '@heroicons/react/solid'
import SignUp from './SignUp';

type LoginProps = {
}

const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignUp, setIsSignUp] = useState(false)

    if (isSignUp) {
        return (
            <SignUp />
        )
    }
    return (
        <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-20 w-auto"
                        src="https://robohash.org/E6X.png?set=set1"
                        alt="profilepic login"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={event => { event.preventDefault(); login(email, password) }}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
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
                            Log in
                        </button>
                    </div>
                </form>
                <div className="flex justify-end">
                    <div className="text-sm ">
                        <button onClick={() => setIsSignUp(true)} className="font-medium text-teal-600 hover:text-teal-500">
                            Create an account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
