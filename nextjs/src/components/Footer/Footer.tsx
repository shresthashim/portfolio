import React from "react";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import styles from "./Footer.module.css";
import LOGO from "../../../public/assets/Logo.png";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.footer_logo}>
        <Image src={LOGO} alt="Logo" className={styles.logo_image} />
      </a>
      <ul className={styles.permalinks}>
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
      <div className={styles.footer_socials}>
        <a href="https://www.facebook.com/shresthashim/" rel="noreferrer" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/ashim_1123/" rel="noreferrer" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://discord.com/channels/@me" rel="noreferrer" target="_blank">
          <BsDiscord />
        </a>
      </div>
      <div className={styles.footer_copyright}>
        <small>
          Copyright &copy; {new Date().getFullYear()} AsHim Shrestha. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
