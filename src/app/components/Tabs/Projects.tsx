import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaBuilding, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiReact } from "react-icons/si";

const projects = [
  {
    title: "Laundry Management Application (Launderly)",
    image: "/launderly.png",
    description:
      "Developed a web-based laundry management system to optimize orders, transactions, employee tracking, and driver coordination. As a Fullstack Developer, designed and implemented Worker Management, Driver Management, and Attendance System features using Next.js, Node.js, and PostgreSQL. Implemented REST API and JWT authentication for enhanced security and scalability.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "ExpressJs"],
    links: [
      { url: "https://frontend-launderly.vercel.app/", icon: <FaExternalLinkAlt />, label: "Visit Site" },
      { url: "https://github.com/NaufalNurAdrian/frontend-launderly", icon: <FaGithub />, label: "View FE Code" },
      { url: "https://github.com/NaufalNurAdrian/backend-launderly", icon: <FaGithub />, label: "View BE Code" },
    ],
  },
  {
    title: "Jabal Nur Tasikmalaya Tourist Spot Website",
    image: "/Jabal_nur.png",
    description:
      "Developed a profile website for the Jabal Nur Tasikmalaya tourist destination, featuring travel information, photo galleries, and online reservations. Built using Next.js, TypeScript, and TailwindCSS to enhance visibility and user engagement.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { url: "https://jabal-nur.vercel.app/", icon: <FaExternalLinkAlt />, label: "Visit Site" },
      { url: "https://github.com/nuaysa/Jabal-Nur", icon: <FaGithub />, label: "View Code" },
    ],
  },
  {
    title: "Cake Producer Profile Website (Ulya Cookies)",
    image: "/Ulya_cookies.png",
    description:
      "Developed a company profile website for Ulya Cookies bakery, featuring a product catalog, contact information, and an online order form. Built with TypeScript, Next.js, and TailwindCSS for a responsive and user-friendly interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"],
    links: [
      { url: "https://ulya-cookies.vercel.app/", icon: <FaExternalLinkAlt />, label: "Visit Site" },
      { url: "https://github.com/nuaysa/Ulya-cookies", icon: <FaGithub />, label: "View Code" },
    ],
  },
];
const experiences = [
  {
    position: "Front-End Developer Intern",
    company: "Hepy Tech",
    period: "May – August 2025",
    icon: <FaBuilding className="text-blue-400" />,
    highlights: [
      "Collaborated on user-facing platform using React and Next.js",
      "Implemented global state management using Zustand",
      "Applied MVVM architectural pattern",
      "Created reusable components for better UI performance",
      "Participated in code reviews and agile development",
    ],
    tech: [<SiReact key="react" className="text-blue-500" />, <SiNextdotjs key="next" className="text-white" />],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Project() {
  return (
    <div className="relative max-w-4xl mx-auto lg:p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl lg:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Experiences
      </motion.h2>

      <motion.div className="space-y-12" initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <FaBuilding className="text-blue-400" />
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline */}

            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="relative  pb-8">
                {/* Timeline dot */}

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <span className="bg-gray-700 text-sm text-center px-3 py-1 rounded-full">{exp.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2 pl-5 list-disc text-gray-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex gap-3 overflow-auto">
                    {exp.tech.map((Icon, i) => (
                      <span key={i} className="text-2xl">
                        {Icon}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <FaLaptopCode className="text-purple-400" />
            Featured Projects
          </h2>
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group my-3 relative rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all">
              <div className="p-4 sm:p-6 space-y-4">
                <h2 className="text-lg sm:text-2xl font-bold text-white">{project.title}</h2>

                <motion.div className="relative w-full aspect-video rounded-lg bg-gray-700" whileHover={{ scale: 1.02 }}>
                  <Image src={project.image} alt={`${project.title} Screenshot`} fill className="object-cover group-hover:opacity-90 transition-opacity rounded-lg" />
                </motion.div>

                <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-gray-700 text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm">
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>
    </div>
  );
}
