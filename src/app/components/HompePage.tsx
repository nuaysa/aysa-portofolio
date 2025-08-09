"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaEnvelope, FaUser, FaHome } from "react-icons/fa";
import About from "./Tabs/About";
import Education from "./Tabs/Education";
import Contact from "./Tabs/Contact";
import Project from "./Tabs/Projects";

const buttonVariants = {
  hover: { scale: 1.03, y: -3 },
  tap: { scale: 0.98 },
};

import { SlideUpPanel } from "./SlideUpPanel"; // pastikan path sesuai

function HomePageTabs() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const buttons = [
    { label: "Home", key: "home", icon: <FaHome />, bg: "bg-gradient-to-r from-blue-400 to-purple-500" },
    { label: "About Me", key: "about", icon: <FaUser />, bg: "bg-gradient-to-r from-blue-400 to-blue-500" },
    { label: "Education & Certification", key: "education", icon: <FaUserGraduate />, bg: "bg-gradient-to-r from-purple-400 to-purple-500" },
    { label: "Projects & Experience", key: "projects", icon: <FaLaptopCode />, bg: "bg-gradient-to-r from-green-400 to-green-500" },
    { label: "Contact", key: "contact", icon: <FaEnvelope />, bg: "bg-gradient-to-r from-pink-400 to-pink-500" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "projects":
        return <Project />;
      case "contact":
        return <Contact />;
      default:
        return (
          <div className="flex items-center justify-center h-screen bg-gradient-to-b rounded-xl from-gray-900 via-gray-800 to-gray-900">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold py-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hello, I&apos;m Allysa</h1>
              <p className="text-lg md:text-xl text-gray-300 mt-3 mb-6">Fullstack Web Developer</p>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-6 gap-4 md:gap-8 bg-gray-900 text-white">
      {/* Konten */}
      <motion.div className="flex-1 p-6 bg-gray-800 rounded-xl overflow-y-auto hide-scrollbar" key={activeSection || "default"} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        {renderSection()}
      </motion.div>

      {/* Tombol kanan - hanya tampil di desktop */}
      <motion.div className="hidden sm:flex flex-col gap-4 sticky top-6 h-fit" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        {buttons.map((button, index) => (
          <motion.button
            key={button.key}
            onClick={() => setActiveSection(button.key)}
            className={`flex items-center justify-start gap-3 px-6 py-4 rounded-xl font-medium text-white shadow-lg ${button.bg} hover:shadow-xl transition-all backdrop-blur-sm bg-opacity-90 ${
              activeSection === button.key ? "ring-2 ring-white" : ""
            }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="text-xl">{button.icon}</span>
            <span>{button.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Panel mobile */}
      <SlideUpPanel buttons={buttons} setActiveSection={setActiveSection} />
    </div>
  );
}

export default HomePageTabs;
