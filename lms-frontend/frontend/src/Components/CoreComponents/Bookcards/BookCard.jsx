import React, { useState } from 'react';
import { Link } from "react-router-dom";

const BookCard = ({ book, onOpenPopup }) => {
    return (
        <div
            className="relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-800 cursor-pointer"
            onClick={() => onOpenPopup(book)}
        >
            <img
                src={book.image}
                alt={book.bookname}
                className="w-full h-64 object-cover rounded-t-2xl transition-all duration-500 hover:opacity-90"
            />
            <div className="p-5 text-white">
                <h5 className="text-xl font-bold">{book.bookname}</h5>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">{book.description}</p>
                <ul className="mt-3 text-gray-300 text-sm space-y-1">
                    <li><strong>Author:</strong> {book.author}</li>
                    <li><strong>Price:</strong> {book.price} /-</li>
                    <li><strong>Tags:</strong> {book.hashtags}</li>
                </ul>
            </div>
        </div>
    );
};

export default BookCard;
