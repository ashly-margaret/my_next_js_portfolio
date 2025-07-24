import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";
import ContactSection from "./components/contact/Contact";
import Nav from "./components/navBar/Nav";
import Experience from "./components/experience/Experience";
import Technologies from "./components/technology/Technologies";

export default function Page() {
  return (
    <div className="w-full bg-[#14092B] scroll-smooth">
      {/* Navigation */}
      <Nav />
      {/* Sections */}
      <section id="home" className="p-6">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
        <section id="experience" className=" pb-6">
       <Experience/>
      </section>
        <section id="technologies" className="pt-6 pb-6">
       <Technologies/>
      </section>
      <section id="work" className="pt-6 pb-6">
        <Work />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
