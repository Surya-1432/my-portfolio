import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "90%" },
  { name: "Node.js", level: "85%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "MySQL", level: "80%" },
  { name: "Git/GitHub", level: "85%" },
  { name: "Html", level: "85%" },
  { name: "Css", level: "90%" },
  { name: "JavaScript", level: "80%" },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 w-full max-w-3xl"
    >
      <h2 className="text-3xl font-bold text-cyan-300 mb-8">My Skills</h2>
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: skill.level }}
                transition={{ duration: 1.2, delay: idx * 0.2 }}
                className="bg-cyan-400 h-4 rounded-full shadow-[0_0_12px_#22d3ee]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
