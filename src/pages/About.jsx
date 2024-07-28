import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./effect.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-gradient-custom glow-effect text-white container mx-auto px-4 py-8">
      <div className="">
        <div id="aboutsection" className="About-container">
          <h1
            className="text-4xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            About <span className="text-orange-500">Me</span>
          </h1>
          <div className="About-description">
            <h1 className="text-2xl mb-8 text-center" data-aos="fade-up">
              "BE CONSISTENT, BE YOU!"
            </h1>
            <p className="text-lg px-3" data-aos="fade-up">
              Hey there, I'm Viraj, an IT enthusiast currently in my Third year
              of undergraduate studies. I bring a solid foundation in web
              development, with expertise in HTML, CSS,JavaScript and MERN stack
              My journey began with a diploma in IT, and I'm now diving into the
              exciting world of the MERN stack, exploring MongoDB, Express.js,
              React, and Node.js. As a tech enthusiast, I'm passionate about
              creating dynamic and engaging web experiences. Whether it's
              crafting sleek user interfaces or diving into the intricacies of
              full-stack development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
