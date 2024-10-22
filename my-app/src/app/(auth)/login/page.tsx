export default function Login() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-white p-6">
            <div className="max-w-md w-full bg-gray-100 rounded-lg p-8 shadow-md">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Your Email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Your Password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <a href="/forgot-password" className="text-blue-500 hover:text-blue-700 text-sm">Forgot Password?</a>
                        <a href="/register" className="text-blue-500 hover:text-blue-700 text-sm">Register</a>
                    </div>
                    <button className="bg-black text-white p-2 rounded w-full hover:bg-gray-800 transition">
                      <a href="/"> Login</a> 
                    </button>
                </form>
            </div>
        </section>
    );
}
