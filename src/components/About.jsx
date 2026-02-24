import React from "react";
import ProfileImg from "../../public/Profile.png"

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
                src="/public/profile.png"
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
              I'm a passionate Full Stack Developer pursuing BCA.
              I build modern, responsive, and scalable web applications
              using React, Node.js, MongoDB and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I completed a 6-week internship working on real-world JavaScript
              projects, where I improved my frontend and backend skills.
            </p>

            {/* Skills Progress */}
            <div className="space-y-4 pt-4">

              {[
                { name: "React", width: "85%" },
                { name: "Node.js", width: "75%" },
                { name: "MongoDB", width: "70%" },
                { name: "JavaScript", width: "90%" },
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

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center mb-12">
            My Journey 🚀
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-orange-500 transition">
              <h4 className="text-xl font-semibold text-orange-400">
                🎓 BCA - Pt. C.L.S Govt. College
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Pursuing Bachelor of Computer Applications and focusing on
                Data Structures, Web Development, and Backend Engineering.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-orange-500 transition">
              <h4 className="text-xl font-semibold text-orange-400">
                💼 Internship - JavaScript Developer
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                6-week internship building real-world web applications
                and improving practical coding skills.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;










// import React from "react";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center px-6 py-20"
//     >
//       <div className="max-w-6xl mx-auto w-full">
        
//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
//           About <span className="text-orange-500">Me</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
          
//           {/* Left Side - Image / Visual */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="w-72 h-72 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl rotate-6 absolute"></div>
//               <div className="w-72 h-72 bg-gray-800 rounded-3xl relative flex items-center justify-center text-6xl shadow-2xl">
//                 👨‍💻
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="space-y-6">
//             <p className="text-gray-400 text-lg leading-relaxed">
//               I'm <span className="text-orange-500 font-semibold">Nitish</span>, 
//               a passionate Full Stack Developer currently pursuing BCA. 
//               I love building modern web applications with clean UI and 
//               scalable backend systems.
//             </p>

//             <p className="text-gray-400 text-lg leading-relaxed">
//               I completed a 6-week internship at <span className="text-orange-500">Stack Company</span>, 
//               where I worked with JavaScript and gained real-world development experience.
//             </p>

//             {/* Info Cards */}
//             <div className="grid grid-cols-2 gap-4 mt-6">
              
//               <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-105 transition duration-300">
//                 <h3 className="text-orange-500 font-semibold">Education</h3>
//                 <p className="text-gray-400 text-sm mt-2">
//                   BCA - Pt. C.L.S Govt. College
//                 </p>
//               </div>

//               <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-105 transition duration-300">
//                 <h3 className="text-orange-500 font-semibold">Experience</h3>
//                 <p className="text-gray-400 text-sm mt-2">
//                   6 Weeks Internship (JavaScript)
//                 </p>
//               </div>

//               <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-105 transition duration-300">
//                 <h3 className="text-orange-500 font-semibold">Projects</h3>
//                 <p className="text-gray-400 text-sm mt-2">
//                   MERN Stack Applications
//                 </p>
//               </div>

//               <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-105 transition duration-300">
//                 <h3 className="text-orange-500 font-semibold">Skills</h3>
//                 <p className="text-gray-400 text-sm mt-2">
//                   React, Node.js, MongoDB
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;