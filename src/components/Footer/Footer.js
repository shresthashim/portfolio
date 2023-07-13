import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import "./Footer.css";
import LOGO from "../../assets/Logo.png"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <img src={LOGO} alt="" className="logo_image"/>
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#qualification">Qualification</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/ashim1123/" rel="noreferrer" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/ashim_1123/" rel="noreferrer" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://discord.com/channels/@me" rel="noreferrer" target="_blank">
          <BsDiscord />
        </a>
      </div>
      <div className="footer_copyright">
        <small>Copyright &copy; 2023 AsHim Shrestha. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
