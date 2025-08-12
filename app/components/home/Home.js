"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../button/Button";
import Image from "next/image";
import profileImage from "../../../public/assets/person_image/ashly.png";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full p-10 rounded-[10px] bg-gradient-to-r from-[#100425] via-[#851B9D] to-[#415E97] text-white overflow-hidden"
    >
      {/* Content Row: flex-col on mobile, flex-row on md+ */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section on top for mobile, left on desktop */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full md:w-[50%] h-[300px] md:h-[400px] flex justify-center items-center mb-6 md:mb-0 mt-6 md:mt-0"
        >
          <Image
            src={profileImage}
            alt="Profile Image"
            width={400}
            height={60}
            className="object-cover"
          />
        </motion.div>

        {/* Text Section below on mobile, right on desktop */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[50%] flex flex-col justify-center items-start gap-5"
        >
          <h1 className="text-4xl font-bold text-white">Hi, I’m Ashly</h1>
          <h3 className="bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent font-bold text-3xl">
            Front-End Developer.
          </h3>
          <span className="text-white text-md">
            A self-taught front-end developer with over 2 years of experience, I
            build responsive and user-friendly websites. I focus on clean
            code and efficient design, ensuring seamless interactions that align
            with both user expectations and business objectives.
          </span>
          {/* <Button value="Contact" /> */}
        </motion.div>
      </div>

      {/* Fade Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111111] pointer-events-none"
      ></motion.div>
    </motion.div>
  );
};

export default Home;
