"use client";

import React from "react";
import ProjectDetails from "../projectDetails/ProjectDetails";
import netflixClone from "../../../public/assets/project_thumbnails/netflix_clone.png";
import spaceMan from "../../../public/assets/project_thumbnails/space_man.png"
import toDoApp from "../../../public/assets/project_thumbnails/toDo_app.png"
import NewsHomePage from "../../../public/assets/project_thumbnails/News_Home_Page.png"


const Work = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 text-white p-6">
         <h3 className="colors text-4xl font-bold text-white">Recent Work</h3>
        <span>A collection of projects I've worked on.</span>
      </div>
      <div className="flex flex-col gap-9 rounded-xl overflow-hidden ">
        <ProjectDetails src={netflixClone} title="Netflix Clone"/>
        <ProjectDetails src={spaceMan} title="Space Man" reverse />
        <ProjectDetails src={toDoApp} title="To Do App" />
        <ProjectDetails src={NewsHomePage} title="News Home" reverse />
      </div>
    </div>
  );
};

export default Work;
