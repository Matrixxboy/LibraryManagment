import React from 'react';
import ("./home.css");
const Home = () => {
    return (
        <div className="Home-page text-white container">
            <div className="row">
                <div className="theHomeText d-flex col-lg-6 justify-content-center align-items-lg-center flex-column" 
                style={{height:"91.5vh"}}>
                    <h2 className="d-flex justify-content-center" style={{fontSize:"70px"}}>Utsav Book Store</h2>
                    <button className='viewbook btn btn-lg btn-primary text-white '>View Book</button>
                </div>
                <div className="d-flex col-lg-6 justify-content-center align-items-center flex-column"
                style={{height:"91.5vh"}}>
                    <img className='homeimg' src="/medias/homepage/book-svgrepo-com.svg" alt="book_image" style={{width:"500px"}}/>
                </div>
            </div>

        </div>
    )
}

export default Home