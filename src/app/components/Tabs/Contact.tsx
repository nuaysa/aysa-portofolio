import React from "react";
import {  FaEnvelope, FaLinkedin, FaInstagram, FaGithub, FaGit } from "react-icons/fa";
import { motion } from "framer-motion";

const contactItems = [
  {
    platform: "Email",
    icon: <FaEnvelope className="text-2xl" />,
    link: "mailto:nuaysa@gmail.com",
    text: "nuaysa@gmail.com",
    color: "hover:text-red-400",
    bgColor: "bg-red-500",
    delay: 0.2,
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-2xl" />,
    link: "http://linkedin.com/in/nuaysa",
    text: "linkedin.com/in/nuaysa",
    color: "hover:text-blue-400",
    bgColor: "bg-blue-500",
    delay: 0.3,
  },
  {
    platform: "Instagram",
    icon: <FaInstagram className="text-2xl" />,
    link: "https://www.instagram.com/nuaysa_n",
    text: "@nuaysa_n",
    color: "hover:text-pink-400",
    bgColor: "bg-pink-500",
    delay: 0.4,
  },
  {
    platform: "GitHub",
    icon: <FaGithub className="text-2xl" />,
    link: "https://github.com/nuaysa",
    text: "github.com/nuaysa",
    color: "hover:text-gray-300",
    bgColor: "bg-gray-700",
    delay: 0.5,
  },
];

function Contact() {
  return (
    <div className="relative lg:p-6 max-w-md mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl lg:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Let&apos;s Connect!
      </motion.h2>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.delay, duration: 0.3 }}
            className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 ${item.color} border border-white/10 hover:border-white/20`}
          >
            <span className={`p-3 rounded-lg ${item.bgColor} shadow-md`}>{item.icon}</span>
            <div>
              <p className="text-sm text-white/70">{item.platform}</p>
              <p className="font-medium">{item.text}</p>
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  );
}

export default Contact;
