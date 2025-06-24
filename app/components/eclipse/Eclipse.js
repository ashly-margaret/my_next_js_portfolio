"use client";

import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";

export default function Eclipse() {
  return (
    <div className="relative flex items-center justify-center min-h-[400px] bg-[#14092b] overflow-hidden">
      {/* Glow/Eclipse */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#7b2ff2] via-[#232046] to-[#f357a8] opacity-80 blur-2xl"></div>
      {/* Central Planet */}
      <div className="relative z-10 flex items-center justify-center w-48 h-48 rounded-full bg-gradient-to-br from-[#7b2ff2] to-[#f357a8] shadow-[0_0_80px_20px_rgba(123,47,242,0.5)]">
        <span className="text-7xl text-white font-bold drop-shadow-[0_0_30px_#fff]">Σ</span>
      </div>
      {/* Orbit Rings */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-700 opacity-30"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full border border-purple-700 opacity-20"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full border border-purple-700 opacity-10"></div>
      {/* Orbiting Icons */}
      {/* <FaReact className="absolute left-[10%] top-[35%] text-[#61DBFB] text-2xl" />
      <SiJavascript className="absolute left-[25%] top-[10%] text-[#F7DF1E] text-2xl" />
      <FaGithub className="absolute right-[18%] top-[20%] text-white text-2xl" />
      <FaLinkedin className="absolute right-[10%] bottom-[30%] text-[#0A66C2] text-2xl" />
      <SiNextdotjs className="absolute left-[40%] bottom-[10%] text-white text-2xl" /> */}
    </div>
  );
}