import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Header.module.css";
import Link from "next/link";

const HeaderSocials: React.FC = () => {
  return (
    <div className={styles.header_socials}>
      <Link
        href="https://www.linkedin.com/in/shresthashim/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin className={styles.Link} />
      </Link>
      <Link
        href="https://github.com/shresthashim"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub className={styles.Link} />
      </Link>
    </div>
  );
};

export default HeaderSocials;
