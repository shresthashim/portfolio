"use client";

import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import HELLO from "../../../public/assets/wave.png";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Tech Enthusiast", "Software Engineer", "Computer Student"],
    loop: true,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const [iAM, setIAM] = useState("I am");
  const [showDetails, setShowDetails] = useState(false);

  const handleLogoClick = () => {
    setShowDetails(!showDetails);
    setIAM(showDetails ? "I am" : "");
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.hello_wave}>
          <Image src={HELLO} className={styles.wave} alt="Wave" />
          <h5>Hello, I'm</h5>
        </div>
        <h1 className={styles.fadeInDown}>Ashim Shrestha</h1>
        <h5 className={styles.text_light}>Computer Engineering Undergraduate</h5>

        <div className={styles.logo_container}>
          <div
            className={`${styles.logo} ${showDetails ? styles.expanded : ""}`}
            onClick={handleLogoClick}
          >
            <span className={styles.logo_text}>{iAM}</span>
          </div>
          {showDetails && (
            <div className={styles.details}>
              <h2 className={styles.text}>
                <span className={styles.typewriter}>
                  {text}
                  <Cursor cursorStyle="|" cursorColor="black" />
                </span>
              </h2>
            </div>
          )}
        </div>

        <h2 className={styles.say_hi}>Wanna Say a Hi?</h2>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className={styles.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
