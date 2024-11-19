import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiGithub, SiFramer } from "react-icons/si";
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-100 flex flex-col md:flex-row justify-between items-center py-8 md:py-16 mb-8 md:mb-1 px-4 md:px-16 space-y-4 md:space-y-0 max-w-screen-xl mx-auto">
      {/* Icon Section */}
      <div>
      <motion.article
      className="p-2 rounded-xl"
    initial={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
    animate={{
        boxShadow: [
            "0px 0px 20px 4px rgba(0, 0, 255, 0.4)",   // Bright blue
            "0px 0px 20px 4px rgba(0, 51, 204, 0.4)",   // Deep blue
            "0px 0px 20px 4px rgba(51, 153, 255, 0.4)", // Light sky blue
            "0px 0px 20px 4px rgba(102, 204, 255, 0.4)" // Soft light blue
        ],
    }}
    transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror"
    }}
>
<h4 className="font-semibold text-red-500 shadow-2xl shadow-red-600">BUILD WITH :</h4>

</motion.article>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
        <div className="flex items-center space-x-2">
          <FaReact
            style={{ height: "30px", width: "30px", color: "blue" }}
            className="transition-transform duration-300 ease-in-out hover:rotate-180 hover:bg-purple-300 hover:rounded-full hover:p-1"
          />
          <span>React JS</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiTailwindcss
            style={{ height: "30px", width: "30px", color: "green" }}
            className="transition-transform duration-300 ease-in-out hover:rotate-180 hover:bg-purple-300 hover:rounded-full hover:p-1"
          />
          <span>Tailwind CSS</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiGithub
            style={{ height: "30px", width: "30px", color: "black" }}
            className="transition-transform duration-300 ease-in-out hover:rotate-180 hover:bg-purple-300 hover:rounded-full hover:p-1"
          />
          <span>GitHub</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiFramer
            style={{ height: "30px", width: "30px", color: "red" }}
            className="transition-transform duration-300 ease-in-out hover:rotate-180 hover:bg-purple-300 hover:rounded-full hover:p-1"
          />
          <span>Framer Motion</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaFigma
            style={{ height: "30px", width: "30px", color: "indigo" }}
            className="transition-transform duration-300 ease-in-out hover:rotate-180 hover:bg-purple-300 hover:rounded-full hover:p-1"
          />
          <span>Figma Design</span>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center md:text-left text-sm">
        <span>Copyright © Arif Chaudhary 2024. All rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
