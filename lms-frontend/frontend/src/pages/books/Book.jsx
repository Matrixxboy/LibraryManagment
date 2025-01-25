import React, { useState,useEffect} from 'react';
import axios from 'axios';


const Book = () => {
    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async (req,res) => {
            try {
                const response = await axios.get("http://localhost:1000/api/v1/getBooks");
                setBooks(response.data.books);
            } catch (error) {
                console.error("Data Fataching Error.",error);
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchBooks();
    },[]);
    if(loading){
        return <div>Loading..........</div>
    }
    if(error){
        return <div>Error : {error.message}</div>
    }
    return (
        <div className="text-white">
            <h3>Books</h3>
            <ul>
                {books.map((book)=>(
                    <li key={book._id}>
                        <h2>{book.bookname}</h2>
                        <p>Author: {book.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
Book.propTypes = {}

export default Book