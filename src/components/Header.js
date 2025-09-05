import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ modalActive }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#652f8e] shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">

        {/* Desktop Logo + Search */}
        <div className="hidden md:flex items-center flex-1 gap-6">
          <Link to="/">
            <img
              alt="logo"
              loading="lazy"
              className="w-48 md:w-44 object-contain"
              src="/logo.png"
            />
          </Link>

          {/* Search Bar */}
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-3 top-3 text-gray-400 w-4 h-4"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-white hover:text-gray-50" to="/about">About</Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-white hover:text-gray-50 flex justify-between items-center gap-2">
              <span>Courses</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-md mt-2 w-48 z-50">
                <Link to="/graphic-designing" className="block px-4 py-2 hover:bg-purple-100">Graphic Designing</Link>
                <Link to="/video-editing" className="block px-4 py-2 hover:bg-purple-100">Video Editing</Link>
                <Link to="/digital-marketing" className="block px-4 py-2 hover:bg-purple-100">Digital Marketing</Link>
              </div>
            )}
          </div>

          <Link className="text-white hover:text-gray-50" to="/contact">Contact</Link>
          <button className="bg-white text-[#652f8e] px-5 py-3 rounded-full shadow-md hover:bg-gray-50 transition">Sign In</button>
        </div>

        {/* Mobile Hamburger + Logo + Call */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                  <path d="M4 6h16" />
                </>
              )}
            </svg>
          </button>

          {/* Logo Centered */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img
              alt="logo"
              loading="lazy"
              className="w-48 object-contain"
              src="/logo.png"
            />
          </Link>

          {/* Call Button */}
          <a
            href="tel:9958890093"
            className="h-12 px-3 bg-white text-[#652f8e] rounded-full shadow flex items-center justify-center"
          >
            <span className="font-bold">Call</span>
          </a>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#652f8e] px-4 py-6 space-y-3">
          <Link className="block py-2 text-white hover:text-gray-50" to="/about">About</Link>
          <details className="group">
            <summary className="py-2 text-white cursor-pointer list-none">Courses ▾</summary>
            <div className="pl-4">
              <Link className="block py-2 text-white hover:text-gray-200" to="/graphic-designing">Graphic Designing</Link>
              <Link className="block py-2 text-white hover:text-gray-200" to="/video-editing">Video Editing</Link>
              <Link className="block py-2 text-white hover:text-gray-200" to="/digital-marketing">Digital Marketing</Link>
            </div>
          </details>
          <Link className="block py-2 text-white hover:text-gray-50" to="/contact">Contact</Link>
          <button className="w-full bg-white text-[#652f8e] py-3 rounded-full shadow hover:bg-gray-50 transition">Sign In</button>
        </div>
      )}
    </header>
  );
};

export default Header;
