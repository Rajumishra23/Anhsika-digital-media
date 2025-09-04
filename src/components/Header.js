import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#652f8e] shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
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
        </div>

        {/* Logo */}
        <Link to="/">
          <img
            alt="logo"
            loading="lazy"
            width="200"
            height="80"
            className="w-42 md:w-30 md:ms-5 object-contain"
            src="/logo.png"
          />
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:block relative w-full max-w-sm mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="absolute right-3 top-2.5 text-gray-400 w-4 h-4"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 relative">
          <a className="text-white hover:text-gray-50" href="#about">About</a>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-white hover:text-gray-50 flex justify-between items-center gap-2">
              <span>Courses</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-md mt-2 w-48 z-50">
                <Link to="/graphic-design-course" className="block px-4 py-2 hover:bg-purple-100">
                  Graphic Designing
                </Link>
                <Link to="/video-editing-course" className="block px-4 py-2 hover:bg-purple-100">
                  Video Editing
                </Link>
                <Link to="/digital-marketing-course" className="block px-4 py-2 hover:bg-purple-100">
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>

          <a className="text-white hover:text-gray-50" href="#contact">Contact</a>
          <button className="bg-white text-[#652f8e] px-5 py-2 rounded-full shadow-md hover:bg-gray-50 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Call Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="tel:9958890093"
            className="h-10 gap-2 px-3 bg-white text-[#652f8e] rounded-full shadow hover:bg-gray-50 flex items-center justify-center"
          >
            <span className="font-bold">Call</span>
          </a>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#652f8e] px-4 py-4 space-y-2">
          <a className="block py-2 text-white hover:text-gray-50" href="#about">About</a>
          <details className="group">
            <summary className="py-2 text-white cursor-pointer list-none">Courses ▾</summary>
            <div className="pl-4">
              <a className="block py-1 text-white hover:text-gray-200" href="graphic-design-course.html">Graphic Designing</a>
              <a className="block py-1 text-white hover:text-gray-200" href="#video-editing">Video Editing</a>
              <a className="block py-1 text-white hover:text-gray-200" href="digital-marketing-course.html">Digital Marketing</a>
            </div>
          </details>
          <a className="block py-2 text-white hover:text-gray-50" href="#contact">Contact</a>
          <button className="w-full bg-white text-[#652f8e] py-2 rounded-full shadow hover:bg-gray-50 transition">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
