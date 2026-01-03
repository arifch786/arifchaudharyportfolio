import React, { useEffect, useRef } from "react";
import image1 from "../assets/images/projectsimages/healmb.webp";
import image3 from "../assets/images/projectsimages/logohmb.png";
import image6 from "../assets/images/projectsimages/auction.png";
import image7 from "../assets/images/projectsimages/logocoo.png";
import image8 from "../assets/images/projectsimages/translation2.png";
import image9 from "../assets/images/projectsimages/lcc.png";
import image11 from "../assets/images/projectsimages/cardmate2.png";
import image12 from "../assets/images/projectsimages/aimhalal.png";

import { motion } from 'framer-motion';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const projectRef = useRef([]);
    projectRef.current = [];

    const addToRefs = (el) => {
        if (el && !projectRef.current.includes(el)) {
            projectRef.current.push(el);
        }
    };

    useEffect(() => {
        // Refresh ScrollTrigger to ensure correct positions
        ScrollTrigger.refresh();

        // Header Reveal
        gsap.fromTo(
            ".projects-header",
            { opacity: 0, y: -40, filter: "blur(10px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".projects-header",
                    start: "top 85%",
                }
            }
        );

        // Cards Staggered Reveal
        gsap.fromTo(
            projectRef.current,
            {
                opacity: 0,
                y: 40,
                scale: 0.95,
                filter: "blur(8px)"
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
                }
            }
        );

        // Hover effects with GSAP refined
        projectRef.current.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -10,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out",
                    boxShadow: "0 25px 50px rgba(39, 177, 115, 0.12)"
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)"
                });
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            projectRef.current.forEach((card) => {
                if (card) {
                    card.removeEventListener("mouseenter", () => { });
                    card.removeEventListener("mouseleave", () => { });
                }
            });
        };
    }, []);


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
            company: "Hmb Solutions Pvt. Ltd.",
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

    return (
        <div className="flex items-center justify-center min-h-screen p-6 md:p-12 md:pt-32 bg-transparent">
            <div className="w-full max-w-7xl mx-auto">
                <header className="projects-header mb-20 text-center space-y-4">
                    <h1
                        style={{ fontFamily: "MyFont5" }}
                        className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white"
                    >
                        Projects<span className="text-[#27b173]">.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        A curated showcase of engineering excellence and digital innovation.
                    </p>
                </header>

                <section className="projects-grid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projectData.map((data) => (
                            <motion.article
                                key={data.id}
                                ref={addToRefs}
                                className="glass rounded-[3rem] p-10 flex flex-col items-center text-center group border border-gray-200 dark:border-white/5"
                            >
                                <div className="bg-white/50 dark:bg-white/5 glass p-5 mb-8 flex justify-center rounded-[2rem] shadow-xl border border-white/20 dark:border-white/5 group-hover:rotate-[5deg] transition-transform duration-200">
                                    <img
                                        src={data?.image}
                                        alt={data.project}
                                        className="h-16 w-16 object-contain filter brightness-110"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                                        {data.project}
                                    </h2>
                                    <p className="text-[#27b173] text-[10px] font-black uppercase tracking-widest bg-[#27b173]/10 px-4 py-1.5 rounded-full inline-block">
                                        {data.company}
                                    </p>
                                    <p className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                        {data.description}
                                    </p>

                                    <div className="pt-6">
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-black text-sm uppercase tracking-widest border-b-2 border-[#27b173] pb-1 hover:text-[#27b173] transition-colors"
                                        >
                                            View Case Study
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Project;
