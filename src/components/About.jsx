import React from "react";
import ProfileImg from "../assets/Profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          About{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent animate-pulse">
            Me
          </span>
        </h2>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-16 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur-2xl opacity-30 rounded-3xl group-hover:opacity-50 transition"></div>
              <img
                src={ProfileImg}
                alt="Nitish"
                className="relative w-80 h-80 object-cover rounded-3xl border-4 border-orange-500 shadow-xl group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Hi, I'm <span className="text-orange-400">Nitish Kumar</span> 👋
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Full Stack Developer and MERN Stack Developer BCA Graduate.
              I build modern, responsive, and scalable web applications
              using React, Node.js, Express.js, MongoDB and Tailwind CSS. I also build Androide and IOS Apps By Using React Native.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I completed a 6-week internship working on real-world JavaScript
              projects, where I improved my frontend and backend skills.
            </p>

            {/* Skills Progress */}
            <div className="space-y-4 pt-4">

              {[
                { name: "React", width: "85%" },
                { name: "Node.js", width: "90%" },
                { name: "Express.js", width: "90%" },
                { name: "MongoDB", width: "80%" },
                { name: "JavaScript", width: "90%" },
                 { name: "React Native", width: "90%" },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.width}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

