"use client";

import React, { useState, useEffect, useRef } from "react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md  md:max-w-lg mx-auto px-4">
      <div className="bg-[#1f1f1f57] backdrop-blur-sm border border-[#333] rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
            </div>
            <span className="font-semibold text-gray-200">GlowSketch</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="px-3 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              href="/how-it-works"
              className="px-3 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              About Us
            </a>
            <a
              href="/features"
              className="px-3 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Features
            </a>
            
            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center px-3 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                More
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1f1f1f] rounded-lg shadow-lg border border-[#333] py-1">
                  <a
                    href="/pricing"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                    onClick={handleLinkClick}
                  >
                    Pricing
                  </a>
               
                  <a
                    href="/artworks"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                    onClick={handleLinkClick}
                  >
                    Artworks
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button - REMOVED */}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-8 h-8 text-gray-300 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 px-6 py-4 space-y-2">
            <a
              href="/"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              href="/how-it-works"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              About Us
            </a>
            <a
              href="/features"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Features
            </a>
            <a
              href="/pricing"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Pricing
            </a>
        
            <a
              href="/artworks"
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Artworks
            </a>
            {/* Join button removed */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;