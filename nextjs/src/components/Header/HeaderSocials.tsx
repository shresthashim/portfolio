import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Header.module.css";

const HeaderSocials: React.FC = () => {
  return (
    <div className={styles.header_socials}>
      <a
        href="https://www.linkedin.com/in/shresthashim/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin className={styles.Link} />
      </a>
      <a
        href="https://github.com/shresthashim"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub className={styles.Link} />
      </a>
    </div>
  );
};

export default HeaderSocials;
