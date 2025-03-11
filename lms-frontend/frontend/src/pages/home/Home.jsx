import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full">
                {/* Left Side Content */}
                <div className="text-center lg:text-left lg:w-1/2 space-y-6">
                    <h3 className="text-5xl lg:text-7xl font-bold text-blue-400">Utsav Lankapati's</h3>
                    <h2 className="text-4xl lg:text-6xl font-semibold">Book Store</h2>
                    <Link
                        to="/Book"
                        className="inline-block px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-lg font-medium shadow-lg"
                    >
                        View Books
                    </Link>
                </div>

                {/* Right Side Image */}
                <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
                    <img
                        src="/medias/homepage/book-svgrepo-com.svg"
                        alt="book_image"
                        className="w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
