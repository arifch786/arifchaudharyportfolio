import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../data/projectsData';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectData.find(p => p.id === parseInt(id));
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return null;

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-[#27b173] selection:text-white">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#27b173] origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
                {/* Navigation */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/projects-page')}
                    className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors mb-20"
                >
                    <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-[#27b173] group-hover:bg-[#27b173] transition-all duration-300">
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span className="uppercase tracking-widest text-xs font-bold">Back to Projects</span>
                </motion.button>

                {/* Hero Header */}
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tight leading-none bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
                            {project.project}
                        </h1>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-200 dark:border-gray-800 py-8">
                            <div>
                                <h3 className="text-gray-500 uppercase text-xs tracking-widest font-bold mb-2">Role</h3>
                                <p className="text-xl font-medium">{project.role}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 uppercase text-xs tracking-widest font-bold mb-2">Client</h3>
                                <p className="text-xl font-medium">{project.company}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 uppercase text-xs tracking-widest font-bold mb-2">Year</h3>
                                <p className="text-xl font-medium">{project.date}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 uppercase text-xs tracking-widest font-bold mb-2">Link</h3>
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#27b173] hover:text-[#20915e] transition-colors text-xl font-medium"
                                    >
                                        Live Site
                                        <svg className="w-4 h-4 p-0.5 bg-[#27b173]/20 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ) : (
                                    <span className="text-gray-500 dark:text-gray-600">Private / In-progress</span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Main Media (Video or Image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full aspect-video rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] shadow-2xl mb-32"
                >
                    {project.video ? (
                        typeof project.video === 'string' && (project.video.includes('youtube.com') || project.video.includes('vimeo.com')) ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={project.video}
                                title="Project Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        ) : (
                            <div className="relative w-full h-full">
                                <video
                                    width="100%"
                                    height="100%"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover"
                                >
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            </div>
                        )
                    ) : (
                        <div className="w-full h-full bg-[#111] flex items-center justify-center p-20">
                            <img
                                src={project.image}
                                alt={project.project}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-32">
                    <div className="md:col-span-4">
                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#27b173]"></span>
                                    The Challenge
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    {project.problem || "Information about the specific challenges faced during this project is currently being updated."}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#27b173]"></span>
                                    My Solution
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    {project.solution || "Details about the architectural decisions and solutions implemented are coming soon."}
                                </p>
                            </div>

                            {project.features && (
                                <div>
                                    <h3 className="text-gray-500 uppercase text-xs tracking-widest font-bold mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">Key Features</h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                                <svg className="w-5 h-5 text-[#27b173] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Overview</h2>
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>

                        {/* Gallery Grid */}
                        {project.gallery && (
                            <div className="space-y-4">
                                <h3 className="text-gray-500 uppercase text-xs tracking-widest font-bold mb-4">Project Gallery</h3>
                                <div className="grid grid-cols-1 gap-8">
                                    {project.gallery.map((img, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8 }}
                                            key={index}
                                            className="bg-gray-50 dark:bg-[#111] rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 p-8 md:p-12 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                                        >
                                            <img
                                                src={img}
                                                alt={`Gallery ${index}`}
                                                className="w-full h-auto rounded-lg shadow-2xl"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Next Project Teaser (Optional - could be added later) */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-20 text-center">
                    <p className="text-gray-500 mb-4">Ready to see more?</p>
                    <button
                        onClick={() => navigate('/projects-page')}
                        className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-500 dark:to-white hover:to-[#27b173] transition-all cursor-pointer"
                    >
                        View All Projects
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
