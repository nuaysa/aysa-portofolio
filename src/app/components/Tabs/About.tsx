import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaNodeJs, FaGitlab } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiPrisma, SiJira, SiTypescript, SiExpress, SiJavascript, SiNextdotjs, SiWordpress } from "react-icons/si";
import Link from "next/link";
import { TbApi } from "react-icons/tb";
import { DiDatabase } from "react-icons/di";
import { BsBucketFill } from "react-icons/bs";

const skillCategories = {
  Frontend: [
    { name: "React.js", icon: <FaReact className="text-blue-500" size={20} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={20} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={20} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" size={20} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={20} /> },
    { name: "Zustand", icon: "🐻" },
  ],
  Backend: [
    { name: "Node JS", icon: <FaNodeJs className="text-gray-300" size={20} /> },
    { name: "Express JS", icon: <SiExpress className="text-gray-300" size={20} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" size={20} /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-purple-400" size={20} /> },
    { name: "ERD", icon: <SiPrisma className="text-purple-400" size={20} /> },
  ],
  CMS: [{ name: "WordPress", icon: <SiWordpress className="text-blue-500" size={20} /> }],
  Tools: [
    { name: "GitLab", icon: <FaGitlab className="text-orange-500" size={20} /> },
    { name: "Postman API", icon: <TbApi className="text-orange-400" size={20} /> },
    { name: "DrawSQL", icon: <DiDatabase className="text-cyan-400" size={20} /> },
    { name: "GitHub", icon: <FaGitAlt className="text-orange-400" size={20} /> },
    { name: "GitBucket", icon: <BsBucketFill className="text-blue-400" size={20} /> },
    { name: "Jira", icon: <SiJira className="text-blue-400" size={20} /> },
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

function About() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillCategories>("Frontend");

  return (
    <div className="relative text-gray-300 lg:p-6 max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl lg:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5">
        <motion.div variants={itemVariants}>
          <p className="leading-relaxed text-white">Allysa Nouran Naveeda</p>
          <p className="text-gray-400">Fullstack Web Developer | Bandung, West Java, Indonesia</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Link href="https://github.com/nuaysa/" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">
              github.com/nuaysa
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="mailto:nuaysa@gmail.com" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">
              nuaysa@gmail.com
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="http://linkedin.com/in/nuaysa" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">
              linkedin.com/in/nuaysa
            </Link>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="leading-relaxed">
          Fullstack Web Developer with strong hands-on experience in building scalable web applications using ReactJS, Next.js, Node.js, and PostgreSQL. Graduated from Purwadhika Digital Technology School&apos;s Fullstack Web Development
          program, where I developed full-featured applications to improve real-world business processes.
        </motion.p>

        <motion.p variants={itemVariants} className="leading-relaxed">
          My background in Islamic boarding school has shaped a strong work ethic, adaptability, and effective team communication. I strive to write clean, maintainable code while ensuring timely delivery.
        </motion.p>

        <motion.p variants={itemVariants} className="leading-relaxed">
          I am passionate about developing impactful digital solutions that enhance user experience and system performance. Eager to contribute to dynamic teams and grow in a fast-paced tech environment.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Skills</h3>

          <motion.div className="flex overflow-x-auto sm:overflow-visible space-x-2 bg-gray-800 p-1 rounded-lg" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.4 }}>
            {Object.keys(skillCategories).map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveTab(category as keyof typeof skillCategories)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === category ? "bg-gray-700 text-blue-400 shadow-sm" : "text-gray-400 hover:text-white"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 mt-4" variants={containerVariants}>
            {skillCategories[activeTab].map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:shadow-sm transition-all overflow-hidden">
                <div className="p-2 rounded-md bg-gray-700">{skill.icon}</div>
                <span className="font-medium text-white break-words">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
