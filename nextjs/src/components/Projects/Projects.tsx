import React from "react";
import styles from "./Projects.module.css";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  liveDemo: string;
  github?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id='project'>
      <h5>Showcasing my work</h5>
      <h2>Projects</h2>
      <Swiper navigation>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={styles.swiper_slide}>
              <div className={styles.project_swiper_image_wrapper}>
                <img className={styles.project_swiper_image} src={project.image} alt={project.title} loading='lazy' />
              </div>
              <h3 className={styles.project_swiper_project_title}>{project.title}</h3>
              <p className={styles.project_swiper_description}>{project.description}</p>
         

              {/* Add wrapper div for centering */}
              <div className={styles.project_swiper_buttons_wrapper}>
                <button className={styles.project_swiper_button} onClick={() => window.open(project.liveDemo)}>
                  Live Demo
                </button>
                {project.github && (
                  <button className={styles.project_swiper_button} onClick={() => window.open(project.github)}>
                    GitHub
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
