import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative group transition-all">
            <div
                className={`relative bg-white/10 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 ${
                    isExpanded ? "scale-105" : "scale-100"
                }`}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <img
                    src={book.image}
                    alt={book.bookname}
                    className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-4">
                    <h5 className="text-lg font-semibold text-white">{book.bookname}</h5>
                    <p className="text-sm text-gray-300">{book.description}</p>
                </div>
                <ul className="p-4 text-gray-400 text-sm">
                    <li><strong>Author:</strong> {book.author}</li>
                    <li><strong>Price:</strong> {book.price}/-</li>
                    <li><strong>Tags:</strong> {book.hashtags}</li>
                </ul>
                <div className="p-4">
                    <Link
                        to="#"
                        className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                    >
                        Add to Cart
                    </Link>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-gray-200 text-sm transition-opacity duration-300">
                        <p>{book.fullDescription || book.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookCard;
