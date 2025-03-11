import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-8">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* GitHub Section */}
                    <div>
                        <h5 className="text-xl font-semibold mb-3 flex justify-center md:justify-start">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            GitHub
                        </h5>
                        <p className="text-gray-400">
                            I am an Open Source Contributor, focused on JavaScript, AI, ML, and Data Science.
                        </p>
                        <Link
                            to="https://github.com/matrixxboy"
                            target="_blank"
                            className="inline-block mt-3 px-4 py-2 border border-gray-400 text-white rounded-lg hover:bg-gray-800 transition"
                        >
                            Visit my GitHub
                        </Link>
                    </div>

                    {/* Discord Section */}
                    <div>
                        <h5 className="text-xl font-semibold mb-3 flex justify-center md:justify-start">
                            <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                            Discord
                        </h5>
                        <p className="text-gray-400">
                            A platform for community building and real-time communication via text, voice, and video.
                        </p>
                        <button className="mt-3 px-4 py-2 border border-gray-400 text-white rounded-lg hover:bg-gray-800 transition">
                            Let's Talk
                        </button>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h5 className="text-xl font-semibold mb-3 flex justify-center md:justify-start">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Contact
                        </h5>
                        <p className="text-gray-400">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            matrix.utsav.lnakapati@gmail.com <br />
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                            +91 7041634002
                        </p>
                        <button className="mt-3 px-4 py-2 border border-gray-400 text-white rounded-lg hover:bg-gray-800 transition">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="text-center mt-8 border-t border-gray-700 pt-4">
                    <p className="text-gray-400">
                        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                        &copy; {new Date().getFullYear()} Matrix Boy | All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
