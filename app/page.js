import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";
import ContactSection from "./components/contact/Contact";

const page = () => {
  return (
    <div className="w-full  bg-[#14092B]">
      <div className="w-full flex justify-center items-center gap-[60px] px-10  text-white">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>WORK</span>
        <span>CONTACT</span>
      </div>

      <div className="p-6">
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default page;
