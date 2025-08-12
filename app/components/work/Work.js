

"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "../projectDetails/ProjectDetails";
import netflixClone from "../../../public/assets/project_thumbnails/netflix_clone.png";
import spaceMan from "../../../public/assets/project_thumbnails/space_man.png";
import toDoApp from "../../../public/assets/project_thumbnails/toDo_app.png";
import NewsHomePage from "../../../public/assets/project_thumbnails/News_Home_Page.png";
import baseApparel from "../../../public/assets/project_thumbnails/baseApparel.png";
import signUpForm from "../../../public/assets/project_thumbnails/signupform.png";
import dropdownNavigation from "../../../public/assets/project_thumbnails/dropdown_navigation.png";
import CompanyProjectDetails from "../companyProjectDetails/CompanyProjectDetails";

const Work = () => {
  const AUTO_SLIDE_INTERVAL = 3000;
  const containerRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const interval = setInterval(() => {
      if (!container) return;
      const cards = container.querySelectorAll(".carousel-card");
      if (!cards.length) return;

      indexRef.current = (indexRef.current + 1) % cards.length;
      const nextCard = cards[indexRef.current];

      container.scrollTo({
        left: nextCard.offsetLeft,
        behavior: "smooth",
      });
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const projectData = [
    {
      title: "Netflix Clone",
      desc: "A Netflix clone built with React, CSS. It features a responsive design, dynamic content fetching, and user authentication.",
      src: netflixClone,
      url: "https://netflix-movie-site-clone.vercel.app/",
      git: "https://github.com/ashly-margaret/netflix-movie-site-clone",
    },
    {
      title: "Space Man",
      desc: "A space-themed animated experience using JavaScript and GSAP.",
      src: spaceMan,
      url: "https://space-man.vercel.app/",
      git: "https://github.com/ashly-margaret/space-man",
    },
    {
      title: "To Do App",
      desc: "A simple and clean to-do list application built with React.",
      src: toDoApp,
      url: "https://todo-app-ruddy-iota.vercel.app/",
      git: "https://github.com/ashly-margaret/Todo-App",
    },
    {
      title: "News Home",
      desc: "A responsive homepage UI concept for a news website.",
      src: NewsHomePage,
      url: "https://news-homepage-main-gamma.vercel.app/",
      git: "https://github.com/ashly-margaret/news-homepage-main",
    },
    {
      title: "Base-Apparel",
      desc: "A responsive fashion store landing page with a clean design and functional email subscription form.",
      src: baseApparel,
      url: "https://base-apparel-rho.vercel.app/",
      git: "https://github.com/ashly-margaret/Base-Apparel",
    },
    {
      title: "Sign-up-form",
      desc: "Responsive sign-up form promoting a 7-day trial for a developer learning platform.",
      src: signUpForm,
      url: "https://intro-component-with-sign-up-form-ten-black.vercel.app/",
      git: "https://github.com/ashly-margaret/Intro-component-with-sign-up-form",
    },
    {
      title: "Dropdown-navigation",
      desc: "Modern landing page for a remote work platform with responsive dropdown navigation.",
      src: dropdownNavigation,
      url: "https://intro-section-with-dropdown-navigation-seven.vercel.app/",
      git: "https://github.com/ashly-margaret/-Intro-section-with-dropdown-navigation",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 text-white p-6">
        <h3 className="colors text-4xl font-bold text-white">
          Company Projects
        </h3>
        <span>
          Projects I’ve contributed to professionally during my work experience.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-6">
          <CompanyProjectDetails
            title="Face Match Advanced Web (Admin Dashboard)"
            description="Advanced facial recognition dashboard for government datasets, supporting searches and reverse lookups with full identity data."
            features={[
              "Image comparison",
              "Search history",
              "User management",
              "Company identity display",
            ]}
            technologies={[
              "React.ts",
              "Redux Toolkit",
              "Redux Saga",
              "Material UI",
            ]}
          />
          <CompanyProjectDetails
            title="Master Data Fetch (Portrait Dashboard)"
            description="Responsive dashboard for retrieving personal information using EID or Passport."
            technologies={["React.js", "sass", "Redux Toolkit", "Antdesign"]}
             features={[
              "Showcasing personal information using EID or Passport",
              "Showcasing person image using EID or Passport",
              "Responsive design",
            ]}
          />
          <CompanyProjectDetails
            title="Purelive Dashboard"
            description="Secure dashboard to manage clients using Liveness and OCR APIs, with license alerts, performance monitoring, and PKI."
  technologies={["Next.js", "Tailwind CSS", "Next.js Server-Client App"
    
  ]}
               features={[
              "Client Management",
              "Licence Expiry Alerts",
              "Licence Updates",
              "Conversion Tool(Image to Base64, Base64 to Image,Text to Base64, Base64 to Text)",
            ]}
          />
          <CompanyProjectDetails
            title="RHSERV Service Status Dashboard"
            description="Real-time service monitoring dashboard showing ICA transaction reports and match metrics."
            technologies={["React.js", "Antdesign", "sass"]}
             features={[
              "Real-time service monitoring",
              "ICA transaction reports",
              "Match metrics",
              "User-friendly interface",
            ]}
          />
           <CompanyProjectDetails
  title="DMCC Dashboard"
  description="A real-time liveness verification portal that displays both liveness images and document images for identity checks. The dashboard supports reviewing results, approving or rejecting matches, handling retries, and managing unmatched cases, all with an intuitive interface."
  technologies={["Next.js", "Tailwind CSS", "Sass"]}
  features={[
    "Real-time service monitoring",
    "Match metrics",
    "Liveness image and document image display",
    "Approve / Reject options",
    "Retry handling",
    "No-match and match actions",
    "User-friendly, responsive interface",
  ]}
/>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-4 text-white p-6"
      >
        <h3 className="colors text-4xl font-bold text-white">
          Hands-on Practice Projects
        </h3>
        <span>
          A collection of hands-on projects I'm building to sharpen my skills.
        </span>
      </motion.div>

      <div className="w-full px-4">
        <div
          ref={containerRef}
          className="w-full max-w-6xl mx-auto overflow-hidden relative"
        >
          <motion.div
            className="flex gap-20"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {projectData.map((project) => (
              <motion.div
                key={project.title}
                className="carousel-card w-[320px] h-[400px] flex-shrink-0"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ProjectDetails {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
