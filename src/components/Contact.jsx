import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.7 }}
      className="max-w-xl bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-600 text-center"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-cyan-400">Contact Me</h1>
      <p className="text-gray-300 mb-4">
        Let’s connect! Feel free to reach out through email or social media.
      </p>
      <div className="space-x-4">
        <a href="mailto:mukkasuryakiran@gmail.com" className="px-4 py-2 bg-gray-700 rounded-xl hover:bg-cyan-600 transition">
          Email
        </a>
       
        <a 
         href="https://www.linkedin.com/in/mukka-suryakiran-973231323" 
         target="_blank" 
         rel="noopener noreferrer"
         className="px-4 py-2 bg-gray-700 rounded-xl hover:bg-cyan-500 transition"
         >
          LinkedIn
          </a>

        <a href="https://github.com/Surya-1432" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 rounded-xl hover:bg-cyan-500 transition">
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
