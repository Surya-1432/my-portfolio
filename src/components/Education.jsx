import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) pursuing",
    field: "Computer Science (AI-ML)",
    institution: "TKR College of Engineering and Technology",
    period: "2023 - 2027",
    details: "Specialized in AI-ML and CSE (core).",
  },
  {
    degree: "Intermediate board",
    field: "MPC",
    institution: "Sri Chaitanya Junior College",
    period: "2021 - 2023",
    details: "Focused on MPC.",
  },
   {
    degree: "Secondary School education",
    institution: "Oxford High School ",
    period: "2021",
    
  },
];

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 max-w-2xl"
    >
      <h2 className="text-2xl font-bold text-cyan-300 mb-6">Education</h2>
      <div className="relative border-l border-cyan-400 pl-6 space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="relative"
          >
            <span className="absolute -left-4 top-2.5 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></span>
            <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
            <p className="text-gray-400 text-sm">{edu.institution} • {edu.period}</p>
            <p className="mt-2 text-gray-300">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
