import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* GitHub Section */}
                    <div className="col-12 col-md-4 mb-4">
                        <h5 className="mb-3">
                            <FontAwesomeIcon icon={faGithub} className="me-2" />
                            GitHub
                        </h5>
                        <p>I am an Open Source Contributor, focused on JavaScript, AI, ML, and Data Science.</p>
                        <Link to="https://github.com/matrixxboy" target="_blank" className="btn btn-outline-light">
                            Visit my GitHub
                        </Link>
                    </div>

                    {/* Discord Section */}
                    <div className="col-12 col-md-4 mb-4">
                        <h5 className="mb-3">
                            <FontAwesomeIcon icon={faDiscord} className="me-2" />
                            Discord
                        </h5>
                        <p>A platform for community building and real-time communication via text, voice, and video.</p>
                        <button className="btn btn-outline-light">Let's Talk</button>
                    </div>

                    {/* Contact Section */}
                    <div className="col-12 col-md-4 mb-4">
                        <h5 className="mb-3">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            Contact
                        </h5>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            matrix.utsav.lnakapati@gmail.com <br />
                            <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                            +91 7041634002
                        </p>
                        <button className="btn btn-outline-light">Contact Me</button>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="text-center mt-4 border-top pt-3">
                    <p className="mb-0">
                        <FontAwesomeIcon icon={faGlobe} className="me-2" />
                        &copy; {new Date().getFullYear()} Matrix Boy | All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
