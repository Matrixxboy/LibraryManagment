import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faTwitter, faInstagram, faFacebook, faGlobe } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Utsav",
        role: "Full Stack Developer",
        location: "Saitan gali",
        email: "bhaibhai@gmail.com",
        phone: "98240.....",
        mobile: "999892 samsung",
        address: "Bay Area, San Francisco, CA",
    });

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        setEditMode(false);
    };

    return (
        <section className=" py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="bg-white rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4 text-center">
                            <div className="card-body">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: "150px" }}
                                />
                                <h5 className="my-3">{user.name}</h5>
                                <p className="text-muted mb-1">{user.role}</p>
                                <p className="text-muted mb-4">{user.location}</p>
                                <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <p><strong>Full Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Mobile:</strong> {user.mobile}</p>
                                <p><strong>Address:</strong> {user.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {editMode && (
                <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Profile</h5>
                                <button type="button" className="btn-close" onClick={() => setEditMode(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" className="form-control mb-2" value={formData.name} onChange={handleChange} placeholder="Full Name" />
                                    <input type="email" name="email" className="form-control mb-2" value={formData.email} onChange={handleChange} placeholder="Email" />
                                    <input type="text" name="phone" className="form-control mb-2" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                                    <input type="text" name="mobile" className="form-control mb-2" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
                                    <input type="text" name="address" className="form-control mb-2" value={formData.address} onChange={handleChange} placeholder="Address" />
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UserProfile;