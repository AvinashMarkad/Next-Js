// pages/about.js
import Head from 'next/head';

export default function About() {
    return (
        <div className="bg-white min-h-screen p-4">
            <Head>
                <title>About Us - Coffee Haven</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to Coffee Haven, your number one source for all things coffee. We're dedicated to providing you the very best of coffee, with an emphasis on quality, customer service, and uniqueness.
                </p>
                <p className="text-gray-700 mb-4">
                    Founded in 2023 by Avinash, Coffee Haven has come a long way from its beginnings. When Avinash first started out, his passion for ethically sourced coffee drove him to start his own business.
                </p>
                <p className="text-gray-700 mb-4">
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>
                <button className="bg-rose-500 text-white py-2 px-4 rounded-full hover:bg-rose-700">
                    Contact Us
                </button>
            </main>
        </div>
    );
}
