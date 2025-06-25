'use client'

import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import profileImage from "../../../public/assets/person_image/ashly.png"; // Adjust the path as necessary

const Home = () => {
  return (
  <div className="w-full flex  items-center p-10 rounded-[10px] bg-gradient-to-r from-[#100425] via-[#851B9D] to-[#415E97] text-white p-4 ">
    <div className="w-[50%] flex flex-col justify-center items-start gap-5">
      <h1 className="text-4xl font-bold text-white">Hi, I’m Ashly</h1>
      <h3 className="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent font-bold text-3xl">
        Front-End Developer.
      </h3>
      <span className="text-white text-md">
        A self-taught front-end developer with over 2 months of experience, I
        build responsive and user-friendly websites & app. I focus on clean code
        and efficient design, ensuring seamless interactions that align with
        both user expectations and business objectives.
      </span>
      <Button value="Contact" />
    </div>
    <div>
      <Image
        src={profileImage}
        alt="Profile Image"   
        width={400}
        height={60}
        className=""
      />
    </div>
    </div>
  );
};

export default Home;
