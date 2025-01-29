import React from 'react'
import './bookcard.css'
import { Link } from "react-router-dom";
const BookCard = ({book}) => {
    return (
        <div className="bookcardcomp">
            <div className="card" style={{width: "18rem"}}>
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title bookcard">{book.bookname}</h5>
                    <p className="card-text bookcard">{book.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{book.author}</li>
                    <li className="list-group-item">{book.price}/-</li>
                    <li className="list-group-item">{book.hashtags}</li>
                </ul>
                <div className="card-body">
                    <Link className="card-link">Card link</Link>
                    <Link className="card-link">Another link</Link>
                </div>
            </div>
        </div>
    )
}

export default BookCard