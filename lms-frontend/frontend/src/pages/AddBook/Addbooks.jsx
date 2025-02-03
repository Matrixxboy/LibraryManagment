import React, {useState} from 'react';
import './addbooks.css';
import axios from "axios"; // Import your CSS file

const AddBook = () => {
    const [bookData, setBookData] = useState({
        bookname: "",
        author: "",
        description: "",
        hashtags: "",
        file: null,
        price: "",
    });
    const change = (e) => {
        const {name, type, value, files} = e.target;
        setBookData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    }
    const saveNewBook = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in bookData) {
                formData.append(key, bookData[key]);
            }
            const response = await axios.post("http://localhost:5000/api/v1/add", bookData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log("Book data successfully : ", response.data);
            alert(response.data.message);
        } catch (e) {
            console.error("Error creating book", e);
            alert('Error creating book');
        }
    }
    return (
        <div className="book-form-container">
            <form className="bookform container" onSubmit={saveNewBook}>
                <h2 className="form-title text-center mb-4">Add New Book</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="bookname">Book Name</label>
                            <input name="bookname" value={bookData.bookname} type="text" className="form-control"
                                   id="bookname" placeholder="Enter book title" required
                                   onChange={change}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="authorname">Author Name</label>
                            <input name="author" value={bookData.author} type="text" className="form-control"
                                   id="authorname" placeholder="Enter author's name" required
                                   onChange={change}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="bookdesc">Book Description</label>
                    <textarea name="description" value={bookData.description} l aclassName="form-control" id="bookdesc"
                              placeholder="Enter a brief description of the book" rows="3" required
                              onChange={change}/> {/* Added rows for better textarea height */}
                </div>
                <div className="form-group">
                    <label htmlFor="booktag">Book tag</label>
                    <input name="hashtags" value={bookData.hashtags} type="text" className="form-control" id="booktag"
                           placeholder="Enter one tag for the book" required
                           onChange={change}/> {/* Added rows for better textarea height */}
                </div>
                <div className="form-group">
                    <label htmlFor="authorname">Price</label>
                    <input name="price" type="number" value={bookData.price} className="form-control" id="price"
                           placeholder="Enter book Const." required
                           onChange={change}/>
                </div>
                <div className="form-group">
                    <label htmlFor="bookimage" style={{margin: "2px 1px 2px 1px"}}>Upload Book Cover</label>
                    <br/>
                    <input name="file" type="file" value={bookData.file} className="form-control-file" id="bookimage"
                           onChange={change}/>
                </div>
                <div className="form-group form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                    <label className="form-check-label" htmlFor="gridCheck">
                        I confirm that this book information is accurate.
                    </label>
                </div>
                <button type="submit" id="addBookButton" className="btn btn-primary btn-lg btn-block submit-button">Add
                    Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;