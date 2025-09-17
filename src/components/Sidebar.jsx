import React from "react";

export default function Sidebar({ setActiveSection, activeSection }) {
  const menuItems = [
    { id: "profile", label: "Profile" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col w-full items-start px-6 space-y-6 text-lg font-semibold">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`relative transition duration-300 ease-in-out ${
            activeSection === item.id
              ? "text-cyan-400"
              : "text-gray-300 hover:text-cyan-300"
          }`}
        >
          {item.label}
          {/* glowing underline */}
          <span
            className={`absolute left-0 bottom-0 h-[2px] w-full bg-cyan-400 transform origin-left transition-transform duration-300 ${
              activeSection === item.id
                ? "scale-x-100 shadow-[0_0_8px_#22d3ee]"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
}
