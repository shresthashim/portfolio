import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      // Detect which section is in view based on scroll position
      // You may need to adjust these values based on your layout
      const aboutSection = document.getElementById("about");
      const qualificationSection = document.getElementById("qualification");
      const experienceSection = document.getElementById("experience");
      const projectSection = document.getElementById("project");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition < aboutSection.offsetTop) {
        setActiveNav("#");
      } else if (scrollPosition < qualificationSection.offsetTop) {
        setActiveNav("#about");
      } else if (scrollPosition < experienceSection.offsetTop) {
        setActiveNav("#qualification");
      } else if (scrollPosition < projectSection.offsetTop) {
        setActiveNav("#experience");
      } else if (scrollPosition < contactSection.offsetTop) {
        setActiveNav("#project");
      } else {
        setActiveNav("#contact");
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <nav>
      <a href='#' className={activeNav === "#" ? "active" : ""}>
        <AiFillHome />
      </a>
      <a href='#about' className={activeNav === "#about" ? "active" : ""}>
        <BiUser />
      </a>
      <a href='#qualification' className={activeNav === "#qualification" ? "active" : ""}>
        <IoIosSchool />
      </a>
      <a href='#experience' className={activeNav === "#experience" ? "active" : ""}>
        <BsBookmarkFill />
      </a>
      <a href='#project' className={activeNav === "#project" ? "active" : ""}>
        <AiFillProject />
      </a>
      <a href='#contact' className={activeNav === "#contact" ? "active" : ""}>
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Navbar;
