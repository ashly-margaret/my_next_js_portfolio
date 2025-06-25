"use client"; // if using app directory



import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = ({ src,title, reverse = false }) => {
  return (
    // <div
    //   className={` flex items-center justify-center gap-10 p-6 bg-[#14092B] text-white rounded-lg  ${
    //     reverse ? "flex-row-reverse" : "flex-row"
    //   }`}
    // >
    //   {/* Text Section */}
    //   <div className="flex flex-col items-start gap-4 ">
    //     <span className="text-[#5DFFFF]">Featured Project</span>
    //     <h3 className="text-xl font-semibold">{title}</h3>
    //     <div className="bg-[#210B38] text-white p-4 rounded-lg w-[400px] ">
    //       <span>
    //         A brief description of the project goes here. It can include the
    //         technologies used, the purpose of the project, and any other
    //         relevant details.
    //       </span>
    //     </div>
    //     <div className="flex gap-4 text-xl text-white">
    //       <FaGithub className="hover:text-[#38BDF8] cursor-pointer" />
    //     </div>
    //   </div>

    //   {/* Image Section */}
    //   <div className="bg-[#2B0B3A] p-2 rounded-lg">
    //     <Image src={src} alt="Project Thumbnail" width={400} height={150} />
    //   </div>
    // </div>
    <div
  className={`w-[45%] mx-auto flex items-center justify-center gap-10 p-8 rounded-2xl shadow-lg bg-gradient-to-br from-[#14092B] via-[#1C0E35] to-[#2B0B3A] text-white ${
    reverse ? "flex-row-reverse" : "flex-row"
  }`}
>
  {/* Text Section */}
  <div className="flex flex-col gap-5 max-w-md">
    <span className="text-[#5DFFFF] tracking-wider uppercase text-sm font-medium">
      Featured Project
    </span>
    <h3 className="text-2xl font-bold text-white">{title}</h3>

    <div className="bg-[#210B38] p-5 rounded-xl text-sm leading-relaxed">
      <span>
        A brief description of the project goes here. It can include the
        technologies used, the purpose of the project, and any other relevant
        details.
      </span>
    </div>

    <div className="flex items-center gap-5 text-2xl">
      <FaGithub className="hover:text-[#5DFFFF] cursor-pointer transition duration-300" />
    </div>
  </div>

  {/* Image Section */}
  <div className="rounded-xl overflow-hidden shadow-md border border-[#3C1C5A] bg-[#2B0B3A] p-2">
    <Image
      src={src}
      alt="Project Thumbnail"
      width={400}
      height={200}
      className="rounded-lg object-cover"
    />
  </div>
</div>

  );
};

export default ProjectDetails;
