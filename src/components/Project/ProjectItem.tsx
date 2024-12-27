"use client";
import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";


const SwiperComponent = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

import { SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";


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

const ProjectItem: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id='project'>
      <h5>Showcasing my work</h5>
      <h2>Projects</h2>
      <SwiperComponent navigation slidesPerView={1} autoHeight>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={styles.swiper_slide}>
              <div className={styles.project_swiper_image_wrapper}>
                <Image
                  className={styles.project_swiper_image}
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={300}
                  loading='lazy'
                  layout='responsive'
                />
              </div>
              <h3 className={styles.project_swiper_project_title}>{project.title}</h3>
              <p className={styles.project_swiper_description}>{project.description}</p>

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
      </SwiperComponent>
    </section>
  );
};

export default ProjectItem;
