"use client";

import { useRouter } from "next/navigation";

export default function Register() {
    const Router = useRouter();
    const handleClick = () => {
        Router.push("/login");
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-white p-6">
            <div className="max-w-md w-full bg-gray-100 rounded-[1rem] p-8 shadow-md">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="shadow appearance-none border rounded-[1rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Your Password"
                            className="shadow appearance-none border rounded-[1rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Your Password"
                            className="shadow appearance-none border rounded-[1rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button onClick={handleClick} className="bg-rose-500 text-white p-2 rounded-[1rem] w-full hover:bg-rose-700 transition">
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
}
