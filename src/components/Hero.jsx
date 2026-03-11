import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ProfileImg from "../assets/Profile.png";
import NitishCV from "../../public/Nitish_CV.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Nitish Kumar
            </span>
          </h1>

          {/* Typing Animation */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400">
            <span className="text-orange-500">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Developer",
                  "JavaScript Enthusiast",
                  "AI And ML Enthusiast ",
                  "Data Analytics",
                  "Freelancer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg">
            I design and develop scalable web applications using modern
            technologies like React, Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#project"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href={NitishCV}
              download="Nitish_CV.pdf"
              className="px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Download CV
            </a>
            {/* <a
              href="/public/Nitish Kumar-resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Download CV
            </a> */}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6 text-2xl text-gray-400">
            <a href="https://github.com/Nitish2909" className="hover:text-orange-500 transition">
              <FaGithub />
            </a>
            <a href="" className="hover:text-orange-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center relative">
          <div className="absolute w-80 h-80 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          <img
            src={ProfileImg}
            alt="Nitish"
            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-orange-500 shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        ↓ Scroll Down
      </div>
    </section>
  );
};

export default Hero;
