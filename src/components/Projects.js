import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/images/projectsimages/healmb.webp";
import image3 from "../assets/images/projectsimages/logohmb.png";
import image6 from "../assets/images/projectsimages/auction.png";
import image7 from "../assets/images/projectsimages/logocoo.png";
import image8 from "../assets/images/projectsimages/translation2.png";
import image9 from "../assets/images/projectsimages/lcc.png";
import image11 from "../assets/images/projectsimages/cardmate2.png";
import image12 from "../assets/images/projectsimages/aimhalal.png";

const Projects = () => {
    const projectData = [
        {
            id: 4,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "healmindbody Connect",
            link: "https://connecthmb.com/",
            role: "Frontend Developer",
            date: "2023 - Present",
            description: "Worked on connecting users with mental and physical wellbeing resources through an intuitive web platform.",
            image: image7,
        },
        {
            id: 10,
            company: "AimHalal",
            project: "AimHalal",
            link: "https://aimhalal.com/",
            role: "Frontend Developer",
            date: "2025",
            description: "Built the AimHalal platform to help users find halal products and services with an intuitive browsing experience.",
            image: image12,
        },
        {
            id: 5,
            company: "Freelance",
            project: "AuctionIntel",
            link: "https://auctionintel.co.uk/",
            role: "Frontend Developer",
            date: "2024",
            description: "Built and optimized user interfaces for an auction insights platform focused on delivering data and analytics.",
            image: image6,
        },
        {
            id: 6,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "Heal Mind and Body",
            link: "https://healmb.com/",
            role: "Frontend Developer",
            date: "2024",
            description: "Developed interactive and responsive frontend components for the Heal Mind and Body wellness website.",
            image: image1,
        },
        {
            id: 7,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "Translation App",
            link: "https://play.google.com/store/apps/details?id=com.translatornow&hl=en",
            role: "Mobile App Developer",
            date: "2024",
            description: "Developed a mobile translation app with real-time language support and clean UX for global users.",
            image: image8,
        },
        {
            id: 8,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "LCC Cricket Academy",
            link: "https://play.google.com/store/apps/details?id=com.lccshotgunsversion01&hl=en",
            role: "Mobile App Developer",
            date: "2024",
            description: "Created an Android cricket academy app featuring training schedules, updates and interactive features for players and coaches.",
            image: image9,
        },
        {
            id: 9,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "CardMate",
            link: "",
            role: "Frontend Developer",
            date: "In Progress",
            description: "Currently developing the CardMate project focused on seamless digital card management solutions.",
            image: image11,
        },
        {
            id: 3,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "healMindAndBody",
            link: "https://arifch786.github.io/healmbwebsite/",
            role: "Frontend Developer",
            date: "March, 2024",
            description: "As a Frontend Developer, I am responsible for designing user-friendly web applications with a focus on user experience.",
            image: image3,
        },

    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#27b173] opacity-[0.02] rounded-full blur-[120px] -mr-96 -mt-96"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 mb-24 text-center"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-block px-5 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[#27b173] text-[10px] font-bold uppercase tracking-[0.2em]"
                    >
                        Portfolio Highlights
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white" style={{ fontFamily: 'MyFont5' }}>
                        Featured <span className="text-[#27b173]">Innovations</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        A curated showcase of engineering excellence, where design meets functionality to solve real-world challenges.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projectData.map((data) => (
                        <motion.div
                            key={data.id}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-[2.5rem] border border-gray-200 dark:border-white/10 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#27b173]/30"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <div className="p-10 space-y-8 flex flex-col h-full relative z-10">
                                {/* Header */}
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-white/10 shadow-sm group-hover:rotate-[5deg] transition-transform duration-300">
                                        <img src={data.image} alt={data.company} className="w-10 h-10 object-contain" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#27b173] bg-[#27b173]/5 px-4 py-2 rounded-lg border border-[#27b173]/10">
                                        {data.date}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 flex-grow">
                                    <h3 className="text-2xl font-black text-gray-900 dark:text-white transition-colors duration-300">
                                        {data.project}
                                    </h3>
                                    <p className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] bg-gray-100 dark:bg-white/5 inline-block px-3 py-1 rounded-lg">
                                        {data.role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
                                        {data.description}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#27b173]"></div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            {data.company.split(' ')[0]} Active
                                        </span>
                                    </div>
                                    {data.link && (
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative px-6 py-3 overflow-hidden rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:shadow-[#27b173]/20"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                Explore
                                                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-[#27b173] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Decorative Grid Pattern Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};



export default Projects;
