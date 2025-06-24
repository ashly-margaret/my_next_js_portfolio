"use client"; // if using app directory



import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = ({ src,title, reverse = false }) => {
  return (
    <div
      className={`flex items-center justify-center gap-10 p-6 bg-[#14092B] text-white rounded-lg  ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col items-start gap-4">
        <span className="text-[#5DFFFF]">Featured Project</span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="bg-[#210B38] text-white p-4 rounded-lg w-[400px]">
          <span>
            A brief description of the project goes here. It can include the
            technologies used, the purpose of the project, and any other
            relevant details.
          </span>
        </div>
        <div className="flex gap-4 text-xl text-white">
          <FaGithub className="hover:text-[#38BDF8] cursor-pointer" />
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-[#2B0B3A] p-2 rounded-lg">
        <Image src={src} alt="Project Thumbnail" width={400} height={150} />
      </div>
    </div>
  );
};

export default ProjectDetails;
