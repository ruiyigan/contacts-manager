import { logout } from "../services/authentication"

const LogoutButton = () => {
        return (
            <button className="dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 absolute right-10 top-8 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-full shadow-sm text-sm" onClick={() => logout()}>Logout</button>
        )
}

export default LogoutButton