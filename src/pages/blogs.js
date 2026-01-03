import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image2 from "../assets/images/blogsimages/blogimg2.png";
import image3 from "../assets/images/blogsimages/blogimg3.jpg";
import image4 from "../assets/images/blogsimages/blogimg4.jpg";
import image5 from "../assets/images/blogsimages/blogimg5.png";
import image6 from "../assets/images/blogsimages/blogimg6.jpg";
import image7 from "../assets/images/blogsimages/blogimg7.jpg";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const blogRefs = useRef([]);
    blogRefs.current = [];

    const addToRefs = (el) => {
        if (el && !blogRefs.current.includes(el)) {
            blogRefs.current.push(el);
        }
    };

    const BlogsData = [
        {
            title: "Getting Started with MongoDB",
            description: "Learn how to integrate MongoDB into your projects with ease, covering connection strings and basic CRUD operations.",
            date: "2024-11-13",
            time: "02:30 PM",
            image: image2,
            category: "Development",
            link: "https://dev.to/muhammad_arifraza_78/how-to-create-a-github-repository-from-your-terminal-5fc9",
        },
        {
            title: "Socket.IO for Real-Time Apps",
            description: "Building interactive applications using Socket.IO for real-time communication and instant data synchronization.",
            date: "2024-11-14",
            time: "04:00 PM",
            image: image3,
            category: "WebSockets",
            link: "#",
        },
        {
            title: "Design Systems with Figma",
            description: "Create scalable and consistent design systems using Figma to bridge the gap between design and code.",
            date: "2024-11-15",
            time: "09:00 AM",
            image: image4,
            category: "Design",
            link: "#",
        },
        {
            title: "Optimizing React Performance",
            description: "Advanced tips and tricks to enhance the rendering performance and efficiency of your React applications.",
            date: "2024-11-16",
            time: "11:00 AM",
            image: image5,
            category: "React",
            link: "#",
        },
        {
            title: "Dark Mode Implementation",
            description: "How to effectively implement a seamless dark mode experience in your web applications using Tailwind CSS.",
            date: "2024-11-17",
            time: "03:00 PM",
            image: image6,
            category: "UI/UX",
            link: "#",
        },
        {
            title: "Using React Icons",
            description: "Adding beautiful, high-quality icons to your React projects effortlessly using the react-icons library.",
            date: "2024-11-18",
            time: "05:00 PM",
            image: image7,
            category: "React",
            link: "#",
        },
    ];

    const categories = ["All", "Development", "WebSockets", "Design", "React", "UI/UX"];
    const filteredBlogs = selectedCategory === "All"
        ? BlogsData
        : BlogsData.filter(blog => blog.category === selectedCategory);

    useEffect(() => {
        ScrollTrigger.refresh();

        // Header Reveal
        gsap.fromTo(
            ".blogs-header",
            { opacity: 0, y: -40, filter: "blur(10px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".blogs-header",
                    start: "top 85%",
                }
            }
        );

        // Blogs Staggered Reveal
        gsap.fromTo(
            blogRefs.current,
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
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blogs-grid",
                    start: "top 80%",
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [selectedCategory]);

    return (
        <div className="flex items-center justify-center min-h-screen p-6 md:p-12 md:pt-32 bg-transparent">
            <div className="w-full max-w-7xl mx-auto">
                <header className="blogs-header mb-20 text-center space-y-6">
                    <h1
                        style={{ fontFamily: 'MyFont5' }}
                        className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white"
                    >
                        Blogs<span className="text-[#27b173]">.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        Insights, tutorials, and stories from my journey through the digital landscape.
                    </p>
                </header>

                <section className="mb-16 flex justify-center">
                    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar max-w-full glass p-2 rounded-full border border-gray-200 dark:border-white/5">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${selectedCategory === category
                                        ? "bg-[#27b173] text-white shadow-lg shadow-[#27b173]/20"
                                        : "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="blogs-grid">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {filteredBlogs.map((data, index) => (
                            <motion.article
                                key={index}
                                ref={addToRefs}
                                className="glass rounded-[2.5rem] overflow-hidden group border border-gray-200 dark:border-white/5 optimize-gpu"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="md:w-5/12 overflow-hidden h-64 md:h-auto">
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="md:w-7/12 p-8 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[#27b173] text-[10px] font-black uppercase tracking-widest bg-[#27b173]/10 px-4 py-1.5 rounded-full">
                                                    {data.category}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-black text-gray-900 dark:text-white leading-tight underline decoration-[#27b173]/0 group-hover:underline group-hover:decoration-[#27b173]/100 transition-all duration-300">
                                                {data.title}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm line-clamp-3">
                                                {data.description}
                                            </p>
                                        </div>

                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-center text-gray-500 dark:text-gray-500 text-xs font-bold gap-4">
                                                <span className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-[#27b173]" /> {data.date}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaClock className="text-[#27b173]" /> {data.time}
                                                </span>
                                            </div>

                                            <a
                                                href={data.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-black text-xs uppercase tracking-widest pt-2 group/btn"
                                            >
                                                Read Article
                                                <FaArrowRight className="text-[#27b173] transform group-hover/btn:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
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

export default Blogs;

