"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

const ProjectDetails = ({ src, title, url, git, desc }) => {
  return (
    <div className="bg-gradient-to-br from-[#14092B] via-[#1C0E35] to-[#2B0B3A] rounded-2xl shadow-lg border border-[#2e1d44] p-5 text-white w-[390px]  h-[400px] flex flex-col justify-between">
      {/* Image */}
      <div className="w-full h-[190px] rounded-xl overflow-hidden mb-4 border border-[#3C1C5A]">
        <Image
          src={src}
          alt="Project Thumbnail"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold">{title}</h3>

        <p className="text-sm leading-relaxed text-gray-300 line-clamp-4">
          {desc ||
            "This is a project description. Customize it to explain what the project does, features, and tech used."}
        </p>

        {/* Links */}
        <div className="flex gap-4 mt-3 text-xl">
          {git && (
            <FaGithub
              className="hover:text-[#5DFFFF] cursor-pointer transition duration-300"
              onClick={() => window.open(git, "_blank")}
            />
          )}
          {url && (
            <SlGlobe
              className="hover:text-[#5DFFFF] cursor-pointer transition duration-300"
              onClick={() => window.open(url, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
