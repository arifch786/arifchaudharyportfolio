import React, { useState } from 'react';
import { TiInfinityOutline } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons
import { Link, useLocation } from 'react-router-dom'; // React Router

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu
    const location = useLocation(); // Get current path

    // Toggle theme and store in localStorage
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            return newMode;
        });
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Helper function to check if a path is active
    const isActive = (path) => location.pathname === path;

    return (
<div className="sticky backdrop-blur-md top-0 z-50 text-black dark:text-white flex items-center justify-between py-6 px-4 md:px-48 border-b border-gray-300 dark:border-gray-800">            <div className="text-center text-xl" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                <div className="bg-white rounded-sm dark:bg-gray-950 px-3 py-2 shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out transform hover:rotate-12 animate-fadeIn animate-bounceOnce">
                    <a href="/" className="text-blue-600 dark:text-blue-300 font-semibold">Arif.</a>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 text-sm font-semibold">
      <Link 
        to="/" 
        className={`${isActive('/') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={`${isActive('/about') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}
      >
        About
      </Link>
      <Link 
        to="/projects-page" 
        className={`${isActive('/projects-page') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}
      >
        Projects
      </Link>
      <Link 
        to="/blogs-page" 
        className={`${isActive('/blogs-page') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}
      >
        Blog
      </Link>
      <Link 
        to="/contactus-page" 
        className={`${isActive('/contactus-page') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}
      >
        Contact
      </Link>
    </div>

            {/* Dark Mode Toggle */}
            <div
                className="flex items-center justify-end rounded-full bg-gray-800 p-2 hover:bg-gray-700 dark:bg-gray-300 dark:hover:bg-gray-100 cursor-pointer transition-transform duration-300"
                onClick={toggleTheme}
            >
                {isDarkMode ? (
                    <TiInfinityOutline className="rotate-180 transition-transform duration-300" style={{ color: "black" }} />
                ) : (
                    <TiInfinityOutline className="transition-transform duration-300" style={{ color: "white" }} />
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
                <div
                    className="p-2 cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#2d2d2d] bg-noice py-4 px-6 shadow-md space-y-4 text-center">
                    <a href="/" className={`block ${isActive('/') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}>Home</a>
                    <a href="/about" className={`block ${isActive('/about') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}>About</a>
                    <a href="/projects-page" className={` block ${isActive('/projects-page') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}>Projects</a>
                    <a href="/blogs-page" className={`block ${isActive('/blogs-page') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}>Blog</a>
                    <a href="/contactus-page" className={`block ${isActive('/contactus-page') ? 'text-blue-600' : 'hover:text-gray-400 dark:hover:text-gray-200'}`}>Contact</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
