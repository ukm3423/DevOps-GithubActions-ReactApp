// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const nav = useNavigate();
    
    function handleSubmit() {
        nav("/");
    }

    return (
        <div className="flex items-center justify-center w-full h-screen"
             style={{
                 backgroundImage: "url('https://www.rollingstone.com/wp-content/uploads/2022/06/best-4k-laptops.jpg')", // Example background image
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Black overlay with 60% opacity */}
            <div className="text-center p-4 bg-white shadow-xl rounded-lg relative z-10">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Work in Progress</h1>
                <p className="text-gray-600 mb-4">This page is currently under construction. Please check back soon!</p>
                <img src="https://cdn-icons-png.flaticon.com/512/5038/5038308.png" alt="Work in Progress" className="mx-auto mb-4 w-32 h-32 object-cover rounded-full bg-gray-200"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onClick={handleSubmit}>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;
