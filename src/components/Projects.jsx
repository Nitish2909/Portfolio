import React from "react";
import InterviewAI from "../assets/interview-ai.png"
import quicknote from "../assets/quicknote.png"
import countries from "../assets/countries.png"

const Projects = () => {
  const projectData = [
    {
      title: "QuickNote App",
      description:
        "A MERN stack note-taking application with authentication and CRUD functionality.",
      image: quicknote,
      live: "https://quicknote-frontend-686w.onrender.com",
      github: "https://github.com/Nitish2909/QuickNote",
    },
    {
      title: "Interview Prep AI",
      description:
        "AI-powered interview preparation platform built using React, Node.js, Express.js MongoDB And OpenAI.",
      image: InterviewAI,
      live: "https://interview-prep-ai-frontend-elw6.onrender.com",
      github: "https://github.com/Nitish2909/Interview-Prep-AI-",
    },
      {
      title: "Countries ",
      description:
        "A web app that displays detailed information about countries ",
      image: countries,
      live: "https://restcountriesss.netlify.app/",
      github: "https://github.com/Nitish2909/Countries",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal responsive portfolio website built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/400x250",
      live: "#",
      github: "#",
    },

  ];

  return (
    <section id="project" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-orange-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm hover:scale-105 transition duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-orange-500 text-orange-500 text-sm hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;