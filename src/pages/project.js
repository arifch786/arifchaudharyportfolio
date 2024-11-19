import React, { useEffect, useRef } from "react";
import image1 from "../assets/images/projectsimages/healmb.webp";
import image2 from "../assets/images/projectsimages/workgen.png";
import image3 from "../assets/images/projectsimages/logohmb.png";
import image4 from "../assets/images/projectsimages/aws.png";
import image5 from "../assets/images/projectsimages/chatwebapp.jpg";
import { motion } from 'framer-motion';

import { gsap } from "gsap";

const Project = () => {
    const projectRef = useRef([]);
    projectRef.current = [];

    const addToRefs = (el) => {
        if (el && !projectRef.current.includes(el)) {
            projectRef.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power4.out" },
        });
    
        // Fade and scale in each project card with stagger
        tl.fromTo(
            projectRef.current,
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: { amount: 0.5, from: "start" },
            }
        );
    
        // Rotate in images with a more fluid effect
        tl.fromTo(
            projectRef.current.map((el) => el.querySelector("img")),
            { rotateY: 45, opacity: 0 },
            { rotateY: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
            "-=0.8" // Start overlapping with the previous animation
        );
    
        // Optional hover effects with GSAP
        projectRef.current.forEach((card) => {
            gsap.fromTo(
                card,
                { scale: 1 },
                {
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power1.inOut",
                    paused: true,
                    overwrite: "auto",
                    onStart() {
                        gsap.set(card, { zIndex: 1 }); // Raise on hover
                    },
                    onReverseComplete() {
                        gsap.set(card, { zIndex: 0 }); // Reset zIndex
                    },
                }
            );
    
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { scale: 1.05, duration: 0.4, ease: "power1.inOut" });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { scale: 1, duration: 0.4, ease: "power1.inOut" });
            });
        });
    
        return () => {
            // Clean up GSAP animations to avoid memory leaks
            projectRef.current.forEach((card) => {
                card.removeEventListener("mouseenter", () => {});
                card.removeEventListener("mouseleave", () => {});
            });
        };
    }, []);
    

    const projectData = [
        {
            id: 1,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "healMB",
            link: "https://connect.healmb.com/",
            role: "Frontend Developer",
            date: "March, 2023 - Present",
            description:
                "As a Full Stack Developer, I am responsible for designing and implementing scalable and user-friendly web applications. I handle both frontend and backend development, ensuring seamless integration of intuitive interfaces with efficient server-side logic.",
            image: image1,
        },
        {
            id: 2,
            company: "Work Generations Pvt. Ltd.",
            project: "WYSEBYSE",
            link: "https://www.wysebyse.com/",
            role: "Front End Developer",
            date: "December 15, 2022 - March 10, 2023",
            description:
                "As a Frontend Developer intern, I focused on creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript.",
            image: image2,
        },
        {
            id: 3,
            company: "Hmb Solutions Pvt. Ltd.",
            project: "healMindAndBody",
            link: "https://arifch786.github.io/healmbwebsite/",
            role: "Frontend Developer",
            date: "March, 2023 - Present",
            description:
                "As a Frontend Developer, I am responsible for designing and user-friendly web applications developing with a focus on user experience.",
            image: image3,
        },
        {
            id: 4,
            company: "Hmb Solutions Pvt. Ltd.",
            role: "Cloud Services",
            date: "May, 2024 - Present",
            description:
                "As part of deployment responsibilities, I configured and deployed frontend applications on AWS Amplify, ensuring seamless hosting and continuous deployment pipelines.",
            image: image4,
        },
        {
            id: 5,
            company: "Freelancing Project",
            role: "Full Stack Developer",
            date: "Jan 5, 2024 - Mar 9, 2024",
            description:
                "As a Full Stack Developer for a chat web app, I designed and implemented both the frontend and backend, ensuring a seamless user experience.",
            image: image5,
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-[40vh] p-6 md:p-4 md:pt-20">
            <div className="w-full max-w-6xl mx-auto">
                <header>
                    <h1
                        style={{
                            fontFamily: "MyFont5",
                        }}
                        className="text-5xl font-bold mb-6 text-center"
                    >
                        Projects
                    </h1>
                </header>
                <section>
                    <p className="mb-8 text-gray-800 dark:text-gray-200 text-center">
                        I've worked on tons of projects over the years, but these
                        are the ones that I'm most proud of. Many are open-source—
                        feel free to explore and contribute!
                    </p>
                    <div className="grid shadow-2xl shadow-green-400 dark:shadow-green-400 p-5 rounded-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectData.map((data, index) => (
                           
                                  <motion.article
                                    key={data.id}
                                    ref={addToRefs}
                                    className="rounded-lg p-4 transition-all duration-300 ease-in-out m-2"
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
                                <div className="flex flex-col items-center text-center">
                                <div className="bg-gray-100 border-gray-300 logo p-3 my-4 flex justify-center rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-slate-300 border-2 relative">
                                    <img
                                        src={data?.image}
                                        alt="Profile Image"
                                        style={{ height: "60px", width: "60px" }}
                                        className="rounded-md transition-transform duration-300 ease-in-out hover:rotate-180 hover:hue-rotate-180"
                                    />
                                </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                            {data.company}
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                            {data.description}
                                        </p>
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 mt-4 inline-block underline"
                                        >
                                            View Project
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
