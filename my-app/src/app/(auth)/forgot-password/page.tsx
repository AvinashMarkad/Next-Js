export default function ForgotPassword() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-white p-6">
            <div className="max-w-md w-full bg-gray-100 rounded-lg p-8 shadow-md">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Forgot Password</h2>
                <p className="text-gray-700 text-center mb-4">
                    Please enter your email address to receive a password reset link.
                </p>
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
                    <button className="bg-black text-white p-2 rounded w-full hover:bg-gray-800 transition">
                        Send Reset Link
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/login" className="text-blue-500 hover:text-blue-700">Back to Login</a>
                </div>
            </div>
        </section>
    );
}
