"use client";

import React, { useEffect } from "react";
import styles from "./ScrollUp.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollUp: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector<HTMLElement>(".scrollup");

      if (scrollUp) {
        if (window.scrollY >= 560) scrollUp.classList.add(styles.showScroll);
        else scrollUp.classList.remove(styles.showScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className={`scrollup ${styles.scrollup}`}>
      <i className={styles.scrollupIcon}>
        <AiOutlineArrowUp />
      </i>
    </a>
  );
};

export default ScrollUp;
