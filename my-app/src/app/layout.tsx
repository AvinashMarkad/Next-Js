// "use client"

import type { Metadata } from "next";
// import { usePathname } from "next/navigation";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const navLinks =[
//   { name : "Home" , href : "/" },
//   { name : "About" , href : "/about" },
//   { name : "Services" , href : "/service" }
// ]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        <div className="bg-white text-black home">
          <header className="bg-white text-black">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              <div className="text-black text-2xl font-bold">MyBrand</div>
              {/* {navLinks.map((link)=>{
                            const isActive = pathName.startsWith(link.href)
                            return(
                                <Link href={link.href} key={link.name} className={isActive ? "bg-blue-500" : "bg-red-500"}> {link.name}</Link>
                            )
                        })} */}
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-black hover:text-gray-700">
                  Home
                </Link>
                <Link
                  href="/service"
                  className="text-black hover:text-gray-700"
                >
                  Services
                </Link>
                <Link href="/about" className="text-black hover:text-gray-700">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-black hover:text-gray-700"
                >
                  Contact
                </Link>
              </nav>

              <div>
                <Link
                  href="/login"
                  className="bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600"
                >
                  Logout
                </Link>
              </div>

            </div>
          </header>
          {children}
          <footer className="bg-white text-black py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
              <div className="flex space-x-4">
                <Link href="/" className="hover:text-gray-700">
                  Privacy Policy
                </Link>
                <Link href="/" className="hover:text-gray-700">
                  Terms of Service
                </Link>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-center md:text-right">
                  Contact:{" "}
                  <a
                    href="mailto:info@cafedelight.com"
                    className="hover:text-gray-700"
                  >
                    info@cafedelight.com
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="/" className="hover:text-gray-700">
                  Facebook
                </Link>
                <Link href="/" className="hover:text-gray-700">
                  Twitter
                </Link>
                <Link href="/" className="hover:text-gray-700">
                  Instagram
                </Link>
                <Link href="/" className="hover:text-gray-700">
                  LinkedIn
                </Link>
              </div>
              <p>
                © by{" "}
                <span id="year">
                  <Link href="https:/github.com/AvinashMarkad">
                    AvinashMarkad
                  </Link>
                </span>{" "}
                All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
