import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 max-w-2xl"
    >
      <h2 className="text-2xl font-bold text-cyan-300 mb-4">About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        Hi, I'm <span className="text-cyan-400 font-semibold">Mukka Surya Kiran </span>, B-Tech 3rd year student at TKR College
         of Engineering and Technology ,driven by curiosity and creativity in the world of web development. I'm an aspiring
        <span className="text-cyan-400"> Full Stack Developer</span> who loves crafting modern, responsive,
         and user-friendly applications that don't just work—but make an impact.
      </p>
      <p className="mt-4 text-gray-400 leading-relaxed">
       I believe in turning ideas into reality through code and design,
        combining creativity with logic to deliver impactful solutions. Currently, 
        I'm working on sharpening my problem-solving skills and building projects that reflect both innovation and practicality.”
        Looking forward to collaborating on exciting projects, contributing to real-world applications, 
        and growing into a versatile full-stack developer.
      </p>
    </motion.div>
  );
}
