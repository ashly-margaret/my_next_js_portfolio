"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

const ProjectDetails = ({ src, title, reverse = false, url, git, desc }) => {
  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 p-8 rounded-2xl shadow-lg bg-gradient-to-br from-[#14092B] via-[#1C0E35] to-[#2B0B3A] text-white ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="w-full md:w-[55%] flex flex-col gap-5">
        <span className="text-[#5DFFFF] tracking-wider uppercase text-sm font-medium">
          Featured Project
        </span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <div className="bg-[#210B38] p-5 rounded-xl text-sm leading-relaxed">
          <span>
            {desc ||
              "This is a project description. It can be customized to provide details about the project, its features, and technologies used."}
          </span>
        </div>

        <div className="flex items-center gap-5 text-2xl">
          <FaGithub
            className="hover:text-[#5DFFFF] cursor-pointer transition duration-300"
            onClick={() => window.open(git, "_blank")}
          />
          <SlGlobe
            className="hover:text-[#5DFFFF] cursor-pointer transition duration-300"
            onClick={() => window.open(url, "_blank")}
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[45%] flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-[#3C1C5A] bg-[#2B0B3A] p-2">
        <Image
          src={src}
          alt="Project Thumbnail"
          width={400}
          height={200}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
