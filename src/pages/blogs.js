import React, { useState } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image2 from "../assets/images/blogsimages/blogimg2.png";
import image3 from "../assets/images/blogsimages/blogimg3.jpg";
import image4 from "../assets/images/blogsimages/blogimg4.jpg";
import image5 from "../assets/images/blogsimages/blogimg5.png";
import image6 from "../assets/images/blogsimages/blogimg6.jpg";
import image7 from "../assets/images/blogsimages/blogimg7.jpg";


const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const BlogsData = [
        {
            title: "Getting Started with MongoDB",
            description: "Learn how to integrate MongoDB into your projects with ease. Learn how to integrate MongoDB into your projects with ease. Learn how to integrate MongoDB into your projects with ease.",
            date: "2024-11-13",
            time: "02:30 PM",
            image: image2,
            category: "Development",
            link: "https://dev.to/muhammad_arifraza_78/how-to-create-a-github-repository-from-your-terminal-5fc9",
        },
        {
            title: "Socket.IO for Real-Time Apps",
            description: "Building interactive applications using Socket.IO for real-time communication.",
            date: "2024-11-14",
            time: "04:00 PM",
            image: image3,
            category: "WebSockets",
        },
        {
            title: "Design Systems with Figma",
            description: "Create scalable and consistent design systems using Figma.",
            date: "2024-11-15",
            time: "09:00 AM",
            image: image4,
            category: "Design",
        },
        {
            title: "Optimizing React Performance",
            description: "Tips and tricks to enhance the performance of your React applications.",
            date: "2024-11-16",
            time: "11:00 AM",
            image: image5,
            category: "React",
        },
        {
            title: "Dark Mode Implementation",
            description: "How to effectively implement dark mode in your web applications.",
            date: "2024-11-17",
            time: "03:00 PM",
            image: image6,
            category: "UI/UX",
        },
        {
            title: "Using React Icons",
            description: "Adding beautiful icons to your React projects using react-icons.",
            date: "2024-11-18",
            time: "05:00 PM",
            image: image7,
            category: "React",
        },
    ];

    const categories = ["All", "Development", "WebSockets", "Design", "React", "UI/UX"];
    const filteredBlogs = selectedCategory === "All"
        ? BlogsData
        : BlogsData.filter(blog => blog.category === selectedCategory);

    return (
        <div id='blogs-page' className="flex items-center justify-center min-h-[40vh] p-6 md:p-4 md:pt-20">
            <div className="w-full max-w-6xl mx-auto">
                <header>
                    <h1
                        style={{ fontFamily: 'MyFont5' }}
                        className="text-5xl font-bold mb-4"
                    >
                        Blogs
                    </h1>
                </header>
                <p className='py-10'>
                Welcome to my blog domain where I share personal stories about things I've learned, projects <br/> I'm hacking on and just general findings. I also write for other publications.
                </p>
                <section className="mb-6">
                    <div className="flex gap-4 overflow-x-auto">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                                    selectedCategory === category
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="grid grid-cols-1 gap-6 max-w-4xl">
                        {filteredBlogs.map((data, index) => (
                            <a
                                href={data.link}
                                key={index}
                                className="no-underline text-inherit"
                            >
                                <motion.article
                                    key={index}
                                    className="rounded-lg p-4 transition-all duration-300 ease-in-out"
                                    initial={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
                                    animate={{
                                        boxShadow: [
                                            "0px 0px 20px 4px rgba(255, 0, 150, 0.4)",
                                            "0px 0px 20px 4px rgba(0, 204, 255, 0.4)",
                                            "0px 0px 20px 4px rgba(0, 255, 153, 0.4)",
                                            "0px 0px 20px 4px rgba(255, 255, 0, 0.4)"
                                        ],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "mirror"
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                    <figure
                                        className="flex justify-center items-center rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
                                        style={{ flexBasis: "40%", flexShrink: 0, flexGrow: 0 }}
                                    >
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                            className="rounded-md object-cover w-full h-full"
                                        />
                                    </figure>
                                        <div className="flex-grow" style={{ flexBasis: "60%" }}>
                                            <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                {data.description}
                                            </p>
                                            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm gap-4">
                                                <span className="flex items-center gap-1">
                                                    <FaCalendarAlt /> {data.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaClock /> {data.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;
