import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import prj1 from "../assests/project1.jpeg";
import photo from "../assests/photoP.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCubes } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white container mx-auto px-4 py-16">
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
            className="prj border border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
          >
            <img
              src={prj1}
              className="photo w-full h-48 object-cover"
              alt="Project"
            />
            <div className="p-6 bg-slate-800">
              <h3 className="text-2xl font-bold mb-2">Newsify</h3>
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
              <p className="text-sm mb-4">
                Newsify is an advanced news rendering website built with the
                MERN stack. Utilizing React for the frontend and Node.js for the
                backend, it integrates seamlessly with news APIs to deliver
                real-time news updates.
              </p>
              <a
                href="https://newsify24.vercel.app/"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Placeholder for other projects */}
          <div className="prj border border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
            <img
              src={photo}
              className="photo w-full h-48 object-cover"
              alt="Project"
            />
            <div className="p-6 bg-slate-800">
              <h3 className="text-2xl font-bold mb-2">Modules</h3>
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
              <p className="text-sm mb-4">
                Project description lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Dignissim sit amet, adipiscing nec, ultricies
                sed, dolor. Cras elementum ultrices diam.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Placeholder for another project */}
          <div className="prj border border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={photo}
              className="photo w-full h-48 object-cover"
              alt="Project"
            />
            <div className="p-6 bg-slate-800">
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
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
              <p className="text-sm mb-4">
                Project description lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Dignissim sit amet, adipiscing nec, ultricies
                sed, dolor. Cras elementum ultrices diam.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
