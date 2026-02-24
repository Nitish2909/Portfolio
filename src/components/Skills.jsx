import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS / Tailwind", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React JS", level: 88 },
    ],
    Backend: [
      { name: "Node JS", level: 80 },
      { name: "Express JS", level: 75 },
      { name: "MongoDB", level: 78 },
    ],
    Tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  };

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Technical{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8">

          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-500 hover:border-orange-500"
            >
              <h3 className="text-2xl font-semibold mb-8 text-orange-400 text-center">
                {category}
              </h3>

              <div className="space-y-6">
                {items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>{skill.name}</span>
                      <span className="text-orange-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;





// import React from "react";

// const Skills = () => {
//   const skillsData = [
//     { name: "HTML", level: 90 },
//     { name: "CSS / Tailwind", level: 85 },
//     { name: "JavaScript", level: 80 },
//     { name: "React JS", level: 85 },
//     { name: "Node JS", level: 75 },
//     { name: "MongoDB", level: 70 },
//   ];

//   return (
//     <section id="skills" className="min-h-screen px-6 py-20">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           My <span className="text-orange-500">Skills</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10">
          
//           {skillsData.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
//             >
//               <div className="flex justify-between mb-2">
//                 <h3 className="text-lg font-semibold text-white">
//                   {skill.name}
//                 </h3>
//                 <span className="text-orange-500 font-semibold">
//                   {skill.level}%
//                 </span>
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full bg-gray-700 h-3 rounded-full">
//                 <div
//                   className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-700"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;