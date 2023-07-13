import React, { useState } from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import {AiFillProject} from "react-icons/ai";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <AiFillHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
        <BiUser />
      </a>
      <a
        href="#qualification"
        onClick={() => setActiveNav("#qualification")}
        className={activeNav === "#qualification" ? "active" : ""}
      >
        <IoIosSchool />
      </a>

      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
        <BsBookmarkFill />
      </a>
      <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""}>
      <AiFillProject/>
      </a>

      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
        <AiFillMessage />
      </a>
    </nav>
  );
};
export default Navbar;
