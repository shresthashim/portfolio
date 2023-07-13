import React, { useEffect } from "react";
import "./ScrollUp.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");

      if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup">
      <i className="scrollup_icon">
        <AiOutlineArrowUp />
      </i>
    </a>
  );
};

export default ScrollUp;
