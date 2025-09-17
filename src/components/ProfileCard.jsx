import React from "react";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-600 text-center"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-lg"
      />
      <h1 className="text-4xl font-bold text-cyan-400">Hi, I'm Mukka Surya Kiran</h1>
      <p className="text-gray-300 mt-4">
        A passionate <span className="text-blue-400">B-tech pursuing student 🚀</span> 
          who loves building responsive, modern, innovative, and user-friendly applications.
      </p>
    </motion.div>
  );
}
