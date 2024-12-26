import React from "react";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import styles from "./Footer.module.css";
import LOGO from "../../../public/assets/Logo.png";
import Link from "next/link";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Link href="#" className={styles.footer_logo}>
        <Image src={LOGO} alt="Logo" className={styles.logo_image} />
      </Link>
      <ul className={styles.permalinks}>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#qualification">Qualification</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#project">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.footer_socials}>
        <Link
          href="https://www.facebook.com/shresthashim/"
          rel="noreferrer"
          target="_blank"
        >
          <BsFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/ashim_1123/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
        <Link
          href="https://discord.com/channels/@me"
          rel="noreferrer"
          target="_blank"
        >
          <BsDiscord />
        </Link>
      </div>
      <div className={styles.footer_copyright}>
        <small>
          Copyright &copy; {new Date().getFullYear()} AsHim Shrestha. All Rights
          Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
