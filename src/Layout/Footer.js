import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiGithub, SiFramer, SiJavascript } from "react-icons/si";
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const techStack = [
    { name: "React JS", icon: FaReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Framer Motion", icon: SiFramer, color: "#E91E63" },
    { name: "GitHub", icon: SiGithub, color: "#4078c0" },
    { name: "Figma", icon: FaFigma, color: "#A259FF" },
  ];

  return (
    <footer className="relative w-full border-t border-gray-200 bg-white/40 backdrop-blur-2xl transition-all duration-500 dark:border-white/5 dark:bg-black/40 overflow-hidden">

      {/* Visual Accents */}
      <div className="absolute top-0 left-1/2 h-[1px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#27b173]/30 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-full max-w-5xl -translate-x-1/2 bg-[#27b173]/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:items-start">

          {/* Brand Identity */}
          <div className="flex flex-col items-center gap-8 lg:items-start lg:w-1/3">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27b173] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27b173]"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#27b173]">
                Precision Engineering
              </span>
            </div>

            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'MyFont5', sans-serif" }}>
                Arif Raza<span className="text-[#27b173]">.</span>
              </h2>
              <p className="max-w-xs text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                Architecting digital solutions that blend technical excellence with human-centric design. Transforming vision into reality.
              </p>
            </div>
          </div>

          {/* Tech Ecosystem */}
          <div className="flex flex-col items-center gap-8 lg:w-1/3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
              Technology Stack
            </h4>
            <div className="flex flex-wrap justify-center gap-5">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="group relative"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass border-gray-100 bg-white/50 shadow-lg transition-all duration-300 group-hover:border-[#27b173]/40 group-hover:shadow-[#27b173]/10 dark:border-white/5 dark:bg-white/5 dark:group-hover:bg-white/10">
                    <tech.icon size={24} style={{ color: tech.color }} className="filter dark:brightness-110" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connect & Meta */}
          <div className="flex flex-col items-center gap-6 lg:items-end lg:text-right lg:w-1/3">
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white">
                © {new Date().getFullYear()} Muhammad Arif Raza
              </p>
              <p className="text-[10px] font-bold text-gray-500 dark:text-gray-500 tracking-wide">
                Built with Passion in Rawalpindi, PK.
              </p>
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#27b173]/40 lg:bg-gradient-to-l" />
            <div className="flex items-center gap-2">
              <MdEmail size={24} />
              <p className="text-[10px] font-black text-[#27b173] uppercase tracking-[0.3em] opacity-60">
                arifraza787898@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-20 flex items-center justify-center gap-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/5 to-transparent" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#27b173]/30 dark:bg-white/10" />
            ))}
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-200 dark:via-white/5 to-transparent" />
        </div>
      </div>
    </footer>
  );
};



export default Footer;

