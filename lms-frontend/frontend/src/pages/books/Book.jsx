import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../../Components/CoreComponents/Bookcards/BookCard';
import Footer from '../../Components/LayoutComponents/footer/Footer';
import "./book.css"

const Book = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/getBooks");
                setBooks(response.data.books);
                setFilteredBooks(response.data.books); // Initialize filtered books with all books
            } catch (error) {
                console.error("Data Fetching Error.", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        // Filter books based on search term
        const filterBooks = () => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const filtered = books.filter((book) => {
                const titleMatch = book.bookname.toLowerCase().includes(lowerCaseSearchTerm);
                const authorMatch = book.author.toLowerCase().includes(lowerCaseSearchTerm);
                const tagMatch = book.hashtags?.toLowerCase().includes(lowerCaseSearchTerm); // Handle potential undefined hashtags

                return titleMatch || authorMatch || tagMatch;
            });
            setFilteredBooks(filtered);
        };

        filterBooks(); // Call the filter function whenever searchTerm changes
    }, [searchTerm, books]); // Add books to the dependency array

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    if (loading) {
        return <div>Loading..........</div>;
    }

    if (error) {
        return <div>Error : {error.message}</div>;
    }

    return (
            <div className='bookpgmain container'>
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar" // Add a class for styling
                    />
                <div className='bookcontainer d-flex flex-wrap gap-3 justify-content-center'>
                    {filteredBooks.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
                <br/>
                <br/>
            </div>
    );
};

export default Book;