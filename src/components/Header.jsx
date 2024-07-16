import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../pages/effect.css";
import "./headingEffect.css";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => setIsSidebarVisible(true);
  const hideSidebar = () => setIsSidebarVisible(false);

  return (
    <div
      className={`body ${
        isSidebarVisible ? "show-sidebar" : ""
      } sticky top-0 z-50`}
    >
      <div className="bg-gradient-custom text-gray-100 py-2">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4">
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/viraj-deshmukh-513352292/"
              target="_blank"
              className="neon-text hover:text-blue-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            </a>
            <a
              href="https://www.twitter.com/veeraj05/"
              target="_blank"
              className="neon-text hover:text-blue-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-lg" />
            </a>
            <a
              href="https://www.github.com/VirajDeshmukh2407"
              target="_blank"
              className="neon-text hover:text-blue-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#homesection"
              className="hover:text-blue-600 transform hover:scale-104 transition duration-100"
            >
              Home
            </a>
            <a
              href="#aboutsection"
              className="hover:text-blue-600 transform hover:scale-104 transition duration-100"
            >
              About
            </a>
            <a
              href="#skillsection"
              className="hover:text-blue-600 transform hover:scale-104 transition duration-100"
            >
              Skills
            </a>
            <a
              href="#projectsection"
              className="hover:text-blue-600 transform hover:scale-104 transition duration-100"
            >
              Projects
            </a>
            <a
              href="#contactsection"
              className="hover:text-blue-600 transform hover:scale-104 transition duration-100"
            >
              Contact Me
            </a>
          </div>
          <button
            onClick={isSidebarVisible ? hideSidebar : showSidebar}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className=""
            >
              <path
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-opacity-95 transform bg-slate-900 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col space-y-4 p-2 mr-2">
          <button onClick={hideSidebar} className="self-end focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="text-white"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="flex flex-col text-center space-y-10">
            <a
              href="#homesection"
              className="text-gray-200 hover: mt-6"
              onClick={hideSidebar}
            >
              Home
            </a>
            <a
              href="#aboutsection"
              className="text-gray-200 hover:"
              onClick={hideSidebar}
            >
              About
            </a>
            <a
              href="#projectsection"
              className="text-gray-200 hover:"
              onClick={hideSidebar}
            >
              Projects
            </a>
            <a
              href="#skillsection"
              className="text-gray-200 hover:"
              onClick={hideSidebar}
            >
              Skills
            </a>
            <a
              href="#contactsection"
              className="text-gray-200 hover:"
              onClick={hideSidebar}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
