import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaJs
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  ],
  Programming: [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
     { name: "JavaScript", icon: <FaJs className="text-blue-400" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
     { name: "Docker", icon: <FaDocker className="text-white" /> },
  ],
  "CS Fundamentals": [
    { name: "DBMS", icon: "💾" },
    { name: "Operating System", icon: "🖥️" },
    { name: "Networking", icon: "🌐" },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Technical{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-transparent"
                  : "border-white/20 text-gray-300 hover:border-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {skillCategories[activeCategory].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-sm font-medium text-center">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

// import React from "react";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaJava,
//   FaPython,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiMongodb,
//   SiMysql,
//   SiExpress,
//   SiRedux,
//   SiTailwindcss,
// } from "react-icons/si";

// const Skills = () => {
//   const skills = [
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//     { name: "Java", icon: <FaJava className="text-red-500" /> },
//     { name: "Python", icon: <FaPython className="text-blue-400" /> },
//     { name: "React", icon: <FaReact className="text-cyan-400" /> },
//     { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
//     { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
//     { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
//     { name: "GitHub", icon: <FaGithub className="text-white" /> },
//     { name: "DBMS", icon: "💾" },
//     { name: "Operating System", icon: "🖥️" },
//     { name: "Networking", icon: "🌐" },
//     { name: "Machine Learning", icon: "🤖" },
//     { name: "Data Analysis", icon: "📊" },
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Title */}
//         <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
//           My{" "}
//           <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
//             Skills
//           </span>
//         </h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="group flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg hover:-translate-y-3 hover:border-orange-500 transition duration-500"
//             >
//               <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">
//                 {skill.icon}
//               </div>
//               <h3 className="text-sm font-medium text-center">
//                 {skill.name}
//               </h3>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;
