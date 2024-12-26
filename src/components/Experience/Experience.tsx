import React from "react";
import styles from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiCanva,
  SiFigma,
  SiWordpress,
  SiLinux,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact, FaNodeJs, FaDocker, FaGit } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

interface ExperienceDetailsProps {
  icon: React.ReactNode;
  name: string;
  level: string;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  icon,
  name,
  level,
}) => (
  <article className={styles.experience_details}>
    <BsPatchCheckFill className={styles.experience_details_icon} />
    <div>
      <h4 style={{ display: "flex", alignItems: "center" }}>
        {icon}
        {name}
      </h4>
      <small className="text-light">{level}</small>
    </div>
  </article>
);

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills and Expertise</h5>
      <h2>My Experience</h2>
      <div className={`container ${styles.experience_container}`}>
        <div className={styles.experience_frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience_content}>
            <ExperienceDetails
              icon={<AiFillHtml5 style={{ marginRight: "5px" }} />}
              name="HTML"
              level="Experienced"
            />
            <ExperienceDetails
              icon={<ImCss3 style={{ marginRight: "5px" }} />}
              name="CSS"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<SiJavascript style={{ marginRight: "5px" }} />}
              name="JavaScript"
              level="Experienced"
            />
            <ExperienceDetails
              icon={<BsFillBootstrapFill style={{ marginRight: "5px" }} />}
              name="Bootstrap"
              level="Experienced"
            />
            <ExperienceDetails
              icon={<SiTailwindcss style={{ marginRight: "5px" }} />}
              name="Tailwind CSS"
              level="Experienced"
            />
            <ExperienceDetails
              icon={<FaReact style={{ marginRight: "5px" }} />}
              name="React JS"
              level="Experienced"
            />
            <ExperienceDetails
              icon={<SiNextdotjs style={{ marginRight: "5px" }} />}
              name="Next JS"
              level="Experienced"
            />
          </div>
        </div>

        <div className={styles.experience_backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience_content}>
            <ExperienceDetails
              icon={<FaNodeJs style={{ marginRight: "5px" }} />}
              name="Node JS"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<SiExpress style={{ marginRight: "5px" }} />}
              name="Express JS"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<DiMongodb style={{ marginRight: "5px" }} />}
              name="MongoDB"
              level="Experienced"
            />
            <ExperienceDetails
              icon={<SiMysql style={{ marginRight: "5px" }} />}
              name="MySQL"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<SiPostgresql style={{ marginRight: "5px" }} />}
              name="PostgreSQL"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<SiGraphql style={{ marginRight: "5px" }} />}
              name="GraphQL"
              level="Intermediate"
            />
          </div>
        </div>

        <div className={styles.experience_tools}>
          <h3>Tools & Technologies</h3>
          <div className={styles.experience_content}>
            <ExperienceDetails
              icon={<SiWordpress style={{ marginRight: "5px" }} />}
              name="WordPress"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<SiCanva style={{ marginRight: "5px" }} />}
              name="Canva"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<SiFigma style={{ marginRight: "5px" }} />}
              name="Figma"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<SiLinux style={{ marginRight: "5px" }} />}
              name="Linux"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<FaDocker style={{ marginRight: "5px" }} />}
              name="Docker"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={<FaGit style={{ marginRight: "5px" }} />}
              name="Git"
              level="Intermediate"
            />
          </div>
        </div>

        <div>
          <h3>Programming Languages</h3>
          <div className={styles.experience_content}>
            <ExperienceDetails icon={null} name="C / C++" level="Experienced" />
            <ExperienceDetails icon={null} name="Python" level="Intermediate" />
            <ExperienceDetails
              icon={null}
              name="JavaScript"
              level="Intermediate"
            />
            <ExperienceDetails
              icon={null}
              name="TypeScript"
              level="Intermediate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
