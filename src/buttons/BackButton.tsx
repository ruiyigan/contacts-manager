type BackButtonProps = {
    setFalse: (isFalse: boolean) => void
}

const BackButton: React.FC<BackButtonProps> = ({setFalse}) => {
        return (
            <div className="flex justify-center">
                <button
                    className="absolute text-sm top-8 left-10 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-full shadow-sm"
                    onClick={() => setFalse(false)}
                >
                    Home
                </button>
            </div>
        )
    
}

export default BackButton