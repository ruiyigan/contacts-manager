import { logout } from "../services/authentication"

const LogoutButton = () => {
        return (
            <button className="absolute right-10 top-8 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-full shadow-sm text-sm" onClick={() => logout()}>Logout</button>
        )
}

export default LogoutButton