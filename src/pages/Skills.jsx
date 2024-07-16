import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faJava,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faFire,
  faCode,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./effect.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div
      id="skillsection"
      className="bg-gradient-custom glow-effect text-white py-12 px-4 mx-auto container"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Skills</h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="skill border border-white p-6 rounded-lg transform transition-transform hover:scale-105 hover:bg-slate-700 shadow-lg hover:shadow-xl duration-300"
          >
            <div className="flex flex-col items-center space-y-4">
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-5xl"
                style={{ color: skill.color }}
              />
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const skillsData = [
  { icon: faHtml5, name: "HTML", color: "#e34c26" },
  { icon: faCss3, name: "CSS", color: "#264de4" },
  { icon: faJs, name: "JavaScript", color: "#f0db4f" },
  { icon: faReact, name: "React", color: "#61dbfb" },
  { icon: faJava, name: "Java", color: "#007396" },
  { icon: faGithub, name: "GitHub", color: "#181717" },
  { icon: faNodeJs, name: "Node.js", color: "#68A063" },
  { icon: faFire, name: "Firebase", color: "#FFCA28" },
  { icon: faCubes, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: faCode, name: "Bootstrap", color: "#563d7c" },
  { icon: faServer, name: "Express", color: "#68A063" },
  { icon: faDatabase, name: "MongoDB", color: "#4DB33D" },
];

export default Skills;
