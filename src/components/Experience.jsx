import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI-ML Intern",
    company: "CodSoft",
    period: "Aug-2025",
    description: "Developed responsive applications using AI-ML logics.",
    certificate: "/certificates/codsoft.pdf", // stored in public/certificates
  },
  {
    role: "Web Developer Intern",
    company: "ApexPlanet",
    period: "Aug-2025",
    description: "Built CRUD applications with PHP & MySQL, and improved backend APIs.",
    certificate: "/certificates/apexplanet.pdf",
  },
   {
    role: "Full Stack Web Development ",
    company: "Intrnforte",
    period: "2024-2025",
    description: "Developed a JOB PORTAL web page using FULL STACK TOOLS.",
    certificate: "/certificates/Full_Stack_Web_Development.pdf",
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 max-w-2xl"
    >
      <h2 className="text-2xl font-bold text-cyan-300 mb-6">Experience</h2>
      <div className="relative border-l border-cyan-400 pl-6 space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="relative"
          >
            <span className="absolute -left-4 top-2.5 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></span>
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <p className="text-gray-400 text-sm">
              {exp.company} • {exp.period}
            </p>
            <p className="mt-2 text-gray-300">{exp.description}</p>

            {/* Certificate Button */}
            {exp.certificate && (
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 text-sm font-medium text-cyan-900 bg-cyan-300 rounded-xl shadow-md hover:bg-cyan-200 transition"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
