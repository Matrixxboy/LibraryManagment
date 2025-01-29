import React from 'react';
import './addbooks.css'; // Import your CSS file

const addBook = () => {
    return (
        <div className="book-form-container"> {/* Outer container for styling */}
            <form className="bookform container">
                <h2 className="form-title text-center mb-4">Add New Book</h2> {/* Form title */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="bookname">Book Name</label>
                            <input type="text" className="form-control" id="bookname" placeholder="Enter book title" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="authorname">Author Name</label>
                            <input type="text" className="form-control" id="authorname" placeholder="Enter author's name" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="bookdesc">Book Description</label>
                    <textarea className="form-control" id="bookdesc" placeholder="Enter a brief description of the book" rows="3" required /> {/* Added rows for better textarea height */}
                </div>
                <div className="form-group">
                    <label htmlFor="booktag">Book tag</label>
                    <input type="text" className="form-control" id="booktag" placeholder="Enter one tag for the book" rows="3" required /> {/* Added rows for better textarea height */}
                </div>
                <div className="form-group">
                    <label htmlFor="bookimage" style={{margin:"2px 1px 2px 1px"}}>Upload Book Cover</label>
                    <br />
                    <input type="file" className="form-control-file" id="bookimage" required />
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