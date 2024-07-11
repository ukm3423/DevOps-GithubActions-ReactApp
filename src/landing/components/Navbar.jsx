// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo2 from '../../assets/2024-04-04.jpg'; // Adjust the path as necessary

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the visibility of the dropdown menu
  };

  // Define a base style for all links
  const baseLinkStyle = "px-3 py-2 rounded-md text-sm font-medium";

  // Style modifications for hover and active states
  const hoverActiveStyle = "hover:bg-yellow-500 hover:text-white bg-yellow-500 text-white";

  // Combine base style with conditional active/hover styles for navigation links
  const navLinkStyle = ({ isActive }) =>
    `${baseLinkStyle} ${isActive ? hoverActiveStyle : 'text-gray-900 hover:bg-yellow-500 hover:text-white'}`;

  // Style for login buttons with specific background colors
  const loginButtonStyle = "hover:bg-opacity-90 text-white uppercase font-semibold py-2 px-3 rounded text-sm";

  return (
    <nav className="bg-white p-0 shadow-md border fixed top-8 w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={logo2} alt="LEARNIFY Logo" className="h-10 w-10 mr-2 rounded-full" />
              <span className="text-gray-900 font-bold text-2xl font-poppins">
                <span className='text-red-700 font-bold'>L</span>EARNIFY 
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-7 uppercase font-medium">
            <NavLink to="/" className={navLinkStyle} end>Home</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
            <NavLink to="/courses" className={navLinkStyle}>Courses</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink>
            <NavLink to="/gallery" className={navLinkStyle}>Gallery</NavLink>
            <NavLink to="/faculty" className={navLinkStyle}>Faculties</NavLink>
          </div>
          <div className="hidden md:block ml-4">
            <Link to="/login/franchise" className={`${loginButtonStyle} bg-green-500`}>Franchise Login</Link>
            <Link to="/login/student" className={`${loginButtonStyle} bg-blue-500 ml-2`}>Student Login</Link>
            <Link to="/login/admin" className={`${loginButtonStyle} bg-red-500 ml-2`}>Admin Login</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out`}>
        <ul className="mt-1 border-t  border-gray-200  ">
          <li className='border-b border-gray-200'>
            <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Home</Link>
          </li>
          <li className='border-b border-gray-200'>
            <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">About</Link>
          </li>
          <li className='border-b border-gray-200'>
            <Link to="/courses" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Courses</Link>
          </li>
          <li className='border-b border-gray-200'>
            <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Contact Us</Link>
          </li>
          <li className='border-b border-gray-200'>
            <Link to="/gallery" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Gallery</Link>
          </li>
          <li className='border-b border-gray-200'>
            <Link to="/faculty" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Faculties</Link>
          </li>
          <li className='border-b border-gray-100'>
            <Link to="/login/franchise" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Franchise Login
            </Link>
          </li>
          <li className='border-b '>
            <Link to="/login/student" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Student Login</Link>
          </li>
          <li className='border-b pb-2'>
            <Link to="/login/admin" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-yellow-500">Admin Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
