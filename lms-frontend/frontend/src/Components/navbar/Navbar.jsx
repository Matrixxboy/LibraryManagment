import React from 'react';
import {Link} from "react-router-dom";
import ("./navbar.css");

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid bg-dark ">
                    <Link className="navbar-brand text-white">Book Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="nav-item nav-link active text-white" to="/">
                                HOME
                            </Link>
                            <Link className="nav-item nav-link text-white" to="/Book">
                                BOOKS
                            </Link>
                            <Link className="nav-item nav-link text-white" to="/Addbooks">
                                ADD BOOKS
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar