import type { Metadata } from 'next' 

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="bg-white text-black">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">

            <div className="text-black text-2xl font-bold">
              MyBrand
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-black hover:text-gray-700">Home</a>
              <a href="/about" className="text-black hover:text-gray-700">About</a>
              <a href="/" className="text-black hover:text-gray-700">Services</a>
              <a href="/" className="text-black hover:text-gray-700">Contact</a>
            </nav>

            <div>
              <a href="#" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                Login
              </a>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-white text-black py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">

            <div className="flex space-x-4">
              <a href="/" className="hover:text-gray-700">Privacy Policy</a>
              <a href="/" className="hover:text-gray-700">Terms of Service</a>
            </div>
          </div>

          <div className="text-center mt-6">
            <p>© <span id="year"></span> MyBrand. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
