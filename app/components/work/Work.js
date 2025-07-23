

"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectDetails from "../projectDetails/ProjectDetails";
import netflixClone from "../../../public/assets/project_thumbnails/netflix_clone.png";
import spaceMan from "../../../public/assets/project_thumbnails/space_man.png";
import toDoApp from "../../../public/assets/project_thumbnails/toDo_app.png";
import NewsHomePage from "../../../public/assets/project_thumbnails/News_Home_Page.png";
import baseApparel from "../../../public/assets/project_thumbnails/baseApparel.png";
import signUpForm from "../../../public/assets/project_thumbnails/signupform.png";
import dropdownNavigation from "../../../public/assets/project_thumbnails/dropdown_navigation.png";

const Work = () => {
  const projectData = [
    {
      title: "Netflix Clone",
      desc: "A Netflix clone built with React, CSS. It features a responsive design, dynamic content fetching, and user authentication.",
      src: netflixClone,
      url: "https://netflix-movie-site-clone.vercel.app/",
      git: "https://github.com/ashly-margaret/netflix-movie-site-clone",
      reverse: false,
    },
    {
      title: "Space Man",
      desc: "A space-themed animated experience using JavaScript and GSAP.",
      src: spaceMan,
      url: "https://space-man.vercel.app/",
      git: "https://github.com/ashly-margaret/space-man",
      reverse: true,
    },
    {
      title: "To Do App",
      desc: "A simple and clean to-do list application built with React.",
      src: toDoApp,
      url: "https://todo-app-ruddy-iota.vercel.app/",
      git: "https://github.com/ashly-margaret/Todo-App",
      reverse: false,
    },
    {
      title: "News Home",
      desc: "A responsive homepage UI concept for a news website.",
      src: NewsHomePage,
      url: "https://news-homepage-main-gamma.vercel.app/",
      git: "https://github.com/ashly-margaret/news-homepage-main",
      reverse: true,
    },
    {
      title: "Base-Apparel",
      desc: "A responsive fashion store landing page designed to capture user interest before launch. The page features a clean design, bold typography, and a funBase-Apparelctional email subscription form to keep users updated with announcements and launch deals.",
      src: baseApparel,
      url: "https://base-apparel-rho.vercel.app/",
      git: "https://github.com/ashly-margaret/Base-Apparel",
      reverse: false,
    },
    {
      title: "Sign-up-form",
      desc: "This project is a responsive sign-up interface for a developer-focused learning platform. The goal of the project is to encourage users to start a 7-day free trial by highlighting the value of learning to code by watching real developers solve problems in real-time.",
      src: signUpForm,
      url: "https://intro-component-with-sign-up-form-ten-black.vercel.app/",
      git: "https://github.com/ashly-margaret/Intro-component-with-sign-up-form",
      reverse: true,
    },
    {
      title: "Dropdown-navigation",
      desc: "This project is a modern landing page interface for a remote work productivity platform. It features a clean layout, dropdown navigation, and a responsive design tailored for desktop and mobile users.",
      src: dropdownNavigation,
      url: "https://intro-section-with-dropdown-navigation-seven.vercel.app/",
      git: "https://github.com/ashly-margaret/-Intro-section-with-dropdown-navigation",
      reverse: false,
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-4 text-white p-6"
      >
        <h3 className="colors text-4xl font-bold text-white">Recent Work</h3>
        <span>A collection of projects I've worked on.</span>
      </motion.div>

      {/* Project Cards with staggered animation */}
      <motion.div
        className="flex flex-col gap-9 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <ProjectDetails {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
