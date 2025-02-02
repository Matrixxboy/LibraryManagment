import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/footer/Footer';
import ("./home.css");
const Home = () => {
    return (
        <div className="Home-page text-white container">
            <div className="row">
                <div className="theHomeText d-flex col-lg-6 justify-content-center align-items-lg-center flex-column" 
                style={{height:"91.5vh"}}>
                    <center>
                        <h3 className="d-flex justify-content-center" style={{fontSize:"70px"}}>Utsav Lankapati's</h3>
                        <h2 className="d-flex justify-content-center" style={{fontSize:"50px"}}>Book Store</h2>
                        <Link className='viewbookbtn my-3'to="/Book">View Book</Link>
                    </center>
                </div>
                <div className="d-flex col-lg-6 justify-content-center align-items-center flex-column"
                style={{height:"91.5vh"}}>
                    <img className='homeimg' src="/medias/homepage/book-svgrepo-com.svg" alt="book_image" style={{width:"500px"}}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home