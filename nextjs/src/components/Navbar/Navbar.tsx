"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#", element: document.getElementById("home") },
        { id: "#about", element: document.getElementById("about") },
        { id: "#qualification", element: document.getElementById("qualification") },
        { id: "#experience", element: document.getElementById("experience") },
        { id: "#project", element: document.getElementById("project") },
        { id: "#contact", element: document.getElementById("contact") }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const { id, element } = sections[i];
        if (element && scrollPosition >= element.offsetTop) {
          setActiveNav(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <a href="#home" className={activeNav === "#" ? styles.active : ""}>
        <AiFillHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? styles.active : ""}>
        <BiUser />
      </a>
      <a href="#qualification" className={activeNav === "#qualification" ? styles.active : ""}>
        <IoIosSchool />
      </a>
      <a href="#experience" className={activeNav === "#experience" ? styles.active : ""}>
        <BsBookmarkFill />
      </a>
      <a href="#project" className={activeNav === "#project" ? styles.active : ""}>
        <AiFillProject />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? styles.active : ""}>
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Navbar;
