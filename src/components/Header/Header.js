import React, { useState } from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import HELLO from "../../assets/wave.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Learner", "Designer", "CS Student"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  const [iAM, setIAM] = useState("I am");
  const [showDetails, setShowDetails] = useState(false);
  const [shake, setShake] = useState(false);

  const handleLogoClick = () => {
    setShowDetails(!showDetails);
    setIAM(showDetails ? "I am" : "");
  };
  setTimeout(() => {
    setShake(!showDetails);
  }, 10);
  return (
    <header>
      <div className='container header_container'>
        <div className='hello_wave animated fadeInDown'>
          <img src={HELLO} className='wave' alt='Wave' />
          <h5>Hello, I'm</h5>
        </div>
        <h1 className='animated fadeInDown'>AsHim Shrestha</h1>
        <h5 className='text-light animated fadeIn'>Computer Engineering Undergraduate</h5>
        <div className='logo-container'>
          <div className={`logo ${showDetails ? "expanded" : ""} ${shake ? "shake" : ""}`} onClick={handleLogoClick}>
            <span className='logo_text'>{iAM}</span>
          </div>
          {showDetails && (
            <div className='details'>
              <h2 className='text'>
                <span className='typewriter'>
                  {text}
                  <Cursor cursorStyle='|' cursorColor='black' />
                </span>
              </h2>
            </div>
          )}
        </div>

        <h2 className='say-hi'>Wanna Say a Hi?</h2>
        <CTA />
        <HeaderSocials />
        <a href='#contact' className='scroll_down animated fadeIn'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
