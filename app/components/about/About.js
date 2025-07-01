"use client";

import React from "react";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import Eclipse from "../eclipse/Eclipse";

const About = () => {
  return (
    <div className="pb-10">
      <div className="w-full flex justify-center items-center p-10 rounded-[10px]  p-4">
        <h3 className="colors text-4xl font-bold text-white">About</h3>
      </div>
      <span className="text-white text-md p-10 max-w-[950px] mx-auto text-justify block">
        I’m a junior front-end developer looking for a new role in an exciting
        company. I focus on writing accessible HTML, using modern CSS practices
        and writing clean JavaScript. When writing JavaScript code, I mostly use
        React, but I can adapt to whatever tools are required. I’m based in
        London, UK, but I’m happy working remotely and have experience in remote
        teams. When I’m not coding, you’ll find me outdoors. I love being out in
        nature whether that’s going for a walk, run or cycling. I’d love you to
        check out my work.
      </span>
      <div className="flex flex-wrap gap-6 text-4xl text-white justify-center items-center">
        <div className="p-3 rounded-full bg-[#251C31]">
          <FaReact className="text-[#61DBFB]" size={30} /> {/* React Blue */}
        </div>
        <div className="p-3 rounded-full bg-[#251C31]">
          <SiJavascript className="text-[#F7DF1E]" size={30} />{" "}
          {/* JS Yellow */}
        </div>
        <div className="p-3 rounded-full bg-[#251C31]">
          <SiTypescript className="text-[#3178C6]" size={30} /> {/* TS Blue */}
        </div>
        <div className="p-3 rounded-full bg-[#251C31]">
          <SiCss3 className="text-[#264de4]" size={30} />
        </div>
        <div className="p-3 rounded-full bg-[#251C31]">
          <SiTailwindcss className="text-[#38BDF8]" size={30} />
        </div>
        <div className="p-3 rounded-full bg-[#251C31]">
          <SiRedux className="text-[#764ABC]" size={30} />
        </div>
        <div className="p-3 rounded-full bg-[#251C31]">
          <SiNextdotjs className="text-black" size={30} />
        </div>
      </div>
      <Eclipse />
    </div>
  );
};

export default About;
