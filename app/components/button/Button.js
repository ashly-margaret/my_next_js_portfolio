'use client'

import React from "react";

const Button = (props) => {
  return (
    <button className="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] text-white py-2 px-4 rounded-[40px] shadow-md hover:opacity-90 transition">
      {props.value}
    </button>
  );
};

export default Button;
