import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-950 text-white shadow-lg">
            <div className="container bg-gray-950  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-semibold">
                        Book Store
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="block lg:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Nav Links */}
                    <div className={`lg:flex ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
                        <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
                            <li><Link to="/" className="block px-4 py-2 hover:text-gray-300">Home</Link></li>
                            <li><Link to="/Profile" className="block px-4 py-2 hover:text-gray-300">Profile</Link></li>
                            <li><Link to="/Book" className="block px-4 py-2 hover:text-gray-300">Books</Link></li>
                            <li><Link to="/Addbooks" className="block px-4 py-2 hover:text-gray-300">Add Book</Link></li>
                            <li><Link to="/Signup" className="block px-4 py-2 hover:text-gray-300">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
