import React, { useState } from 'react';
import './addbooks.css'; // Import your CSS file

const addBook = () => {
    const [Data, setData] = useState([
        bookname:"",
        author:"",
        description:"",
        hashtags:"",
        image=""
    ]);
    const change = (e) => {
        const [name,value] = e.target;
    }
    return (
        <div className="book-form-container"> {/* Outer container for styling */}
            <form className="bookform container">
                <h2 className="form-title text-center mb-4">Add New Book</h2> {/* Form title */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="bookname">Book Name</label>
                            <input name="bookname" type="text" className="form-control" id="bookname" placeholder="Enter book title" required 
                            onChange={change}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="authorname">Author Name</label>
                            <input name="author" type="text" className="form-control" id="authorname" placeholder="Enter author's name" required 
                            onChange={change}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="bookdesc">Book Description</label>
                    <textarea name="description" className="form-control" id="bookdesc" placeholder="Enter a brief description of the book" rows="3" required 
                    onChange={change}/> {/* Added rows for better textarea height */}
                </div>
                <div className="form-group">
                    <label htmlFor="booktag">Book tag</label>
                    <input name="hashtags" type="text" className="form-control" id="booktag" placeholder="Enter one tag for the book" rows="3" required 
                    onChange={change}/> {/* Added rows for better textarea height */}
                </div>
                <div className="form-group">
                            <label htmlFor="authorname">Price</label>
                            <input name="price" type="number" className="form-control" id="price" placeholder="Enter book Const." required 
                            onChange={change}/>
                        </div>
                <div className="form-group">
                    <label htmlFor="bookimage" style={{margin:"2px 1px 2px 1px"}}>Upload Book Cover</label>
                    <br />
                    <input name="image" type="file" className="form-control-file" id="bookimage" required
                    onChange={change}/>
                </div>
                <div className="form-group form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" required />
                    <label className="form-check-label" htmlFor="gridCheck">
                        I confirm that this book information is accurate.
                    </label>
                </div>
                <button type="submit" id="addBookButton" className="btn btn-primary btn-lg btn-block submit-button">Add Book</button> {/* Changed button text */}
            </form>
        </div>
    );
};

export default addBook;