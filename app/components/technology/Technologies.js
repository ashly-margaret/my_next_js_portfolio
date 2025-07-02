"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiRedux,
} from "react-icons/si";

const techList = [
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
];

const Technologies = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0118] via-[#14092B] to-[#1a0b2e] py-12 px-6 text-white max-w-4xl mx-auto rounded-lg">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent text-center mb-8"
      >
        Technologies I Know
      </motion.h3>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
          hidden: {},
        }}
      >
        {techList.map(({ name, icon }, index) => (
       <motion.li
  key={index}
  className="flex flex-col items-center justify-center gap-2 bg-[#251C31] rounded-lg py-4 cursor-default select-none shadow-md"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{
    scale: 1.1,
    color: "#5DFFFF",
    boxShadow: "0 0 10px #5DFFFF",
  }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <div className="text-4xl">{icon}</div>
  <span className="font-semibold text-sm">{name}</span>
</motion.li>



        ))}
      </motion.ul>

      {/* Resume Download Button */}
      <div className="mt-10 text-center">
        <motion.a
          href="/assets/resume.pdf" // Put your actual resume file path here
          download="Ashly_Margaret_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #AE0CA7" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] rounded-full font-semibold text-black cursor-pointer select-none shadow-lg transition-shadow duration-300"
        >
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Technologies;
