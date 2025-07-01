import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";
import ContactSection from "./components/contact/Contact";

const page = () => {
  return (
    <div className="w-full  bg-[#14092B]">
      <div className="w-full flex justify-center items-center gap-[60px] pt-6 px-10  text-white">
        <span>
          <a href="#home">HOME</a>
        </span>
        <span>
          <a href="#about">ABOUT</a>
        </span>
        <div
          className="w-25 h-6 bg-[#1a1026]"
          style={{
            clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
          }}
        ></div>
        <span>
          <a href="#work">WORK</a>
        </span>
        <span>
          <a href="#contact">CONTACT</a>
        </span>
      </div>

      <div className="p-6" id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>

      <div id="work" className="pt-6">
        <Work />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default page;
