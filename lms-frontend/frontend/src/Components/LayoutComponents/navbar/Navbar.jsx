import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-dark hidden">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Book Store</Link>
                <button
                    className="navbar-toggler visible-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/Profile">Profile</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/Book">Books</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/Addbooks">Add Book</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/Signup">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
