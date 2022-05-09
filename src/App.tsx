import { useEffect, useState } from 'react';
import { loginStatus } from './services/authentication';
import ContactPage from './contact/ContactPage';
import { UserObjectType } from './types';
import Login from './Login/SignUp/Login';

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [user, setUser] = useState<UserObjectType>({name: '', email: ''})

    useEffect(() => {
        loginStatus(setIsSignedIn, setUser)
    }, [])
    
    if (isSignedIn) {
        return (
           <ContactPage user={user}/> 
        );
    }

    return (
        <div className='h-screen dark:bg-gray-600'>
            <Login />
        </div>
    );
}

export default App;
