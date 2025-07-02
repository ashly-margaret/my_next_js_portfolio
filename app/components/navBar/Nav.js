"use client";

import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex justify-center items-center gap-[60px] pt-6 px-10 text-white bg-[#14092B] sticky top-0 z-50">
      <span>
        <a
          href="#home"
          className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
        >
          HOME
        </a>
      </span>
      <span>
        <a
          href="#about"
          className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
        >
          ABOUT
        </a>
      </span>
      <div
        className="w-25 h-6 bg-[#1a1026]"
        style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
      ></div>
      <span>
        <a
          href="#work"
          className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
        >
          WORK
        </a>
      </span>
      <span>
        <a
          href="#contact"
          className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
        >
          CONTACT
        </a>
      </span>
    </nav>
  );
};

export default Nav;
