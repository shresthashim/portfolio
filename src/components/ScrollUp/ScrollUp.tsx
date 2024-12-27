"use client";
import React, { useEffect } from "react";
import styles from "./ScrollUp.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";

const ScrollUp: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(`.${styles.scrollup}`);
      if (window.scrollY >= 560) scrollUp?.classList.add(styles.showScroll);
      else scrollUp?.classList.remove(styles.showScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link href='#' className={styles.scrollup} aria-label='Scroll to top'>
      <i className={styles.scrollup_icon}>
        <AiOutlineArrowUp />
      </i>
    </Link>
  );
};

export default ScrollUp;
