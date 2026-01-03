import React from 'react'
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaTwitter, FaCodepen } from "react-icons/fa";
import { motion } from 'framer-motion';
import profileImg from '../assets/images/3699048341.png'

const Herosection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 25,
                mass: 0.5
            }
        }
    };

    return (
        <div className="relative min-h-[95vh] flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 mesh-gradient opacity-30 dark:opacity-10"></div>
            <div className="absolute inset-0 z-0 dot-grid opacity-[0.03] text-gray-900 dark:text-white dark:opacity-[0.05]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl w-full">

                {/* Left Side Content */}
                <motion.div
                    className="lg:w-[60%] w-full space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="space-y-6">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[#27b173] text-xs font-bold uppercase tracking-widest">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#27b173]"></span>
                            Developing Innovative Digital Experiences
                        </motion.div>

                        <motion.h1
                            style={{ fontFamily: 'MyFont5, sans-serif' }}
                            className="text-6xl text-gray-900 dark:text-white sm:text-7xl lg:text-8.5xl font-black leading-[1.05] tracking-tight"
                            variants={itemVariants}
                        >
                            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#27b173] via-[#2dc682] to-[#1a663f]">Software Engineer</span>
                        </motion.h1>

                        <motion.p
                            className="text-gray-600 dark:text-gray-400 text-lg sm:text-2xl max-w-2xl leading-relaxed font-medium"
                            variants={itemVariants}
                        >
                            I'm <span className="text-gray-900 dark:text-white border-b-2 border-[#27b173]/30">Muhammad Arif Raza</span>. Crafting high-performance, accessible, and beautiful web applications for the modern web.
                        </motion.p>
                    </div>

                    <motion.div className="flex flex-wrap gap-5" variants={itemVariants}>
                        {[
                            { icon: FaGithub, href: "https://github.com/arifch786", title: "GitHub" },
                            { icon: FaTwitter, href: "#", title: "Twitter" },
                            { icon: FaLinkedin, href: "#", title: "LinkedIn" },
                            { icon: FaInstagram, href: "#", title: "Instagram" },
                            { icon: FaYoutube, href: "#", title: "YouTube" },
                            { icon: FaCodepen, href: "#", title: "CodePen" }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                whileHover={{ y: -8, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group p-5 glass border-white/20 dark:border-white/5 rounded-[1.5rem] transition-all duration-200"
                                title={social.title}
                            >
                                <social.icon className="text-3xl text-gray-600 dark:text-gray-400 group-hover:text-[#27b173] transition-colors" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Side Visuals */}
                <motion.div
                    className="lg:w-[40%] w-full flex justify-center lg:justify-end"
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="relative group">
                        {/* Professional Profile Frame */}
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] p-1 border border-gray-200 dark:border-white/10 rounded-[3rem] z-10 transition-all duration-700 hover:border-[#27b173]/30 overflow-hidden bg-white/50 dark:bg-slate-900/50">
                            <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-slate-100 dark:bg-[#0f172a] pt-10 sm:pt-14 lg:pt-20 relative">
                                <img
                                    src={profileImg}
                                    alt="Muhammad Arif Raza"
                                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-[1.02] group-hover:scale-105"
                                />
                                {/* Overlay Gradient - Subtle */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Professional Experience Badge */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 bg-white dark:bg-[#0f172a] p-6 rounded-[2rem] z-20 border border-gray-200 dark:border-white/10 shadow-xl"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            style={{ willChange: "transform" }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#27b173] flex items-center justify-center text-white text-lg font-bold">
                                    4+
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Experience</p>
                                    <p className="text-base font-bold text-gray-900 dark:text-white leading-tight">Digital Architect</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Herosection

