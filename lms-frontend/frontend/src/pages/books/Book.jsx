import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../../Components/CoreComponents/Bookcards/BookCard";

const Book = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/getBooks");
                setBooks(response.data.books);
                setFilteredBooks(response.data.books);
            } catch (error) {
                console.error("Data Fetching Error:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        setFilteredBooks(
            books.filter((book) =>
                book.bookname.toLowerCase().includes(lowerCaseSearchTerm) ||
                book.author.toLowerCase().includes(lowerCaseSearchTerm) ||
                book.hashtags?.toLowerCase().includes(lowerCaseSearchTerm)
            )
        );
    }, [searchTerm, books]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOpenPopup = (book) => {
        setSelectedBook(book);
    };

    const handleClosePopup = () => {
        setSelectedBook(null);
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-xl text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">Error: {error.message}</div>;
    }

    return (
        <div className="w-full min-h-screen container bg-gray-900 mx-auto px-6 py-10 text-white">
            {/* Search Bar */}
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full md:w-1/2 p-3 bg-gray-700 border border-gray-500 rounded-lg shadow-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
            </div>

            {/* Book Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <BookCard key={book._id} book={book} onOpenPopup={handleOpenPopup} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400">No books found.</p>
                )}
            </div>

            {/* Popup Modal */}
            {selectedBook && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50">
                    <div className="bg-gray-800 bg-opacity-90 text-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/3 shadow-lg">
                        <h3 className="text-2xl font-bold">{selectedBook.bookname}</h3>

                        {/* Fixed Image Scaling */}
                        <div className="w-full flex justify-center mt-4">
                            <img
                                src={selectedBook.image}
                                alt={selectedBook.bookname}
                                className="w-auto h-64 max-w-full rounded-lg object-contain"
                            />
                        </div>

                        <p className="mt-4">{selectedBook.description}</p>
                        <ul className="mt-4 text-gray-300">
                            <li><strong>Author:</strong> {selectedBook.author}</li>
                            <li><strong>Price:</strong> {selectedBook.price} /-</li>
                            <li><strong>Tags:</strong> {selectedBook.hashtags}</li>
                        </ul>

                        <button
                            onClick={handleClosePopup}
                            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Book;
