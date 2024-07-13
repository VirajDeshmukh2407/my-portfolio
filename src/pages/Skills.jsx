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
      duration: 4000,
      once: false,
    });
  }, []);

  return (
    <div
      id="skillsection"
      className="bg-slate-950 text-white py-8 px-4 mx-auto container"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">My Skills</h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105 duration-100">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faHtml5} className="text-5xl" />
            <span className="text-xl">HTML</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faCss3} className="text-5xl" />
            <span className="text-xl">CSS</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faJs} className="text-5xl" />
            <span className="text-xl">JavaScript</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faReact} className="text-5xl" />
            <span className="text-xl">React</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faJava} className="text-5xl" />
            <span className="text-xl">Java</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faGithub} className="text-5xl" />
            <span className="text-xl">GitHub</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faNodeJs} className="text-5xl" />
            <span className="text-xl">Node.js</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faFire} className="text-5xl" />
            <span className="text-xl">Firebase</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faCubes} className="text-5xl" />
            <span className="text-xl">Tailwind CSS</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faCode} className="text-5xl" />
            <span className="text-xl">Bootstrap</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faServer} className="text-5xl" />
            <span className="text-xl">Express</span>
          </div>
        </div>
        <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faDatabase} className="text-5xl" />
            <span className="text-xl">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faCss3,
//   faJs,
//   faReact,
//   faJava,
//   faGithub,
//   faNodeJs,
//   faBootstrap,
//   faTailwind,
//   faGoogle,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faDatabase,
//   faServer,
//   faFire,
// } from "@fortawesome/free-solid-svg-icons";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 4000,
//       once: false,
//     });
//   }, []);

//   return (
//     <div
//       id="skillsection"
//       className="bg-slate-950 text-white py-8 px-4 mx-auto container"
//     >
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">My Skills</h1>
//       </div>
//       <div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         data-aos="fade-up"
//       >
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105 duration-100">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faHtml5}
//               className="text-6xl"
//               color="#E34F26"
//             />
//             <span className="text-xl">HTML</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faCss3}
//               className="text-6xl"
//               color="#1572B6"
//             />
//             <span className="text-xl">CSS</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon icon={faJs} className="text-6xl" color="#F7DF1E" />
//             <span className="text-xl">JavaScript</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faReact}
//               className="text-6xl"
//               color="#61DAFB"
//             />
//             <span className="text-xl">React</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faJava}
//               className="text-6xl"
//               color="#007396"
//             />
//             <span className="text-xl">Java</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faGithub}
//               className="text-6xl"
//               color="#181717"
//             />
//             <span className="text-xl">GitHub</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faNodeJs}
//               className="text-6xl"
//               color="#339933"
//             />
//             <span className="text-xl">Node.js</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faFire}
//               className="text-6xl"
//               color="#FFCA28"
//             />
//             <span className="text-xl">Firebase</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faTailwind}
//               className="text-6xl"
//               color="#38B2AC"
//             />
//             <span className="text-xl">Tailwind CSS</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faBootstrap}
//               className="text-6xl"
//               color="#7952B3"
//             />
//             <span className="text-xl">Bootstrap</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faServer}
//               className="text-6xl"
//               color="#333"
//             />
//             <span className="text-xl">Express</span>
//           </div>
//         </div>
//         <div className="skill border border-white p-4 rounded-lg transform transition-transform hover:scale-105">
//           <div className="flex flex-col items-center space-y-4">
//             <FontAwesomeIcon
//               icon={faDatabase}
//               className="text-6xl"
//               color="#47A248"
//             />
//             <span className="text-xl">MongoDB</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
