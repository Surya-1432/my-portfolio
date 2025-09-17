// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CRUD Application",
    description: "A basic Create, Read, Update, Delete web app using PHP & MySQL.",
    // link: "#",
  },
  {
    title: "Studymate Web application",
    description: "A smart study companion designed to organize learning resources, track progress, and enhance productivity.",
    // link: "#",
  },
  {
    title: "Chat-Bot",
    description: "An interactive conversational assistant built to provide quick, intelligent, and user-friendly responses.",
    // link: "#",
  },
   {
    title: "Tic-Tac-Toe",
    description: "A logic-based game implemented with efficient algorithms and clean UI design.",
    // link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative"
    >
      {/* Overlay background for blur effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg z-0"></div>

      <motion.h2
        className="text-4xl font-extrabold text-white mb-12 relative z-10 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 relative z-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition backdrop-blur-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-semibold"
            >
              {/* View Project */}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
