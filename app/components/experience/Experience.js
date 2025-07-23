"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

// 🔹 Separated arrays
const education = [
  {
    icon: <FaGraduationCap className="text-[#C084FC]" size={20} />,
    title: "Master of Computer Application (MCA)",
    company: "Mahatma Gandhi University, Kerala, India",
    time: "2014 – 2017",
    description:
      "Completed a master's degree focused on advanced computing, software engineering, and application development using modern technologies.",
  },
];

const work = [
  {
    icon: <FaBriefcase className="text-[#5DFFFF]" size={20} />,
    title: "Front-End Developer",
    company: "Face Recognition LLC",
    time: "2024 – Present",
    description:
      "Developing user-friendly and responsive web applications focused on facial recognition technology. Utilizing React, Next.js, and Tailwind CSS to deliver seamless UX.",
    link: "https://facerecognition.ae/",
  },
  {
    icon: <FaBriefcase className="text-[#5DFFFF]" size={20} />,
    title: "SEO Specialist",
    company: "YSEO",
    time: "2022 – 2024",
    description:
      "Worked on search engine optimization strategies to increase organic traffic and improve website ranking for multiple clients.",
    link: "https://yseo.in/",
  },
];




const Section = ({ title, data ,work}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent mb-6 text-center">
      {title}
    </h3>

    <div className="space-y-6 max-w-4xl mx-auto">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-start gap-4 p-4 rounded-lg bg-[#1d1233] border border-[#ffffff0d] hover:border-[#5DFFFF] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a1d47]">
            {item.icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold">{item.title}</h4>
            {item.company && <p className="text-sm text-gray-300">{item.company}</p>}
            <p className="text-xs text-purple-300 mb-1">{item.time}</p>
            <p className="text-sm text-white">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#5DFFFF] hover:underline"
              >
                Go to Website ↗
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0118] via-[#14092B] to-[#1a0b2e] px-6 py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent mb-2">
          My Journey
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] mx-auto rounded-full"></div>
      </motion.div>

      {/* Sections */}
      <Section title="🎓 Education" data={education} />
      <Section title="💼 Work Experience" data={work}  />
    </div>
  );
};

export default Experience;
