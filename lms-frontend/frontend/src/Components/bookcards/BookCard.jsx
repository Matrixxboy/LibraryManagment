import React, { useState } from 'react';
import './bookcard.css';
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State for expansion

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bookcardcomp">
            <div
                className={`card glass-effect ${isExpanded ? 'expanded' : ''}`} // Conditional class
                style={{ width: "20rem" }}
                onMouseEnter={toggleExpand} // Expand on hover
                onMouseLeave={toggleExpand}  // Contract on mouse out
            >
                <img src={book.image} rel='preload' className="card-img-top" alt={book.bookname} />
                <div className="card-body">
                    <h5 className="card-title bookcard">{book.bookname}</h5>
                    <p className="card-text bookcard">{book.description}</p>
                </div>
                <ul className="list-group ">
                    <li className="bookdetails list-group-item">Author : {book.author}</li>
                    <li className="bookdetails list-group-item">Book Price : {book.price}/-</li>
                    <li className="bookdetails list-group-item">Tags : {book.hashtags}</li>
                    {/* <li className="list-group-item">{book.hashtags}</li> */}
                </ul>
                <div className="card-body">
                    <Link to="#" className="glass-button card-link">Add to Cart</Link>
                </div>
                 {/* Conditionally render the full description */}
                {isExpanded && (
                    <div className="expanded-content">
                        <p>{book.fullDescription || book.description} </p> {/* Use fullDescription if available */}
                        {/* Add other expanded content here */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookCard;