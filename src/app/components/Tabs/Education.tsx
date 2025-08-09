import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const eduCategories = {
  Education: [
    {
      title: "SMAIT-TQ Ihya As-Sunnah, Tasikmalaya",
      subtitle: "Second highest-achieving graduate (Akhwat division), Class of 2024",
    },
  ],
  Certification: [
    {
      title: "Purwadhika Digital Technology School",
      subtitle: "Fullstack Web Development",
    },
    {
      title: "Desa Inggris – Speaking Level 3",
      subtitle: "Grade: Excellent",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Education() {
  const [activeTab, setActiveTab] = useState<keyof typeof eduCategories>("Education");

  return (
    <div className="relative text-gray-300 lg:p-6 max-w-2xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl lg:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Education & Certification
      </motion.h2>

      {/* Tabs */}
      <motion.div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        {Object.keys(eduCategories).map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveTab(category as keyof typeof eduCategories)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === category ? "bg-gray-700 text-blue-400 shadow-sm" : "text-gray-400 hover:text-white"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* List Items */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
        {eduCategories[activeTab].map((item) => (
          <motion.div key={item.title} variants={itemVariants} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all" whileHover={{ y: -3 }}>
            <div className={`p-3 rounded-md ${activeTab === "Education" ? "bg-yellow-500/10" : "bg-green-500/10"}`}>
              {activeTab === "Education" ? (
                <FaGraduationCap className={`text-lg ${activeTab === "Education" ? "text-yellow-400" : "text-green-400"}`} />
              ) : (
                <FaCertificate className={`text-lg ${activeTab === "Certification" ? "text-yellow-400" : "text-green-400"}`} />
              )}
            </div>
            <div>
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Education;
