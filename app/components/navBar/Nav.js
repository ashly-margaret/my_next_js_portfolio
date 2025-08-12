"use client";

import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#14092B] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Hamburger button - shown on small screens */}
        <button
          className="sm:hidden focus:outline-none z-60"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Close icon (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon (3 lines)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex sm:items-center sm:gap-[60px]">
          {["HOME", "ABOUT", "WORK", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-8 text-2xl z-50 sm:hidden"
            onClick={() => setIsOpen(false)} // close menu if background clicked
          >
            {["HOME", "ABOUT", "WORK", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)} // close menu on link click
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
