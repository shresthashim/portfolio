import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../../data/projects";

const Projects = () => {
  return (
    <>
      <ProjectItem projects={projects} />
    </>
  );
};

export default Projects;
