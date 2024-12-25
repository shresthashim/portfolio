import React, { useState } from "react";
import "./About.css";
import ME from "../../../public/assets/about-me.png";
import { FaAward } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Nepali", level: "Native" },
    { name: "Hindi", level: "Advanced" },
  ];

  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2023 - Present</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Self Projects</h5>
              <small>25+ Completed</small>
            </article>
            <article className='about_card'>
              <BiSupport className='about_icon' />
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>
          <p>
            Welcome to my portfolio! I am a passionate undergraduate Computer Engineering student currently studying at
            Pashchimanchal Campus. I am specializing in Front-end Web Development with a strong focus on React and Next.js. I
            excel in leveraging my expertise in React to develop intuitive and visually appealing web applications. While my
            primary strength lies in front-end development, I also possess considerable knowledge of backend programming languages
            such as Node.js and Express.js, along with database systems like MongoDB, PostgreSQL, MySQL, and containerization
            using Docker.
          </p>
          <div className='languages'>
            <h5>Language Proficiency :</h5>
            <button className='toggle_languages' onClick={toggleLanguages}>
              {showLanguages ? "Hide Languages" : "Show Languages"}
            </button>
            {showLanguages && (
              <ul>
                {languages.map((language, index) => (
                  <li key={index}>
                    {language.name} - {language.level}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;