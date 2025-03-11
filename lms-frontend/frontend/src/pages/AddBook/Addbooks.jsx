import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
    const [bookData, setBookData] = useState({
        bookname: "",
        author: "",
        description: "",
        hashtags: "",
        file: null,
        price: "",
    });

    const change = (e) => {
        const { name, type, value, files } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const saveNewBook = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in bookData) {
                formData.append(key, bookData[key]);
            }
            const response = await axios.post("http://localhost:5000/api/v1/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Book data successfully submitted:", response.data);
            alert(response.data.message);
        } catch (e) {
            console.error("Error creating book", e);
            alert("Error creating book");
        }
    };

    return (
        <div className="bg-gray-900 flex justify-center items-center min-h-screen bg-gray-1000 p-6">
            <form
                className="bg-gray-800 drop-shadow-lg rounded-lg p-6 w-full max-w-3xl"
                onSubmit={saveNewBook}
            >
                <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">Add New Book</h2>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white">Book Name</label>
                        <input
                            name="bookname"
                            value={bookData.bookname}
                            type="text"
                            placeholder="Enter book title"
                            required
                            onChange={change}
                            className="w-full placeholder-gray-400 p-2 border border-gray-300 rounded-md focus:ring-2 text-white text-white focus:ring-blue-500 "
                        />
                    </div>
                    <div>
                        <label className="block text-white">Author Name</label>
                        <input
                            name="author"
                            value={bookData.author}
                            type="text"
                            placeholder="Enter author's name"
                            required
                            onChange={change}
                            className="w-full p-2 border placeholder-gray-400 border-gray-300 rounded-md focus:ring-2 text-white focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-white">Book Description</label>
                    <textarea
                        name="description"
                        value={bookData.description}
                        placeholder="Enter a brief description of the book"
                        rows="3"
                        required
                        onChange={change}
                        className="w-full p-2 border placeholder-gray-400 border-gray-300 rounded-md focus:ring-2 text-white focus:ring-blue-500"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-white">Book Tag</label>
                    <input
                        name="hashtags"
                        value={bookData.hashtags}
                        type="text"
                        placeholder="Enter one tag for the book"
                        required
                        onChange={change}
                        className="w-full p-2 border placeholder-gray-400 border-gray-300 rounded-md focus:ring-2 text-white focus:ring-blue-500"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-white">Price</label>
                    <input
                        name="price"
                        type="number"
                        value={bookData.price}
                        placeholder="Enter book cost"
                        required
                        onChange={change}
                        className="w-full p-2 border  placeholder-gray-400 border-gray-300 rounded-md focus:ring-2 text-white focus:ring-blue-500"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-white">Upload Book Cover</label>
                    <input
                        name="file"
                        type="file"
                        className="w-full p-2 border placeholder-gray-400 border-gray-300 rounded-md focus:ring-2 text-white focus:ring-blue-500"
                        onChange={change}
                    />
                </div>

                <div className="mt-4 flex items-center">
                    <input
                        type="checkbox"
                        id="gridCheck"
                        required
                        className="mr-2"
                    />
                    <label htmlFor="gridCheck" className="text-white">
                        I confirm that this book information is accurate.
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
