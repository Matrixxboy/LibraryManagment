import React, { useState,useEffect} from 'react';
import axios from 'axios';
import BookCard from '../../Components/bookcards/BookCard';


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
        <div className='bookpgmain'>
            <div className='d-flex align-items-start flex-wrap gap-3 text-center'>
                {books.map((book)=>(
                    <BookCard className="row" book={book}/>
                    // <li key={book._id}>
                    //     <h2>{book.bookname}</h2>
                    //     <p>Author: {book.author}</p>
                    // </li>
                ))}
            </div>
        </div>
    );
};
Book.propTypes = {}

export default Book