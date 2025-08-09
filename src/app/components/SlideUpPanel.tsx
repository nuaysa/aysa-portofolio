import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi"; // icon menu

interface ButtonItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

interface SlideUpPanelProps {
  buttons: ButtonItem[];
  setActiveSection: (key: string) => void;
}

export const SlideUpPanel = ({ buttons, setActiveSection }: SlideUpPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-full shadow-lg sm:hidden z-50 hover:scale-105 hover:shadow-blue-400/50 transition-all duration-200"
      >
        <FiMenu size={22} />
      </button>

      {/* Slide-up panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 w-full h-2/3 bg-gray-900 rounded-t-2xl p-4 sm:hidden z-50 overflow-y-auto shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-white">Navigation</span>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-400 transition-colors">
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {buttons.map((button) => (
            <button
              key={button.key}
              onClick={() => {
                setActiveSection(button.key);
                setIsOpen(false);
              }}
              className="flex items-center gap-3 p-3 rounded-lg text-white text-left bg-gray-800/50 hover:bg-blue-600 hover:scale-[1.02] transition-all duration-200"
            >
              <span className="text-xl">{button.icon}</span>
              <span className="font-medium">{button.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
};
