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
      className="bg-slate-950 text-white py-12 px-4 mx-auto container"
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
            className="skill bg-slate-800 border border-white p-6 rounded-lg transform transition-transform hover:scale-105 hover:bg-slate-700 shadow-lg hover:shadow-xl duration-300"
          >
            <div className="flex flex-col items-center space-y-4">
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-5xl text-blue-400"
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
  { icon: faHtml5, name: "HTML" },
  { icon: faCss3, name: "CSS" },
  { icon: faJs, name: "JavaScript" },
  { icon: faReact, name: "React" },
  { icon: faJava, name: "Java" },
  { icon: faGithub, name: "GitHub" },
  { icon: faNodeJs, name: "Node.js" },
  { icon: faFire, name: "Firebase" },
  { icon: faCubes, name: "Tailwind CSS" },
  { icon: faCode, name: "Bootstrap" },
  { icon: faServer, name: "Express" },
  { icon: faDatabase, name: "MongoDB" },
];

export default Skills;
