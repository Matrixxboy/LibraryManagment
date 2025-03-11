import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../../Components/CoreComponents/Bookcards/BookCard";

const Book = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

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
        const filterBooks = () => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const filtered = books.filter((book) => {
                return (
                    book.bookname.toLowerCase().includes(lowerCaseSearchTerm) ||
                    book.author.toLowerCase().includes(lowerCaseSearchTerm) ||
                    book.hashtags?.toLowerCase().includes(lowerCaseSearchTerm)
                );
            });
            setFilteredBooks(filtered);
        };

        filterBooks();
    }, [searchTerm, books]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-xl text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">Error: {error.message}</div>;
    }

    return (
        <div className="bg-gray-900">
            <div className="bg-gray-900 container mx-auto px-6 py-10 text-white">
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
                        filteredBooks.map((book) => <BookCard key={book._id} book={book} />)
                    ) : (
                        <p className="col-span-full text-center text-gray-400">No books found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Book;
