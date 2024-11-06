export default function login2() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-sm w-full">
                <h1 className="text-2xl font-semibold mb-6">Please login to continue</h1>
                <button className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
                    Login
                </button>
            </div>
        </div>
    );
}

