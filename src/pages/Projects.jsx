// import { useEffect } from "react";
// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import prj1 from "../assests/project1.jpeg";
// import photo from "../assests/photoP.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 4000,
//       once: false,
//     });
//   }, []);

//   return (
//     <div className="bg-slate-950 text-white container mx-auto px-4 py-8">
//       <div id="projectsection">
//         <div className="project-header">
//           <h1
//             className="text-4xl font-bold mb-8 text-center"
//             data-aos="fade-up"
//           >
//             Projects
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div
//             className="prj border border-white rounded-lg p-6"
//             data-aos="fade-up"
//           >
//             <img
//               src={prj1}
//               className="photo mb-4 w-full h-48 object-cover rounded-md"
//               alt="Project"
//             />
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Newsify</h3>
//                 <div className="flex items-center">
//                   <i className="fab fa-react text-xl mr-4 text-white"></i>
//                   <i className="fab fa-node-js text-xl mr-4"></i>
//                   <i className="fas fa-database text-xl"></i>
//                   <i className="fab fa-js text-xl ml-4"></i>
//                 </div>
//               </div>
//               <a
//                 href="https://newsify24.vercel.app/"
//                 className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded"
//                 target="_blank"
//               >
//                 Live Demo
//               </a>
//             </div>
//             <p className="text-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
//               sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
//               ultrices diam. Maecenas ligula massa, semper congue, euismod non,
//               mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend
//               mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu
//               massa, scelerisque vitae, consequat in.
//             </p>
//           </div>

//           <div
//             className="prj border border-white rounded-lg p-6"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <img src={photo} className="photo mb-4" alt="Project" />
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Project Name</h3>
//                 <div className="flex items-center">
//                   <i
//                     className="fab fa-react text-xl mr-4"
//                     style={{ color: "#61DAFB" }}
//                   ></i>
//                   <i
//                     className="fab fa-node-js text-xl mr-4"
//                     style={{ color: "#68A063" }}
//                   ></i>
//                   <i
//                     className="fas fa-database text-xl"
//                     style={{ color: "#007ACC" }}
//                   ></i>
//                   <i
//                     className="fab fa-js text-xl ml-4"
//                     style={{ color: "#F0DB4F" }}
//                   ></i>
//                 </div>
//               </div>
//               <a
//                 href="#"
//                 className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 View Live Project
//               </a>
//             </div>
//             <p className="text-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
//               sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
//               ultrices diam. Maecenas ligula massa, semper congue, euismod non,
//               mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend
//               mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu
//               massa, scelerisque vitae, consequat in.
//             </p>
//           </div>

//           <div
//             className="prj border border-white rounded-lg p-6"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <img src={photo} className="photo mb-4" alt="Project" />
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Project Name</h3>
//                 <div className="flex items-center">
//                   <i
//                     className="fab fa-react text-xl mr-4"
//                     style={{ color: "#61DAFB" }}
//                   ></i>
//                   <i
//                     className="fab fa-node-js text-xl mr-4"
//                     style={{ color: "#68A063" }}
//                   ></i>
//                   <i
//                     className="fas fa-database text-xl"
//                     style={{ color: "#007ACC" }}
//                   ></i>
//                   <i
//                     className="fab fa-js text-xl ml-4"
//                     style={{ color: "#F0DB4F" }}
//                   ></i>
//                 </div>
//               </div>
//               <a
//                 href="#"
//                 className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 View Live Project
//               </a>
//             </div>
//             <p className="text-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
//               sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
//               ultrices diam. Maecenas ligula massa, semper congue, euismod non,
//               mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend
//               mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu
//               massa, scelerisque vitae, consequat in.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

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
      duration: 4000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-slate-950 text-white container mx-auto px-4 py-8">
      <div id="projectsection">
        <div className="project-header">
          <h1
            className="text-4xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="prj border border-white rounded-lg p-6"
            data-aos="fade-up"
          >
            <img
              src={prj1}
              className="photo mb-4 w-full h-48 object-cover rounded-md"
              alt="Project"
            />
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Newsify</h3>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="text-xl mr-4 text-white"
                    style={{ color: "#61DAFB" }}
                  />
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="text-xl mr-4"
                    style={{ color: "#68A063" }}
                  />
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-xl"
                    style={{ color: "#007ACC" }}
                  />
                  <FontAwesomeIcon
                    icon={faJs}
                    className="text-xl ml-4"
                    style={{ color: "#F0DB4F" }}
                  />
                </div>
              </div>
              <a
                href="https://newsify24.vercel.app/"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
            <p className="text-sm">
              Newsify is an advanced news rendering website built with the MERN
              stack. Utilizing React for the frontend and Node.js for the
              backend, it integrates seamlessly with news APIs to deliver
              real-time news updates. The site features a sleek, user-friendly
              interface, ensuring an engaging and intuitive user experience.
              With its robust architecture and dynamic UI components, Newsify
              offers a responsive and captivating platform for staying informed.
            </p>
          </div>

          <div
            className="prj border border-white rounded-lg p-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={photo}
              className="photo mb-4 w-full h-48 object-cover rounded-md"
              alt="Project"
            />
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Modules</h3>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="text-xl mr-4"
                    style={{ color: "#61DAFB" }}
                  />
                  {/* <FontAwesomeIcon
                    icon={faNodeJs}
                    className="text-xl mr-4"
                    style={{ color: "#68A063" }}
                  /> */}
                  <FontAwesomeIcon icon={faCubes} className="text-xl mr-4" />

                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-xl"
                    style={{ color: "#007ACC" }}
                  />
                  <FontAwesomeIcon
                    icon={faJs}
                    className="text-xl ml-4"
                    style={{ color: "#F0DB4F" }}
                  />
                </div>
              </div>
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                Live Demo
              </a>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
              sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
              ultrices diam. Maecenas ligula massa, semper congue, euismod non,
              mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend
              mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu
              massa, scelerisque vitae, consequat in.
            </p>
          </div>

          <div
            className="prj border border-white rounded-lg p-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={photo}
              className="photo mb-4 w-full h-48 object-cover rounded-md"
              alt="Project"
            />
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="text-xl mr-4"
                    style={{ color: "#61DAFB" }}
                  />
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="text-xl mr-4"
                    style={{ color: "#68A063" }}
                  />
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-xl"
                    style={{ color: "#007ACC" }}
                  />
                  <FontAwesomeIcon
                    icon={faJs}
                    className="text-xl ml-4"
                    style={{ color: "#F0DB4F" }}
                  />
                </div>
              </div>
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Live Project
              </a>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
              sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
              ultrices diam. Maecenas ligula massa, semper congue, euismod non,
              mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend
              mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu
              massa, scelerisque vitae, consequat in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
