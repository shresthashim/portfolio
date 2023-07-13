import React from "react";
import "./Qualification.css";
import { IoIosSchool } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
function Qualification() {
  return (
    <section id="qualification">
      <h5>Educational Pursuits</h5>
      <h2>Qualification</h2>

      <div className="container qualification_container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button--flex">
            <IoIosSchool className="qualification_icon" />
            Education
          </div>
        </div>
        <div className="qualification_sections">
          <div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Bachelor in Computer Engineering</h3>
                <span className="qualification_subtitle">Pashchimanchal Campus</span>
                <h4 className="text-light" style={{ fontSize: "13px", marginTop: "-7px" }}>
                  Lamachaur, Pokhara
                </h4>
                <div className="qualification_calendar">
                  <AiFillCalendar /> 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">+2 Science</h3>
                <span className="qualification_subtitle">Valmiki Shiksha Sadan</span>
                <h4 className="text-light" style={{ fontSize: "13px", marginTop: "-7px" }}>
                  Bharatpur, Chitwan
                </h4>
                <div className="qualification_calendar">
                  <AiFillCalendar /> 2020 - 2022
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Secondary Level</h3>
                <span className="qualification_subtitle">Samata Shiksha Niketan</span>
                <h4 className="text-light" style={{ fontSize: "13px", marginTop: "-7px" }}>
                  Bharatpur, Chitwan
                </h4>
                <div className="qualification_calendar">
                  <AiFillCalendar /> 2016 - 2019
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Primary Level</h3>
                <span className="qualification_subtitle">Samata Shiksha Niketan</span>
                <h4 className="text-light" style={{ fontSize: "13px", marginTop: "-7px" }}>
                  Bharatpur, Chitwan
                </h4>
                <div className="qualification_calendar">
                  <AiFillCalendar /> 2007 - 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
