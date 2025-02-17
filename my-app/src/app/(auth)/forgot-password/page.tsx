import Link from "next/link";

export const metadata = {
    title: 'Forgot-Password',
    description: 'Generated by next app',
}

export default function ForgotPassword() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-white p-6">
            <div className="max-w-md w-full bg-gray-100 rounded-[1rem] p-8 shadow-md">
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
                            className="shadow appearance-none border rounded-[1rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button className="bg-rose-500 text-white p-2 rounded-[1rem] w-full hover:bg-rose-700 transition">
                        Send Reset Link
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/login" className="text-rose-500 hover:text-rose-700">
                        Back to Login
                    </Link>
                </div>
            </div>
        </section>
    );
}
