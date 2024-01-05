import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/shresthashim/"  rel="noreferrer" target="_blank">
        <BsLinkedin className="Link" />
      </a>
      <a href="https://github.com/shresthashim"   rel="noreferrer" target="_blank">
        <FaGithub className="Link" />
      </a>
    </div>
  );
};

export default HeaderSocials;
