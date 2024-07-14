// import "aos/dist/aos.css";
// import myimage from "../assests/image.jpg";
// import React, { useEffect } from "react";
// import AOS from "aos";

// const Home = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//       once: false,
//     });
//   }, []);

//   const handleHireMeClick = () => {
//     window.location.href = "mailto:viraj.work24@gmail.com";
//   };

//   return (
//     <div
//       className="container mx-auto px-4 py-8 bg-slate-950 text-white"
//       id="homesection"
//     >
//       <div className="flex flex-col-reverse md:flex-row items-center">
//         <div
//           data-aos="fade-up"
//           className="order-1 md:order-none mt-8 md:mt-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
//         >
//           <img
//             src={myimage}
//             alt="It's me guys"
//             className="mx-auto rounded-3xl shadow-lg"
//           />
//         </div>

//         <div
//           className="home-description px-4 order-none md:order-1 mt-8 md:mt-0"
//           data-aos="fade-in"
//         >
//           <h1
//             data-aos="fade-up"
//             className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4"
//           >
//             Hi,
//             <br />
//             I'm Viraj
//             <br />
//             An Indian Based
//             <br />
//             Web Developer
//           </h1>

//           <p
//             data-aos="fade-up"
//             className="text-center text-lg md:text-xl lg:text-xl mb-4"
//           >
//             Hey, looking to hire a web developer for your
//             <br />
//             business? Let's share hands. Dedicated to crafting standout and
//             eye-catching projects.
//           </p>

//           <button
//             type="button"
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//             data-aos="fade-up"
//             onClick={handleHireMeClick}
//           >
//             Hire Me...
//           </button>
//         </div>
//       </div>

//       <div className="floating mt-8" data-aos="fade-in">
//         <p
//           data-aos="fade-up"
//           className="text-lg md:text-xl lg:text-2xl text-center"
//         >
//           Connect! Let's Build Quality Projects Together
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;

import "aos/dist/aos.css";
import myimage from "../assests/image.jpg";
import React, { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const handleHireMeClick = () => {
    window.location.href = "mailto:viraj.work24@gmail.com";
  };

  return (
    <div
      className="container mx-auto px-4 py-8 bg-slate-950 text-white"
      id="homesection"
    >
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div
          data-aos="fade-up"
          className="order-1 md:order-none mt-8 md:mt-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        >
          <img
            src={myimage}
            alt="It's me guys"
            className="mx-auto rounded-3xl shadow-lg"
          />
        </div>

        <div
          className="home-description px-4 order-none md:order-1 mt-8 md:mt-0"
          data-aos="fade-in"
        >
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4"
          >
            Hi,
            <br />
            <span data-aos="fade-right" className="aos-animate">
              I'm Viraj
            </span>
            <br />
            An Indian Based
            <br />
            Web Developer
          </h1>

          <p data-aos="fade-up" className=" text-lg md:text-xl lg:text-xl mb-4">
            Hey, looking to hire a web developer for your business?
            <br />
            Let's share hands. Dedicated to crafting standout and eye-catching
            projects.
          </p>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            data-aos="fade-up"
            onClick={handleHireMeClick}
          >
            Hire Me...
          </button>
        </div>
      </div>

      <div className="floating mt-8" data-aos="fade-in">
        <p
          data-aos="fade-up"
          className="text-lg md:text-xl lg:text-2xl text-center"
        >
          Connect! Let's Build Quality Projects Together
        </p>
      </div>
    </div>
  );
};

export default Home;
