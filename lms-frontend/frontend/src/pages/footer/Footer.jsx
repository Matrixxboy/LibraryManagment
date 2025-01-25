import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faDiscord,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer className="bg-dark"> 
            <div className="container"> 
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 mb-3">
                            <div className="center text-center">
                                <h5 className="title">
                                    <FontAwesomeIcon icon={faGithub} className="me-1" /> GitHub</h5>
                                <p className="text">i am Open Source Contributor.Focused on JavaScript , AI , ML and Data Science.</p>
                                <Link className="footerbtn">Visit my Github</Link>
                            </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3"> 
                            <div className="center text-center"> 
                                <h5 className="title"><FontAwesomeIcon icon={faDiscord} className="me-1" />Discord</h5>
                                <p className="text">A platform for community building and real-time communication via text, voice, and video.</p>
                                <Link className="footerbtn">Lets Talk</Link>
                            </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3"> 
                            <div className="center text-center"> 
                            <h5 className="title"><FontAwesomeIcon icon={faEnvelope} className="me-1" />Contact</h5>
                                <p className="text"><FontAwesomeIcon icon={faEnvelope} className="me-1" /> matrix.utsav.lnakapati@gmail.com<br></br>
                                <FontAwesomeIcon icon={faWhatsapp} /> +91 7041634002</p>
                                <Link className="footerbtn">Contact Me</Link>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;