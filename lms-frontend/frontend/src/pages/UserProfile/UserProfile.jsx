import React, { useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Utsav",
        role: "Full Stack Developer",
        location: "Saitan Gali",
        email: "bhaibhai@gmail.com",
        phone: "98240.....",
        mobile: "999892 Samsung",
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
        <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">User Profile</h2>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Profile Card */}
                    <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg w-full md:w-1/3 text-center">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-full w-32 h-32 border-4 border-blue-400 shadow-md"
                        />
                        <h3 className="text-xl font-semibold mt-4">{user.name}</h3>
                        <p className="text-gray-400">{user.role}</p>
                        <p className="text-gray-400">{user.location}</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg text-white font-medium" onClick={() => setEditMode(true)}>
                            Edit Profile
                        </button>
                    </div>

                    {/* User Details */}
                    <div className="w-full md:w-2/3 bg-gray-700 p-6 rounded-lg">
                        <div className="mb-4">
                            <p className="text-gray-300"><strong>Full Name:</strong> {user.name}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-300"><strong>Email:</strong> {user.email}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-300"><strong>Phone:</strong> {user.phone}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-300"><strong>Mobile:</strong> {user.mobile}</p>
                        </div>
                        <div>
                            <p className="text-gray-300"><strong>Address:</strong> {user.address}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {editMode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-semibold text-white mb-4">Edit Profile</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="name" className="w-full bg-gray-700 p-2 rounded-lg text-white placeholder-gray-400" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                            <input type="email" name="email" className="w-full bg-gray-700 p-2 rounded-lg text-white placeholder-gray-400" value={formData.email} onChange={handleChange} placeholder="Email" required />
                            <input type="text" name="phone" className="w-full bg-gray-700 p-2 rounded-lg text-white placeholder-gray-400" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                            <input type="text" name="mobile" className="w-full bg-gray-700 p-2 rounded-lg text-white placeholder-gray-400" value={formData.mobile} onChange={handleChange} placeholder="Mobile" required />
                            <input type="text" name="address" className="w-full bg-gray-700 p-2 rounded-lg text-white placeholder-gray-400" value={formData.address} onChange={handleChange} placeholder="Address" required />

                            <div className="flex justify-between">
                                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg text-white font-medium">Save Changes</button>
                                <button type="button" className="px-4 py-2 bg-red-600 hover:bg-red-700 transition duration-300 rounded-lg text-white font-medium" onClick={() => setEditMode(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UserProfile;
