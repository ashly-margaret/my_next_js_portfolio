// "use client";

// import React from "react";
// import ProjectDetails from "../projectDetails/ProjectDetails";
// import netflixClone from "../../../public/assets/project_thumbnails/netflix_clone.png";
// import spaceMan from "../../../public/assets/project_thumbnails/space_man.png"
// import toDoApp from "../../../public/assets/project_thumbnails/toDo_app.png"
// import NewsHomePage from "../../../public/assets/project_thumbnails/News_Home_Page.png"


// const Work = () => {

// const projectData = [
//   {
//     title: "Netflix Clone",
//     desc: "A Netflix clone built with React, CSS. It features a responsive design, dynamic content fetching, and user authentication.",
//     src: netflixClone,
//     url: "https://netflix-movie-site-clone.vercel.app/",
//     git: "https://github.com/ashly-margaret/netflix-movie-site-clone",
//     reverse: false
//   },
//   {
//     title: "Space Man",
//     desc: "A space-themed animated experience using JavaScript and GSAP.",
//     src: spaceMan,
//     reverse: true
//   },
//   {
//     title: "To Do App",
//     desc: "A simple and clean to-do list application built with React.",
//     src: toDoApp
//   },
//   {
//     title: "News Home",
//     desc: "A responsive homepage UI concept for a news website.",
//     src: NewsHomePage,
//     reverse: true
//   }
// ];



//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center gap-4 text-white p-6">
//          <h3 className="colors text-4xl font-bold text-white">Recent Work</h3>
//         <span>A collection of projects I've worked on.</span>
//       </div>
//      <div className="flex flex-col gap-9 rounded-xl overflow-hidden">
//   {projectData.map((project, index) => (
//     <ProjectDetails
//       key={index}
//       {...project} // Spread props like title, desc, src, url, git, reverse
//     />
//   ))}
// </div>

//     </div>
//   );
// };

// export default Work;



"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectDetails from "../projectDetails/ProjectDetails";
import netflixClone from "../../../public/assets/project_thumbnails/netflix_clone.png";
import spaceMan from "../../../public/assets/project_thumbnails/space_man.png";
import toDoApp from "../../../public/assets/project_thumbnails/toDo_app.png";
import NewsHomePage from "../../../public/assets/project_thumbnails/News_Home_Page.png";

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
      reverse: true,
    },
    {
      title: "To Do App",
      desc: "A simple and clean to-do list application built with React.",
      src: toDoApp,
    },
    {
      title: "News Home",
      desc: "A responsive homepage UI concept for a news website.",
      src: NewsHomePage,
      reverse: true,
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
