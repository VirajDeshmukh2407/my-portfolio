import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import prj1 from "../assests/project1.jpeg";
import photo from "../assests/photoP.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./effect.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-custom glow-effect text-gray-100 container mx-auto px-4 py-16">
      <div id="projectsection">
        <div className="project-header text-center mb-16">
          <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
            Projects
          </h1>
          <p
            className="text-lg text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A showcase of some of my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            className="prj border border-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
            data-aos="fade-up"
          >
            <img
              src={prj1}
              className="photo w-full h-48 object-cover"
              alt="Project"
            />
            <div className="p-6 ">
              <h3 className="text-2xl font-bold mb-2 text-gray-100">Newsify</h3>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-xl mr-4 text-blue-500 hover:text-blue-700"
                />
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className="text-xl mr-4 text-green-500 hover:text-green-700"
                />
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-xl text-blue-500 hover:text-blue-700"
                />
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-xl ml-4 text-yellow-400 hover:text-yellow-600"
                />
              </div>
              <p className="text-sm mb-4 text-gray-300">
                Newsify is an advanced news rendering website built with the
                MERN stack. Utilizing React for the frontend and Node.js for the
                backend, it integrates seamlessly with news APIs to deliver
                real-time news updates.
              </p>
              <a
                href="https://newsify24.vercel.app/"
                className="inline-block glowing-border text-white font-bold py-2 px-4 rounded  transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div
            className="prj border border-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
            data-aos="fade-up"
          >
            <img
              src={photo}
              className="photo w-full h-48 object-cover"
              alt="Project"
            />
            <div className="p-6 ">
              <h3 className="text-2xl font-bold mb-2 text-gray-100">Modules</h3>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-xl mr-4 text-blue-500 hover:text-blue-700"
                />
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className="text-xl mr-4 text-green-500 hover:text-green-700"
                />
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-xl text-blue-500 hover:text-blue-700"
                />
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-xl ml-4 text-yellow-400 hover:text-yellow-600"
                />
              </div>
              <p className="text-sm mb-4 text-gray-300">
                Project description lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Dignissim sit amet, adipiscing nec, ultricies
                sed, dolor. Cras elementum ultrices diam.
              </p>
              <a
                href="#"
                className="inline-block glowing-border text-gray-100 font-bold py-2 px-4 rounded  transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div
            className="prj border border-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
            data-aos="fade-up"
          >
            <img
              src={photo}
              className="photo w-full h-48 object-cover"
              alt="Project"
            />
            <div className="p-6 ">
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                Project Name
              </h3>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-xl mr-4 text-blue-500 hover:text-blue-700"
                />
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className="text-xl mr-4 text-green-500 hover:text-green-700"
                />
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-xl text-blue-500 hover:text-blue-700"
                />
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-xl ml-4 text-yellow-400 hover:text-yellow-600"
                />
              </div>
              <p className="text-sm mb-4 text-gray-300">
                Project description lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Dignissim sit amet, adipiscing nec, ultricies
                sed, dolor. Cras elementum ultrices diam.
              </p>
              <a
                href="#"
                className="inline-block glowing-border text-gray-100 font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
