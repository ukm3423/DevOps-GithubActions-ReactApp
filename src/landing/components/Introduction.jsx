// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <div className="relative mb-6 bg-white py-7" >
            <div className="container mx-auto px-4">
                {/* <h2 className='text-center md:text-2xl text-lg font-semibold text-red-500'>Introduction</h2> */}
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl md:text-5xl text-gray-800 font-bold mb-3">
                        Welcome to
                        <span className="relative inline-block">
                            <span className="bg-yellow-200 md:text-5xl text-red-500 px-2 ml-2 md:py-3 rounded transform -rotate-3 inline-block">
                                <i className="italic">LEARNIFY </i>
                            </span>
                        </span>
                    </h1>
                    <p className="text-1lg md:text-lg text-gray-600 mb-4">LEARNIFY Institute stands as a beacon of innovation in the
                        realm of technology education. Founded in 2024 with the vision of transforming the  landscape through education,
                        our institute has grown to become a key educational pillar in the community.

                    </p>
                    <p className="text-1lg md:text-lg text-gray-600 mb-6">
                        LEARNIFY Institute was established by a group of pioneering software engineers and educators who recognized
                        the increasing importance of information technology in the global economy. They envisioned an institution that would
                        serve as a fostering skills that align with industry.
                    </p>
                    <Link to="/about" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
