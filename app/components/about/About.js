// "use client";

// import React from "react";
// import { FaReact, FaSass } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiCss3,
//   SiTailwindcss,
//   SiRedux,
//   SiNextdotjs,
// } from "react-icons/si";
// import Eclipse from "../eclipse/Eclipse";

// const About = () => {
//   return (
//     <div className="pb-10">
//       <div className="w-full flex justify-center items-center p-10 rounded-[10px]  p-4">
//         <h3 className="colors text-4xl font-bold text-white">About</h3>
//       </div>
//       <span className="text-white text-md p-10 max-w-[950px] mx-auto text-justify block">
//         I’m a front-end developer based in the UAE, with a passion for
//         creating beautiful and functional web applications. I have a strong
//         foundation in HTML, CSS, and JavaScript, and I’m always eager to learn
//         new technologies and improve my skills. I enjoy working on projects that  
//         challenge me and allow me to express my creativity. I’m
//         passionate about writing clean, maintainable code and following best
//         practices in web development. I’m also committed to continuous learning
//         and staying up-to-date with the latest trends and technologies in the
//         industry. I’m currently looking for new opportunities to grow as a
//         front-end developer and contribute to exciting projects. If you’re
//         looking for a dedicated and enthusiastic developer to join your team,
//         feel free to reach out. I’d love to hear from you and discuss how I can
//         contribute to your projects. Let’s connect and create something amazing
//         together!
       
//       </span>
//       <div className="flex flex-wrap gap-6 text-4xl text-white justify-center items-center">
//         <div className="p-3 rounded-full bg-[#251C31]">
//           <FaReact className="text-[#61DBFB]" size={30} /> {/* React Blue */}
//         </div>
//         <div className="p-3 rounded-full bg-[#251C31]">
//           <SiJavascript className="text-[#F7DF1E]" size={30} />{" "}
//           {/* JS Yellow */}
//         </div>
//         <div className="p-3 rounded-full bg-[#251C31]">
//           <SiTypescript className="text-[#3178C6]" size={30} /> {/* TS Blue */}
//         </div>
//         <div className="p-3 rounded-full bg-[#251C31]">
//           <SiCss3 className="text-[#264de4]" size={30} />
//         </div>
//         <div className="p-3 rounded-full bg-[#251C31]">
//           <SiTailwindcss className="text-[#38BDF8]" size={30} />
//         </div>
//         <div className="p-3 rounded-full bg-[#251C31]">
//           <SiRedux className="text-[#764ABC]" size={30} />
//         </div>
//         <div className="p-3 rounded-full bg-[#251C31]">
//           <SiNextdotjs className="text-black" size={30} />
//         </div>
//       </div>
//       <Eclipse />
//     </div>
//   );
// };

// export default About;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import Eclipse from "../eclipse/Eclipse";

const About = () => {
  return (
    <div className="">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-center items-center p-10 rounded-[10px]"
      >
        <h3 className="colors text-4xl font-bold text-white">About</h3>
      </motion.div>

      {/* Animated Paragraph */}
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white text-md p-10 max-w-[950px] mx-auto text-justify block"
      >
        I’m a front-end developer based in the UAE, with a passion for creating
        beautiful and functional web applications. I have a strong foundation in
        HTML, CSS, and JavaScript, and I’m always eager to learn new
        technologies and improve my skills. I enjoy working on projects that
        challenge me and allow me to express my creativity. I’m passionate about
        writing clean, maintainable code and following best practices in web
        development. I’m also committed to continuous learning and staying
        up-to-date with the latest trends and technologies in the industry. I’m
        currently looking for new opportunities to grow as a front-end developer
        and contribute to exciting projects. If you’re looking for a dedicated
        and enthusiastic developer to join your team, feel free to reach out.
        I’d love to hear from you and discuss how I can contribute to your
        projects. Let’s connect and create something amazing together!
      </motion.span>

      {/* Animated Icon Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-6 text-4xl text-white justify-center items-center"
      >
        {[ 
          { icon: <FaReact className="text-[#61DBFB]" />, key: "react" },
          { icon: <SiJavascript className="text-[#F7DF1E]" />, key: "js" },
          { icon: <SiTypescript className="text-[#3178C6]" />, key: "ts" },
          { icon: <SiCss3 className="text-[#264de4]" />, key: "css" },
          { icon: <SiTailwindcss className="text-[#38BDF8]" />, key: "tw" },
          { icon: <SiRedux className="text-[#764ABC]" />, key: "redux" },
          { icon: <SiNextdotjs className="text-black" />, key: "next" },
        ].map(({ icon, key }) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-[#251C31]"
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>

      <Eclipse />
    </div>
  );
};

export default About;

