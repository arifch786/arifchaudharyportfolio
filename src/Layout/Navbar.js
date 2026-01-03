import React, { useState, useEffect } from 'react';
import { TiInfinityOutline } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Apply theme on mount and when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects-page' },
    { name: 'Blog', path: '/blogs-page' },
    { name: 'Contact', path: '/contactus-page' },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full glass transition-colors duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">

        {/* Logo */}
        <Link to="/" className="group relative flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#27b173] to-[#1a663f] p-[1px] transition-transform duration-300 group-hover:rotate-12">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white dark:bg-gray-950">
              <span className="text-xl font-bold bg-gradient-to-tr from-[#27b173] to-[#1a663f] bg-clip-text text-transparent" style={{ fontFamily: "'Outfit', sans-serif" }}>
                A.
              </span>
            </div>
          </div>
          <span className="hidden text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:block">
            Arif<span className="text-[#27b173]">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50/50 p-1 dark:border-white/10 dark:bg-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive(link.path)
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#27b173] to-[#1a663f] shadow-lg shadow-[#27b173]/30"
                    transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-gray-200 dark:bg-white/10" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#27b173] hover:shadow-md dark:border-white/10 dark:bg-gray-900 dark:hover:border-[#27b173]/50"
            aria-label="Toggle theme"
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 180 : 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <TiInfinityOutline
                className={`text-2xl transition-colors duration-300 ${isDarkMode ? 'text-[#27b173]' : 'text-[#1a663f]'
                  }`}
              />
            </motion.div>
            <div className="absolute -inset-1 rounded-full bg-[#27b173]/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10"
          >
            <TiInfinityOutline className={`text-xl ${isDarkMode ? 'text-[#27b173]' : 'text-[#1a663f]'}`} />
          </button>
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-white/10 dark:bg-gray-900 dark:text-white"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl dark:border-white/5 dark:bg-black/95 lg:hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${isActive(link.path)
                    ? 'bg-[#27b173] text-white'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="active-dot"
                      className="h-1.5 w-1.5 rounded-full bg-white"
                    />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

