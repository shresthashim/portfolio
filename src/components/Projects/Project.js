import React from "react";
import "./Project.css";
import SwiperCore from "swiper";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


SwiperCore.use([Navigation]);

const Projects = ({ projects }) => {
  return (
    <section id='project'>
      <h5>Showcasing my work</h5>
      <h2>Projects</h2>
      <Swiper navigation>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className='swiper-slide'>
              <div className='project_swiper-image-wrapper'>
                <img className='project_swiper-image' src={project.image} alt={project.title} />
              </div>
              <h3 className='project_swiper-project-title'>{project.title}</h3>
              <p className='project_swiper-description'>{project.description}</p>
              <button className='project_swiper-button' onClick={() => window.open(project.liveDemo)}>
                Live Demo
              </button>
              <button className='project_swiper-button' onClick={() => window.open(project.github)}>
                GitHub
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
