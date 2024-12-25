"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("#");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const qualificationSection = document.getElementById("qualification");
      const experienceSection = document.getElementById("experience");
      const projectSection = document.getElementById("project");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (aboutSection && scrollPosition < aboutSection.offsetTop) {
        setActiveNav("#");
      } else if (
        qualificationSection &&
        scrollPosition < qualificationSection.offsetTop
      ) {
        setActiveNav("#about");
      } else if (
        experienceSection &&
        scrollPosition < experienceSection.offsetTop
      ) {
        setActiveNav("#qualification");
      } else if (projectSection && scrollPosition < projectSection.offsetTop) {
        setActiveNav("#experience");
      } else if (contactSection && scrollPosition < contactSection.offsetTop) {
        setActiveNav("#project");
      } else {
        setActiveNav("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="#" className={activeNav === "#" ? styles.active : ""}>
        <AiFillHome />
      </Link>
      <Link href="#about" className={activeNav === "#about" ? styles.active : ""}>
        <BiUser />
      </Link>
      <Link
        href="#qualification"
        className={activeNav === "#qualification" ? styles.active : ""}
      >
        <IoIosSchool />
      </Link>
      <Link
        href="#experience"
        className={activeNav === "#experience" ? styles.active : ""}
      >
        <BsBookmarkFill />
      </Link>
      <Link
        href="#project"
        className={activeNav === "#project" ? styles.active : ""}
      >
        <AiFillProject />
      </Link>
      <Link
        href="#contact"
        className={activeNav === "#contact" ? styles.active : ""}
      >
        <AiFillMessage />
      </Link>
    </nav>
  );
};

export default Navbar;
