import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return <ProfileCard />;
    }
  };

  return (
    <div
      className="min-h-screen text-white flex"
      style={{
        backgroundImage: "url('/portfolio-bg.jpg.jpeg')", // ✅ Your custom image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps it still when scrolling
      }}
    >
      <div className="bg-black bg-opacity-70 w-full flex">
        {/* Left Main Section */}
        <div className="flex-1 flex justify-center items-center p-10">
          {renderSection()}
        </div>

        {/* Right Sidebar */}
        <div className="w-64 border-l border-gray-700 hidden md:flex items-center">
          <Sidebar
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          />
        </div>
      </div>
    </div>
  );
}
