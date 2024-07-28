import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assests/image.jpg";
import "./effect.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 4000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.message
      ) {
        toast.error("Please fill in all required fields");
        return;
      }

      await emailjs.sendForm(
        "service_u5j3g1e",
        "template_pdokg83",
        e.target,
        "ENEifa-l1wdpYm8_k"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <div
      id="contactsection"
      className=" text-white container mx-auto px-4 py-8 bg-gradient-custom glow-effect"
      data-aos="fade-up"
    >
      <h1 className="text-2xl font-bold mb-2 px-5 text-center">
        <span className="text-orange-500">Contact</span> Me
      </h1>

      <div className="flex flex-col md:flex-row">
        {/* Left Section with Contact Me */}
        <div className="md:w-1/2 relative z-10" data-aos="fade-up">
          <div className=" shadow-lg rounded-2xl p-8">
            <img src={image} alt="Contact" className="mb-4 rounded-3xl" />
            <h2 className="mb-4 text-lg text-white">Viraj Deshmukh</h2>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span> +1234567890</span>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span> viraj.work24@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span> Pune</span>
            </div>

            <div className="mt-4 contact-links">
              <a
                href="https://www.linkedin.com/in/viraj-deshmukh-513352292/"
                target="_blank"
                rel="noopener noreferrer"
                className="link px-2 hover:text-blue-500 transition-colors duration-100"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    fontSize: "29px",
                    borderRadius: "10%",
                  }}
                />
              </a>
              <a
                href="https://www.x.com/veeraj05"
                target="_blank"
                rel="noopener noreferrer"
                className="link px-2 hover:text-blue-500 transition-colors duration-300"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: "29px" }}
                />
              </a>
              <a
                href="https://www.github.com/VirajDeshmukh2407"
                target="_blank"
                rel="noopener noreferrer"
                className="link px-2 hover:text-blue-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "29px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="md:w-1/2 md:ml-4 relative z-0">
          <div className=" text-white rounded-lg p-6">
            <div className="contact-container">
              <div className="contact-details">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="bg-transparent glowing-border text-white px-4 py-2 rounded-md w-full"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="bg-transparent glowing-border text-white px-4 py-2 rounded-md w-full"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent glowing-border text-white px-4 py-2 rounded-md w-full"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Your Message..."
                      className="bg-transparent glowing-border text-white px-4 py-2 rounded-md w-full h-32"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className=" glowing-border text-gray-300 px-4 py-2 rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
