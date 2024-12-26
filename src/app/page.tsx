
import React from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Qualification from "../components/Qualification/Qualification";
import Projects from "@/components/Project/Projects";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Qualification />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Page;
