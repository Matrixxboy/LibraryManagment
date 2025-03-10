import React, { useState } from "react";
import "./userprofile.css";

const UserProfile = () => {
    // State for user details
    const [user, setUser] = useState({
        name: "Utsav",
        location: "Surat",
        profession: "UnderDevelopment",
        bio: "Nahi bataunga",
    });

    // State to show/hide the edit form
    const [isEditing, setIsEditing] = useState(false);

    // State for temporary input values
    const [formData, setFormData] = useState({ ...user });

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSave = (e) => {
        e.preventDefault();
        setUser(formData); // Update user details
        setIsEditing(false); // Hide form
    };

    return (
        <section className="user-profile">
            <div className="container">
                <div className="profile-card shadow-lg">

                    {/* Profile Header */}
                    <div className="profile-header">
                        <div className="profile-info">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                alt="Profile"
                                className="profile-img"
                            />
                            <h2>{user.name}</h2>
                            <p className="location">{user.location}</p>
                            <button className="edit-btn" onClick={() => setIsEditing(true)}>
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="profile-body">
                        <h3>About</h3>
                        <div className="about-section">
                            <p>{user.profession}</p>
                            <p>{user.location}</p>
                            <p>{user.bio}</p>
                        </div>
                    </div>

                    {/* Edit Profile Modal */}
                    {isEditing && (
                        <div className="edit-profile-modal">
                            <div className="edit-form">
                                <h3>Edit Profile</h3>
                                <form onSubmit={handleSave}>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                    <label>Location:</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />

                                    <label>Profession:</label>
                                    <input
                                        type="text"
                                        name="profession"
                                        value={formData.profession}
                                        onChange={handleChange}
                                    />

                                    <label>Bio:</label>
                                    <textarea
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                    />

                                    <div className="form-buttons">
                                        <button type="submit" className="save-btn">Save</button>
                                        <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
